// ==============================
// GameGuideHub - Static Site Generator
// Generates SEO-friendly HTML files
// ==============================

const fs = require('fs');
const path = require('path');

// Load data files
// The JS data uses ES module-style (const at top level)
// We need to extract the data differently

// Read the raw text and evaluate as a non-strict script using vm.Script
const vm = require('vm');

function loadData() {
    try {
        const dataJs = fs.readFileSync('./js/data.js', 'utf8');
        const dataPart2 = fs.readFileSync('./js/data-part2.js', 'utf8');
        
        // Create a combined script that sets global variables
        const scriptCode = `
${dataJs}
${dataPart2}
global.__ggh_categories = categories;
global.__ggh_allGuides = typeof allGuides !== 'undefined' ? allGuides : guides;
`;
        
        const script = new vm.Script(scriptCode, { filename: 'data-loader.js' });
        script.runInThisContext();
        
        const cats = global.__ggh_categories;
        const guidesData = global.__ggh_allGuides;
        
        // Clean up
        delete global.__ggh_categories;
        delete global.__ggh_allGuides;
        
        console.log('✅ Loaded', guidesData.length, 'guides');
        return { categories: cats, guidesData };
    } catch(e) {
        console.error('❌ Data load error:', e.message);
        process.exit(1);
    }
}

const { categories, guidesData } = loadData();

// Load SEO metadata
let seoMeta = {};
try {
    const seoContent = fs.readFileSync('./js/seo-data.js', 'utf8');
    eval(seoContent);
} catch(e) { console.log('SEO data load warning:', e.message); }

