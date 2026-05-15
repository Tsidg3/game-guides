// ==============================
// GameGuideHub - 攻略数据中心
// ==============================

const categories = [
    { id: 'beginner', name: '入门指南', icon: '🌱', desc: '新手必读的基础知识与入门技。, count: 8 },
    { id: 'rpg', name: 'RPG角色扮演', icon: '⚔️', desc: '畅游奇幻世界的角色扮演攻。, count: 8 },
    { id: 'action', name: '动作冒险', icon: '🎯', desc: '肾上腺素飙升的动作游戏指。, count: 8 },
    { id: 'fps', name: 'FPS射击', icon: '🔫', desc: '枪林弹雨中的生存射击攻略', count: 8 },
    { id: 'openworld', name: '开放世。, icon: '🌍', desc: '探索广袤开放世界的冒险指南', count: 8 },
    { id: 'survival', name: '生存建。, icon: '🏕。, desc: '荒野求生的建造与生存技。, count: 8 },
    { id: 'strategy', name: '策略战术', icon: '🧠', desc: '运筹帷幄的策略游戏攻。, count: 8 },
    { id: 'multiplayer', name: '多人联机', icon: '👥', desc: '团队协作与竞技对战攻略', count: 8 },
    { id: 'boss', name: 'Boss战攻。, icon: '🐉', desc: '硬核Boss战机制与打法详解', count: 8 },
    { id: 'achievement', name: '成就收集', icon: '🏆', desc: '全成。全收集达成指。, count: 8 }
];

// ==============================
// 80+ Guides Data
// ==============================
const guides = [
    // ===== 1. BEGINNER GUIDES (8) =====
    {
        id: 'beginner-01', category: 'beginner', tags: ['入门', '基础'],
        title: '游戏新手必读：如何快速上手任何游。,
        brief: '掌握通用的游戏入门方法论，从操作设置到社区融入，让你快速上手任何新游戏。,
        date: '2025-01-05',
        content: `
<h2>🎮 新手入门的核心原。/h2>
<p>每款新游戏都有一套自己的语言。掌握以下方法论，你可以。0分钟内从完全陌生达到基本可玩状态。/p>

<h3>1. 设置先行</h3>
<p>进入任何新游戏的第一步永远不是直接开玩——而是先花5-10分钟配置设置。/p>
<ul>
<li>图形设置：根据你的硬件调整画质，优先保证帧率稳定。0fps以上。/li>
<li>控制设置：熟悉键。手柄映射，调整灵敏度到适合自己的水。/li>
<li>音频设置：确保语音、音效、音乐的平衡，竞技游戏需要高音效优先。/li>
<li>辅助功能：色盲模式、字幕、UI缩放。/li>
</ul>

<h3>2. 教程阶段不要跳过</h3>
<p>很多老玩家习惯性跳过教程，但这往往是后期卡关的根源。教程通常教你。/p>
<ul>
<li>核心操作机制（移动、攻击、交互）</li>
<li>游戏特有的独特系统（如《原神》的元素反应。/li>
<li>UI界面功能（地图、背包、任务日志）</li>
</ul>

<h3>3. 建立学习循环</h3>
<p>高效学习的循环是：尝。。失败 。分析 。调整 。再尝试。每次死亡或失败后，问自己三个问题：为什么死。/ 我能做什么不。/ 下次如何避免。/p>

<h3>4. 利用社区资源</h3>
<p>现代游戏的社区资源极其丰富：Reddit/r/[游戏名] 有玩家讨论与问答, Discord官方服务器有实时交流, YouTube/Wiki有详细攻略。遇到困难先搜索而不是硬刚。/p>

<h3>5. 管理心。/h3>
<p>游戏最重要的目的是享受过程。不要被难度曲线挫败——每款游戏都有自己的学习曲线，给自己时间。/p>

<blockquote>💡 记住：每个高手都曾经是新手。区别只在于他们愿意学习的态度。/blockquote>
`
    },
    {
        id: 'beginner-02', category: 'beginner', tags: ['硬件', '设置'],
        title: '游戏硬件选购终极指南：从入门到发。,
        brief: '覆盖CPU、GPU、显示器、外设的全方位选购建议，不同预算下的最佳搭配方案。,
        date: '2025-01-08',
        content: `
<h2>🖥。游戏硬件选购指南</h2>
<p>无论你是刚入门的PC玩家还是想升级的老手，这份指南帮你理清思路。/p>

<h3>CPU：游戏的核心</h3>
<p>目前游戏CPU市场由Intel和AMD主导。AMD Ryzen 7000/9000系列在多线程表现上更具优势，而Intel Core 13/14代在单核性能上领先。推荐：</p>
<ul>
<li>入门：Intel i5-13400F / AMD Ryzen 5 7600</li>
<li>中端：Intel i5-14600K / AMD Ryzen 7 7800X3D</li>
<li>高端：Intel i7-14700K / AMD Ryzen 9 7950X3D</li>
</ul>

<h3>GPU：画面的基石</h3>
<p>显卡是游戏性能最重要的部件。NVIDIA RTX 40系列在光追和DLSS 3上领先，AMD RX 7000系列性价比出色。/p>
<ul>
<li>入门。080p）：RTX 4060 / RX 7600</li>
<li>中端。440p）：RTX 4070 / RX 7800 XT</li>
<li>高端。K）：RTX 4080 Super / RX 7900 XTX</li>
<li>旗舰：RTX 4090</li>
</ul>

<h3>显示器：看得见的差异</h3>
<p>刷新率、分辨率、响应时间是三大核心指标。/p>
<ul>
<li>竞技射击玩家：首。24-27。1080p/1440p 240Hz+ 快速响。/li>
<li>3A大作玩家。7-32。1440p/4K 144Hz HDR</li>
<li>兼顾两者：27。1440p 165-240Hz</li>
</ul>

<h3>外设：手感决定体。/h3>
<p>键盘推荐机械键盘（线性轴适合游戏），鼠标根据握持姿势和游戏类型选择（FPS选轻量级），耳机追求定位准确。/p>
`
    },
    {
        id: 'beginner-03', category: 'beginner', tags: ['网络', '联机'],
        title: '联机游戏网络优化全攻。,
        brief: '从基础网络设置到进阶加速方案，彻底解决延迟、掉线和丢包问题。,
        date: '2025-01-12',
        content: `
<h2>🌐 联机游戏网络优化</h2>
<p>高延迟（Ping）、丢包（Packet Loss）、抖动（Jitter）是联机游戏的三大杀手。以下是完整的优化方案。/p>

<h3>基础优化（免费）</h3>
<ul>
<li>使用有线网络替代Wi-Fi，延迟降。0-50%</li>
<li>关闭后台下载和流媒体，释放带。/li>
<li>在路由器中为游戏主机/PC设置QoS优先。/li>
<li>更换DNS为Cloudflare (1.1.1.1) 。Google (8.8.8.8)</li>
</ul>

<h3>进阶优化</h3>
<p>如果基础优化不够，尝试以下方法：</p>
<ul>
<li>游戏加速器：网易UU、迅游、奇游等，选择支持游戏且节点距离你最近的</li>
<li>路由器更换：支持游戏加速功能的路由器（华硕、小米等。/li>
<li>网络拓扑：避免经过多层NAT，尝试设置DMZ主机</li>
</ul>

<h3>诊断工具</h3>
<p>在CMD中使用以下命令诊断网络：<code>ping [服务器IP] -t</code> 持续测试延迟稳定性；<code>tracert [服务器IP]</code> 查看路由跳数。code>pathping [服务器IP]</code> 分析每跳延迟。/p>

<h3>各游戏推荐Ping。/h3>
<ul>
<li>FPS（Valorant/CS2/OW2）：&lt;30ms 优秀。lt;60ms 可玩</li>
<li>MOBA（LOL/Dota2）：&lt;50ms 优秀。lt;100ms 可玩</li>
<li>MMORPG（FF14/WOW）：&lt;150ms 可玩</li>
<li>格斗游戏。lt;60ms 至关重要</li>
</ul>
`
    },
    {
        id: 'beginner-04', category: 'beginner', tags: ['成就', '奖杯'],
        title: '全成就玩家养成计划：奖杯系统完全解读',
        brief: 'Steam成就、PlayStation奖杯、Xbox成就的完整攻略与高效达成策略。,
        date: '2025-01-15',
        content: `
<h2>🏆 成就系统完全解读</h2>
<p>三大平台的成就系统各有特点：Steam成就（Steam Achievement）、PlayStation奖杯（Trophy）、Xbox成就（Gamerscore）。/p>

<h3>准备工作</h3>
<ul>
<li>了解成就类型：主线必得（自动解锁）、收集类（需要找全）、挑战类（高难度要求）、隐藏成就（特殊条件。/li>
<li>善用工具：Steam社区的成就指南、PSNProfiles、TrueAchievements、PowerPyx</li>
<li>规划路线：先通主线解锁流程成就，再回头清收集和挑。/li>
</ul>

<h3>高效成就策略</h3>
<p><strong>1. 存档管理。/strong>关键节点前手动备份存档，避免错过不可逆成就。Steam可关闭云同步后手动备份。/p>
<p><strong>2. 难度选择。/strong>多数游戏的高难度通关成就需要一开始就选择最高难度，中途不可更改。/p>
<p><strong>3. 收集成就。/strong>建议对照互动地图（如MapGenie）逐一清点，比自行探索节省数小时。/p>
<p><strong>4. 多周目规划：</strong>提前了解是否有二周目独占成就，安排一周目目标。/p>

<h3>心态管。/h3>
<p>全成就是一场马拉松，不是短跑。平均每款游戏的全成就时间在40-100小时之间。有些游戏存在无法获得的成就（服务器关闭、bug），提前在社区确认。/p>
`
    },
    {
        id: 'beginner-05', category: 'beginner', tags: ['社区', '交流'],
        title: '游戏社区生存指南：Reddit/Discord/Wiki使用技。,
        brief: '学会高效利用游戏社区资源，快速找到答案，融入玩家群体。,
        date: '2025-01-18',
        content: `
<h2>🌍 游戏社区生存指南</h2>
<p>现代游戏体验已经远远超越了游戏本身——社区是游戏体验的重要组成部分。/p>

<h3>Reddit - 最大的游戏讨论平台</h3>
<p>每个主要游戏都有自己的subreddit（r/[游戏名]）。使用技巧：</p>
<ul>
<li>发帖前先搜索，你的问题很可能已经被回答过</li>
<li>善用"Megathread"置顶帖，这些通常是集中的问答/Q&A。/li>
<li>使用Reddit。 flair"筛选功能快速找到攻略类帖子</li>
<li>部分游戏有专门的"Daily Discussion"帖子适合问小问题</li>
</ul>

<h3>Discord - 实时通讯中心</h3>
<p>大多数游戏都有官方或社区Discord服务器：</p>
<ul>
<li>利用频道分类：通常。新手提问。攻略讨论。组队招募等频。/li>
<li>不要一上来就@everyone 或管理员，先看置顶规。/li>
<li>使用搜索功能（Ctrl+K）快速查找历史讨。/li>
</ul>

<h3>Wiki/Fandom - 知识。/h3>
<p>对于复杂游戏，Wiki是最完整的知识来源。Fextralife、Gamepedia、Fandom都托管大量游戏Wiki。/p>
<ul>
<li>使用浏览器的页面内搜索（Ctrl+F）快速定。/li>
<li>注意版本号——过时的Wiki信息会误。/li>
</ul>
`
    },
    {
        id: 'beginner-06', category: 'beginner', tags: ['优化', '性能'],
        title: 'PC游戏性能优化：从卡顿到丝滑的完整方案',
        brief: '显卡设置、系统优化、启动参数调优，让你的游戏跑得更流畅。,
        date: '2025-01-20',
        content: `
<h2>。PC游戏性能优化完全指南</h2>

<h3>1. 显卡驱动优化</h3>
<p>NVIDIA控制面板/AMD Adrenalin中的关键设置。/p>
<ul>
<li>电源管理模式：首。最高性能优先"</li>
<li>纹理过滤：高性能（而非高质量）</li>
<li>垂直同步：关闭（除非遇到画面撕裂。/li>
<li>三重缓冲：关。/li>
</ul>

<h3>2. 游戏内画质设置优先级</h3>
<p>不是所有画质设置对性能的影响都一样大。以下是最消耗性能的设置（从上到下，最重到最轻）。/p>
<ul>
<li>光线追踪（RTX）：性能杀手，建议关闭或设为低</li>
<li>阴影质量：中或低，视觉差异微。/li>
<li>抗锯齿（AA）：TAA平衡画质和性能，MSAA非常耗性能</li>
<li>环境光遮蔽（AO）：对画质影响大，设为中</li>
<li>纹理质量：对性能影响较小（主要影响显存），可保持。/li>
</ul>

<h3>3. Windows系统优化</h3>
<ul>
<li>关闭游戏模式（有时候反而影响性能。/li>
<li>关闭Windows Defender实时扫描（玩时暂关，记得开启）</li>
<li>关闭Xbox Game Bar</li>
<li>更新DirectX和VC++运行。/li>
</ul>

<h3>4. 进阶调优</h3>
<p>部分游戏支持启动参数优化。例如在Steam中右键游戏→属性→启动选项，可以添加如 <code>-dx11</code>。code>-high</code>。code>-threads [核心数]</code> 等参数。/p>
`
    },
    {
        id: 'beginner-07', category: 'beginner', tags: ['手柄', '键鼠'],
        title: '手柄vs键鼠：不同游戏类型的最佳控制方。,
        brief: '深入分析不同游戏类型最适合的控制方式，以及如何快速适应切换。,
        date: '2025-01-22',
        content: `
<h2>🎮 手柄 vs 键鼠：终极对。/h2>

<h3>键鼠的优势领。/h3>
<ul>
<li>FPS射击游戏：鼠标的精准瞄准无可替代（Apex、Valorant、CS2。/li>
<li>RTS即时战略：大量快捷键操作（星际争。、帝国时。。/li>
<li>MOBA类：精准点击和技能快速释放（LOL、Dota2。/li>
<li>模拟建造：频繁的UI操作和菜单导航（城市天际线、环世界。/li>
</ul>

<h3>手柄的优势领。/h3>
<ul>
<li>动作冒险：摇杆的模拟移动更自然（只狼、黑魂、战神）</li>
<li>赛车游戏：扳机键的线性油门控制（地平线、GT赛车。/li>
<li>格斗游戏：十字键精确输入（街。、铁。。/li>
<li>体育游戏：摇杆运球和射门更自然（FIFA、NBA 2K。/li>
<li>平台跳跃。D平台游戏手感更好（蔚蓝、空洞骑士）</li>
</ul>

<h3>混合方案</h3>
<p>越来越多的游戏支持混合输入——比如用左手手柄操控移动、右手鼠标瞄准。Steam的控制器配置功能允许深度自定义映射。/p>

<h3>快速适应建议</h3>
<p>如果从键鼠转手柄或反之，给自己至少一周的适应期。从单人战役游戏开始练习，竞技游戏中需要更长时间。/p>
`
    },
    {
        id: 'beginner-08', category: 'beginner', tags: ['串流', '远程'],
        title: '游戏串流完全指南：随时随地玩PC游戏',
        brief: 'Steam Link、Moonlight、Parsec等串流方案设置教程，远程游戏不再有门槛。,
        date: '2025-01-25',
        content: `
<h2>📡 游戏串流完全指南</h2>
<p>把你的PC游戏串流到笔记本、手机、平板甚至电视上——这是现代玩家的必备技能。/p>

<h3>主流串流方案对比</h3>
<table>
<tr><th>方案</th><th>延迟</th><th>画质</th><th>配置难度</th><th>价格</th></tr>
<tr><td>Steam Link</td><td>。/td><td>。/td><td>简。/td><td>免费</td></tr>
<tr><td>Moonlight + Sunshine</td><td>极低</td><td>极好</td><td>中等</td><td>免费</td></tr>
<tr><td>Parsec</td><td>极低</td><td>极好</td><td>简。/td><td>免费/付费</td></tr>
<tr><td>GeForce Now</td><td>中等</td><td>。/td><td>简。/td><td>订阅。/td></tr>
<tr><td>Xbox Cloud Gaming</td><td>中等</td><td>中等</td><td>最简。/td><td>Game Pass</td></tr>
</table>

<h3>最佳方案推荐：Moonlight + Sunshine</h3>
<p>这是目前延迟最低、画质最好的自托管串流方案：</p>
<ul>
<li>PC端安装Sunshine（开源串流服务器。/li>
<li>客户端安装Moonlight（支持Windows/Mac/Android/iOS/电视。/li>
<li>局域网内延迟通常。-10ms。G网络下远程串流延。0-40ms</li>
<li>支持HDR。K 60fps、环绕声、多显示。/li>
</ul>

<h3>串流优化小技。/h3>
<ul>
<li>编码优先选HEVC（H.265），同等画质下带宽需求比H.264。0%</li>
<li>码率设置：局域网建议50-100Mbps，远程根据上行带宽设。/li>
<li>使用有线网络连接客户端和主机，Wi-Fi使用5GHz</li>
</ul>
`
    },

    // ===== 2. RPG GUIDES (8) =====
    {
        id: 'rpg-01', category: 'rpg', tags: ['RPG', '开放世。],
        title: '《艾尔登法环》完整新手开荒指。,
        brief: '褪色者必备的入门技巧，从职业选择到初期路线规划，让你少走99%的弯路。,
        date: '2025-02-01',
        content: `
<h2>⚔️ 《艾尔登法环》新手开荒指。/h2>

<h3>职业选择推荐</h3>
<p>对于新手，推荐以下职业：</p>
<ul>
<li><strong>武士。/strong>自带优秀的打刀和长弓，敏捷流开局，前期轻。/li>
<li><strong>流浪骑士。/strong>最均衡的初始属性，防具优秀，容错率。/li>
<li><strong>观星者：</strong>法爷开局，远程清怪安全，但需要管理蓝。/li>
</ul>

<h3>初期必做事项</h3>
<p>刚进入宁姆格福（Limgrave），按此顺序推进最顺畅。/p>
<ol>
<li>开启第一个赐福点并获取马匹（Torrent）——继续主线即。/li>
<li>前往艾雷教堂（Church of Elleh）购买工具皮带和制作笔记</li>
<li>击败大树守卫（Tree Sentinel）——或者绕过，以后再来</li>
<li>探索南边的啜泣半岛（Weeping Peninsula），那里难度较低</li>
<li>找到地图碎片，解锁完整地。/li>
</ol>

<h3>关键属性加。/h3>
<p>前期优先加耐力（Stamina）到20、生命值（Vigor）到25-30。输出属性根据流派选择：力量流加力量到40+，敏捷流加敏捷到40+，法爷加智力和集中力。/p>

<h3>新手神器获取</h3>
<ul>
<li>猎犬长牙（Bloodhound's Fang）：击败猎犬骑士，前期最强武器之一</li>
<li>黄金种子（Golden Seed）：增加圣杯瓶次数，宁姆格福。个容易获。/li>
<li>圣杯瓶露滴（Sacred Tear）：升级回血量，早期教堂都有</li>
</ul>

<blockquote>💡 如果打不过某个Boss，这不是你的问题——是等级或装备不够。去别处探索，变强了再回来。/blockquote>
`
    },
    {
        id: 'rpg-02', category: 'rpg', tags: ['RPG', 'Build'],
        title: '《博德之。》职业搭配与Build指南',
        brief: '从职业选择到多职业进阶搭配，全面解析Larian这款年度RPG的配装哲学。,
        date: '2025-02-04',
        content: `
<h2>🎲 《博德之。》职业Build指南</h2>

<h3>新手推荐职业</h3>
<ul>
<li><strong>战士（Fighter）：</strong>最简单直接的强力职业，能打能。/li>
<li><strong>邪术师（Warlock）：</strong>主魅力施法者，魔能爆（Eldritch Blast）是最高效的稳定输。/li>
<li><strong>武僧（Monk）：</strong>徒手格斗伤害可观，灵活机。/li>
</ul>

<h3>强力Build推荐</h3>
<p><strong>1. 投矛蛮战。/strong><br>野蛮。。游侠4。战士3级。专长。酒馆殴斗。让投掷武器附加力量调整值，配合"回旋武器"附魔，每回合3+次高伤害投掷。br><strong>装备核心。/strong>回旋武器盾牌（Act 1）、投掷环（Act 1）、狂暴手套（Act 2。/p>

<p><strong>2. 剑舞诗人</strong><br>诗人6。游侠4。战士2级。高魅力高敏捷，既能辅助又能输出，还能白嫖各种技能检定。br><strong>装备核心。/strong>双持手弩、精灵皮靴（额外附伤。/p>

<p><strong>3. 月光德鲁。/strong><br>纯职德鲁。2级。专注召唤流和变形战斗，月德鲁伊能召唤大量生物形成人数优势。br><strong>关键技能：</strong>召唤林地生物、召唤元素、变形为枭熊</p>

<h3>队伍搭配原则</h3>
<p>一个平衡的4人队伍需要：前排坦克（战。圣骑。野蛮人）、远程输出（法师/术士/游侠）、治。辅助（牧。德鲁。诗人）、技能专家（游荡。诗人/游侠）。/p>
`
    },
    {
        id: 'rpg-03', category: 'rpg', tags: ['RPG', '开放世。],
        title: '《上古卷。：天际》十周年纪念版完整攻。,
        brief: '天际省生存手册，涵盖主流Build、公会任务顺序与隐藏内容。,
        date: '2025-02-07',
        content: `
<h2>🗡。《上古卷。：天际》十周年攻略</h2>

<h3>开局路线推荐</h3>
<p>逃离海尔根后，不要急着冲主线。推荐路线：</p>
<ol>
<li>前往溪木镇（Riverwood），触发主线但不必立即推。/li>
<li>沿路前往白漫城（Whiterun），途中收集材料和灵魂石</li>
<li>加入战友团（Companions）——白漫城的战士公会，提供大量任务和经。/li>
<li>探索地牢时注意收集龙吼文字（Word Wall。/li>
</ol>

<h3>主流Build推荐</h3>
<p><strong>潜行弓：</strong>天际最经典build。主加潜行（Sneak）和箭术（Archery），配合"潜行30倍伤。perk，一箭秒杀绝大多数敌人。br>公会路线：加入黑暗兄弟会可获。古代暗影套装"，前期强力装备。/p>

<p><strong>双持战士。/strong>主加双手武器（Two-Handed）和重甲（Heavy Armor）。核心perk。横扫"（Sweep），能同时攻击多个敌人。br>神器推荐：乌木刃（Ebony Blade）、沃伦神锤（Volendrung）。/p>

<p><strong>双手法：</strong>左右手各拿一个毁灭系法术，配。冲击"（Impact）perk，可以无限硬直敌人。后期搭配附魔减蓝耗装备。/p>

<h3>刷技能小技。/h3>
<ul>
<li>潜行：在灰胡子（Greybeards）那里对着墙跑，他们不会察。/li>
<li>锻。附魔：锻造戒指→附魔→卖掉，循环提升两项技。/li>
<li>炼金：采集小麦和蓝蝴蝶翅膀制作恢复生命药水，原料常见且值钱</li>
</ul>
`
    },
    {
        id: 'rpg-04', category: 'rpg', tags: ['RPG', '魂系'],
        title: '《黑暗之。》全流程Boss攻略与配。,
        brief: '魂系入坑最佳选择，从古达到薪王化身，全Boss战机制解析。,
        date: '2025-02-10',
        content: `
<h2>💀 《黑暗之。》全攻略</h2>

<h3>职业选择</h3>
<p>新手推荐骑士（Knight）开局：初。00%物防盾、高防御力、优秀的初始属性分配。/p>

<h3>初期装备路线</h3>
<ol>
<li>传火祭祀场→高墙→拿。阔剑"（Broadsword），直剑中DPS最高的之一</li>
<li>不死聚落→解救咒术老师→学习强力咒。混沌火球"</li>
<li>活祭品之路→法兰要塞→拿。流放者大刀"（Exile Greatsword），力量号神。/li>
</ol>

<h3>关键Boss战技。/h3>
<p><strong>古达（Iudex Gundyr）：</strong>一阶段贴身打，二阶段等他出完大范围攻击再上去补刀。推荐火焰壶道具，对二阶段弱火。/p>
<p><strong>舞娘（Dancer）：</strong>建议35+级再去。P1绕背后输出，P2注意她的旋转连斩，向后翻滚躲避。/p>
<p><strong>无名王者（Nameless King）：</strong>P1打龙时锁定龙而非无名本人。P2的无名以慢刀为主，需要数节奏而不是凭直觉翻滚。/p>

<h3>推荐通关配装</h3>
<ul>
<li>武器。10阔剑/流放者大刀，质变选混。暗（智信号）或厚。熟练（力敏号。/li>
<li>盾牌：猎龙大盾（最高雷抗）/ 荣誉大盾</li>
<li>戒指：绿花戒。3、宠爱戒。3、钢铁庇佑戒。3、任意输出戒。/li>
</ul>
`
    },
    {
        id: 'rpg-05', category: 'rpg', tags: ['RPG', '日式'],
        title: '《最终幻想XIV。.0版本新手入坑指南',
        brief: '从职业选择到满级之路，最终幻。4最新版本的完整新手攻略。,
        date: '2025-02-13',
        content: `
<h2>🌌 《最终幻想XIV》新手入坑指。/h2>

<h3>国服/国际服选择</h3>
<p>国服（盛大代理）：延迟低、社交方便、有点卡和月卡两种收费。国际服：全球玩家、英。日文为主、更新最快。建议国内玩家选择国服。/p>

<h3>职业选择（特职）</h3>
<ul>
<li><strong>坦克。/strong>骑士（防御最强）。战士（自疗最强）。暗黑骑士（剧情绑定）。绝枪战士（输出最高）</li>
<li><strong>治疗。/strong>白魔法师（治疗量最高）。学者（护盾流）。占星术士（buff大师）→ 贤者（护盾+输出。/li>
<li><strong>近战DPS。/strong>武士（高爆发）→ 忍者（操作复杂但高伤害）→ 龙骑士（经典跳跳乐）</li>
<li><strong>远程DPS。/strong>舞者（简单辅助）。机工士（枪械手感）→ 诗人（团队buff机）</li>
<li><strong>法系DPS。/strong>黑魔（高伤害但站桩）。赤魔（机动强、可复活）→ 召唤师（简单强。/li>
</ul>

<h3>升级路线</h3>
<ol>
<li>1-50级：主线任务（MSQ）为主，这是FF14的核心体。/li>
<li>50-60级：主线推进。苍穹之禁。资料。/li>
<li>60-70级：主线"红莲之狂。</li>
<li>70-80级：主线"暗影之逆焰"——FF14剧情巅峰</li>
<li>80-90级：主线"晓月之终。</li>
</ol>

<h3>重要提示</h3>
<p>FF14的主线任务（MSQ）是强制性的——大部分内容都被主线锁住。不要着急满级，好好体验剧情，这是FF14最大的魅力所在。.0版本（重生之境）的剧情节奏较慢，坚持过去。.0就会起飞。/p>
`
    },
    {
        id: 'rpg-06', category: 'rpg', tags: ['RPG', '开放世。],
        title: '《巫。：狂猎》次世代版完整攻。,
        brief: '全支线任务顺序、最佳装备获取、流派Build与昆特牌大师指南。,
        date: '2025-02-16',
        content: `
<h2>🐺 《巫。：狂猎》次世代攻略</h2>

<h3>前期发展路线</h3>
<p>白果园是新手村——清完这里的所。。标记，收集草药和配方，完成所有支线再前往威伦。百果园。蛇派银剑"图纸值得第一时间制作。/p>

<h3>流派Build推荐</h3>
<p><strong>猫派（轻。速攻）：</strong>装备猫学派套装，技能点"速攻"系列、轻甲专精和肾上腺系。搭。海克娜煎。回血，打起来行云流水。br>核心煎药：海克娜、巨魔、叉尾龙</p>

<p><strong>熊派（重。强攻）：</strong>装备熊学派套装，技能点"强攻"系列和重甲专精。配。白拉芬娜煎药"大幅减伤，站撸所有Boss。br>核心煎药：白拉芬娜、沼地巫婆、古代鹿首精</p>

<p><strong>狼派（法。剑术混合）：</strong>装备狼学派套装，均衡分配法印和剑术技能。灵活多变，适合喜欢多种战斗方式的玩家。/p>

<h3>昆特牌入。/h3>
<p>昆特牌是巫师3的隐藏主线！新手建议。北方领域"牌组，核心是使用间谍牌建立手牌优势。前期在百果园的酒馆老板处买牌，然后挑战所有可对战的NPC收集卡牌。/p>

<h3>DLC攻略顺序</h3>
<p>推荐流程：主线通关 。《石之心》DLC（约10小时。。《血与酒》DLC（约20小时）。血与酒"发生在独立的陶森特公国，全新的地图和故事。注意在《石之心》中尽快完成"拍卖。任务，获。爱丽。钢剑。/p>
`
    },
    {
        id: 'rpg-07', category: 'rpg', tags: ['RPG', '开放世。],
        title: '《赛博朋。077。.0资料片完整指。,
        brief: '狗镇生存法则、最佳网络义体配置、全结局达成条件详解。,
        date: '2025-02-19',
        content: `
<h2>🔫 《赛博朋。077。.0完全指南</h2>

<h3>出身选择影响</h3>
<ul>
<li>街头小子：与瓦伦蒂诺帮、海伍德的对话选项更丰。/li>
<li>公司员工：与荒坂、公司的对话有额外选项</li>
<li>流浪者：与流浪者家族、恶土的交互更有深度</li>
</ul>
<p>出身不影响主线走向，但提供独特的对话选项和初期任务。/p>

<h3>最佳Build推荐</h3>
<p><strong>技术黑客流。/strong>智力20+技。0+反应15。使用快速破解远程瘫痪敌人，配合技术武器穿墙击杀。关键perk：过度clock、集体打击、战术扫描。br>推荐武器：先知（技术精准步枪）、应龙（技术冲锋枪。/p>

<p><strong>忍者流。/strong>反应20+肉体15+技。5。专注飞刀和近战暗杀，配合时停义体（Sandevistan）打出华丽连杀。br>推荐武器：觉（武士刀）、毒刺（飞刀。/p>

<p><strong>独狼火力流：</strong>肉体20+技。0+镇定12。扛着重机枪横扫一切，搭配狂暴义体（Berzerk）最大化伤害。br>推荐武器：堡垒（轻机枪）、突破（狙击枪）</p>

<h3>《往日之影》DLC攻略</h3>
<p>幽灵镇（Dogtown）的关键事项。/p>
<ul>
<li>优先完成空投事件（Airdrop），获得5++级装。/li>
<li>收集"军用科技数据终端"的密码，解锁隐藏房间</li>
<li>奇美拉（Chimera）Boss战：注意躲避激光扫射和导弹攻击</li>
<li>DLC结局选择影响主线的最终结局选项</li>
</ul>
`
    },
    {
        id: 'rpg-08', category: 'rpg', tags: ['RPG', 'CRPG'],
        title: '《神界：原罪2》终极战术指。,
        brief: '策略RPG巅峰之作的地下城逃生全攻略，职业组合与环境互动技巧。,
        date: '2025-02-22',
        content: `
<h2>🔥 《神界：原罪2》战术指。/h2>

<h3>职业组合推荐</h3>
<p>4人队推荐以下组合之一。/p>
<p><strong>物理队：</strong>战争骑士（双手武器）+ 暗影刺客（双持匕首）+ 射手（远程弓。 召唤师（辅助。br>优势：忽略魔法护甲，集中破物理护甲。/p>
<p><strong>魔法队：</strong>火法 + 。电法 + 召唤。+ 辅助诗人<br>优势：使用水+电（湿身+感电）或。火（减。燃烧）的元素combo。/p>

<h3>环境互动核心技。/h3>
<p>神界原罪2最独特的系统是无与伦比的环境互动：</p>
<ul>
<li>。。= 感电场，大范围控。/li>
<li>。。= 燃烧场，持续伤害+减。/li>
<li>血+。= 感电血池（对不死族有效。/li>
<li>。。= 爆炸，大量范围伤。/li>
<li>祝福（Bless。 诅咒地面 = 圣化地面，回血+清debuff</li>
</ul>

<h3>欢乐堡（Fort Joy）攻。/h3>
<p>逃出欢乐堡是游戏前期核心。/p>
<ol>
<li>接收精灵的梦境共享任。/li>
<li>全面探索，完成所有NPC支线获取经验</li>
<li>收集分解的装备零件（橙色装备材料。/li>
<li>选择逃离方式：击败守卫、偷船、或通过地下通道</li>
</ol>

<h3>神装配方</h3>
<p>收集特定材料进行组合可获得强力装备：</p>
<ul>
<li>吞噬者套装（The Devourer）：需要找。个碎。/li>
<li>容器套装（The Vessel）：Arx城解。/li>
<li>芬恩的披风：血月岛隐藏宝箱</li>
</ul>
`
    },

    // ===== 3. ACTION GUIDES (8) =====
    {
        id: 'action-01', category: 'action', tags: ['动作', '忍。],
        title: '《只狼：影逝二度》完美格挡与战斗系统深度解析',
        brief: '从白给到天下无敌，拼刀的艺术完全教学，所有Boss速通打法。,
        date: '2025-02-25',
        content: `
<h2>🗡。《只狼》战斗系统深度解。/h2>

<h3>核心机制：架势系。/h3>
<p>只狼的战斗核心不是削血量，而是累积"架势。（Posture）。敌人的架势值满后可。忍杀"（Deathblow），直接秒杀。理解这一点是整个游戏的基础。/p>

<h3>完美格挡（Deflect）技。/h3>
<p>完美格挡——在攻击命中瞬间按下格挡——是只狼战斗系统的灵魂：</p>
<ul>
<li>完美格挡不会消耗自身体。/li>
<li>每次完美格挡都会增加敌人的架势。/li>
<li>比普通格挡更安全（不会破防）</li>
<li>掌握boss的攻击节奏是关键——每个boss都有独特的攻击节。/li>
</ul>

<h3>主动技能推。/h3>
<ul>
<li><strong>一字斩二连（Ichimonji: Double）：</strong>最高效的架势伤害技能，还能恢复自身体力</li>
<li><strong>护命呼吸（Breath of Life: Light）：</strong>忍杀后回血，续航神。/li>
<li><strong>登鲤。ascending / descending carp）：</strong>增加完美格挡的架势伤。/li>
</ul>

<h3>Boss速通策。/h3>
<p><strong>苇名弦一郎（Genichiro Ashina）：</strong>P1和P2思路一致——主动进攻，完美格挡他的连击后反击。当他跳起射箭时，立刻侧闪接攻击。/p>
<p><strong>破戒僧（Corrupted Monk）：</strong>。爆竹"道具打断她的攻击。P2可以上树暗杀一条血。核心战术是"突刺攻击"克制她的下段危。/p>
<p><strong>剑圣苇名一心（Isshin, the Sword Saint）：</strong>P1保持中距离引他出突刺，看破反击。P2/P3的火枪和长枪攻击范围大，注意横向移动躲避。/p>
`
    },
    {
        id: 'action-02', category: 'action', tags: ['动作', 'ACT'],
        title: '《战神：诸神黄昏》全收集与战斗技。,
        brief: '九界探索全攻略，护身符与符文重攻搭配，女武神之王击杀方案。,
        date: '2025-02-28',
        content: `
<h2>🪓 《战神：诸神黄昏》完整攻。/h2>

<h3>前期发展策略</h3>
<p>游戏的前几小时在斯瓦塔尔法海姆（Svartalfheim）探索：</p>
<ul>
<li>优先升级利维坦之斧和混沌之刃到平衡等。/li>
<li>收集诺伦三女神宝箱（Nornir Chest）增加生命值和怒气值上。/li>
<li>完成支线"幸存者的气味"获得早期强力护甲</li>
</ul>

<h3>最强Build推荐</h3>
<p><strong>符文流法师：</strong>专注符文攻击冷却缩减和高伤害。装备围。九界"。符文"属性构建。br>核心装备：附。Asgard's Virtue" + "Emblem of the Nine Realms"</p>
<p><strong>力量流战神：</strong>专注力量属性和防御破坏。搭配斧头和盾牌技能打爆发。br>核心装备：Berserker套装 + "Stunning Fang"护身符附。/p>

<h3>女武神王Gna攻略</h3>
<p>Gna是游戏中最难的Boss之一，建。20+小时后挑战：</p>
<ul>
<li>使用"Bitter Squirrel"神器召唤狼群吸引仇恨</li>
<li>注意她的"双翼冲刺"攻击——左右闪避而不是向。/li>
<li>当她飞到空中时，投掷斧头可以打断她的紫色AOE</li>
<li>使用"Rond of Protection"盾牌附魔，格挡远程攻击后自动反击</li>
</ul>

<h3>全收集要。/h3>
<p>全收集大约需。0小时以上。关键收集品包括。8个奥丁乌鸦（Odin's Raven）。4个幽魂（Fury）。0+个传说卷轴。使用游戏内地图追踪器配合视频攻略最省时。/p>
`
    },
    {
        id: 'action-03', category: 'action', tags: ['动作', '忍。],
        title: '《忍者龙剑传：大师合集》高手速成指南',
        brief: '硬核ACT巅峰之作，连招系统深入解析，超忍难度通关技巧。,
        date: '2025-03-02',
        content: `
<h2>🗡。《忍者龙剑传》速成指南</h2>

<h3>基础系统理解</h3>
<p>《忍者龙剑传》（Ninja Gaiden）以其极致的难度和流畅的ACT体验闻名。004年原版至今仍被视。D ACT的天花板之一。/p>
<ul>
<li>断肢系统（Dismemberment）：造成足够伤害后敌人会断肢，此时靠近可发动"终结技"（Obliteration Technique。/li>
<li>飞燕（Flying Swallow）：最核心的起手技，跳起后→攻击，快速接近敌。/li>
<li>饭纲落（Izuna Drop）：经典的投技，对断肢敌人使用效果拔群</li>
</ul>

<h3>武器使用技。/h3>
<p><strong>龙剑（Dragon Sword）：</strong>最均衡的武器。连招丰富，"→XX→X→Y"是经典的浮空连段起点。搭配飞燕可以高效清理杂兵。/p>
<p><strong>双刀（Dual Swords）：</strong>高伤害但硬直大。推荐使。→Y"蓄力攻击作为起手式，配合"XXY"连招打出爆发。/p>
<p><strong>棍子（Staff）：</strong>最强的控场武器。XXY"连段范围极广，适合面对群敌。/p>

<h3>超忍难度生存法则</h3>
<ul>
<li>不要贪刀——超忍难度的敌人一个连招就能秒。/li>
<li>多用"里风"（Wind Run，防。方向键）闪避追击</li>
<li>蓄力攻击（UT/ET）是清场和回血的核心手。/li>
<li>优先消灭弓箭手和法师，他们是最大的威胁</li>
<li>每个战点（Encounter）都有固定的敌人配置，记住它们的位置</li>
</ul>
`
    },
    {
        id: 'action-04', category: 'action', tags: ['动作', '鬼泣'],
        title: '《鬼。》全角色连段教学与血宫模式攻。,
        brief: '但丁/尼禄/V三角色连段系统详解，SSS评价速刷技巧与血。00层攻略。,
        date: '2025-03-05',
        content: `
<h2>🎸 《鬼。》连段教。/h2>

<h3>但丁（Dante）进阶技。/h3>
<p>但丁拥有4种战斗风格和大量武器，是操作上限最高的角色。/p>
<ul>
<li><strong>骗术师（Trickster）：</strong>核心。空中冲刺"。瞬间移动"，用于衔接连段和规避伤害</li>
<li><strong>剑圣（Swordmaster）：</strong>解锁更多的武器连段，配合叛逆之剑或真魔。/li>
<li><strong>枪神（Gunslinger）：</strong>双枪和霰弹枪的进阶技巧，用于保持评价不掉</li>
<li><strong>皇家护卫（Royal Guard）：</strong>完美格挡（Royal Block）是核心技。/li>
</ul>

<p><strong>但丁的基础民工连：</strong>空中连斩→空中冲刺→地面Combo B→霰弹枪击飞→骗术师追击→真魔人爆发</p>

<h3>尼禄（Nero）技。/h3>
<p>尼禄的核心是机械臂（Devil Breaker）：</p>
<ul>
<li>Overture（起爆器）：最简单的爆发技，对单伤害高</li>
<li>Gerbera（冲击波）：配合空中滞空使用，延长连段时。/li>
<li>Punch Line：（火箭拳）可骑乘冲刺，用于快速接近敌。/li>
<li>Ragtime（时间停止）：最有用的控场机械臂</li>
</ul>
<p>学会"红刀"（Exceed。 在攻击命中瞬间充。- 是提升尼禄DPS的关键。/p>

<h3>血宫模式（Bloody Palace）攻。/h3>
<p>100层挑战，。0层一个Boss。/p>
<ul>
<li>保持评价（Style Rank）在S以上，分数才会快速累。/li>
<li>面对远程敌人时先清远程，再打近战</li>
<li>Boss层前的一层通常有小怪，用它们攒满魔人槽和真魔人。/li>
<li>最终Boss是维吉尔，建议保留真魔人槽给这一。/li>
</ul>
`
    },
    {
        id: 'action-05', category: 'action', tags: ['动作', '银河。],
        title: '《空洞骑士》全地图探索与Boss攻略',
        brief: '圣巢全区域地图指南，梦魇格林、辐光五门等高难Boss打法。,
        date: '2025-03-08',
        content: `
<h2>🐛 《空洞骑士》完整攻。/h2>

<h3>前期路线建议</h3>
<p>圣巢（Hallownest）是巨大的非线性地图。推荐探索顺序：</p>
<ol>
<li>德特茅斯（Dirtmouth）→ 遗忘十字路（Forgotten Crossroads。/li>
<li>绿色之径（Greenpath）—。获得"蛾翼披风"（Mothwing Cloak。/li>
<li>真菌荒野（Fungal Wastes）—。获得"螳螂。（Mantis Claw。/li>
<li>水晶山峰（Crystal Peak）—。获得"水晶之心"（Crystal Heart。/li>
<li>皇家水道（Royal Waterways）—。获得"酸泳"能力</li>
</ol>

<h3>护符搭配推荐</h3>
<p><strong>万金油配置：</strong>坚固力量（Strength。 快速劈砍（Quick Slash。 骄傲印记（Mark of Pride。 萨满之石（Shaman Stone）—。8槽位的标准输出配置。/p>
<p><strong>法术流：</strong>萨满之石 + 法术扭曲者（Spell Twister。 灵魂捕手（Soul Catcher。 易碎力量（Fragile Strength）—。最大化法术输出。/p>
<p><strong>召唤流：</strong>发光子宫（Glowing Womb。 编织者之歌（Weaversong。 幼虫之歌（Grubsong。 快速凝聚（Quick Focus）—。自动战斗流。/p>

<h3>关键Boss攻略</h3>
<p><strong>梦魇格林（Nightmare King Grimm）：</strong>节奏型Boss。注意他的四个出招前摇：火焰柱（地面火焰靠近）、冲刺上火（跳起下劈）、火蝙蝠（下蹲躲避）、坠落之火（横向移动）。/p>
<p><strong>神居五门（Pantheon of Hallownest）：</strong>全Boss连续战斗，共42个Boss。建议每次练习一个Boss直到能稳定无伤通过，最终挑战前确保全护符槽收集完成。/p>
`
    },
    {
        id: 'action-06', category: 'action', tags: ['动作', '银河。],
        title: '《恶魔城：月下夜想曲》全隐藏与速通技。,
        brief: '逆城全收集指南、阿鲁卡多最强装备获取与逆城地图探索。,
        date: '2025-03-11',
        content: `
<h2>🌙 《恶魔城：月下夜想曲》攻。/h2>

<h3>核心系统理解</h3>
<p>月下夜想曲是银河城（Metroidvania）类型的开创者之一，由五十岚孝司打造。以下是关键要点。/p>
<ul>
<li>等级系统：击杀敌人获取经验升级，提升HP/MP/Heart上限</li>
<li>装备系统：武器、防具、饰品搭配极为丰富，不同武器有完全不同的攻击动作</li>
<li>使魔系统：击败特定敌人获得魂，可召唤协助战斗</li>
<li>魔导器：探索获得的能力（二段跳、变身等），解锁新区。/li>
</ul>

<h3>正城速通路。/h3>
<ol>
<li>开场→获得蝙蝠→获得狼→获得雾→获得二段跳</li>
<li>击败假阿鲁卡多获。反转指轮"</li>
<li>击败里希特进入逆城</li>
</ol>

<h3>最强装备获。/h3>
<p><strong>真空刃（Crissaegrim）：</strong>逆城空中墓地（Floating Catacombs）的"剑魔"掉落（编。9）。攻击频率极高，是游戏中最强的常规武器。掉率约1%，需要耐心刷。/p>
<p><strong>阿鲁卡多之盾（Alucard Shield）：</strong>正城炼金研究所（Alchemy Laboratory）获得。盾牌魔力"（Shield Rod）配合使用可开启全屏无敌护罩。/p>
<p><strong>无限戒指（Duplicator）：</strong>通关后获得。配。消费道具无限使用"的魔导器效果，可无限使用回复道具。/p>

<h3>逆城（Inverted Castle）攻。/h3>
<p>逆城地图是正城的倒转版本，入口在天井水脉的顶部。逆城的敌人强度大幅提升，建议60-70级再探索。全地图完成率约200.6%（正。逆城全房间）。/p>
`
    },
    {
        id: 'action-07', category: 'action', tags: ['动作', '开放世。],
        title: '《塞尔达传说：王国之泪》究极建造指。,
        brief: '左纳乌装置搭配大全，MK2飞行器建造，所有贤者能力使用技巧。,
        date: '2025-03-14',
        content: `
<h2>🔧 《王国之泪》建造指。/h2>

<h3>左纳乌装置基础</h3>
<p>左纳乌装置是塞尔达最新的创造力游乐场，分为以下几类。/p>
<ul>
<li><strong>动力类：</strong>风扇机（。拉力量）、轮胎（地面移动）、螺旋桨（垂直升力）</li>
<li><strong>武器类：</strong>火焰发射器、光束发射器、冰霜发射器、大。/li>
<li><strong>控制类：</strong>操纵杆、转向轮、驾驶座、可动式平台</li>
<li><strong>能源类：</strong>电池、大电池、便携锅（其实是交通工具部件）</li>
</ul>

<h3>经典载具蓝图</h3>
<p><strong>1. MK2 飞行。/strong>——最经典的空中载。br>2个垂直风扇机 + 1个操纵杆 + 电池。将两个风扇机左右并排放置，上方安装操纵杆，前方挂载电池。这个飞行器速度适中、操控性好，是最实用的长途载具。/p>

<p><strong>2. 自动战斗坦克</strong><br>4个轮。+ 2个光束发射器 + 1个火焰发射器 + 驾驶。+ 电池。底盘安装轮胎，驾驶座前方安装武器阵列。适合探索地下洞穴。/p>

<p><strong>3. 水上摩托</strong><br>2个风扇机向后安装在浮台上，前方安装操纵杆。比船快得多，水面探索必备。/p>

<h3>贤者能力使用技。/h3>
<ul>
<li>丘栗（风贤者）：制造上升气流，配合滑翔伞长距离移动</li>
<li>阿沅（火贤者）：破开岩石障碍，战斗中制造火焰墙</li>
<li>希多（水贤者）：在沙漠/熔岩地面前进时制造水护盾</li>
<li>露珠（雷贤者）：群体电击控场，对付群敌效果极佳</li>
</ul>
`
    },
    {
        id: 'action-08', category: 'action', tags: ['动作', '类魂'],
        title: '《匹诺曹的谎言》类魂新手通关指南',
        brief: '谎言与战斗的抉择，完美防御系统详解，全结局达成攻略。,
        date: '2025-03-17',
        content: `
<h2>🤖 《匹诺曹的谎言》攻。/h2>

<h3>游戏特色：完美防御系。/h3>
<p>与传统的"魂系闪避"不同，本作鼓励使。完美防御"（Perfect Guard）：在攻击命中前瞬间按下格挡。多次完美防御可。破坏"（Break）敌人的武器，大幅降低其伤害和攻击范围。/p>

<h3>职业与初始选择</h3>
<ul>
<li><strong>平衡型（均衡）：</strong>最适合新手，各方面数据平均</li>
<li><strong>勇猛型（力量）：</strong>高攻击力的重型武器流派，适合喜欢大剑的玩。/li>
<li><strong>疾走型（敏捷）：</strong>高攻速和闪避流，技术型玩家的选择</li>
</ul>

<h3>推荐武器组合</h3>
<p>本作的武器系统允许自由组合刀柄和刀身：</p>
<ul>
<li><strong>电击棍柄 + 警棍头：</strong>前期最强，蓄力攻击距离远且伤害。/li>
<li><strong>大剑。+ 火焰匕首。/strong>中期的均衡选择，攻守兼。/li>
<li><strong>长矛。+ 锯刃。/strong>攻击范围极大，适合风筝打法</li>
</ul>

<h3>Boss战术</h3>
<p><strong>游行大师（Parade Master）：</strong>游戏第一个Boss。保持中距离引诱他的砸地攻击，闪避后。-3下。注意他的二阶段大范围横扫。/p>
<p><strong>国王的火焰（King's Flame）：</strong>保持在他身侧输出，注意他的喷火攻击。使用属性防御增强提高容错。/p>
<p><strong>无名人偶（Nameless Puppet）：</strong>最终Boss，也是游戏最难。P1。连击需要用完美防御全部格挡。P2的突进投技需要侧闪。建议携带至。0个脉冲电池。/p>
`
    },

    // ===== 4. FPS GUIDES (8) =====
    {
        id: 'fps-01', category: 'fps', tags: ['FPS', '竞技'],
        title: '《Valorant》枪法训练完整指。,
        brief: '从准星设置到急停射击，全面覆盖瞄准训练方法与实战应用。,
        date: '2025-03-20',
        content: `
<h2>🎯 《Valorant》枪法训练指。/h2>

<h3>基础设置</h3>
<p>正确的设置是枪法的起点：</p>
<ul>
<li><strong>灵敏度（eDPI）：</strong>职业选手通常。50-400之间。推。00-320起步，找到适合自己的值后固定下来不再调整</li>
<li><strong>准星。/strong>选择高对比度的颜色（。。绿），大小建。-4之间，轮廓厚。，中心点开。/li>
<li><strong>十字准星。/strong>关闭"移动误差"。射击误差"，让准星保持稳定</li>
<li><strong>视频设置。/strong>全屏模式，关闭垂直同步，材质/抗锯齿设为中等以上保证清晰度，其他效果类设低保证帧率</li>
</ul>

<h3>急停（Counter-Strafing）教。/h3>
<p>Valorant的射击精准度取决于移动速度。急停是核心技巧：</p>
<ol>
<li>按住A键向左移。/li>
<li>瞬间松开A并轻按D键（。0ms。/li>
<li>在角色完全停止的瞬间开。/li>
<li>松开D重新移动</li>
</ol>
<p>在训练场（Range）练习急停+射击，每。0分钟，一周可养成肌肉记忆。/p>

<h3>练枪工具推荐</h3>
<ul>
<li><strong>Aim Lab / KovaaK's。/strong>专门的瞄准训练软件，每天15分钟"点击+跟枪"混合训练</li>
<li><strong>死斗模式（Deathmatch）：</strong>实战枪法训练的最好方式。目标是练习急停和预瞄，而不是排。/li>
<li><strong>训练场：</strong>使用"Flick训练"模式练习快速定位。练习瞬间瞄准爆头线</li>
</ul>

<h3>预瞄与地图理。/h3>
<p>枪法不仅仅是瞄准——更重要的是预瞄（Crosshair Placement）。始终保持准星在爆头线高度，预瞄下个敌人可能出现的位置。学习每个地图的"Peek"角度。预射"（Pre-fire）点位。/p>
`
    },
    {
        id: 'fps-02', category: 'fps', tags: ['FPS', '吃鸡'],
        title: '《绝地求生》战术与枪法进阶攻略',
        brief: '从跳伞到吃鸡的完整战术体系，枪械搭配与后坐力控制教程。,
        date: '2025-03-23',
        content: `
<h2>🪂 《绝地求生》进阶攻。/h2>

<h3>跳伞与初期战。/h3>
<ul>
<li><strong>快跳。/strong>标点距离1250m+时，平飞直到750m，然后垂直俯冲。速度可达231km/h</li>
<li><strong>斜飞。/strong>标点距离600-1200m，保。26km/h斜向飞行到标点正上方</li>
<li><strong>落点选择。/strong>海岛图推。G港集装箱"。学校"。P。——资源丰富但热门。稳妥选择"水城"。R。</li>
</ul>

<h3>枪械搭配推荐</h3>
<table>
<tr><th>类别</th><th>主力。/th><th>副武。/th></tr>
<tr><td>中近距离</td><td>M416（满配）</td><td>Mk12 / Mini-14（Mini配轻型握把）</td></tr>
<tr><td>近战突击</td><td>Beryl M762</td><td>DBS/S686</td></tr>
<tr><td>远程狙击</td><td>AWM</td><td>Vector/MP9</td></tr>
<tr><td>新手推荐</td><td>M416 + 98K</td><td>最通用的搭。/td></tr>
</table>

<h3>后坐力控。/h3>
<p>垂直后坐力——在4倍镜下用鼠标匀速下拉控制。水平后坐力需要用枪械配件减轻（垂直握把最佳）。每种枪的后坐力模式不同——去训练场打1000发子弹，找到肌肉记忆。/p>

<h3>决赛圈策。/h3>
<ul>
<li>优势位置：优先占领圈边缘的高地和掩体</li>
<li>劣势位置：使用烟雾弹制造假掩体，贴近蓝圈边。/li>
<li>最后的1v1：保持耐心，不要主动暴露位置。利用对手的移动寻找射击窗口</li>
</ul>
`
    },
    {
        id: 'fps-03', category: 'fps', tags: ['FPS', '竞技'],
        title: '《反恐精。》完美游戏设置与练枪计划',
        brief: '从启动参数到持枪视角，全面优化你的CS2体验与枪法训练计划。,
        date: '2025-03-26',
        content: `
<h2>💥 《反恐精。》完整攻。/h2>

<h3>启动参数优化</h3>
<p>在Steam中右键CS2→属性→启动选项。/p>
<code>-high -novid -freq 240 -tickrate 128 +cl_interp 0 +cl_interp_ratio 1 +r_dynamic 0</code>
<ul>
<li>-high：以高优先级启动游戏</li>
<li>-freq 240：强制你的显示器刷新率频。/li>
<li>cl_interp/cl_interp_ratio：网络插值参数优。/li>
</ul>

<h3>视频设置最佳方。/h3>
<ul>
<li>分辨率：4:3拉伸。280x960）→ 人物模型更宽，更容易击中</li>
<li>全局阴影：低（保证可见性，敌人阴影先于人出现）</li>
<li>模型/贴图：低</li>
<li>特效/光影：低</li>
<li>多重采样抗锯齿：4x MSAA</li>
</ul>

<h3>练枪计划（每。0分钟。/h3>
<ol>
<li><strong>死斗模式 10分钟。/strong>只用AK/M4练预瞄和急停，目标是每分钟击杀15+</li>
<li><strong>练习。10分钟。/strong>在Aim Botz或Recoil Master上练习压枪和跟枪</li>
<li><strong>社区服务。10分钟。/strong>Retake服务器模拟实战残局</li>
</ol>

<h3>投掷物基础</h3>
<ul>
<li>烟闪火的组合投掷比单烟更有效</li>
<li>学习Mirage的跳台烟和VIP烟——每个地图有3-5个必须会的烟。/li>
<li>燃烧弹用于清理死角——丢之前。拉环"（按R键）取消延迟</li>
</ul>
`
    },
    {
        id: 'fps-04', category: 'fps', tags: ['FPS', '竞技'],
        title: '《守望先。》全英雄指南与版本强势角。,
        brief: 'T。DPS/辅助各位置强势英雄推荐，团队配合与大招时机管理。,
        date: '2025-03-29',
        content: `
<h2>。《守望先。》全英雄指南</h2>

<h3>Tank（重装）位攻。/h3>
<p>OW2改为单T后，Tank位的压力和责任都更大。/p>
<ul>
<li><strong>D.Va。/strong>当前版本强势T。核心是用防御矩阵吃关键技能（禁疗瓶、重力喷涌等）。推进时先吃技能→飞弹输出→脱。/li>
<li><strong>拉玛刹（Ramattra）：</strong>切换形态是核心。弩形态远程poke→Nemesis形态近战压制。大。湮灭"配合队友大招使用</li>
<li><strong>西格玛（Sigma）：</strong>主盾主输出。用"质量吸附"吸掉关键弹道技能，大招"引力乱流"配合高伤害dps使用</li>
</ul>

<h3>DPS位攻。/h3>
<ul>
<li><strong>索杰恩（Sojourn）：</strong>版本T0输出。核心是。电磁。右键爆头击杀。左键充能→滑铲调整位置→右键爆。/li>
<li><strong>猎空（Tracer）：</strong>高机动性刺客。次闪。回溯保命。绕后骚扰辅助，粘性炸弹贴脸秒杀</li>
<li><strong>士兵76。/strong>枪位选手的最佳入门。稳定的步枪输出+螺旋飞弹补伤。生物力场自保</li>
</ul>

<h3>Support（支援）位攻。/h3>
<ul>
<li><strong>安娜（Ana）：</strong>操作上限最高的辅助。睡眠针打断关键技能、禁疗瓶封锁敌方治疗、纳米激素配合大。/li>
<li><strong>雾子（Kiriko）：</strong>当前版本最强辅助之一。驱散debuff、保护铃铛、暴击输出、大。。强力推进</li>
<li><strong>卢西奥（Lucio）：</strong>加速歌团队推进、强音治疗保命、音障反制敌方大。/li>
</ul>

<h3>大招配合与时。/h3>
<p>核心原则：不要两个人同时放大招。常见配合连招：重力喷涌（西格玛。 炸弹轮胎（狂鼠）/ 龙刃（源氏）。大招是轮次资源，用完撤退等待下一波。/p>
`
    },
    {
        id: 'fps-05', category: 'fps', tags: ['FPS', '吃鸡'],
        title: '《Apex英雄》身法与战斗进阶教学',
        brief: '滑铲跳、蹬墙跳、TS等进阶身法，不同传奇的战术定位与阵容搭配。,
        date: '2025-04-01',
        content: `
<h2>🔫 《Apex英雄》进阶教。/h2>

<h3>核心身法（Movement）教。/h3>
<p>Apex的身法系统是所有大逃杀中最丰富的：</p>
<ul>
<li><strong>滑铲跳（Slide Jump）：</strong>跑步中C(。+跳，最基础的身法，用于保持移动速度和规避子。/li>
<li><strong>蹬墙跳（Wall Bounce）：</strong>接触墙壁时跳+反方向移动，可用于垂直方向和横向的速度变化</li>
<li><strong>Tap Strafing。/strong>空中使用W+A/D快速转向，"跳跃+转向+释放W"的节奏是关键</li>
<li><strong>超级滑铲（Super Glide）：</strong>爬墙结束瞬间同时按蹲+跳，获得极短时间的超高速度</li>
</ul>

<h3>枪械推荐与配。/h3>
<ul>
<li><strong>R-99。/strong>近战之王，射速极快。需要稳定压枪控。/li>
<li><strong>平行步枪（Hemlok）：</strong>中距离单点，远距离腰射扩散小</li>
<li><strong>三重狙击（Triple Take）：</strong>霰弹+狙击的双重属性，版本热门</li>
<li><strong>辅助手枪（Wingman）：</strong>高手专属，高伤害但需要精。/li>
</ul>

<h3>版本阵容推荐</h3>
<ul>
<li><strong>标准推土机：</strong>希尔（信息）+ 猎犬（信息）+ 直布罗陀（防守）/ 动力小子（机动）</li>
<li><strong>反制阵容。/strong>瓦尔基里（撤离和垂直机动。 探路者（团队位移。 腐蚀（控场）</li>
<li><strong>路排阵容。/strong>生命线（自疗。 亡灵（保命）+ 任何DPS传奇</li>
</ul>

<h3>战斗决策</h3>
<p>第三方袭击（Third Party）是大逃杀的常态——打完一波后15秒内必有另一队来收人头。战斗原则：快速交战→快速击杀→快速撤离→补状态。超。0秒还没击杀的小队战，立即撤退。/p>
`
    },
    {
        id: 'fps-06', category: 'fps', tags: ['FPS', '单机'],
        title: '《毁灭战士：永恒》战斗节奏与资源循环',
        brief: '高速FPS的战斗循环系统详解，冰弹+喷火器的终极资源管理。,
        date: '2025-04-04',
        content: `
<h2>🔥 《毁灭战士：永恒》战斗指。/h2>

<h3>战斗循环（Combat Loop。/h3>
<p>DOOM Eternal的战斗系统建立在快速资源循环之上：击杀敌人获取资源→资源用于输出更高伤害→击杀更强敌人。掌握这个循环是游戏的核心。/p>

<h3>五件必带武器</h3>
<ul>
<li>超级霰弹枪（Super Shotgun。 肉钩（Meat Hook）：游戏中最万能的武器。肉钩可以把自己拉向敌人，空中配合喷气背包绕。/li>
<li>弩炮（Ballista）：精准远程高伤害。用"弩炮。（Ballista Jump）实现空中转。/li>
<li>火箭发射器：群伤+控制。配。遥控引爆"（Remote Detonate）技巧提前引。/li>
<li>微波束（Microwave Beam）：对重甲敌人的终极控制武器</li>
<li>十字弩（Arbalest）：护盾破坏者。在面对"护盾哨兵"时必。/li>
</ul>

<h3>资源管理核心技。/h3>
<ul>
<li><strong>生命值：</strong>使用"壮烈击杀"（Glory Kill）回血——残血敌人身上出现蓝色闪光时近战处。/li>
<li><strong>护甲。/strong>喷火器（Flame Belch）点燃敌人后击杀掉落大量护甲碎片</li>
<li><strong>弹药。/strong>使用"冰弹"（Ice Grenade）冻住敌人后用电锯击杀获得大量弹药</li>
</ul>

<h3>完整战斗流程</h3>
<ol>
<li>进入战场→喷火器扫射一圈→开火输。/li>
<li>面对精英敌人→冰弹冻结→超级霰弹枪输。/li>
<li>低血量→找残血红光敌人→壮烈击杀回血</li>
<li>低弹药→找被点燃的敌人→电锯击杀补给</li>
<li>循环1-4，保持移动，永远不要停下。/li>
</ol>
`
    },
    {
        id: 'fps-07', category: 'fps', tags: ['FPS', '战术'],
        title: '《彩虹六号：围攻》地图控制与信息战攻。,
        brief: '防守方信息控制与攻击方清野流程，全干员专属打法与地图垂直进攻。,
        date: '2025-04-07',
        content: `
<h2>🏠 《彩虹六号：围攻》战术攻。/h2>

<h3>防守方基础策略</h3>
<p>防守方核心是"信息控制"——让攻击方难以获取有效信息：</p>
<ul>
<li><strong>封墙。/strong>每个炸弹点需要封4-6面墙。使。强化。（Reinforcement）保护关键位。/li>
<li><strong>信息位（Intel）：</strong>Valkyrie/Vigil/Maestro的摄像头布置是防守的灵魂</li>
<li><strong>陷阱位：</strong>Lesion、Kapkan、Frost的陷阱可以拖延攻击方节奏</li>
<li><strong>自由人（Roamer）：</strong>Jäger、Bandit、Alibi不守点，而是在外围游走扰。/li>
</ul>

<h3>攻击方推进策。/h3>
<ul>
<li><strong>清野（Roam Clear）：</strong>进点前先清理外围的防守自由人。使用Jackal、Dokkaebi、Lion的反野能。/li>
<li><strong>垂直进攻。/strong>从上方或下方破坏天花。地板制造射击线。Sledge、Buck、Maverick都是垂直高手</li>
<li><strong>硬切（Hard Breach）：</strong>使用Thermite、Ace、Hibana等硬切干员打开强化。/li>
</ul>

<h3>地图控制技。/h3>
<ul>
<li>每张地图都有3-4个主要的垂直进攻点位——记住它。/li>
<li>学会"跑图"（Map Run）：自定义房间中跑穿每张地图记录摄像头位置和捷径</li>
<li>无人机不是一次性的——保留到关键时刻使用</li>
</ul>

<h3>常用干员搭配</h3>
<p>攻击方：Thatcher + Thermite（基础突破组合）、Zofia + Ash（快速突破组合）<br>防守方：Mute + Smoke（区域封锁）、Jäger + Bandit（道具防御）</p>
`
    },
    {
        id: 'fps-08', category: 'fps', tags: ['FPS', '大逃杀'],
        title: '《使命召唤：战区》强势武器搭配与战术策略',
        brief: '从重生岛到乌兹克斯坦，各图最优武器搭配与战术走位指南。,
        date: '2025-04-10',
        content: `
<h2>☢️ 《使命召唤：战区》攻。/h2>

<h3>版本强势武器</h3>
<p><strong>近战。/strong>HRM-9（冲锋枪）——射速快、腰射精准。配装：长枪。大弹。垂直握把+收束。红点/镭射</p>
<p><strong>中距离：</strong>MCW（突击步枪）——稳定且高伤害。配装：16.5寸枪。高倍镜+垂直握把+消音。60发弹。/p>
<p><strong>远距离：</strong>KATT-AMR（狙击枪）——一枪头击杀。配装：最长枪。光学+消音+高速弹+握把</p>

<h3>乌兹克斯坦地图攻。/h3>
<ul>
<li>跳伞选点：优先选择。购买。的区域（地图上标记）</li>
<li>开局路线：落在郊区收集装备→向圈中心渐进式推。/li>
<li>3个关键设施：监狱（高价值装。高风险）、火车站（中高资。多层战斗）、市区（丰富资源+巷战。/li>
</ul>

<h3>合约策略</h3>
<ul>
<li>Bounty（悬赏）：追踪附近玩家——落地点安全时优先做，经济收益高</li>
<li>Scavenger（补给）：快速获取装备，适合初期缺装备时</li>
<li>Intel（情报）：降低毒圈缩圈速度——中后期必做</li>
<li>Most Wanted（头号通缉）：高风险高回报——做前确保有掩体和队友掩。/li>
</ul>

<h3>决赛圈技。/h3>
<ul>
<li>自活（Self-Revive）是决赛圈的必备道具</li>
<li>燃烧瓶和闪光弹比手雷更适合决赛。/li>
<li>进入决赛圈前确认弹药和护甲板充足</li>
<li>利用烟雾弹穿越开阔地。/li>
</ul>
`
    },

    // ===== 5. OPEN WORLD GUIDES (8) =====
    {
        id: 'openworld-01', category: 'openworld', tags: ['开放世。, 'RPG'],
        title: '《原神》全区域探索与材料收集指。,
        brief: '七国探索顺序、神瞳收集路线、圣遗物与角色培养材料全攻略。,
        date: '2025-04-13',
        content: `
<h2>🌍 《原神》全攻略</h2>

<h3>区域探索顺序</h3>
<p>推荐按版本推出的顺序探索——每个地区的世界等级和怪物难度逐步递增。/p>
<ol>
<li>蒙德（Mondstadt）——新手区，激活七天神像→解锁传送点→开宝箱</li>
<li>璃月（Liyue）——世界等。+后探索，注意岩神瞳收。/li>
<li>稻妻（Inazuma）——需要完成璃月主线，雷神瞳建议对照互动地。/li>
<li>须弥（Sumeru）——三层立体地图，注意地下洞穴入口</li>
<li>枫丹（Fontaine）——水下探索为重点，注意潜水耐力管理</li>
<li>纳塔（Natlan）——最新地区，龙伙伴能力解锁新区域</li>
</ol>

<h3>神瞳收集效率技。/h3>
<ul>
<li>使用"共鸣。（Resonance Stone）定位剩余神瞳——每个区域的神像等级升满后购。/li>
<li>对照米游社互动地图或Hoyolab的官方地图工。/li>
<li>标记已收集的神瞳位置（游戏内放置自定义标记）</li>
</ul>

<h3>圣遗物培养优先度</h3>
<p>45级前不要刷圣遗物本！45级后必出金圣遗物。/p>
<ul>
<li>输出角色：主词条暴击/暴伤。+ 元素/物理伤害。+ 攻击力沙。/li>
<li>辅助角色：主词条治疗。生命。+ 生命。+ 充能沙漏</li>
<li>45-60级：优先凑齐主词条对的套装，不要追求副词条毕。/li>
</ul>

<h3>每日必做</h3>
<ul>
<li>每日委托（Daily Commissions）—。0原石</li>
<li>消耗树脂（Resin）——优先周本Boss→天赋材料→武器突破材料→圣遗物</li>
<li>探索派遣——选择摩拉或经验书</li>
</ul>
`
    },
    {
        id: 'openworld-02', category: 'openworld', tags: ['开放世。, '生存'],
        title: '《荒野大镖客：救。》完美开局。00%完成度指。,
        brief: '西部生存手册，从第二章完美开局到全收集完成度的完整路线。,
        date: '2025-04-16',
        content: `
<h2>🐴 《荒野大镖客2》完美攻。/h2>

<h3>第二章完美开局</h3>
<p>在游戏第二章（马掌望台营地）做以下事情：</p>
<ul>
<li><strong>前期搜刮关键道具。/strong>搜刮所有尸体获得怀表、戒指等值钱物品</li>
<li><strong>解锁传奇背包。/strong>升级营地亚瑟的住处→购买"皮革制作工具"→解锁捕猎大师挑。/li>
<li><strong>获取好马。/strong>在瓦伦丁附近可以找到标准走马，或者在野外驯服阿拉伯白马（Lake Isabella西北。/li>
<li><strong>提前收集金条。/strong>烧毁的城镇（Limpy）可以找。根金条，每根$500</li>
</ul>

<h3>荣誉值管理的实际影响</h3>
<ul>
<li>高荣誉（好人路线）：商店折扣、NPC对话更友好、结局不同</li>
<li>低荣誉（恶人路线）：搜刮尸体获得更多物品、部分任务不同对。/li>
<li>刷荣誉小技巧：在圣丹尼斯不停地向路人打招呼。荣誉），或者在河边钓鱼放生</li>
</ul>

<h3>100%完成度清。/h3>
<p>完成度影响终局内容和隐藏结局。/p>
<ul>
<li>主线任务。07。/li>
<li>陌生人任务：26个支。/li>
<li>挑战。0个挑战。0。100个任。/li>
<li>收集品：20个捕梦网。0个恐龙骨。44个香烟卡</li>
<li>动物。78种动物需要研。追踪/剥皮</li>
</ul>
<p>最耗时的部分：找到所有动物和香烟卡。建议使用RDR2 Map App来跟踪进度。/p>
`
    },
    {
        id: 'openworld-03', category: 'openworld', tags: ['开放世。, '动作'],
        title: '《地平线：西之绝境》完整探索与战斗指南',
        brief: '机械兽弱点与战斗策略、地图全覆盖探索、装备升级材料获取。,
        date: '2025-04-19',
        content: `
<h2>🤖 《地平线：西之绝境》攻。/h2>

<h3>机械兽弱点系。/h3>
<p>每只机械兽都有特定的弱点组件和元素弱点：</p>
<table>
<tr><th>机械。/th><th>弱点</th><th>推荐打法</th></tr>
<tr><td>长颈。/td><td>引擎核心（背部）</td><td>冰冻→撕裂箭拆护甲→精准攻击核心</td></tr>
<tr><td>雷牙。/td><td>雷达盘（头部。 心脏</td><td>酸蚀→破坏雷达盘→绕后攻。/td></tr>
<tr><td>震地。/td><td>热力罐（侧腹。/td><td>火属性触发爆炸→闪避冲撞</td></tr>
<tr><td>翱翔。/td><td>尾羽（飞行时。/td><td>绳索发射器拉下→近战核心输出</td></tr>
</table>

<h3>武器选择与升。/h3>
<ul>
<li><strong>前期。/strong>猎人弓（火焰箭）+ 战弓（冰冻箭。 撕裂。/li>
<li><strong>中期。/strong>精准弓（远距离精准打击）+ 爆破弩（高爆发）</li>
<li><strong>后期。/strong>传奇猎人弓（Forgefall。 传奇爆破弩（The Blast Forge。/li>
</ul>
<p>升级材料主要通过狩猎大型机械兽获得——提前查看制作菜单确认需求。/p>

<h3>地图探索优先。/h3>
<ol>
<li>解锁所有长颈兽（Tallneck）——暴露地图地。/li>
<li>收集绿色光点（Greenshine）——用于武器升。/li>
<li>完成狩猎场（Hunting Grounds）——获得最佳装。/li>
<li>探索遗迹（Ruins）——获得传奇装。/li>
</ol>
`
    },
    {
        id: 'openworld-04', category: 'openworld', tags: ['开放世。, 'RPG'],
        title: '《辐。》完美开局与核子世界全攻略',
        brief: '波士顿废土生存法则，学院与兄弟会路线选择，DLC核子世界攻略。,
        date: '2025-04-22',
        content: `
<h2>☢️ 《辐。》完美攻。/h2>

<h3>角色属性推荐（SPECIAL。/h3>
<p>开局加点方案——S.P.E.C.I.A.L.点数。/p>
<ul>
<li><strong>力量3。/strong>装备改造（Armorer）perk需。/li>
<li><strong>感知4。/strong>锁匠（Lockpick）perk需。/li>
<li><strong>耐力3。/strong>生命值充。/li>
<li><strong>魅力6。/strong>地方领导者（Local Leader）——建城核心perk</li>
<li><strong>智力6。/strong>科学（Science!）perk——高级装备改。/li>
<li><strong>敏捷3。/strong>潜行（Sneak）perk基础</li>
<li><strong>运气2。/strong>寻宝（Scrounger）perk——弹药不。/li>
</ul>

<h3>主要势力路线</h3>
<ul>
<li><strong>义勇兵（Minutemen）：</strong>最自由的选择，可以和平解决大部分冲突</li>
<li><strong>钢铁兄弟会（Brotherhood of Steel）：</strong>获取动力装甲（T-60）的最佳途径</li>
<li><strong>铁路组织（Railroad）：</strong>获得"消音手枪"perk和改造装甲加。/li>
<li><strong>学院（Institute）：</strong>科技装备最强，但与其他势力敌对</li>
</ul>

<h3>核子世界DLC攻略</h3>
<p>建议30级后再进入核子世界（Nuka-World）：</p>
<ul>
<li>先完成主线任。行家旅行"解锁全区。/li>
<li>收集星核（Star Cores）——全40个可解锁X-01量子动力装甲</li>
<li>选择帮派分配：操作者（伤害最高）+ 狼帮（攻城主力）+ 特工（潜行加成）</li>
<li>完成所有帮派任务后可选择背叛帮派——获。开放季。任务</li>
</ul>
`
    },
    {
        id: 'openworld-05', category: 'openworld', tags: ['开放世。, '动作'],
        title: '《对马岛之魂》奇谭模式与全收集指。,
        brief: '武士与战鬼的抉择，全铠甲获取方法，奇谭模式职业搭配与生存攻略。,
        date: '2025-04-25',
        content: `
<h2>🗾 《对马岛之魂》全攻略</h2>

<h3>武士 vs 战鬼路线</h3>
<p>游戏的核心抉择——荣誉与胜利的平衡：</p>
<ul>
<li><strong>武士路线。/strong>正面交锋、一对一对决。使。对峙"（Standoff）处决多个敌人，使用格挡系统的石。。。月流。/li>
<li><strong>战鬼路线。/strong>暗杀、毒烟、苦无、爆破。使用钩绳快速移动到高处，用烟雾弹创造暗杀机会</li>
</ul>
<p>平衡两种路线可以获得最佳体验——战斗中武士方式开局，混战中切换战鬼方式清理残局。/p>

<h3>全铠甲获。/h3>
<ul>
<li><strong>武士家族铠甲。/strong>完成主线第一。黑狼之身"</li>
<li><strong>战鬼铠甲。/strong>完成主线"战鬼之道"——最强潜行套。/li>
<li><strong>剑圣铠甲。/strong>完成"小次郎六把刀"支线——完美格挡时间窗口延。/li>
<li><strong>境井家族铠甲。/strong>完成"境井的故。全支线——对战鬼武器的伤害提。/li>
<li><strong>忠赖铠甲。/strong>解放丰玉地区所有蒙古领地——终极防御套。/li>
</ul>

<h3>奇谭模式（Legends Mode）攻。/h3>
<p>多人合作PVE模式。/p>
<ul>
<li>武士（Samurai）：坦克定位，近战减。高仇。/li>
<li>猎人（Hunter）：远程输出，使用弓箭造成高额伤害</li>
<li>浪人（Ronin）：治疗+召唤，使用魂犬提供战场支。/li>
<li>刺客（Assassin）：潜行击杀+控制，使用毒雾和暗影攻击</li>
</ul>
<p>生存战（Survival）玩法：团队守点，每波敌人从固定方向来袭。建议每个点。人防守，浪人负责全图支援。/p>
`
    },
    {
        id: 'openworld-06', category: 'openworld', tags: ['开放世。, '动作'],
        title: '《漫威蜘蛛侠2》全收集与战斗技。,
        brief: '彼得与迈尔斯的双主角技能树，全战衣解锁与纽约探索攻略。,
        date: '2025-04-28',
        content: `
<h2>🕷。《漫威蜘蛛侠2》攻。/h2>

<h3>双主角技能树</h3>
<p>彼得·帕克和迈尔斯·莫拉莱斯拥有各自独立的技能树。/p>
<ul>
<li><strong>彼得——共生体技能：</strong>"触须投掷"（拉拽敌人）+"触须横扫"（范围击飞）。共生体形态下伤害极高但闪避后摇略。/li>
<li><strong>迈尔斯——毒液技能：</strong>"毒液上勾。+"毒液冲击。。毒液蓄力后可以打出硬直控制</li>
</ul>
<p>升级建议：优先解锁共生体/毒液。技能解。类能力，再点"战斗连击"提高连段收益。/p>

<h3>全战衣解。/h3>
<p>游戏内有60+套战衣：</p>
<ul>
<li>大部分通过升级等级解锁——优先完成活动和随机犯罪事件获取经验</li>
<li>部分战衣需要完成特定支线任务（The Flame、The Mysteriums等）</li>
<li>使用战衣技术芯片升级战衣能力——推。投射物反。。集中模式"</li>
</ul>

<h3>纽约探索技。/h3>
<ul>
<li>快速移动：按住R2（荡蛛丝。 X（加速）+ L3+R3（空中冲刺）</li>
<li>风洞加速：利用城市中的蓝色风洞气流获得超高速移。/li>
<li>收藏品：科技箱子（Tech Parts）用于升级装备、背包（Backpacks）解锁战衣、拍照点（Photo Ops）获得奖。/li>
<li>地图全清预计需。0-50小时——建议主线通关后再去收。/li>
</ul>
`
    },
    {
        id: 'openworld-07', category: 'openworld', tags: ['开放世。, 'RPG'],
        title: '《星空》最佳开局与飞船建造指。,
        brief: '探索千星之国的正确姿势，飞船模块化建造与哨站经营攻略。,
        date: '2025-05-01',
        content: `
<h2>🚀 《星空》完整攻。/h2>

<h3>开局发展路线</h3>
<p>新亚特兰蒂斯出发后不要急着冲主线：</p>
<ol>
<li>完成联合殖民地（UC）的先锋队（Vanguard）加入任务——获得最好的公民权福。/li>
<li>探索杰米森星系的各个月球——收集资源、武器和装备</li>
<li>加入星裔（Constellation）主线——至少推进到获得"星裔之力"能力</li>
<li>去阿基拉城加入游骑兵队（Freestar Rangers）——获得强力支线奖。/li>
</ol>

<h3>飞船建造指。/h3>
<p>飞船建造是星空最复杂的系统之一。/p>
<ul>
<li><strong>驾驶舱（Cockpit）：</strong>决定船员上限。任务数据面板需要较大驾驶舱</li>
<li><strong>反应堆（Reactor）：</strong>决定总能量输出。优先升级到最高等。/li>
<li><strong>引擎（Grav Drive）：</strong>决定了跳跃距离。想探索高级星系需要C级引。/li>
<li><strong>武器系统。/strong>粒子束武器（Particle Beam）是全能选择——对盾和对甲都有。/li>
<li><strong>护盾（Shield）：</strong>战斗中最重要的防御属性，优先投资</li>
</ul>
<p>建造技巧：在多个造船厂之间切换购买不同部件，每个造船厂（新亚、阿基拉、霓虹城）有不同的可选部件。/p>

<h3>哨站经营基础</h3>
<ul>
<li>选点原则：找一个同时有铁（Iron。 铝（Aluminum）的资源。/li>
<li>设施顺序：提取器→存储容器→能源（太阳能/风力）→货运链接</li>
<li>1级哨。个燃料。级哨站开始需要定期维。/li>
</ul>
`
    },
    {
        id: 'openworld-08', category: 'openworld', tags: ['开放世。, '探索'],
        title: '《艾尔登法环》全地图区域探索顺序指南',
        brief: '从宁姆格福到圣树的黄金路线规划，每个区域的最低等级建议与关键道具。,
        date: '2025-05-04',
        content: `
<h2>🗺。《艾尔登法环》区域探索顺。/h2>

<h3>推荐探索路线（按等级区域。/h3>
<table>
<tr><th>区域</th><th>推荐等级</th><th>关键道具/奖励</th></tr>
<tr><td>宁姆格福（Limgrave。/td><td>10-25</td><td>灵马哨笛、招魂铃、地图碎。/td></tr>
<tr><td>啜泣半岛（Weeping Peninsula。/td><td>20-30</td><td>黄金种子×3、神圣割痕圣印记</td></tr>
<tr><td>湖之利耶尼亚（Liurnia。/td><td>40-55</td><td>卡利亚权杖、魔法学院钥。/td></tr>
<tr><td>盖利德（Caelid）——南</td><td>50-65</td><td>猎犬长牙、陨石杖+岩石。/td></tr>
<tr><td>亚坛高原</td><td>60-75</td><td>迪科达斯大升降机符节×2</td></tr>
<tr><td>王城罗德。/td><td>80-95</td><td>黄金树种子、古龙岩锻造石</td></tr>
<tr><td>巨人山顶</td><td>100-115</td><td>老将套装、女武神义手</td></tr>
<tr><td>圣树（Haligtree。/td><td>120-140</td><td>米莉森的义手、女武神追忆</td></tr>
<tr><td>天空城（Farum Azula。/td><td>115-130</td><td>古龙岩锻造石×4、野兽之。/td></tr>
</table>

<h3>地下区域</h3>
<ul>
<li>永恒之城诺克隆恩。0+级，获得仿身泪滴（最强骨灰）</li>
<li>永恒之城诺克史黛拉：65+级，获得暗月大剑相关道具</li>
<li>蒙格温王朝：90+级，鲜血王朝刷魂圣地</li>
<li>深根底层。0+级，连接多个地下区域</li>
</ul>

<h3>Boss战时间建。/h3>
<p>不要以固定顺序打Boss——当你在一个Boss卡关超过2小时，说明你还没准备好。去探索别的区域，升级武器和等级后再回来。艾尔登法环的魅力就在于"打不过就去别。的自由度。/p>
`
    },

    // ===== 6. SURVIVAL & CRAFTING GUIDES (8) =====
    {
        id: 'survival-01', category: 'survival', tags: ['生存', '开放世。],
        title: '《我的世界。.20+版本从零到全成就指南',
        brief: '从第一天到末地龙，全流程生存指南，红石机制与建筑技巧。,
        date: '2025-01-18',
        content: `
<h2>🧱 《我的世界》全攻略</h2>

<h3>第一天生存法。/h3>
<ol>
<li>砍树获取原木→制作工作台→木镐→石镐</li>
<li>寻找洞穴或挖山体→收集煤炭（至少8个）→制作火。/li>
<li>在日落前建造简易庇护所。×3×2泥土/木头小屋。/li>
<li>制作床（3羊毛+3木板）→设置重生。/li>
</ol>

<h3>下界（Nether）攻。/h3>
<p>准备事项：至少铁。铁剑+打火。足够的黑曜石。0块）+食物<br>关键目标。/p>
<ul>
<li>找到下界堡垒→收集烈焰棒（至。根）→制作烈焰粉</li>
<li>找到堡垒遗迹→猪灵交易获得末影珍。/li>
<li>制作末影之眼（烈焰粉+末影珍珠。/li>
</ul>

<h3>红石入门</h3>
<ul>
<li><strong>基础元件。/strong>红石粉（导线）、红石火把（电源）、活塞、中继器</li>
<li><strong>经典项目。/strong>自动南瓜/西瓜农场（观察。活塞）、自动熔炉组（漏斗链。/li>
<li><strong>进阶。/strong>简单的密码门（红石比较。物品展示框）</li>
</ul>

<h3>生态群系F3快捷。/h3>
<ul>
<li>F3：调出调试屏幕，看到B群系名称和坐。/li>
<li>F3+G：显示区块边。/li>
<li>F3+B：显示实体碰撞箱</li>
<li>F3+A：重新加载区。/li>
</ul>
`
    },
    {
        id: 'survival-02', category: 'survival', tags: ['生存', '开放世。],
        title: '《森林之子》全流程生存攻略',
        brief: '从坠机到逃出孤岛，全Boss路线与建造防御布局指南。,
        date: '2025-01-22',
        content: `
<h2>🌲 《森林之子》全攻略</h2>

<h3>坠机后第一要务</h3>
<ol>
<li>搜索坠机残骸——收集背包、急救药品、零食和信号。/li>
<li>寻找水源——地图上。个主要湖泊和多个小溪</li>
<li>建造基础营地——靠近水源和树林，建造简易棚。篝火+干燥。/li>
<li>制作基础工具——石斧（石头+树枝+绳子。 升级矛（树枝+树脂+羽毛。/li>
</ol>

<h3>洞穴探索顺序</h3>
<p>洞穴分为2条主线路径和多个资源洞穴。/p>
<ul>
<li>第一条：厨师洞穴（获取铲子）。健身房洞穴（获取指关节炸弹）</li>
<li>第二条：实验室洞。。黄金门洞。/li>
<li>注意：每个洞穴都有特殊武器的蓝图，探索前准备充足的食物和。/li>
</ul>

<h3>防御系统搭建</h3>
<ul>
<li>围栏：木制尖刺围栏是前期最低成本的防御</li>
<li>陷阱场：在营地外围布。快乐生日陷阱"（Happy Birthday Trap）——被激活后爆炸</li>
<li>自动弩炮。+个自瞄弩炮覆盖营地主入口</li>
<li>灯柱+火把：照明范围影响野人的刷出距离</li>
</ul>

<h3>食物与资源管。/h3>
<ul>
<li>优先猎杀鹿和野猪——肉量多，皮用于制作护甲</li>
<li>种植蓝莓和芦荟——回血和制作药膏的原料</li>
<li>冬季前储存至。0瓶饮用水。0+份干。/li>
</ul>
`
    },
    {
        id: 'survival-03', category: 'survival', tags: ['生存', '建。],
        title: '《英灵神殿》青铜时代到平原的完整发展路。,
        brief: '从伐木到屠龙，维京生存指南涵盖Boss召唤流程与基地建设。,
        date: '2025-01-26',
        content: `
<h2>。《英灵神殿》完整攻。/h2>

<h3>Boss推进路线</h3>
<table>
<tr><th>Boss</th><th>所在生物群。/th><th>召唤道具</th><th>推荐装备</th></tr>
<tr><td>赤膊鹿王（Eikthyr。/td><td>青青草原</td><td>2个鹿头奖。/td><td>木装+石斧</td></tr>
<tr><td>古树长老（Elder。/td><td>黑暗森林</td><td>3个古树种</td><td>铜装+细木。/td></tr>
<tr><td>泥泞巨人（Bonemass。/td><td>沼泽</td><td>10个枯。/td><td>铁装+抗毒蜜酒</td></tr>
<tr><td>龙母莫德尔（Moder。/td><td>雪山</td><td>3个龙。/td><td>银装+抗霜蜜酒</td></tr>
<tr><td>亚格鲁斯（Yagluth。/td><td>平原</td><td>5个图。/td><td>黑金。抗火蜜酒</td></tr>
<tr><td>女皇（Queen。/td><td>迷雾之地</td><td>9个钥。/td><td>魔法装备+抗雾</td></tr>
</table>

<h3>青铜时代核心工艺</h3>
<ul>
<li>采集铜矿（森林中可见绿色岩石）→ 锡矿（森。黑森林边缘）。熔炼</li>
<li>制作青铜后优先做：青铜斧（砍细木。 青铜。> 青铜。/li>
<li>收集蜂后→制作养蜂箱（永久食物来源）</li>
</ul>

<h3>基地选址与防。/h3>
<ul>
<li>最佳位置：青青草原与三种其他生物群系接壤的中心。/li>
<li>外围：挖深沟。格深。 土墙（最高等级石墙）</li>
<li>工坊区：靠近传送门，分开不同功能的房。/li>
<li>传送门之间不要使用绿水晶运输矿石——只能用。/li>
</ul>
`
    },
    {
        id: 'survival-04', category: 'survival', tags: ['生存', '科幻'],
        title: '《禁闭求生》完整生存与剧情攻略',
        brief: '后院的渺小冒险者，从草根装备到超级科技，虫族Boss战攻略。,
        date: '2025-01-30',
        content: `
<h2>🐛 《禁闭求生》全攻略</h2>

<h3>前期生存与发。/h3>
<ol>
<li>找到第一个研究站——获取基础工具（石子斧、小锤）的配。/li>
<li>建造简易基地在果汁盒或大石头附近——天然屏。/li>
<li>击杀蚜虫和象鼻虫获取食物和液。/li>
<li>收集草板（Grass Planks）——建筑和升级的基础材料</li>
</ol>

<h3>盔甲套装推荐</h3>
<ul>
<li>红蚁套装：前期性价比最高的防御装备，增加搬运能。/li>
<li>瓢虫套装：最好的中前期防御套装（+40%抗性）</li>
<li>蜘蛛套装：后期敏捷套装，增加移动速度和跳。/li>
<li>黑牛甲虫套装：最高物理防御，适合近战流派</li>
</ul>

<h3>Boss战策。/h3>
<ul>
<li><strong>蜘蛛女王（Broodmother）：</strong>火抗装备+辣味武器。召唤地点在密林实验室的蜘蛛巢穴。P1注意她的毒液吐息，P2的小蜘蛛用AOE清理</li>
<li><strong>绿甲虫（Green Shield Bug）：</strong>使用"薄荷糖锤"（Mint Mace）——弱薄荷元素。注意绕后背攻击它的裸露要害</li>
<li><strong>螳螂（Mant）：</strong>最后的超级Boss。使用最强武。完全升级的盔甲和药用雾汽</li>
</ul>

<h3>快捷传送技。/h3>
<p>建造多。草板滑索"连接高地→低地，配合"滑索护腕"——最快速的长距离移动方式。在主要地标（研究站、Boss点、资源点）之间铺设滑索网络。/p>
`
    },
    {
        id: 'survival-05', category: 'survival', tags: ['生存', '恐。],
        title: '《绿色地狱》从林生存完全手。,
        brief: '亚马逊雨林的真实生存模拟，伤病系统详解与心理值管理。,
        date: '2025-02-03',
        content: `
<h2>🌴 《绿色地狱》生存攻。/h2>

<h3>核心生存系统</h3>
<p>绿色地狱的特色是其真实的伤病系统。/p>
<ul>
<li><strong>营养不良。/strong>需要均衡摄入蛋白质（肉类）+ 碳水化合物（坚果/香蕉。 脂肪（坚果）+ 维生素（各种水果。/li>
<li><strong>伤口感染。/strong>被动物攻击后必须用消毒药草（百合/芦荟）处理，否则会发烧致。/li>
<li><strong>寄生虫感染：</strong>生吃动物肉或饮用未煮沸的水会感染寄生虫——必须烧开水喝</li>
<li><strong>毒物。/strong>被蛇咬、蜘蛛咬或食用未知蘑菇会中毒——使用蛇毒抗血清或木炭</li>
</ul>

<h3>持续性生存策。/h3>
<ol>
<li>第一天：找到水源→建造简易庇护所（Leaf Roof）→收集椰子（水+食物。/li>
<li>制作工具：石刀→鱼叉→弓箭（狩猎必备）</li>
<li>建立永久基地：靠近水。药草生长点的开阔地。/li>
<li>搭建大型种植区——种植甜薯、香蕉树和药。/li>
</ol>

<h3>心理值管。/h3>
<p>长期孤独会导致心理值下降：</p>
<ul>
<li>听着篝火声（建造大型篝火）可以缓慢恢复</li>
<li>建造钟乳石装饰品增加营地美观度</li>
<li>服用"阿亚瓦斯。（Ayahuasca）——游戏中特殊的致幻药物——解锁剧情记。/li>
</ul>
`
    },
    {
        id: 'survival-06', category: 'survival', tags: ['生存', '合作'],
        title: '《沉没之地》全面生存与建造指。,
        brief: '后末日水世界中的生存法则，基地建造与船只升级详细教程。,
        date: '2025-02-07',
        content: `
<h2>🌊 《沉没之地》攻。/h2>

<h3>基础生存流程</h3>
<ol>
<li>从救生筏开始——使用食人鱼齿制作鱼叉，在浅水区捕鱼</li>
<li>寻找沉没的建筑物——收集木板、塑料和金属</li>
<li>建造第一个海上基地——选在浅水区靠近陆地的地方，方便上。/li>
<li>扩展基地：卧室→储物室→厨房→工作台</li>
</ol>

<h3>船只系统</h3>
<p>你的船是你的移动基地和交通工具：</p>
<ul>
<li><strong>小型帆船。/strong>制造简单，适合探索近海区域</li>
<li><strong>中型机帆船：</strong>需要引擎和燃料罐，可以安装武器炮台</li>
<li><strong>大型战舰。/strong>装备加农炮，可探索深海区。/li>
</ul>

<h3>Boss/变种生物攻略</h3>
<p>不同区域的鲨鱼和鳄鱼变种。/p>
<ul>
<li><strong>虎鲨。/strong>遇到时不要在水里缠斗，引到浅滩处用鱼叉和长矛击杀</li>
<li><strong>巨鳄。/strong>常在红树林沼泽出现。使用麻醉箭先让它睡眠，再靠近用大砍刀攻击</li>
<li><strong>巨蟒。/strong>中层水域。使用燃烧瓶或毒镖，注意它的缠绕攻击（需要按E挣脱。/li>
</ul>
`
    },
    {
        id: 'survival-07', category: 'survival', tags: ['生存', '深海'],
        title: '《深海迷航》全剧情推进与资源坐。,
        brief: '4546B星球的深海求生之旅，全生物图鉴与海蛾。独眼巨人号建造。,
        date: '2025-02-11',
        content: `
<h2>🐟 《深海迷航》完整攻。/h2>

<h3>初期生存与工具顺。/h3>
<ol>
<li>逃生舱→制造水下工具→扫描仪→修理。/li>
<li>建造基础基地（多功能房间+生物反应。水过滤机。/li>
<li>海蛾号（Seamoth）——最重要的水下交通工具，让你探索深度200m的区。/li>
</ol>

<h3>资源坐标参。/h3>
<ul>
<li>石英（Quartz）：极光号周边浅滩，深度0-50m</li>
<li>钛（Titanium）：各种金属碎片和石灰岩</li>
<li>银矿（Silver Ore）：砂岩，极光号周边</li>
<li>金矿（Gold）：砂岩和页岩菇洞，深度50-150m</li>
<li>磁铁矿（Magnetite）：珍稀菌洞，深。00-300m</li>
<li>镍矿（Nickel）：失落之河，深。00-700m</li>
<li>蓝水晶（Kyanite）：熔岩区，深度1000m+</li>
</ul>

<h3>关键推进。/h3>
<ul>
<li>极光号探索：进入极光号需要修理枪+辐射防护套装+激光切割器——船内有大量的贵重蓝图和数据</li>
<li>德加西基地：500m深度的迷失河中，解锁深层探索关键信息</li>
<li>海龙尸体遗迹。00m+深度的熔岩区域，接近游戏终点</li>
<li>热力发电站：终极基地能源方案——在熔岩区放置热发电模块</li>
</ul>

<h3>独眼巨人号（Cyclops）操作指。/h3>
<ul>
<li>独眼巨人号是移动基地：可以建造内部储物、改造台、种植箱</li>
<li>隐身模式：低速前进降低噪音——当利维坦出现时使用</li>
<li>充电管理：携带备用电池组，使用热能充电模块在熔岩区域补能</li>
</ul>
`
    },
    {
        id: 'survival-08', category: 'survival', tags: ['生存', 'RPG'],
        title: '《辐。6》新手开局与C.A.M.P.建造指。,
        brief: '阿帕拉契亚废土生存指南，最佳的C.A.M.P.选址与建造技巧。,
        date: '2025-02-15',
        content: `
<h2>☢️ 《辐。6》新手攻。/h2>

<h3>开局路线</h3>
<ol>
<li>。6号避难所出发→前往钟楼镇获取初始装。/li>
<li>沿路回到"起始之路"（The Wayward）任务线——获得初期经验和装备</li>
<li>。5级前集中在森林区域（The Forest）——怪物难度最低的区域</li>
<li>15-25级前往毒谷（Toxic Valley）→25-35级前往灰堆（Ash Heap。/li>
</ol>

<h3>C.A.M.P.建造终极指。/h3>
<p>C.A.M.P.（建造与移动平台）是辐射76的核心系统：</p>
<ul>
<li><strong>选点原则。/strong>靠近水源（建造净水器。 平坦地块（方便建造）+ 靠近主要交通路。/li>
<li><strong>推荐位置。/strong>查尔斯顿西北河边（水。平坦+靠近火车站）</li>
<li><strong>必备设施。/strong>水源净化器（至。个工业级。 农作物种植区（玉。变种水果→制作淀粉黏合剂。/li>
<li><strong>经济系统。/strong>大量生产纯水（Purified Water）卖给机器人NPC获取瓶盖（Caps。/li>
</ul>

<h3>传奇装备刷法</h3>
<ul>
<li>每日行动（Daily Ops）——每天可。次传奇装备奖。/li>
<li>公共事件（Public Events）—。铀矿狂。。辐射轰隆"等掉落大量传奇装。/li>
<li>传奇商人：使用传奇模组（Legendary Modules）在火车站改造装。/li>
</ul>

<h3>Perk卡推。/h3>
<p>前期核心。药瘾"（Pharma Farma。 "游荡。（Traveling Pharmacy。 "打包专家"（Pack Rat）——这三个解决负重问题。输出perk根据你的武器类型选择。/p>
`
    },

    // ===== 7. STRATEGY GUIDES (8) =====
    {
        id: 'strategy-01', category: 'strategy', tags: ['策略', '文明'],
        title: '《文。》领袖强度排名与最优开局策略',
        brief: '从远古到信息时代，各文明特色能力分析与征。科技/文化胜利路线。,
        date: '2025-02-20',
        content: `
<h2>🏛。《文。》完整攻。/h2>

<h3>新手推荐文明</h3>
<ul>
<li><strong>罗马（Trajan）：</strong>免费的纪念碑+道路网络，让扩张变得简。/li>
<li><strong>德国（Frederick）：</strong>额外城区格子，可以早出工业区爆发产能</li>
<li><strong>日本（Hojo）：</strong>城区相邻加成，密集布局收益最。/li>
<li><strong>俄罗斯（Peter）：</strong>极光之舞信仰+大片冻土，文化胜利首。/li>
</ul>

<h3>开局科技与市政路。/h3>
<p>通用开局—无论你想走什么胜利，。0回合大致相同。/p>
<ol>
<li>科技：制陶术→采矿→畜牧业→写作→铸铜术</li>
<li>市政：法典→技艺→对外贸易→国家劳动力→政治哲。/li>
<li>建造顺序：侦察兵→建造者（x2）→投石兵→开拓者→巨石阵（可选）</li>
</ol>

<h3>胜利路线总览</h3>
<p><strong>科技胜利。/strong>核心是高科技城区和学院。关键科技：火箭技术→人造卫星→登月→核聚变。关键市政：国际空间站。大科学家是科技胜利的灵魂。/p>
<p><strong>文化胜利。/strong>核心是文物、奇观和国家公园。多建剧院广场，大作家创作巨著。关键奇观：埃菲尔铁塔（+2魅力）、基督像。100%遗物旅游业绩）。/p>
<p><strong>征服胜利。/strong>核心是军事产出和战略资源。前期棒。投石，中期骑。攻城锤，后期坦克+轰炸机。保持军队数量是AI宣战的重要威慑。/p>
<p><strong>宗教胜利。/strong>核心是发教（万神殿）+传教+使徒。使徒。劝导。。20强度）和"殉道。（死亡后获得遗物）。/p>

<h3>优化技。/h3>
<ul>
<li>坐城时尽量坐奢侈资源。1文化。1科技各）</li>
<li>前期每座城附近保。-2个军事单位防蛮族</li>
<li>城市人口>7之后注意住房和满意度</li>
<li>利用"砍树"（Harvest）爆发产能加速奇。/li>
</ul>
`
    },
    {
        id: 'strategy-02', category: 'strategy', tags: ['策略', '即时战略'],
        title: '《星际争。》各族基础运营与开局战术',
        brief: '人族/神族/虫族的标准开局运营，各天梯地图的通用战术指南。,
        date: '2025-02-24',
        content: `
<h2>🚀 《星际争。》攻。/h2>

<h3>人族（Terran）运营基础</h3>
<p><strong>标准开局（Reaper Expand）：</strong></p>
<ol>
<li>14补给。。16兵营 。16气矿 。19二基。。20气矿 。死神→科技实验。/li>
<li>核心单位：陆战队（Marine。 医疗运输机（Medivac）——生化部队组。/li>
<li>坦克（Siege Tank）：架起后最强防守单位。每个主矿入口放1-2个坦。/li>
<li>维京（Viking）：对空+变形对地。对抗神族巨像和虫族大龙</li>
</ol>

<h3>神族（Protoss）运营基础</h3>
<p><strong>标准开局（Gateway Expand）：</strong></p>
<ol>
<li>14水晶 。16兵营 。20二基。。21气矿 。控制核心 。追猎。/li>
<li>核心部队：狂热者（Zealot。 哨兵（Sentry。 追猎者（Stalker）——三基础兵种混合</li>
<li>进阶单位：不朽者（Immortal）对重甲、巨像（Colossus）对轻甲、执政官（Archon）高伤害AOE</li>
<li>风暴（Tempest。 虚空（Void Ray）：后期对空组合</li>
</ol>

<h3>虫族（Zerg）运营基础</h3>
<p><strong>标准开局（Hatch First Pool）：</strong></p>
<ol>
<li>15巢穴 。15气矿 。16人口 。16孵化。。女王×2 。17气矿</li>
<li>虫族核心。注卵"（Larva Inject）——女王技能，。0秒使用一。/li>
<li>蟑螂（Roach。 刺蛇（Hydralisk）：虫族的核心组合，性价比极。/li>
<li>飞蛇（Viper）的"牵引"技能：拉走敌人的关键单。/li>
</ol>

<h3>天梯通用技。/h3>
<ul>
<li>保持工人（Probe/SCV/Drone）不停生产—。0+工人前不要停</li>
<li>扩张时机：主矿饱和（16-18工人采水晶）时开分基。/li>
<li>侦察：每2-3分钟用农民的廉价侦察骚扰检测对方战。/li>
<li>使用Shift键编队：1-3编主力部队，4编生产建筑，5编升级建。/li>
</ul>
`
    },
    {
        id: 'strategy-03', category: 'strategy', tags: ['策略', '模拟经营'],
        title: '《城市：天际线》终极城市规划指。,
        brief: '从道路规划到交通管理，打造百万人口超级都市的完整方案。,
        date: '2025-02-28',
        content: `
<h2>🏙。《城市：天际线》规划指。/h2>

<h3>开局选址与道路规。/h3>
<p>选择地图时关注：高速公路接入点。个以上）、河。海岸线（水源+货运港口）、平坦地形比例。/p>
<p>道路层次。/p>
<ul>
<li><strong>高速公路（Highway）：</strong>城市外围的环。放射线，时速最。/li>
<li><strong>主干道（Arterial）：</strong>连接各区。车道道路，路口间距至。0。/li>
<li><strong>次干道（Collector）：</strong>区内主要道路。车道</li>
<li><strong>支路（Local）：</strong>小区。车道——低流量自然减。/li>
</ul>

<h3>时间线发展策。/h3>
<ul>
<li>0-1000人口：单一住宅。小商业区+少量工业。重点：水电覆盖和垃圾收。/li>
<li>1000-10000人口：开拓第二住宅区+办公区（代替部分工业）。教育系统上。/li>
<li>10000-50000：公共交通起步（公交。地铁），构建卫星城网。/li>
<li>50000+：区域专业化（旅。金融/林业等）+ 全地铁覆。+ 连接外部运输</li>
</ul>

<h3>交通拥堵解决方。/h3>
<ol>
<li><strong>立交桥设计：</strong>使用"涡轮立交"（Turbine Interchange）或"苜蓿叶立。（Cloverleaf）减少高速交。/li>
<li><strong>公共交通：</strong>地铁+公交+步行的三层网络。地铁站间距300-500m，公交站间距100-150m</li>
<li><strong>货运分离。/strong>工业区专用货运铁路连接外部，货运卡车不走市区</li>
<li><strong>TMPE模组。/strong>使用Traffic Manager mod设置车道箭头和禁止掉。/li>
</ol>
`
    },
    {
        id: 'strategy-04', category: 'strategy', tags: ['策略', '战旗'],
        title: '《火焰纹章：风花雪月》全路线攻略与角色培。,
        brief: '四线剧情选择分析，最优角色培养方案与转职路线。,
        date: '2025-03-03',
        content: `
<h2>⚔️ 《火焰纹章：风花雪月》攻。/h2>

<h3>学级选择与剧情差。/h3>
<ul>
<li><strong>黑鹫学级（艾黛尔贾特）：</strong>两条分支——帝国线（与艾黛尔贾特一起）和教会线。帝国线是唯一对抗教会的路。/li>
<li><strong>青狮学级（帝弥托利）。/strong>最传统的王子复仇记剧情，角色之间的羁绊最。/li>
<li><strong>金鹿学级（库罗德）：</strong>揭秘世界观最深的一条线，了解地底人的真。/li>
</ul>

<h3>角色培养优先。/h3>
<ul>
<li><strong>S级必练：</strong>级长（贝雷丝/贝雷特）、各学级级长</li>
<li><strong>A级主力：</strong>各学级的副官（休伯特/菲力克斯/希尔达）和学院最强（如莉丝缇亚）</li>
<li><strong>B级替补：</strong>看个人喜好，但不要超。2人主。/li>
</ul>

<h3>转职路线推荐</h3>
<ul>
<li>物理输出：战士→土匪→刀剑将。暗杀者→战争将领</li>
<li>魔法输出：修道士→术士→暗术。主教→格莫瑞</li>
<li>混合型：贵族→佣兵→术士→暗骑士/圣骑士（需。0+力量+10+魔力。/li>
<li>辅助：修道士→牧师→主教→圣。格莫。/li>
</ul>

<h3>支援关系（Support）攻。/h3>
<p>支援提升能力加成 + 解锁支援对话 + 影响结局配对。每个角色最多可以和其他角色达成A级支援。选择最终配对时会决定角色的结局文本。推荐在"围剿"章节前完成关键角色的A支援。/p>
`
    },
    {
        id: 'strategy-05', category: 'strategy', tags: ['策略', '战旗'],
        title: '《幽。》铁人难度完整战术指。,
        brief: '反抗军的战术手册，兵种培养与装备升级优先级，最终任务攻略。,
        date: '2025-03-07',
        content: `
<h2>👽 《幽。》铁人攻。/h2>

<h3>兵种培养</h3>
<ul>
<li><strong>狙击手（Sharpshooter）：</strong>必须。枪手"路线（Gunslinger），中后期转。死神"（Death From Above）perk获得额外行动点。核心装备：穿甲。追踪枪托</li>
<li><strong>榴弹兵（Grenadier）：</strong>破甲+群伤。核心perk：连环射击（Chain Shot。 毁灭性打击（Shredder）。榴弹破掩体是幽。的核心战。/li>
<li><strong>游侠（Ranger）：</strong>潜行侦察+近距离爆发。核心perk：暴风剑（Bladestorm。 奔袭（Run and Gun）。在最终任务中游侠是MVP</li>
<li><strong>专家（Specialist）：</strong>治疗+破解机器人。核心perk：战时医疗（Field Medic。 反击协议（Haywire Protocol。/li>
</ul>

<h3>科技与装备优先级</h3>
<ol>
<li>磁性武器（Magnetic Weapons）——第1优先级，输出翻。/li>
<li>高级护甲（Predator Armor）——赠送额外的背包槽位</li>
<li>穿甲弹（AP Rounds）——对抗后期重甲敌。/li>
<li>利刃护甲（Warden Armor）——最终护甲升。/li>
</ol>

<h3>铁人模式生存法则</h3>
<ul>
<li>永远不要让你的士兵暴露在开阔地又没有全套掩。/li>
<li>每次激活最。组敌人——使用游侠的潜行侦察确认敌人位置</li>
<li>拆弹和限时类任务中，保持1-2人在撤离路线附近</li>
<li>特殊任务（如黑地化天选者）前确保主力全部满装准。/li>
<li>受伤=治好后才能再次出战——轮流使用替补部。/li>
</ul>
`
    },
    {
        id: 'strategy-06', category: 'strategy', tags: ['策略', '模拟经营'],
        title: '《异星工场》自动化流水线设计指。,
        brief: '从手动采矿到火箭发射，Factorio的自动化工厂规划与布局教程。,
        date: '2025-03-11',
        content: `
<h2>🏭 《异星工场》自动化指南</h2>

<h3>初级阶段（红绿科技包）</h3>
<ol>
<li>手动采矿→建造第一个蒸汽发电机和采矿机</li>
<li>自动化铁。铜板生产：矿机→传送带→熔炉→传送带→箱。/li>
<li>红瓶自动化：铁齿。铜板 。组装。。传送带。实验。/li>
<li>绿瓶自动化：绝缘。铁板 。组装。。传送带 。实验。/li>
</ol>

<h3>主总线（Main Bus）设。/h3>
<p>主总线是最经典的大型工厂布局。/p>
<ul>
<li>4条铁板带 。4条铜板带 。2条钢铁带 。2条绿板带 。2条塑料带 。1条红板带 。1条电池带</li>
<li>每侧。-6格的空间用于"分路"（Splitter pulling materials。/li>
<li>总线末端预留扩展空间</li>
</ul>

<h3>铁路系统规划</h3>
<ul>
<li>双轨系统：左行或右行——保持统一</li>
<li>站台设计。-4列车标准。火车。4车厢。/li>
<li>信号灯：两个方向都使用常规信。路径信号（交叉口使用路径信号。/li>
<li>自动化调度：每个站点设置"。。条件控制发车</li>
</ul>

<h3>进阶技。/h3>
<ul>
<li>使用"比例化生。减少浪费：例。个铜线组装机可以。个绿板组装机</li>
<li>模块化大型工厂：每个产品区域独立供电，便于故障排。/li>
<li>使用机器人网络（Logistic Network）替代部分传送带——中后期更高。/li>
<li>通关前储备充足的火箭部件——发射火箭需要约100单位的各部分</li>
</ul>
`
    },
    {
        id: 'strategy-07', category: 'strategy', tags: ['策略', '军事'],
        title: '《钢铁雄。》新手入门与德三速通攻。,
        brief: '二战策略游戏的进阶指南，师编制设计、空战体系与闪电战战术。,
        date: '2025-03-15',
        content: `
<h2>🎖。《钢铁雄。》攻。/h2>

<h3>基础概念理解</h3>
<p>。的核心是"师编。（Division Template），它决定了你的地面部队战斗力：</p>
<ul>
<li><strong>宽度（Width）：</strong>师在战斗中占据的宽度。推。0宽度的师（前期），后期升级到27-42宽度</li>
<li><strong>组织度（Organization）：</strong>师的战斗持久力。高组织度→能打更久的战。/li>
<li><strong>突破（Breakthrough）：</strong>进攻方的关键属性。突破。每回合造成的组织度伤害</li>
<li><strong>装甲厚度（Armor）：</strong>高于对方穿透力。"装甲优势"——受到的伤害减半</li>
</ul>

<h3>最推荐的师编制</h3>
<ul>
<li><strong>步兵师（防御）：</strong>10步兵。附炮。工兵连—。0宽的标准阵地。/li>
<li><strong>装甲师（进攻）：</strong>8坦克。8机动步兵。附炮。工兵。维修连—。0宽的突破。/li>
<li><strong>山地师（特殊地形）：</strong>10山地步兵+工兵。侦查连——在山地和森林中表现优异</li>
</ul>

<h3>德国闪电战速。/h3>
<ol>
<li>1936-1939：发展工。研究坦克科技+建造军用工。/li>
<li>1939年：吞并捷克斯洛伐克（慕尼黑协议）→ 但泽或战。。入侵波兰</li>
<li>1940年：黄色方案——装甲师绕过马奇诺防线经低地国家攻入法国</li>
<li>1941年：巴巴罗萨计划——三路大军进攻苏联，目标在冬季到来前占领莫斯。/li>
</ol>

<h3>空战体系</h3>
<ul>
<li>战斗机：速度和引擎优先——制空权是一切地面行动的前提</li>
<li>近距支援机（CAS）：对地攻击，提供地面战斗的直接支援</li>
<li>战略轰炸机：破坏敌方工业——需要前期制空权</li>
</ul>
`
    },
    {
        id: 'strategy-08', category: 'strategy', tags: ['策略', '塔防'],
        title: '《王国保卫战》全系列英雄评级与关卡攻。,
        brief: '塔防经典系列的完整攻略，各代英雄强度排名与噩梦难度通关方案。,
        date: '2025-03-19',
        content: `
<h2>🏰 《王国保卫战》全攻略</h2>

<h3>防御塔选择指南</h3>
<p>每座塔都有两种升级分支：</p>
<ul>
<li><strong>兵营（Barracks）：</strong>拦截敌人行进。推荐。圣骑士殿"（高防御+治疗）或"黑暗骑士。（高伤害+吸血。/li>
<li><strong>弓箭塔（Archer Tower）：</strong>远程单体输出。推。游侠藏身。（毒。捆绑）或"狙击哨站"（暴。秒杀。/li>
<li><strong>法师塔（Mage Tower）：</strong>魔法伤害+控制。推。大法师塔"（高伤害）或"奥术巫师"（传。变形。/li>
<li><strong>炮塔（Artillery）：</strong>范围物理伤害。推。巨型加农。（高伤害+范围）或"火箭。（高级单体）</li>
</ul>

<h3>噩梦难度通用策略</h3>
<ul>
<li>开局：优先升级兵营到2级，拦截敌人争取时间</li>
<li>中路：每个路径交叉点至少1座法师塔（对付高甲敌人）</li>
<li>经济管理：前6波不要浪费金币升级非关键。/li>
<li>英雄技能：掌握每个英雄技能的冷却时间，关键时刻使。/li>
<li>道具管理：召唤援军和火雨是清场的神器——不要省</li>
</ul>

<h3>全代最佳英。/h3>
<ul>
<li>《王国保卫战》原版：Gerald（坦。治疗）和Ignus（近战AOE。/li>
<li>《前线》：Bonehart（远程龙）和Alric（全能战士）</li>
<li>《起源》：Arivan（精灵法师）和Phoenix（复。爆发。/li>
<li>《复仇》：Mortemis（召唤流最强）和Beresa（蛛后控场）</li>
</ul>
`
    },

    // ===== 8. MULTIPLAYER / CO-OP GUIDES (8) =====
    {
        id: 'multiplayer-01', category: 'multiplayer', tags: ['多人', '合作'],
        title: '《幻兽帕鲁》完全生存与合作攻略',
        brief: '帕鲁捕获与培养指南，自动化流水线建设与全Boss速通。,
        date: '2025-03-23',
        content: `
<h2>🐾 《幻兽帕鲁》完整攻。/h2>

<h3>初期发展</h3>
<ol>
<li>出生后采集基础资源（木。石头+纤维）→制作工作。/li>
<li>捕捉第一批帕鲁——推。皮皮。（飞。采集）和"企丸。（水。冷却。/li>
<li>建造简易基地→放置帕鲁终端→分配帕鲁工。/li>
<li>升级：完成科技树的基础研究（帕鲁球→武器→工具。/li>
</ol>

<h3>最强帕鲁推。/h3>
<ul>
<li><strong>空涡龙（Jetragon）：</strong>最快的飞行帕鲁，后期探索必备。位于地图最北端火山区域，需要高等级帕鲁。/li>
<li><strong>唤夜兽（Shadowbeak）：</strong>暗属性最强输出，高DPS+高移。/li>
<li><strong>腾炎龙（Blazamut）：</strong>火属性最强，挖矿+战斗双用</li>
<li><strong>覆海龙（Jormuntide Ignis）：</strong>。火双属性，全能帕鲁</li>
</ul>

<h3>自动化基地设。/h3>
<p>每个基地专注于单一功能。/p>
<ul>
<li>主基地：食物生产（种。畜牧。 装备制作（工。装配线）</li>
<li>矿场基地：建在矿石密集区——采石场+帕鲁采掘</li>
<li>农场基地：专注种植、畜牧和木材采集</li>
</ul>
<p>多基地使用帕鲁传送点快速切换。分配帕鲁时注意它们。工作适应。星级。/p>

<h3>Boss攻略</h3>
<ul>
<li>佐伊&暴电熊：20级可挑战。核心是躲避旋转攻击，使用火属性帕鲁输。/li>
<li>阿努比斯。0级。注意它的沙暴AOE和突进。使用冰属性帕鲁冻。/li>
<li>派克龙：40级。巨型帕鲁——需要风筝打法，准备好充足的帕鲁。/li>
<li>塔主Boss（Zoe&Grizzbolt）：30级塔主，注意她的闪电AOE和机枪扫射。使用地属性帕鲁可以克。/li>
</ul>

<h3>多人合作技。/h3>
<ul>
<li>分工。人负责基地建设，1人负责探索捕获，1人负责战。/li>
<li>共享帕鲁终端：基地的帕鲁可以被所有队友使。/li>
<li>组队Boss战：每人携带不同属性的帕鲁，配合打出属性克。/li>
<li>开荒效率：分散探索地图，共享传送点位置信息</li>
</ul>
`
    },
];