// ===== 避坑指南 (Common Mistakes) =====
const pitfallSections = {
    // Beginner
    'beginner-01': `<h2>⚠️ 避坑指南：新手最常犯的错误</h2>
<ul>
<li><strong>跳过教程盲目开玩：</strong>很多老玩家习惯性Skip教程，结果玩到中期才发现错过了关键操作说明。每个游戏至少花10分钟认真看完教程。</li>
<li><strong>不做设置优化：</strong>默认设置往往不是最优的。不调灵敏度和键位就开玩，练成错误手感后改起来更痛苦。</li>
<li><strong>遇到困难不搜索：</strong>死磕一个Boss或谜题两小时不查攻略。游戏社区已经积累了海量知识，善用它们不是丢人的事。</li>
<li><strong>追求高端装备忽视基本功：</strong>新手最常见的错误是问"什么键盘/鼠标/耳机最好"，而不花时间提升自己的操作和游戏理解。</li>
</ul>`,
    'beginner-02': `<h2>⚠️ 避坑指南：硬件选购千万别做</h2>
<ul>
<li><strong>只买贵的不买对的：</strong>顶级CPU配入门显卡是本末倒置。游戏性能瓶颈99%在显卡，先把预算给GPU。</li>
<li><strong>忽视电源质量：</strong>买了几千块的显卡却配个廉价电源，轻则不稳定重启，重则烧毁整台主机。电源尽量选一线品牌金牌+。</li>
<li><strong>显示器只看尺寸不看刷新率：</strong>32寸60Hz显示器玩FPS是活受罪。竞技玩家优先保证144Hz+刷新率，再考虑尺寸。</li>
<li><strong>盲目跟风买"电竞椅"：</strong>人体工学椅比所谓的"电竞椅"舒服十倍、耐用十倍。别被酷炫外观骗了。</li>
</ul>`,
    'beginner-03': `<h2>⚠️ 避坑指南：网络优化别犯这些错</h2>
<ul>
<li><strong>Wi-Fi玩竞技游戏：</strong>无线网络的延迟波动远超有线。想稳定竞技请你务必插网线。</li>
<li><strong>同时下载/看视频打游戏：</strong>路由器QoS再好也扛不住同时下载大文件和打联机游戏。下载时别排位。</li>
<li><strong>盲目买贵的路由器：</strong>200块和2000块的路由器对游戏延迟的影响可能只有1-2ms。先优化PC端网络设置，再考虑换路由。</li>
<li><strong>用了加速器还抱怨延迟：</strong>加速器不是万能的，如果物理距离太远（比如连欧美服），200ms就是极限。</li>
</ul>`,
    'beginner-04': `<h2>⚠️ 避坑指南：成就党千万别踩</h2>
<ul>
<li><strong>不看攻略就乱打：</strong>很多成就是不可逆的，错过一个收集品就得新周目。先花10分钟看攻略规划路线比事后后悔强一百倍。</li>
<li><strong>自动存档覆盖：</strong>关键节点前务必手动备份存档，部分游戏只有一个存档位，做了错误选择就回不去了。</li>
<li><strong>强迫自己刷无聊成就：</strong>如果某个成就让你极端痛苦（比如刷几万个怪），停下来问问自己：这真的是"玩游戏"还是"被游戏玩"？</li>
<li><strong>忽视多人成就：</strong>有些游戏的多人成就需要特定条件，等过气后根本匹配不到人。趁游戏刚出时优先完成。</li>
</ul>`,
    'beginner-05': `<h2>⚠️ 避坑指南：社区社交避雷</h2>
<ul>
<li><strong>不看置顶就发帖：</strong>每个游戏社区都有版规和FAQ，你不看就发问会被老玩家喷得体无完肤。</li>
<li><strong>在求助帖下回复错误信息：</strong>如果你不确定答案，不要硬答。误导性的攻略比没有攻略更害人。</li>
<li><strong>轻信未经验证的攻略：</strong>Reddit上的"最新攻略"可能是三个月前的过时信息，注意查看发帖日期。</li>
<li><strong>在讨论区剧透：</strong>这是社区头号禁忌。发帖前确认标题不含剧透，内容有spoiler tag。</li>
</ul>`,
    'beginner-06': `<h2>⚠️ 避坑指南：性能优化别信这些"偏方"</h2>
<ul>
<li><strong>不建议禁用Windows Defender：</strong>网上有些教程让你关掉杀毒软件"提升性能",为此冒安全风险得不偿失。</li>
<li><strong>不建议超频过度：</strong>尤其是新手，盲目超频可能导致系统不稳定、游戏闪退甚至硬件损坏。</li>
<li><strong>别被"游戏优化软件"骗了：</strong>绝大多数所谓的"游戏加速/优化"软件只是关了视觉效果或清理内存，Windows自己就能做。</li>
<li><strong>不要把所有画质都拉到最低：</strong>纹理质量和材质过滤对性能影响很小却极大影响画面，保持中/高。</li>
</ul>`,
    'beginner-07': `<h2>⚠️ 避坑指南：控制器选择常见误区</h2>
<ul>
<li><strong>不要认定一种方案天下无敌：</strong>键鼠玩家看不起手柄是刻板印象。竞速/格斗/体育游戏高手清一色用手柄。</li>
<li><strong>不调DPI/灵敏度直接开玩：</strong>默认DPI通常是800-1200，但不适合所有人。花10分钟找到适合自己的灵敏度，不要直接套用职业哥的设置。</li>
<li><strong>以为越贵的控制器越好：</strong>Xbox Series手柄300块和Scuf 1500块的区别主要在自定义功能，核心手感差异并不大。</li>
<li><strong>忽视Steam控制器配置功能：</strong>Steam允许深度自定义手柄映射，陀螺仪模拟鼠标等高级功能让手柄在FPS中也能表现良好。</li>
</ul>`,
    'beginner-08': `<h2>⚠️ 避坑指南：串流配置别踩的坑</h2>
<ul>
<li><strong>Wi-Fi串流忽略干扰：</strong>2.4GHz频段干扰极大，串流必须用5GHz或Wi-Fi 6，且确保客户端和主机都连5GHz。</li>
<li><strong>误解"带宽"概念：</strong>局域网串流瓶颈通常是Wi-Fi信号质量而非带宽，100Mbps就足够4K串流。</li>
<li><strong>忽视解码能力：</strong>客户端解码能力决定串流画质。Apple TV/NVIDIA Shield是最好的串流客户端，低端安卓盒子解码能力差。</li>
<li><strong>远程串流不设限：</strong>公共Wi-Fi上远程串流会消耗大量流量，注意流量限制。4K串流每小时约15-25GB。</li>
</ul>`,

    // RPG
    'rpg-01': `<h2>⚠️ 避坑指南：艾尔登法环新手千万别做</h2>
<ul>
<li><strong>开局就打大树守卫：</strong>这游戏第一个遇到的"Boss"其实是教学——教你"打不过就跑"。不要在这里死磕两小时。</li>
<li><strong>不升级武器只升级等级：</strong>武器强化比角色等级重要十倍。找锻造石优先把武器+3以上，比升级20级有效得多。</li>
<li><strong>忽略骨灰系统：</strong>很多老玩家觉得"召骨灰不是真男人"，但实际上召骨灰是游戏设计的一部分，该用就用。</li>
<li><strong>不探索就冲主线：</strong>艾尔登法环的魅力在于开放世界探索。如果你卡Boss了，别硬刚，去别处探索变强再回来。</li>
<li><strong>走到巨人山顶才想起没拿圣杯瓶升级：</strong>前期记得去各地小教堂找圣杯瓶露滴（Sacred Tear），升级回血量。</li>
</ul>`,
    'rpg-02': `<h2>⚠️ 避坑指南：博德之门3千万别犯</h2>
<ul>
<li><strong>开局忽略长休：</strong>很多玩家怕"时间限制"不敢长休，但实际上绝大多数同伴剧情和对话推进靠长休触发。多长休！</li>
<li><strong>误解荣誉模式规则：</strong>荣誉模式下TPK（团灭）意味着存档不可用。想拿"荣耀万岁"成就，善用强退大法但别期待读档。</li>
<li><strong>乱点非核心专长：</strong>每个角色每4级只有一个专长位，非常珍贵。"表演者""观察者"等专长收益极低，优先选战斗类。</li>
<li><strong>不利用环境：</strong>博德之门3最大的优势是环境互动。暗处潜行、高处打落、油桶引爆、水面导电——利用环境让战斗简单十倍。</li>
</ul>`,
    'rpg-03': `<h2>⚠️ 避坑指南：天际老玩家常犯的错误</h2>
<ul>
<li><strong>开局走主线打奥杜因：</strong>天际的魅力在于自由，不要急着打完主线。先探索世界、加入公会、接支线任务。</li>
<li><strong>不学锻造和附魔：</strong>天际最强大的装备不是地下城捡的，而是你自己做出来+附魔的。锻造/附魔/炼金三系联动能做出变态装备。</li>
<li><strong>把所有perk点在一个系：</strong>单一技能树满级≠最强。均衡分配perk让你有更多战斗方式和应对手段。</li>
<li><strong>误杀鸡：</strong>溪木镇的鸡是上古卷轴第一神兽，杀了它全镇跟你敌对（虽然现在已修复，但传统不能丢）。</li>
</ul>`,
    'rpg-04': `<h2>⚠️ 避坑指南：黑暗之魂3新手陷阱</h2>
<ul>
<li><strong>上来选无用之人：</strong>"无用之人开局才是真男人"这句话是坑新手的。老老实实选骑士，初始100%物防盾让你前期轻松十倍。</li>
<li><strong>不看负重率：</strong>装备负重超过70%会导致翻滚速度降低（fat roll），严重影响生存。保持负重率在70%以下。</li>
<li><strong>只加力敏不点血：</strong>魂系游戏第一优先级永远是生命值（Vigor）。40生命值以前不建议主力输出属性。</li>
<li><strong>忽略武器质变：</strong>不同质变（混沌/暗/锋利/厚重）对伤害影响巨大。根据自己的属性加点选择合适的质变。</li>
<li><strong>不看攻略错过DLC入口：</strong>魂3DLC入口比较隐蔽——在净身小教堂杀死克利安德后和他的遗体对话。</li>
</ul>`,
    'rpg-05': `<h2>⚠️ 避坑指南：FF14新人避雷</h2>
<ul>
<li><strong>跳过剧情只看升级：</strong>FF14被称为"剧情驱动的MMO"，2.0版虽然节奏慢但为后面的剧情做铺垫。跳剧情等于跳过游戏80%的精华。</li>
<li><strong>不看攻略下副本：</strong>FF14的副本机制很固定，首次游玩最好看一遍视频攻略或告知队伍"我是新手"。</li>
<li><strong>一个号练满所有职业：</strong>FF14允许一个角色切换所有职业，但新手容易陷入"每个都试试"的陷阱，结果一个都没练满。</li>
<li><strong>忽视生产职业：</strong>生产职业（工匠/厨师等）在新资料片里往往能制作当前版本最好的装备，值得投入时间。</li>
</ul>`,
    'rpg-06': `<h2>⚠️ 避坑指南：巫师3常见误区</h2>
<ul>
<li><strong>所有问号都清完再推主线：</strong>威伦和诺维格瑞有几百个问号，里面99%是平庸装备。优先做支线任务，清问号顺路即可。</li>
<li><strong>忽略昆特牌：</strong>昆特牌除了作为一个独立游戏外，还关联着多个支线任务和成就。至少学会基础玩法。</li>
<li><strong>不涂剑油不喝煎药：</strong>很多人觉得剑油和煎药麻烦，但最高难度下不用煎药等于白送。打Boss前务必上好对应的剑油。</li>
<li><strong>不看怪物图鉴：</strong>每个怪物都有弱点属性，查图鉴比硬打有效率得多。</li>
</ul>`,
    'rpg-07': `<h2>⚠️ 避坑指南：赛博朋克2077 2.0避雷</h2>
<ul>
<li><strong>不做支线光冲主线：</strong>2077的支线任务质量极高，很多支线不光是填充内容，直接影响结局走向和角色命运。</li>
<li><strong>浪费属性点在不必要的技能上：</strong>2.0版本重做了perk系统，每个perk点都很珍贵。确定Build方向后再加点，不要全属性平均分配。</li>
<li><strong>不收集传奇装备：</strong>每个区域都有固定的传奇装备刷新位置，对照攻略收集5++级武器和义体可以大幅降低难度。</li>
<li><strong>忽略往日之影DLC直到通关：</strong>DLC的内容在主线中期就可以进入，而且提供的装备和能力对主线推进非常有帮助。</li>
</ul>`,
    'rpg-08': `<h2>⚠️ 避坑指南：神界原罪2新手陷阱</h2>
<ul>
<li><strong>队伍伤害类型不统一：</strong>有些角色打物理伤害有些打魔法伤害，结果遇到高物抗或高魔抗的敌人就全员哑火。4人队统一走物理或魔法路线。</li>
<li><strong>忽视环境互动：</strong>神界原罪2的战斗系统90%的潜力在环境互动。只靠平A和技能等于放弃了游戏最精彩的部分。</li>
<li><strong>不用偷窃系统：</strong>偷窃是前期获取装备和金钱的最佳途径。每个角色学1级潜行和盗窃，轮流偷NPC。</li>
<li><strong>不记录剧情选择：</strong>很多看似无关紧要的对话选项会在20小时后产生重大影响。重要选择前存档。</li>
</ul>`,

    // Action
    'action-01': `<h2>⚠️ 避坑指南：只狼新手必死误区</h2>
<ul>
<li><strong>拿只狼当黑魂打：</strong>只狼的核心是格挡不是翻滚。用黑魂的闪避思维打只狼等于把游戏难度提升到地狱级。</li>
<li><strong>一打不过就去刷经验：</strong>只狼不是RPG——没有"等级碾压"的概念。卡Boss说明你还没掌握对应的机制，练技术而不是肝等级。</li>
<li><strong>不该用忍义手的时候乱用：</strong>每个Boss有对应的弱忍义手，但乱用只会浪费纸人。学习Boss动作后再针对性使用。</li>
<li><strong>忽视"看破"技能：</strong>突刺危的攻击可以用"看破"（向前垫步）反击，这是游戏最重要的技能之一，务必第一时间学会。</li>
</ul>`,
    'action-02': `<h2>⚠️ 避坑指南：战神5新手别踩的坑</h2>
<ul>
<li><strong>优先升级错误装备：</strong>前期资源有限，不要平均升级。选择一套Build对应的装备集中升级到9级。</li>
<li><strong>不看收集就推进主线：</strong>乌鸦和传说卷轴有很强的可错过性。建议每个区域探索完再推主线。</li>
<li><strong>低估"国度位移"的价值：</strong>国度位移符文（Spartan Rage冷却缩短等）在高难度下价值远超单纯加属性。</li>
<li><strong>完全不升级儿子的装备：</strong>儿子的弓箭伤害虽然不高，但他的技能（如电箭/声波箭）在破防和控场中至关重要。</li>
</ul>`,
    'action-03': `<h2>⚠️ 避坑指南：忍者龙剑传劝退陷阱</h2>
<ul>
<li><strong>用DMC的思维打忍龙：</strong>DMC鼓励浮空连段无限连，忍龙的敌人会反击和防反。忍龙的战斗是"攻守转换"而不是单方面压制。</li>
<li><strong>忽略蓄力攻击（UT）：</strong>UT是最强力的清场和回血手段。面对群敌时先拉开距离蓄力ET/UT。</li>
<li><strong>不会用里风（Wind Run）：</strong>里风=防御+方向键闪避，是忍龙最核心的生存技能。不用里风的高手不存在。</li>
<li><strong>跳上超忍难度就选超忍：</strong>超忍难度的敌人配置完全不一样，新手千万不要跳级选超忍。</li>
</ul>`,
    'action-04': `<h2>⚠️ 避坑指南：鬼泣5新手常见错误</h2>
<ul>
<li><strong>只用一个武器一把枪：</strong>鬼泣的战斗魅力在于武器切换。但丁拥有4风格+4武器+4枪械，只用一种等于浪费了90%的潜力。</li>
<li><strong>为连招而连招忽略伤害：</strong>华丽的连段很帅，但如果一套连招打完了Boss还在满血，那连招的意义是什么？</li>
<li><strong>不利用皇家护卫：</strong>皇家护卫风格是但丁最强的防御手段，完美格挡不仅无伤还能积累怒气值。</li>
<li><strong>低估尼禄的红刀：</strong>红刀（Exceed）充能是尼禄输出翻倍的关键，值得花大量时间练习。</li>
</ul>`,
    'action-05': `<h2>⚠️ 避坑指南：空洞骑士新手的5个坑</h2>
<ul>
<li><strong>不看地图买指南针护符：</strong>圣巢是个巨大的迷宫，没有地图很容易迷路。初期护符槽优先"指南针"+"蜂群集结"。</li>
<li><strong>硬打不想打的Boss：</strong>大部分Boss可以跳过以后再来。打不过就去探索其他区域升级武器和护符。</li>
<li><strong>忽略梦境树和梦境Boss：</strong>梦境树是重要的灵魂来源，梦境Boss掉落的精华用于解锁"觉醒的梦之剑"。</li>
<li><strong>完全不用法术：</strong>很多新手只靠平A通关，但实际上萨满之石+法术的DPS远超剑术攻击。</li>
</ul>`,
    'action-06': `<h2>⚠️ 避坑指南：月下夜想曲新手陷阱</h2>
<ul>
<li><strong>不看攻略错过逆城：</strong>击败里希特之后如果直接打Boss就通关了！在Boss房前装备"圣者之戒"和"邪者之戒"才能进入逆城。</li>
<li><strong>忽略使魔升级：</strong>使魔通过击杀敌人获得经验升级，不同形态有不同能力。剑魔升到顶级后能装备"真空刃"。</li>
<li><strong>不利用盾牌魔力：</strong>阿鲁卡多之盾+盾杖=全屏无敌护罩，打Boss的逃课神器。</li>
<li><strong>不会用↓↑↑↓→攻击：</strong>经典半圆搓招输入的游戏，很多强力技能需要搓招释放。</li>
</ul>`,
    'action-07': `<h2>⚠️ 避坑指南：王国之泪建造误区</h2>
<ul>
<li><strong>太早追求完美飞行器：</strong>前期电量有限，就算造出了MK2也飞不了多远。先收集祝福之光扩大电池容量。</li>
<li><strong>忽视地下探索：</strong>地下虽然有幽寂等威胁，但那里有最好的装备和大量的左纳乌矿石。</li>
<li><strong>完全不用贤者技能：</strong>丘栗的风场让你起飞、露珠的雷击AOE清怪——贤者技能在探索和战斗中都有巨大价值。</li>
<li><strong>只用蓝图复制别人的设计：</strong>照着别人的蓝图造不会错，但自己动手设计带来的乐趣完全不一样。</li>
</ul>`,
    'action-08': `<h2>⚠️ 避坑指南：匹诺曹谎言新手必读</h2>
<ul>
<li><strong>用魂系的翻滚思维：</strong>匹诺曹的翻滚无敌帧比黑魂短得多，完美防御才是核心生存手段。</li>
<li><strong>忽略军团义手：</strong>每个军团义手都有不同的战术价值，升级它们可以大幅提升战斗效率。</li>
<li><strong>忘记武器组装：</strong>刀柄和刀身可以自由组合，不同组合会影响攻击动作和属性补正。不要一直用默认组合。</li>
<li><strong>不升级P器官：</strong>P器官系统提供额外的被动加成，优先解锁"脉冲电池使用次数"和"负重上限提升"。</li>
</ul>`,

    // FPS
    'fps-01': `<h2>⚠️ 避坑指南：Valorant新手最常犯的错</h2>
<ul>
<li><strong>灵敏度调太高：</strong>职业哥的eDPI通常200-320，新手往往调得过高（屏幕快到抓不住），导致近距离跟枪异常困难。</li>
<li><strong>不练急停就练定位：</strong>在Valorant里，移动中射击的精准度极差。不练急停直接练定位等于白练。</li>
<li><strong>忽略经济管理：</strong>该ECO(存钱)的时候不ECO，买一堆半吊子装备既打不过对面又破产。</li>
<li><strong>不看小地图：</strong>Valorant的地图信息极其重要，队友用技能探到的信息都会显示在地图上。每2-3秒扫一眼小地图。</li>
</ul>`,
    'fps-02': `<h2>⚠️ 避坑指南：绝地求生新手必死行为</h2>
<ul>
<li><strong>跳伞选热门点：</strong>"我要P城刚枪"这句话的代价是90%的概率第一分钟就倒地。新手先跳边缘区域。</li>
<li><strong>决赛圈开车狂飙：</strong>决赛圈（最后3圈）车是最大的噪音源和靶子。提前找好位置弃车步行。</li>
<li><strong>舔包太久：</strong>杀了人之后舔包超过10秒是找死行为，敌人的队友马上就到。快速拿子弹+药就走。</li>
<li><strong>不会听声辨位：</strong>PUBG的脚步声/枪声/车声清晰度极高。戴好耳机，学会通过声音判断敌人方位和距离。</li>
</ul>`,
    'fps-03': `<h2>⚠️ 避坑指南：CS2玩家常见问题</h2>
<ul>
<li><strong>不打死斗直接排位：</strong>很多玩家上来就打竞技，结果枪法跟不上导致一路掉分。推荐每天先打15分钟死斗热身。</li>
<li><strong>不看经济直接起枪：</strong>第五回合起了全甲M4结果队友全是手枪，2v5的残局赢面极低。配合队伍的经济策略。</li>
<li><strong>不学投掷物就排位：</strong>Mirage的跳台烟/拱门烟/B小烟是基础中的基础，不学投掷物上到一定分段后寸步难行。</li>
<li><strong>忽略小地图信息：</strong>CS2的地图机制比大家想象的重要得多，多看地图了解队友位置和敌方动向。</li>
</ul>`,
    'fps-04': `<h2>⚠️ 避坑指南：守望先锋2排位避雷</h2>
<ul>
<li><strong>只玩一个英雄：</strong>OW2的counter体系很重要，只擅长一个英雄被针对了就会成为队伍短板。建议每个位置会2-3个英雄。</li>
<li><strong>不换英雄死磕counter：</strong>对面双飞你拿士兵76、对面放盾你拿路霸——这是典型的不换英雄死磕。学会主动换英雄克制。</li>
<li><strong>大招捏着不放：</strong>很多新手觉得"等一个完美时机"，结果整场比赛一个大招都没放出来。大招是轮次资源，有就放。</li>
<li><strong>不看阵容选辅助：</strong>队伍缺爆发治疗就别选禅雅塔，队伍缺群奶就别选安娜。辅助也要根据队伍需要选择。</li>
</ul>`,
    'fps-05': `<h2>⚠️ 避坑指南：Apex新手翻车现场</h2>
<ul>
<li><strong>不习惯滑铲就开打：</strong>Apex里不会滑铲跳等于少了一双腿，移动和躲子弹效率差一大截。</li>
<li><strong>三个人扎堆走：</strong>一队三个人聚在一起走是Apex中最致命的习惯——一个电弧星就能团灭你们。</li>
<li><strong>打完不补状态就追人：</strong>杀了人之后哪怕只剩一滴血也要先打药再舔包，急于追人被偷袭的案例数不胜数。</li>
<li><strong>不开跳板/钩爪/滑索：</strong>地图上的机动工具就是让你用的。不打航线预留跑路路线。</li>
</ul>`,
    'fps-06': `<h2>⚠️ 避坑指南：DOOM Eternal新手误区</h2>
<ul>
<li><strong>站在原地硬刚：</strong>DOOM Eternal里站着不动=死。永远在移动，用超级霰弹枪+肉钩保持空中机动。</li>
<li><strong>忽略资源循环：</strong>很多新手只关注杀人，但忘了喷火器增加护甲、电锯补充弹药、壮烈击杀回血——打好循环才能持续输出。</li>
<li><strong>忽略冰弹的作用：</strong>冰弹冻结敌人后可以安全击杀或逃跑。这是DOOM里最强的控场道具之一。</li>
<li><strong>只用一种武器：</strong>DOOM鼓励武器轮换击杀不同敌人。每种武器对特定敌人有额外伤害加成。</li>
</ul>`,
    'fps-07': `<h2>⚠️ 避坑指南：彩虹六号新手忌讳</h2>
<ul>
<li><strong>开局就乱封墙：</strong>把所有墙都封上是新手最经典的操作，结果封死了队友的防守路线和射击视野。</li>
<li><strong>不加固天花板：</strong>攻击方经常从楼上打穿天花板下来，尤其是木地板的地图。不加固天花板等于请君入瓮。</li>
<li><strong>干员选完不沟通：</strong>R6是高度依赖团队沟通的游戏。选干员阶段不说话、游戏过程中不报点，会让团队战术完全失效。</li>
<li><strong>不做垂直防守：</strong>防守方守点不是只龟缩在点里，主动打穿地板或天花板制造射击线是高手和菜鸟的分水岭。</li>
</ul>`,
    'fps-08': `<h2>⚠️ 避坑指南：COD战区新手警示</h2>
<ul>
<li><strong>跳伞选太热门的区域：</strong>"监狱"和"市区"虽然是好装备区，但也意味着你落地就有5队人。新手选地图边缘单独点。</li>
<li><strong>不买护甲板：</strong>很多人光顾着买枪，忘了买护甲板。决赛圈没有护甲板等于透明人。</li>
<li><strong>决赛圈不注意脚步声：</strong>COD的脚步声很大，跑动中的声音能被方圆30米内的人听见。决赛圈请蹲走或慢走。</li>
<li><strong>完全不用载具：</strong>载具除了快速移动外，还可以作为临时掩体和撞人武器。尤其是四人队，一辆装甲车能改变战局。</li>
</ul>`,

    // Open World
    'openworld-01': `<h2>⚠️ 避坑指南：原神新人千万别做</h2>
<ul>
<li><strong>45级前狂刷圣遗物：</strong>45级前刷圣遗物本最高只出紫，45级后才必出金。在45级前把树脂存下来，45级后一口气刷。</li>
<li><strong>两路深渊都打就为了50原石：</strong>如果打不过12层，11层拿满奖励就够了。为了50原石上头不值当。</li>
<li><strong>资源分散给过多角色：</strong>原神资源有限，优先培养1-2个主C+1个副C+2个辅助。不要每个新角色都拉到80级。</li>
<li><strong>不看地图就乱跑：</strong>游戏内自带的地图标记功能非常有用，到达新区域时先激活七天神像解锁地图。</li>
</ul>`,
    'openworld-02': `<h2>⚠️ 避坑指南：大镖客2新人常犯的错</h2>
<ul>
<li><strong>狂按奔跑键跑全图：</strong>在营地和城镇里按shift跑动会降低荣誉值。注意控制节奏。</li>
<li><strong>看见不认识的就开枪：</strong>RDR2的开放世界里很多陌生人虽然看起来可疑，但实际是支线任务的触发点。先观察再决定。</li>
<li><strong>不还通缉金：</strong>通缉值太高时你不去邮局交罚款，路上会不停有赏金猎人来追你。该交就交。</li>
<li><strong>第二章不去抓白马：</strong>Lake Isabella西北的阿拉伯白马是游戏里最好的马之一。第二章就能抓，建议第一时间去。</li>
</ul>`,
    'openworld-03': `<h2>⚠️ 避坑指南：地平线西之绝境新手注意</h2>
<ul>
<li><strong>不用元素弱点：</strong>每个机械兽都有元素弱点，不利用的话打同级别的怪会非常吃力。</li>
<li><strong>不打猎场：</strong>猎场不仅提供装备奖励，还会教你高级战斗技巧。中等难度以上不狩猎场会错过关键玩法教学。</li>
<li><strong>忽略绳索发射器：</strong>绳索发射器可以把大型机械兽固定在地上，是控场的核心工具。打大怪必备。</li>
<li><strong>不看地图上的绿色光点：</strong>绿光（Greenshine）是升级传奇武器的重要材料，前期能捡就捡。</li>
</ul>`,
    'openworld-04': `<h2>⚠️ 避坑指南：辐射4新手避雷</h2>
<ul>
<li><strong>开局加全属性各几点：</strong>辐射4的SPECIAL加点在出避难所后不可更改（除"专精"娃娃）。建议事先规划好Build再分配点数。</li>
<li><strong>不做义兵团任务：</strong>义兵团的前哨任务虽然重复，但解锁的"炮塔制造"天赋是基地防御的核心。</li>
<li><strong>捡垃圾不分类：</strong>辐射4里不是所有垃圾都值钱。重5但只值1瓶盖的垃圾不要捡，专注收集螺丝钉/铝/铜/胶带。</li>
<li><strong>硬刚高辐射区：</strong>没有足够的抗辐药和动力装甲前不要靠近发光海等高辐射区，进去就是慢性死亡。</li>
</ul>`,
    'openworld-05': `<h2>⚠️ 避坑指南：对马岛之魂新手别这样做</h2>
<ul>
<li><strong>纯走武士路线硬刚：</strong>最高难度下硬刚3个以上敌人=死。活用战鬼武器（烟雾弹/苦无/炸弹）是生存的保证。</li>
<li><strong>不升级铠甲：</strong>铠甲每个等级都有不同的被动加成，优先升到满级比升武器更优先。</li>
<li><strong>不切换架势：</strong>四种架势对应不同的敌人类型（剑/盾/矛/蛮），一个架势打到底效率极低。</li>
<li><strong>完全忽略对峙系统：</strong>对峙（Standoff）可以让你开局就秒杀几个敌人，是省时省力的核心玩法。</li>
</ul>`,
    'openworld-06': `<h2>⚠️ 避坑指南：漫威蜘蛛侠2新手提示</h2>
<ul>
<li><strong>不做支线直接推主线：</strong>支线任务不仅提供经验，还解锁关键战衣能力和升级所需的技术芯片。</li>
<li><strong>不用快速移动：</strong>纽约的地铁系统可以快速传送！不是一定要荡过去。</li>
<li><strong>忽略拍照模式任务：</strong>照片任务不仅有趣，还给大量经验和战衣解锁材料。</li>
<li><strong>两人物只玩一个：</strong>彼得的共生体技能和迈尔斯的毒液技能各有优势，战斗中切换使用能发挥1+1>2的效果。</li>
</ul>`,
    'openworld-07': `<h2>⚠️ 避坑指南：星空Starfield新手避雷</h2>
<ul>
<li><strong>花太多时间在哨站上：</strong>哨站经营虽然有趣，但在主线推进到一定阶段前建哨站的投入产出比很低。</li>
<li><strong>不升级驾驶技能：</strong>A级/B级/C级飞船需要对应的驾驶技能等级。前期就投入1-2点驾驶技能很重要。</li>
<li><strong>不利用对话技能：</strong>说服和欺骗技能在对话中可以跳过战斗、获得额外奖励，价值远超战斗技能。</li>
<li><strong>飞船超重不管：</strong>飞船货舱和人物负重是分开计算的。定期把背包里的资源转移到飞船货舱。</li>
</ul>`,
    'openworld-08': `<h2>⚠️ 避坑指南：艾尔登法环探索禁忌</h2>
<ul>
<li><strong>不看推荐等级就去高级区：</strong>盖利德北部的龙墓和圣树都是100+级的区域，30级跑过去连小怪都打不动。</li>
<li><strong>不看攻略错过关键NPC：</strong>很多NPC的支线有严格的触发条件，错过就没了。至少了解一下哪些NPC有重要奖励。</li>
<li><strong>不去地下区域：</strong>永恒之城和深根底层有最好的骨灰和装备，很多人通关了都没去过。</li>
<li><strong>不标记地图：</strong>用游戏内的标记系统标注已探索的洞穴、矿洞和不死鸟。后期找全收集时会感谢自己。</li>
</ul>`,

    // Survival
    'survival-01': `<h2>⚠️ 避坑指南：我的世界新手必死原因</h2>
<ul>
<li><strong>不造床就出门探险：</strong>没有设重生点就跑到几千格之外，死后复活在出生点然后永远找不到自己的家。</li>
<li><strong>裸装下矿洞：</strong>矿物不经过熔炼直接挖？、在没有食物和火把的情况下深入矿洞，等于自寻死路。</li>
<li><strong>不带盾牌打苦力怕：</strong>苦力怕（Creeper）在你背后爆炸几次都不长记性？举盾可以完全格挡爆炸伤害。</li>
<li><strong>不知道F3键：</strong>F3键可以看坐标、群系名称、光照等级。不会用F3的玩家生存效率会低很多。</li>
</ul>`,
    'survival-02': `<h2>⚠️ 避坑指南：森林之子常见死法</h2>
<ul>
<li><strong>天黑不点篝火：</strong>森林之子的夜晚超级黑，没有火把你什么都看不见，而且野人的索敌范围和攻击欲望翻倍。</li>
<li><strong>不造水收集器：</strong>靠找水瓶喝水效率太低，前期务必造一个雨水收集器持续供水。</li>
<li><strong>建木屋不设防：</strong>木制围墙和尖刺陷阱不是你造了就完事的——它们需要定期维修，破损的木墙等于没有。</li>
<li><strong>不带食物就探洞穴：</strong>洞穴里没有食物补给，进去前准备好至少2天份的干粮和水。</li>
</ul>`,
    'survival-03': `<h2>⚠️ 避坑指南：英灵神殿新手警告</h2>
<ul>
<li><strong>不挖沟就建家：</strong>英灵神殿里怪物会有"攻击事件"（Raid），不挖护城沟的话你的基地很快就会被砸烂。</li>
<li><strong>带矿石过传送门：</strong>传送门不能传送矿石（铜/铁/银等），所以必须用船运输。很多人为了省事用船却不知道还有这个限制。</li>
<li><strong>吃同类型食物：</strong>生命值食物和耐力值食物要搭配吃。只吃加生命的东西会让你跑几步就喘气。</li>
<li><strong>不喝蜜酒就去沼泽：</strong>沼泽里除了泥泞巨人还有各种毒气。没有抗毒蜜酒（Poison Resist）等于进毒气室。</li>
</ul>`,
    'survival-04': `<h2>⚠️ 避坑指南：禁闭求生新手翻车点</h2>
<ul>
<li><strong>硬刚蜘蛛：</strong>初期没有防具的情况下，蜘蛛蜘蛛一口就能秒你。前期用弓箭远程风筝它们。</li>
<li><strong>不建防虫网：</strong>基地周围不建围栏的话，晚上会有各种昆虫闯进来把东西砸烂。</li>
<li><strong>忽略液体收集：</strong>除了饮用水外，蜘蛛毒液和虫子粘液都是重要的制作材料。建一个液体收集器大有裨益。</li>
<li><strong>独闯上院：</strong>上院（Upper Yard）是游戏后期区域，充满高级昆虫。中级装备前不要贸然前往。</li>
</ul>`,
    'survival-05': `<h2>⚠️ 避坑指南：绿色地狱死亡高发区</h2>
<ul>
<li><strong>不烧水就喝：</strong>丛林里的河水看似清澈，实际上充满了寄生虫。不煮沸直接喝 = 感染 = 慢性死亡。</li>
<li><strong>被动物咬伤不处理：</strong>蜘蛛咬伤、蛇咬伤和美洲豹抓伤后不及时用消毒药草处理，很快会感染发烧。</li>
<li><strong>只吃一种食物：</strong>长期只吃水果会导致蛋白质不足，只吃肉类会导致维生素缺乏。必须均衡饮食。</li>
<li><strong>夜间乱跑：</strong>绿色地狱的夜晚是最危险的——不仅有野兽，还会因为心理值过低产生幻觉。天黑前回基地。</li>
</ul>`,
    'survival-06': `<h2>⚠️ 避坑指南：沉没之地新手警示</h2>
<ul>
<li><strong>不做氧气瓶就潜深海：</strong>深海区没有足够的氧气储备，下去就上不来。先升级氧气瓶容量。</li>
<li><strong>木筏太简陋就出海：</strong>漏水的木筏在大浪中很快就沉了。出海前检查船体完整度。</li>
<li><strong>不装武器就去鲨鱼区：</strong>鲨鱼不会因为你躲着它就不攻击你。出海时船上至少装一个鱼叉炮台。</li>
<li><strong>风暴天出海：</strong>游戏里有天气系统，风暴时出海的风险比平时高3倍。看天气预报再决定是否出海。</li>
</ul>`,
    'survival-07': `<h2>⚠️ 避坑指南：深海迷航新手必死原因</h2>
<ul>
<li><strong>不带氧气瓶就探深海：</strong>深海迷航的氧气系统是核心生存机制，60秒的默认氧气量在100m深度完全不够。</li>
<li><strong>深夜不关灯：</strong>海蛾号的灯在黑暗水域中会吸引利维坦的注意。进危险区时关灯静默前进。</li>
<li><strong>不带备用气瓶进失落之河：</strong>失落之河是500m+深度，没有备用气瓶补给的话中途氧气耗尽基本上就是死亡。</li>
<li><strong>不造备用载具：</strong>独眼巨人号一旦沉了，如果没有任何备用载具（海蛾号/海虾号），你会被困在深海无法返回。</li>
</ul>`,
    'survival-08': `<h2>⚠️ 避坑指南：辐射76新人避雷指南</h2>
<ul>
<li><strong>不加入公共队伍：</strong>辐射76里单独玩的难度远高于组队。加入公共队伍能获得额外的经验加成和快速旅行优惠。</li>
<li><strong>不参加公共事件：</strong>公共事件（Public Events）是获取传奇装备的最佳途径。每个小时都有事件刷新，务必参加。</li>
<li><strong>忽略每日行动：</strong>每日行动是获取传奇模组（Legendary Modules）的唯一稳定来源。不做Daily Ops等于放弃最好的升级装备方式。</li>
<li><strong>乱拆垃圾不装废品背包：</strong>装了"废品背包"Perk后捡的垃圾重量会打折，前期负重极其珍贵。</li>
</ul>`,

    // Strategy
    'strategy-01': `<h2>⚠️ 避坑指南：文明6新手常犯错误</h2>
<ul>
<li><strong>开局爆铺城不维护：</strong>铺太多城但每个城都没有足够的驻军和建造者，城市发展极慢而且忠诚度会崩。</li>
<li><strong>不知道"砍树"：</strong>砍伐森林可以获得大量产能爆发，是抢奇观和爆发基建的核心手段。很多新手玩了上百小时都不知道这个技巧。</li>
<li><strong>完全不造侦察兵：</strong>侦察兵在早期的价值远超想象——发现城邦、探访村庄遗迹、了解大陆地形。</li>
<li><strong>不签研究协议：</strong>与其他文明签订"研究协议"可以获得额外的科技值，是科技胜利的关键。</li>
</ul>`,
    'strategy-02': `<h2>⚠️ 避坑指南：星际争霸2新手死因</h2>
<ul>
<li><strong>停农民（Probe/SCV/Drone）：</strong>在RTS中停止造农民等于经济自杀。打满30农民前应该编队生产建筑的快捷键肌肉记忆。</li>
<li><strong>不看小地图：</strong>星际2的地图信息和骚扰都通过小地图体现。长时间不看小地图等于瞎子打星际。</li>
<li><strong>只造兵不扩张：</strong>主矿采干后如果没有开分矿，经济和兵力会同时崩塌。学会在对手进攻的间隙扩张。</li>
<li><strong>不侦察对面战术：</strong>不给对面送农民去侦察的虫族/神族/人族，大概率被一波战术打死而浑然不觉。</li>
</ul>`,
    'strategy-03': `<h2>⚠️ 避坑指南：城市天际线规划禁忌</h2>
<ul>
<li><strong>开局就修高速交叉口：</strong>几千人口的小镇不需要多层立交桥。先把基础道路和基础设施建好。</li>
<li><strong>住宅区和工业区混在一起：</strong>工业区产生噪音和污染，住宅区靠近工业区会导致地价和快乐度暴跌。</li>
<li><strong>不预留给排水空间：</strong>污水排放口必须放在取水口的下游方向，否则市民会喝自己的污水。</li>
<li><strong>忽视公共交通直到堵死：</strong>等到全城交通变成深红色再想建地铁/公交已经晚了。在人口突破1万时就开始规划公交路线。</li>
</ul>`,
    'strategy-04': `<h2>⚠️ 避坑指南：风花雪月新手误区</h2>
<ul>
<li><strong>只练主角不练队友：</strong>主角再强也没有办法一个人打完所有关。队伍中至少培养10-12人作为常备主力。</li>
<li><strong>平均分配经验：</strong>把所有角色都练到差不多等级是最没效率的——核心主力应该高5-10级，替补跟着混经验就行。</li>
<li><strong>忽略技能训练：</strong>每周的指导阶段不仅是为了升等级，更重要的是提升角色的技能熟练度（剑术/理学/信仰等）。</li>
<li><strong>不看支援关系就配对：</strong>角色之间的支援度不仅影响战斗加成，还决定故事的结局配对。提前规划好CP。</li>
</ul>`,
    'strategy-05': `<h2>⚠️ 避坑指南：幽浮2铁人模式禁忌</h2>
<ul>
<li><strong>探路一步到位：</strong>奔跑推进会让两个行动点的士兵暴露在开阔地。先使用游侠的潜行侦察确认敌情。</li>
<li><strong>一次激活多组敌人：</strong>铁人模式下同时激活2组以上敌人几乎等于团灭。用侦察确认敌人位置后拉一个组打。</li>
<li><strong>不利用高地优势：</strong>站高地提供命中和掩体加成。忽略地形优势会让士兵暴露在更危险的境地。</li>
<li><strong>任务超时不管：</strong>限时任务中如果太在意清怪而忽略了目标点，任务失败会导致失去关键奖励甚至国家退出XCOM项目。</li>
</ul>`,
    'strategy-06': `<h2>⚠️ 避坑指南：异星工场新手设计误区</h2>
<ul>
<li><strong>一次建好就不留扩展余地：</strong>总线只建了4条铁板带，50小时后发现不够用又得拆了重建。预留至少50%的扩展空间。</li>
<li><strong>忽略物流优先级：</strong>传送带不分优先级导致上游工厂被下游堵塞，整个生产线停摆。学会使用分流器设定优先级。</li>
<li><strong>红绿蓝瓶共线生产：</strong>不同颜色的科技包用同一条传送带运输，迟早会因为混合导致供料问题。</li>
<li><strong>不设自动化弹药供应：</strong>前期手动装弹没问题，但30+小时后还手动装弹就是在浪费时间。建一条弹药自动化生产线。</li>
</ul>`,
    'strategy-07': `<h2>⚠️ 避坑指南：钢铁雄心4新手常犯的错</h2>
<ul>
<li><strong>盲目造师不造厂：</strong>只有足够的军用工厂产出坦克和飞机，你的师才有战斗力。造兵之前先确保军工产能。</li>
<li><strong>忽略空军：</strong>没有制空权的陆军就是活靶子。钢4的空战系统远比看起来重要。</li>
<li><strong>编制宽度不看地形：</strong>40宽师在平原所向无敌，但在森林/沼泽/山地中会因为超宽受到严重惩罚。</li>
<li><strong>不开战前的战争计划：</strong>不画进攻线不给陆军计划经验，进攻时组织度消耗极大。开战前画好计划线很重要。</li>
</ul>`,
    'strategy-08': `<h2>⚠️ 避坑指南：王国保卫战新手雷区</h2>
<ul>
<li><strong>只造攻击塔不造兵营：</strong>没有兵营拦截敌人，怪物会径直冲过你的防御阵线。至少保留2个兵营在关键路口。</li>
<li><strong>英雄不用技能：</strong>英雄的技能冷却好了就放——很多新手忘了英雄有主动技能，全程平A。</li>
<li><strong>不卖塔换位：</strong>如果建错了位置或者前期临时塔已经没用了，卖掉它回收金币建更好位置的塔。</li>
<li><strong>忽视道具系统：</strong>噩梦难度下道具（援军/火雨/闪电）是通关的关键。要舍得用，不要想着"留着后面用"。</li>
</ul>`,

    // Multiplayer
    'multiplayer-01': `<h2>⚠️ 避坑指南：幻兽帕鲁玩家常见错误</h2>
<ul>
<li><strong>不造帕鲁终端就抓怪：</strong>抓了帕鲁但没有终端放置，它们只能跟着你但无法被派去工作。</li>
<li><strong>忽视帕鲁的SAN值：</strong>帕鲁的SAN值（精神值）太低会得精神疾病，严重降低工作效率。给帕鲁建温泉和床。</li>
<li><strong>基地造在怪物刷新点：</strong>基地如果建在高等级区域，晚上会有大量帕鲁入侵者砸毁设施。</li>
<li><strong>对塔主Boss用错误属性：</strong>每个塔主都有属性克制，用被克制的属性去打等于自找麻烦。</li>
</ul>`,
    'multiplayer-02': `<h2>⚠️ 避坑指南：永劫无间新手误区</h2>
<ul>
<li><strong>只用普攻不蓄力：</strong>只会平A的玩家在任何分段都是送分宝宝。学会蓄力霸体攻击和振刀才能进入博弈。</li>
<li><strong>不看地图跑毒：</strong>不看缩圈方向跑着跑着就出圈了，然后被毒死在圈外。时刻注意缩圈方向。</li>
<li><strong>单排当孤儿：</strong>三排模式不跟队友走、不救人、自己一个人冲进人群——这是让所有队友血压飙升的行为。</li>
<li><strong>不捡魂玉：</strong>魂玉提供的属性加成（攻击/暴击/抗性）是决定战斗胜负的重要因素。优先捡高品质魂玉。</li>
</ul>`,
    'multiplayer-03': `<h2>⚠️ 避坑指南：LOL新手排位禁忌</h2>
<ul>
<li><strong>不看小地图被抓：</strong>35%的LOL对局中打野在8分钟内抓了上路一次以上的成功率高达60%。但如果你看小地图，这个能降到30%。</li>
<li><strong>无限拼操作不发育：</strong>线上单杀三次但补刀落后50刀，经济可能还不如对面。吃兵和吃人头一样重要。</li>
<li><strong>在野区做无意义的视野：</strong>控制守卫每个只持续到被排掉，不是插了就有用。关键路口和龙坑的视野才有战略价值。</li>
<li><strong>团战先手交所有技能给坦克：</strong>看到对面坦克冲进来就交了全套技能，结果对面C位进场时你技能全CD。</li>
</ul>`,
    'multiplayer-04': `<h2>⚠️ 避坑指南：Dota2新手十连败原因</h2>
<ul>
<li><strong>不理解"核心vs辅助"：</strong>5个人都想打核心、没人买鸡插眼——这样的队伍连职业选手来带都难赢。</li>
<li><strong>不出BKB：</strong>黑皇杖（BKB，Black King Bar）是Dota2中最重要的装备之一。很多新手不明白为什么需要魔免。</li>
<li><strong>不看TP支援：</strong>Dota2的传送卷轴提供了极强的支援能力。队友被gank时传送支援可以瞬间反打。</li>
<li><strong>忽略反补的价值：</strong>不反补的话对面小兵经验吃满，等级压制会让你线上崩盘。</li>
</ul>`,
    'multiplayer-05': `<h2>⚠️ 避坑指南：永劫无尽试炼队坑行为</h2>
<ul>
<li><strong>不沟通选角：</strong>四个人选四个脆皮输出没有坦克和治疗，后期Boss一碰就碎。</li>
<li><strong>各自为战不集火：</strong>四个人打四个不同的怪，结果一个都没打死。集中先清远程怪是最基本的战术。</li>
<li><strong>不救倒地的队友：</strong>无尽试炼中倒地队友是可以救的。不救等于4v5，越打越难。</li>
<li><strong>不吃药品：</strong>满血时觉得吃血亏，残血时又没机会吃了。保持血线在80%以上才是安全的。</li>
</ul>`,
    'multiplayer-06': `<h2>⚠️ 避坑指南：魔兽世界新手排本注意</h2>
<ul>
<li><strong>不看攻略进M+：</strong>10层大秘境以上一个机制失误就可能团灭，不是"进本看看"就能过的。</li>
<li><strong>打断技能不用：</strong>很多职业的打断技能CD只有15-20秒，但很多新手从来不用。不会打断的DPS是团队毒瘤。</li>
<li><strong>不驱散队友：</strong>有些debuff不驱散会死人。看到队友中关键debuff时优先驱散再用输出技能。</li>
<li><strong>不装WeakAuras：</strong>WeakAuras是WOW最强大的插件，新手装上它可以大幅降低副本难度。</li>
</ul>`,
    'multiplayer-07': `<h2>⚠️ 避坑指南：OW2 PVE组队建议</h2>
<ul>
<li><strong>选英雄不看关卡需求：</strong>每个PVE关卡需要的能力不同。跑酷关选机动性差的英雄等于地狱难度开场。</li>
<li><strong>各自为战不打配合：</strong>PVE模式的敌人配置很强，不像PVP可以靠个人能力单杀。配合辅助的清线和控制是生存关键。</li>
<li><strong>浪费治疗包：</strong>每个治疗包的刷新时间很长，满血时不要乱吃，留给残血的队友。</li>
<li><strong>堆在同一个掩体后：</strong>被AOE技能一锅端是最冤的死法。分散站位让敌人无法同时攻击多人。</li>
</ul>`,
    'multiplayer-08': `<h2>⚠️ 避坑指南：街霸6新手升段陷阱</h2>
<ul>
<li><strong>只攻不守：</strong>每个新手都会经历"按住前不放"的阶段。街霸6中防守和进攻同等重要，学会蹲防和投技拆解。</li>
<li><strong>不练基础连段就跳级：</strong>看到高手的高阶Combo视频就模仿，结果发现自己的手根本跟不上。先把最简单实用的民工连练熟。</li>
<li><strong>乱动被差合：</strong>很多新手在不利帧时还出招，结果被对面稳稳反击。学会"在对手回合结束前不动"。</li>
<li><strong>不让对手出招：</strong>有些玩家压着对面打让对手完全没办法出招。但这不是常态——学会"等"和"确反"才能稳定上分。</li>
</ul>`,

    // Boss
    'boss-01': `<h2>⚠️ 避坑指南：艾尔登法环Boss战禁忌</h2>
<ul>
<li><strong>女武神水鸟乱舞硬吃：</strong>水鸟乱舞是女武神最高伤害技能，不是"反应够快就能躲"的。记住固定的闪避节奏。</li>
<li><strong>最终Boss用错误属性：</strong>拉达冈对圣属性有80%的减伤率。带一个圣属性武器去打拉达冈=伤害少一半。</li>
<li><strong>不调整护符应对Boss：</strong>面对不同Boss要换对应的护符。用打物理Boss的护符去打魔法的Boss，纯属自找苦吃。</li>
<li><strong>在Boss房里换装备：</strong>进了雾门就别想着换装备了。进Boss房前确认好武器质变、护符和道具栏。</li>
</ul>`,
    'boss-02': `<h2>⚠️ 避坑指南：魂系Boss战常见死法</h2>
<ul>
<li><strong>贪刀=最普遍的死因：</strong>90%的魂系Boss死亡都是因为"再打一下"。在Boss出招间隙收手回耐力才是高手思维。</li>
<li><strong>不根据Boss类型换装备：</strong>米狄尔的火伤极高却不带火炕戒指，无名王者雷伤极高却没有雷抗盾——很多人死于不换防装。</li>
<li><strong>滚Boss脚底：</strong>大型Boss的脚底攻击判定诡异，新手最安全的输出位置是Boss的正前方（引诱可预判的攻击）。</li>
<li><strong>忽略Boss召唤物：</strong>盖尔的连弩灵魂和马努斯的暗术小球不处理的话，叠加伤害非常致命。</li>
</ul>`,
    'boss-03': `<h2>⚠️ 避坑指南：仁王2 Boss战翻车记录</h2>
<ul>
<li><strong>不用阴阳术：</strong>仁王2中阴阳术提供的结界符（自动回精力）/护身符（减伤）/封气符（封锁敌人回精）比任何装备都重要。</li>
<li><strong>满精力不输出却翻滚：</strong>很多新手因为紧张，满精力的第一反应是后滚而不是输出。学会利用Boss的硬直窗口。</li>
<li><strong>忽略妖力管理：</strong>妖怪化是关键时刻的救命技能，不要在没有妖力的情况下硬吃Boss大招。</li>
<li><strong>不锁Boss弱点：</strong>大部分Boss都有1-2个弱属性，不使用对应的附魔会让战斗时间延长一倍。</li>
</ul>`,
    'boss-04': `<h2>⚠️ 避坑指南：FF14高难副本禁忌</h2>
<ul>
<li><strong>开荒不看攻略：</strong>FF14高难本的机制极其固定，"进去看=灭100次"是经验之谈。至少看一遍视频攻略。</li>
<li><strong>处理机制时停输出：</strong>很多团灭是因为有人贪那1-2秒的输出忘了处理分摊/分散机制。</li>
<li><strong>不交减伤：</strong>治疗职业不是万能的，没有坦克减伤的群体AOE可能直接秒杀脆皮DPS。</li>
<li><strong>死了不报原因：</strong>团队里死人了需要知道死因才能调整，说"不知道"对团队没有任何帮助。</li>
</ul>`,
    'boss-05': `<h2>⚠️ 避坑指南：战神Boss战必死行为</h2>
<ul>
<li><strong>女武神用重甲硬刚：</strong>女武神的攻击模式多变，重甲导致翻滚速度变慢反而更容易被击中。保持轻甲或中甲状态。</li>
<li><strong>忽略儿子的箭：</strong>儿子的箭不仅是伤害工具，更是打断女武神飞天的关键。快捷键设置为最顺手的位置。</li>
<li><strong>Berserker的红圈不躲：</strong>红圈攻击=不可格挡。看到红圈还举盾硬刚的人都会变成尸体。</li>
<li><strong>不利用护身符技能：</strong>护身符符文技能提供了额外的爆发的生存能力。带"国度位移"（时停）可以打出巨额伤害。</li>
</ul>`,
    'boss-06': `<h2>⚠️ 避坑指南：怪物猎人狩猎禁忌</h2>
<ul>
<li><strong>不染色不扔闪光：</strong>怪物换区后你找不到它=浪费时间。染色球和闪光弹不仅便宜而且极其好用。</li>
<li><strong>不磨刀输出减半：</strong>斩味（Sharpness）掉到黄色以下时伤害大幅降低还弹刀，打完一个区段就习惯性磨刀。</li>
<li><strong>不用陷阱捕获：</strong>捕获获得的素材比杀死多得多，而且不用打最后最危险的残血狂暴阶段。</li>
<li><strong>大剑永远不蓄力：</strong>大剑的灵魂是蓄力斩（True Charged Slash），不蓄力的大剑不如换把双刀。</li>
</ul>`,
    'boss-07': `<h2>⚠️ 避坑指南：卧龙Boss战新手死法</h2>
<ul>
<li><strong>不化解只用翻滚：</strong>卧龙和魂系不同，化解（格挡键完美时机）才是核心防御手段。只用翻滚打卧龙是地狱模式。</li>
<li><strong>吕布赤兔马冲锋硬吃：</strong>吕布骑着赤兔马冲锋前的红光极明显。看到红光就应该进入"随时化解"状态。</li>
<li><strong>忘了用奇术：</strong>奇术系统提供的各种buff/debuff/远程攻击是打Boss的重要手段，不要光靠平A。</li>
<li><strong>被红光闪花了眼：</strong>多周目Boss的红光攻击带有快慢变奏，不要只按"看到红色就化解"的条件反射。</li>
</ul>`,
    'boss-08': `<h2>⚠️ 避坑指南：DOOM超级巢穴Boss战禁忌</h2>
<ul>
<li><strong>执政官战不清小怪：</strong>很多新手只盯着Boss打，但召唤物不清完会很快围攻致死。优先清杂再打Boss。</li>
<li><strong>不用弱点武器：</strong>每个超级巢穴Boss都有弱点武器，用对武器伤害翻倍。检查代码x扫描Boss获取弱点信息。</li>
<li><strong>黑暗主教绿光不格挡：</strong>黑暗主教发出绿光时你不格挡=直接吃满伤害然后还被打飞。绿光=格挡时机。</li>
<li><strong>不保持移动：</strong>DOOM里站着读秒就等于找死。超级巢穴Boss战中每秒都应该在移动和跳跃。</li>
</ul>`,

    // Achievement
    'achievement-01': `<h2>⚠️ 避坑指南：艾尔登法环成就党必看</h2>
<ul>
<li><strong>不小心跳过癫火结局：</strong>癫火之王结局需要去王城下水道找到三指并接受烙印。如果你已经用了"金针"或者烧了梅琳娜就无法触发。</li>
<li><strong>错过传说武器改版：</strong>多个传说武器在特定Boss战或NPC任务线中限时获取。如"夜与火之剑"在卡利亚城寨的某个房间里。</li>
<li><strong>二周目之前记得备份存档：</strong>全结局成就需要所有结局，利用云存档备份+读档可以在一个周目内做完全结局。</li>
<li><strong>忘了"古龙岩锻造石"是有限资源：</strong>每个周目的古龙岩锻造石数量有限，不要浪费在不常用的武器上。</li>
</ul>`,
    'achievement-02': `<h2>⚠️ 避坑指南：战神5白金别踩的坑</h2>
<ul>
<li><strong>不标记乌鸦位置：</strong>48只奥丁乌鸦散布在九界各处，不标记位置的话很难分清哪些已经打过哪些还没打。</li>
<li><strong>通关后才去补收集：</strong>通关后一些区域的地形会变化或者NPC位置改变，部分收集品需要特定条件才能获取。</li>
<li><strong>不看DLC收集：</strong>免费DLC更新的内容中也有奖杯。DLC内容不会过期，但最好在主线推进时顺带完成。</li>
<li><strong>漏了华纳海姆的幽魂：</strong>华纳海姆有多个幽魂任务触发在黄昏之路的隐藏支线中，容易完全错过。</li>
</ul>`,
    'achievement-03': `<h2>⚠️ 避坑指南：巫师3成就收集常见错</h2>
<ul>
<li><strong>错过不可逆昆特牌：</strong>很多昆特牌只能在特定时间段的特定NPC处获取。"大赌局"任务前没完成全收集就永远错过了。</li>
<li><strong>死而无憾难度没经验：</strong>最高难度不是新手的第一个选择。最好先在普通难度通关一次了解游戏流程再挑战。</li>
<li><strong>不买DLC专属成就就装DLC：</strong>石之心和血与酒的成就数量很多，且与主线进程有关。规划好周目安排。</li>
<li><strong>全问号强迫症：</strong>清全地图问号不是成就要求的一部分。只做有任务标记的问号，野外的问号大部分不值得全清。</li>
</ul>`,
    'achievement-04': `<h2>⚠️ 避坑指南：只狼白金注意事项</h2>
<ul>
<li><strong>修罗结局必须提前存档：</strong>修罗结局会跳过一大半流程，如果没备份存档就做了修罗线，需要多打一个周目来补其他结局。</li>
<li><strong>后天之楔（Lapis）非常有限：</strong>全忍义手升级需要10个后天之楔，但每个周目只能获得6个。至少需要2周目才能全升级。</li>
<li><strong>全技能刷魂太枯燥：</strong>75+个技能点是非常漫长的刷经验过程。刷经验时听听播客或音乐会让过程轻松很多。</li>
<li><strong>佛珠不要等二周目再补：</strong>很多精英怪在游戏流程中只能打一次，错过佛珠碎片必须等到下周目。</li>
</ul>`,
    'achievement-05': `<h2>⚠️ 避坑指南：空洞骑士全成就警示</h2>
<ul>
<li><strong>钢铁之魂模式别莽：</strong>一条命模式下最危险的不是Boss而是探图时的意外坠落。钢铁之魂优先升级移动能力。</li>
<li><strong>五门神居需要大量练习：</strong>五门是全Boss连战（42个Boss），每个都需要能稳定无伤。没有捷径，只有练。</li>
<li><strong>忽略辐光级Boss：</strong>梦境Boss（梦魇格林/纯粹容器/绝对辐光）在主线中可跳过，但它们的神居版本是必须打的。</li>
<li><strong>112%少了某个完成度项：</strong>全完成度需要仔细对照清单，一个不起眼的Boss或护符漏了就永远无法达到112%。</li>
</ul>`,
    'achievement-06': `<h2>⚠️ 避坑指南：赛博朋克2077全成就注意</h2>
<ul>
<li><strong>结局选择前不存档：</strong>"夜曲"任务中的对话选项决定结局。建议在进入最终任务前手动存档。</li>
<li><strong>往日之影结局绑定：</strong>DLC的结局直接影响主线的可选结局数量。提前了解各分支的条件。</li>
<li><strong>开车成就容易忘：</strong>赛博朋克里有多个开车相关的成就，"高速公路上漂移500米"可能需要专门去跑一段高速。</li>
<li><strong>NCPD扫荡任务太重复：</strong>17个区域的扫荡任务非常重复，建议每天做几个区域而不是一次性做完——不然会非常枯燥。</li>
</ul>`,
    'achievement-07': `<h2>⚠️ 避坑指南：博德之门3全成就注意</h2>
<ul>
<li><strong>荣誉模式不需要完美无缺：</strong>荣誉模式允许你在死亡时用"强退大法"（设定里关掉自动保存可撤回最后操作）。</li>
<li><strong>隐藏成就容易被忽略：</strong>博德之门3有多个隐藏条件成就，如"一石N鸟""但触不到"等，不看攻略很难触发。</li>
<li><strong>恶人路线会失去同伴：</strong>走邪恶路线会导致多种同伴离开或敌对，提前确认哪些成就可以在一周目做。</li>
<li><strong>三周目太累：</strong>三周目通关可能有疲劳感，尝试不同的Build和不同的选择方向会让游戏保持新鲜。</li>
</ul>`,
    'achievement-08': `<h2>⚠️ 避坑指南：王国之泪全收集注意</h2>
<ul>
<li><strong>1000个呀哈哈不要一次找完：</strong>1000个呀哈哈种子分散在地面/天空/地下三界，一次找10-20个心态会比较轻松。</li>
<li><strong>神庙不用全部找完才推主线：</strong>先推进主线解锁能力和传送点，再回头收集会更高效。</li>
<li><strong>地下树根对应地面神庙：</strong>黑暗地下的树根位置与地面的神庙一一对应。如果漏了几个树根，在地面上找对应的神庙即可。</li>
<li><strong>天空群岛最高层容易漏：</strong>浮空群岛有7层区域，最上层的一些神殿和遗愿位置非常隐蔽，需要仔细搜寻。</li>
</ul>`
};

// ===== Build static HTML files =====
function build() {
    const outputDir = path.join(__dirname, 'guides', 'detail');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    let built = 0;
    let skipped = [];
    
    guidesData.forEach(guide => {
        const seo = seoMeta[guide.id] || {
            title: `${guide.title} | GameGuideHub`,
            desc: guide.brief,
            keywords: guide.tags.join(', ')
        };

        const categoryName = categories.find(c => c.id === guide.category)?.name || guide.category;
        const pitfalls = pitfallSections[guide.id] || '';

        const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.desc)}">
    <meta name="keywords" content="${escapeHtml(seo.keywords)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ningbo.github.io/game-guides/guides/detail/${guide.id}.html">
    <link rel="stylesheet" href="../../css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <meta property="og:title" content="${escapeHtml(seo.title)}">
    <meta property="og:description" content="${escapeHtml(seo.desc)}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="GameGuideHub">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../../index.html" class="logo">🎮 <span>GameGuide</span>Hub</a>
            <div class="nav-links" id="navLinks">
                <a href="../../index.html">首页</a>
                <a href="../../categories.html">攻略分类</a>
                <a href="../../all-guides.html">全部攻略</a>
                <a href="../../about.html">关于</a>
            </div>
            <div class="search-box">
                <input type="text" onkeyup="if(event.key==='Enter'&&this.value.trim())window.location.href='../../all-guides.html?search='+encodeURIComponent(this.value.trim())" placeholder="搜索攻略...">
                <span class="search-icon">🔍</span>
            </div>
            <button class="mobile-menu" onclick="document.getElementById('navLinks').classList.toggle('show')">☰</button>
        </div>
    </nav>

    <section class="guide-detail">
        <div class="container">
            <div class="breadcrumb">
                <a href="../../index.html">首页</a> &gt;
                <a href="../../categories.html">攻略分类</a> &gt;
                <a href="../../all-guides.html?cat=${guide.category}">${escapeHtml(categoryName)}</a> &gt;
                ${escapeHtml(guide.title)}
            </div>
            <article>
                <h1>${escapeHtml(guide.title)}</h1>
                <div class="guide-meta">
                    <span>📅 ${guide.date}</span>
                    <span>🏷️ ${escapeHtml(guide.tags.join('、'))}</span>
                    <span>📂 ${escapeHtml(categoryName)}</span>
                </div>
                <div class="guide-body">
                    ${guide.content}
                    ${pitfalls}
                </div>
                <hr style="margin:40px 0; border-color:rgba(255,255,255,0.06);">
                <p style="text-align:center;color:#5a6270;">
                    📖 <a href="../../all-guides.html">返回全部攻略</a> &nbsp;|&nbsp; 
                    📂 <a href="../../all-guides.html?cat=${guide.category}">查看${escapeHtml(categoryName)}攻略</a>
                </p>
            </article>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>🎮 GameGuideHub</h3>
                    <p>全球热门游戏攻略大全，一站式查阅所有游戏技巧与攻略。</p>
                </div>
                <div class="footer-col">
                    <h4>快速导航</h4>
                    <a href="../../index.html">首页</a>
                    <a href="../../categories.html">攻略分类</a>
                    <a href="../../all-guides.html">全部攻略</a>
                </div>
                <div class="footer-col">
                    <h4>热门分类</h4>
                    <a href="../../all-guides.html?cat=rpg">RPG攻略</a>
                    <a href="../../all-guides.html?cat=fps">FPS攻略</a>
                    <a href="../../all-guides.html?cat=openworld">开放世界</a>
                    <a href="../../all-guides.html?cat=beginner">入门指南</a>
                </div>
                <div class="footer-col">
                    <h4>关于</h4>
                    <a href="../../about.html">关于本站</a>
                    <p class="footer-note">攻略内容由 AI 精心生成<br>仅供参考学习用途</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 GameGuideHub. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

        fs.writeFileSync(path.join(outputDir, `${guide.id}.html`), html, 'utf8');
        built++;
    });

    console.log(`✅ Generated ${built} HTML files`);
    console.log(`📁 Output: ${outputDir}`);
    console.log(`⏭️  Skipped: ${skipped.length}`);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

build();
