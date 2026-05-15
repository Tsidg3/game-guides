#!/usr/bin/env python3
"""Replace guide-body content for strategy guides via regex to avoid encoding issues."""

import re

BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"

# New content for each guide (everything between the opening <div class="guide-body"> line and the trailing whitespace+</div>)
NEW_CONTENTS = {
    "strategy-01.html": """                    
<h2>🏛️ 领袖强度排名总览</h2>

<p>《文明6》的领袖强度并非一成不变，它高度依赖地图类型、游戏速度和所选胜利路线。经过大量实战验证与社区讨论，我们整理出以下泛用性排行榜供参考。</p>

<h3>SS级：全能王者</h3>
<ul>
<li><strong>俄罗斯（彼得大帝）：</strong>坐拥冻土，"极光之舞"万神殿配合"劳作"信仰产出极其恐怖。文化胜利路线的绝对王者，冻土城邦首发即起飞</li>
<li><strong>德国（弗里德里希）：</strong>额外城区不受人口限制，工业区相邻加成翻倍，爆发产能无可比拟。科技胜利和征服胜利通用</li>
<li><strong>日本（北条时宗）：</strong>所有城区相邻加成统一提升，密集布局收益最大化。无论走什么胜利路线都能发挥稳定</li>
</ul>

<h3>S级：强势领袖</h3>
<ul>
<li><strong>罗马（图拉真）：</strong>免费纪念碑+道路网络开局，让早期扩张变得极其简单。新手和老手都能轻松上手</li>
<li><strong>高卢（安比奥里克斯）：</strong>矿山文化爆发+特色兵种"高卢勇士"对蛮族具有碾压优势，征服路线首选</li>
<li><strong>葡萄牙（若昂三世）：</strong>商路超级加倍+科特加成，后期的金币和科技可同时起飞。海洋地图的王者</li>
</ul>

<h3>A级：特定路线强者</h3>
<ul>
<li><strong>毛利（库佩）：</strong>开局科技高、渔船加成强，海洋图专属但大陆图较弱</li>
<li><strong>巴比伦（汉谟拉比）：</strong>尤里卡直接解锁科技，爆发力极强但需要精细规划科技路线</li>
<li><strong>埃塞俄比亚（孟尼利克二世）：</strong>信仰转化为科技和文化，宗教胜利路线顶级选择</li>
</ul>

<h2>🎯 最优开局策略</h2>

<h3>通用开局流程（前30回合）</h3>
<p>无论选择什么文明和胜利路线，前30回合的大方向基本相同：</p>
<ol>
<li><strong>科技顺序：</strong>制陶术 → 采矿 → 畜牧业 → 写作 → 铸铜术</li>
<li><strong>市政顺序：</strong>法典 → 技艺 → 对外贸易 → 国家劳动力 → 政治哲学</li>
<li><strong>建造顺序：</strong>侦察兵 → 建造者（×2）→ 投石兵 → 开拓者 → 巨石阵（可选）</li>
<li><strong>坐城要点：</strong>尽量坐在奢侈资源上（+1文化+1科技），紧邻淡水</li>
</ol>

<blockquote>
<p>💡 <strong>黄金法则：</strong>前30回合的目标不是发展，不是打架，而是"发现"——用侦察兵探索城邦、村庄遗迹、邻国位置和大陆地形。信息就是文明6前期的最大优势。</p>
</blockquote>

<h2>🏆 四大胜利路线详解</h2>

<h3>科技胜利</h3>
<p>核心：学院区 + 高科技城区 + 大科学家。关键科技节点：火箭技术 → 人造卫星 → 登月 → 核聚变。大科学家是科技胜利的灵魂，每个大科学家加速的科研值约等于5个学院区。市政方面优先解锁国际空间站。</p>

<h3>文化胜利</h3>
<p>核心：剧院广场 + 奇观 + 国家公园 + 遗物。多建剧院广场让大作家创作巨著，关键奇观包括埃菲尔铁塔（+2魅力）和基督像（100%遗物旅游业绩）。文化胜利的节奏感极强——需要在工业和现代时期集中爆发旅游业绩。</p>

<h3>征服胜利</h3>
<p>核心：军事产出 + 战略资源管理。前期棒子+投石兵、中期骑手+攻城锤、后期坦克+轰炸机。保持军队数量是AI宣战的重要威慑——只要你的军队评分不低于AI的70%，AI基本不会主动宣战。</p>

<h3>宗教胜利</h3>
<p>核心：发教（万神殿）→ 传教 → 使徒。使徒的升级选择至关重要：推荐"劝导"（+20宗教战斗力）和"殉道"（死亡后获得遗物）。每个城市至少留1个审判断罪者（Inquisitor）用来清除异教。</p>

<h2>🔧 进阶优化技巧</h2>

<h3>建城"三角形"布局原则</h3>
<p>这是文明6最核心的布局技巧。每个城市周围6格范围内，将学院区、工业区、商业区（或剧院广场）摆成三角形，共享相邻加成。市政广场（Government Plaza）建在最中心区域，周围全造区域建筑，获得最高相邻加成。</p>

<h3>城邦（City-State）使节分配</h3>
<p>首发使节分别投入军事城邦（+产能）、科技城邦（+科技）、商业城邦（+金币）各1个，拿到基础加成后就停止。等解锁外交区（Diplomatic Quarter）获得额外使节后，再集中3个以上使节到特定城邦抢宗主国位置。宗主国收益远超分散投入。</p>

<h3>"砍树"爆发技巧</h3>
<p>砍伐森林可以获得大量产能爆发，是抢奇观和爆发基建的核心手段。很多新手玩了上百小时都不知道这个技巧。一个森林砍伐约等于10~15产能的免费奖励。注意：砍树获得的一次性产能不受任何百分比加成。</p>

<h2>⚠️ 新手避坑</h2>
<ul>
<li><strong>开局爆铺不维护：</strong>铺太多城但没有足够的驻军和建造者，城市发展极慢且忠诚度会崩</li>
<li><strong>不知道"砍树"：</strong>这是抢奇观的核心技巧，错过等于浪费大量免费产能</li>
<li><strong>完全不造侦察兵：</strong>侦察兵前期的价值远超想象——发现城邦、探访村庄遗迹、侦察对手布局</li>
<li><strong>不签研究协议：</strong>与其他文明签研究协议可以获得额外科技值，是科技胜利的隐形加速器</li>
<li><strong>忽略住房和满意度：</strong>城市人口超过7之后，住房和满意度会成为增长的瓶颈，提前规划改良设施</li>
</ul>
                """,
    "strategy-03.html": """                    
<h2>🏙️ 从零到百万人口的规划蓝图</h2>

<p>《城市：天际线》的核心魅力在于——你既是城市规划师又是交通管理者。本指南将从地图选择、道路层级、区域规划到交通治理，为你提供一套经过验证的完整方案。</p>

<h3>开局选址三要素</h3>
<ul>
<li><strong>高速公路接入点：</strong>至少2个以上，确保城市进出口通畅</li>
<li><strong>河流/海岸线：</strong>水源决定饮用水供应，海岸线提供货运港口条件</li>
<li><strong>平坦地形比例：</strong>至少30%以上的平坦土地用于初期建设，降低道路和建筑成本</li>
</ul>

<h3>道路层级系统</h3>
<p>合理的道路层级是城市交通的骨架，从高到低分为四层：</p>
<ul>
<li><strong>高速公路（Highway）：</strong>城市外围的环境放射线，限速最高，承担跨区域和跨城交通</li>
<li><strong>主干道（Arterial）：</strong>连接各功能区的六车道道路，路口间距最少保持30格。主干道交叉口尽量使用立交或环岛</li>
<li><strong>次干道（Collector）：</strong>区域内主要通道，四车道，连接主干道和支路</li>
<li><strong>支路（Local）：</strong>小区内部的双车道小路，车速慢、流量低——自然起到降速和减少噪音的作用</li>
</ul>

<h2>📈 人口发展时间线</h2>

<h3>0 ~ 1,000 人口：初创小镇</h3>
<p>在一片平地铺设简单的棋盘路网，划出住宅区、小商业区和少量工业区。核心任务：水电覆盖、垃圾回收。这时不要急于修建大型立交——一个十字路口加一个环岛就是全部需要。</p>

<h3>1,000 ~ 10,000 人口：快速扩张</h3>
<p>开拓第二住宅区并逐步将部分工业区替换为办公区。教育系统必须跟上——缺教育的城市会陷入低技能劳工陷阱，产业升级受阻。注意在每个发展阶段提前预留学校用地。</p>

<h3>10,000 ~ 50,000 人口：都市转型</h3>
<p>公共交通起步！优先建设公交车路线，后续过渡到地铁系统。开始构建卫星城——在主城周边选择合适地块建设独立功能的卫星镇。此时区域专业化开始发挥作用。</p>

<h3>50,000+ 人口：超级都市</h3>
<p>全面区域专业化，全地铁网络覆盖，连接外部运输铁路和海运。高密度住宅区和摩天大楼开始涌现。城市管理的重心转移至交通流量优化和公共服务精细化。</p>

<h2>🚦 交通拥堵终极解法</h2>

<ol>
<li><strong>立交桥设计：</strong>使用涡轮立交（Turbine Interchange）或苜蓿叶立交（Cloverleaf）替代平面交叉口。立交桥可以降低高速出口拥堵率约60%</li>
<li><strong>三层公共交通网络：</strong>地铁（大容量骨干）+ 公交（中容量覆盖）+ 步行（慢行补充）。地铁站间距300~500米，公交站间距100~150米</li>
<li><strong>客货分离：</strong>工业区域应建设专用货运铁路连接外部，货运卡车严禁进入市区主干道。在工业区外围设置物流中转站</li>
<li><strong>使用 TMPE 模组：</strong>Traffic Manager: President Edition 是必装模组。设置车道箭头、禁止特定路口掉头、调节红绿灯时间，路口通行效率可提升40%以上</li>
</ol>

<h2>🏭 区域专业化详解</h2>

<h3>林业区</h3>
<p>在地图森林覆盖率高处划定区域，建设林场→锯木厂→造纸厂产业链。出口纸张和家具利润极高，但需要配套货运火车站。注意植树造林保持持续性。</p>

<h3>农业区</h3>
<p>在平原耕地划线区域，种植→加工→出口链条简单且就业率高。农业区需要大量供水，提前铺设水管网络。畜牧业虽然污染较高，但利润更可观。</p>

<h3>矿石区</h3>
<p>在矿脉上方划定，采矿→冶炼→金属制品。注意矿脉会逐渐耗尽，需要配合进口维持运转。建议在矿产充沛期建立战略储备。</p>

<h3>石油区</h3>
<p>原油→精炼→塑料/燃料的全链条收益最高，但污染也最严重——务必远离住宅区和水源。同时建设石油专用港口用于出口。</p>

<h2>⚠️ 规划禁忌</h2>
<ul>
<li><strong>开局就修大型立交：</strong>几千人口的小镇不需要多层螺旋立交。先铺好基础路网，留出扩展空间</li>
<li><strong>住宅和工业混区：</strong>工业区产生噪音和污染，住宅靠近工业区会导致地价暴跌、居民搬离</li>
<li><strong>不给排水预留空间：</strong>污水排放口必须放在取水口的下游方向，否则市民会饮用自己排放的废水</li>
<li><strong>等到全城堵死再建公交：</strong>全城道路深红色时再建公交系统为时已晚。人口突破1万时就要规划公交路线</li>
</ul>
                """,
    "strategy-05.html": """                    
<h2>👽 铁人模式核心哲学</h2>

<p>《幽浮2》铁人模式（Ironman）意味着——存档只有一个，每一次决策都不可逆。这不是普通的通关攻略，而是一场生存至上的战术推演。本指南将帮助你在不可挽回的流程中最大程度降低损失。</p>

<h2>🎖️ 兵种培养详解</h2>

<h3>狙击手（Sharpshooter）</h3>
<p>必须走"枪手"路线（Gunslinger），中后期转"死神"（Death From Above）Perk获得额外行动点数。核心装备：穿甲弹 + 追踪枪托。狙击手在远距离压制敌人方面无人能及，但永远不要让它暴露在近战范围内。</p>

<h3>榴弹兵（Grenadier）</h3>
<p>破甲+群体伤害的核心输出。核心Perk：连环射击（Chain Shot）→ 毁灭性打击（Shredder）。榴弹破掩体是幽浮2的核心战术——没有掩体的敌人等于死了80%。优先升级榴弹的爆炸范围和伤害。</p>

<h3>游侠（Ranger）</h3>
<p>潜行侦察 + 近距离爆发。核心Perk：暴风剑（Bladestorm）→ 奔袭（Run and Gun）。游侠是铁人模式的灵魂职业——利用潜行探路、确认敌人位置后再激活战斗。在最终任务中，游侠是当之无愧的MVP。</p>

<h3>专家（Specialist）</h3>
<p>治疗 + 破解机器人。核心Perk：战时医疗（Field Medic）→ 反击协议（Haywire Protocol）。每个小队至少带1名专家，最好带2名——一个专精治疗，一个专精黑客。</p>

<h2>🔬 科技与装备优先级</h2>

<ol>
<li><strong>磁性武器（Magnetic Weapons）：</strong>第1优先级，输出翻倍。没有磁武器的队伍面对中后期敌人如同挠痒</li>
<li><strong>高级护甲（Predator Armor）：</strong>赠送额外背包槽位，大幅提升战场存活率</li>
<li><strong>穿甲弹（AP Rounds）：</strong>对抗后期重甲敌人的必备品。没有穿甲弹，执政官就是无敌的</li>
<li><strong>利刃护甲（Warden Armor）：</strong>最终护甲升级，配合穿甲弹让你在面对最终Boss时游刃有余</li>
</ol>

<h2>☠️ 铁人模式生存法则</h2>

<ul>
<li><strong>永远不要暴露在开阔地：</strong>士兵走位时永远确保至少有一格半掩体可用。暴露在空地等于活靶子</li>
<li><strong>一次只激活一组敌人：</strong>使用游侠的潜行侦察确认敌人位置后，只拉一组打。同时激活两组以上几乎等于团灭</li>
<li><strong>限时任务保持后路：</strong>拆弹和限时类任务中，至少保持1~2人在撤离路线附近，随时可以撤退</li>
<li><strong>主力满装再出发：</strong>特殊任务（如黑地、化身设施、天选者要塞）前，确保主力全部满装备、满编队</li>
<li><strong>轮流使用替补：</strong>受伤后必须治好才能再次出战。至少培养8~10名士兵，轮流使用保持队伍满编</li>
</ul>

<blockquote>
<p>💡 <strong>核心心法：</strong>铁人模式下，"完成任务"优先于"全灭敌人"。有时候打完主线目标就撤退是最高效的选择——不要为了多余的击杀冒额外风险。</p>
</blockquote>

<h2>👹 天选者（Chosen）应对手册</h2>

<h3>刺客（Assassin）</h3>
<p>弱点：近战专精+隐身，但被近战攻击后隐身失效。布置两个以上游侠形成交叉火力网，暴风剑迎击可以克制刺客的隐身突袭。</p>

<h3>猎人（Hunter）</h3>
<p>弱点：狙击+抓钩移动。榴弹兵的破甲弹可以移除他的高台护甲加成。使用专家的"闪避协议"降低命中率。</p>

<h3>术士（Warlock）</h3>
<p>弱点：心灵控制+召唤失魂者。使用灵能护盾（Mind Shield）保护高威胁单位——心灵控制免疫。优先击杀失魂者防止被围殴。</p>

<h2>⏳ 化身计划（Avatar Project）进度控制</h2>

<ul>
<li><strong>优先做"压制设施"任务：</strong>每次摧毁可降低2格化身进度</li>
<li><strong>"暗影议会"降低化身项目：</strong>派高军衔士兵执行可降低1格进度。性价比极高</li>
<li><strong>剧情任务强制暂停：</strong>进攻"黑地"等主线任务时，化身计划会暂停一段时间，善用这个窗口</li>
<li><strong>进攻设施时"打完就跑"：</strong>使用"隐形至目标点"策略——不要全灭敌人，完成任务就撤离</li>
</ul>

<h2>⚠️ 铁人模式禁忌</h2>
<ul>
<li><strong>探路"一步到位"：</strong>奔跑推进会让两个行动点的士兵暴露在开阔地。先使用游侠潜行侦察确认敌情</li>
<li><strong>不利用高地优势：</strong>站高地提供命中和掩体加成，忽略地形优势会让士兵暴露在更危险的境地</li>
<li><strong>任务超时：</strong>限时任务中太在意清怪而忽略目标点，会失去关键奖励甚至导致国家退出XCOM项目</li>
</ul>
                """,
    "strategy-06.html": """                    
<h2>🏭 自动化流水线从零开始</h2>

<p>在《异星工场》（Factorio）中，你的终极目标是发射火箭。而达成这个目标的唯一路径是——把一切交给自动化。本指南将从第一座采矿机开始，循序渐进地迈向飞天工厂。</p>

<h2>🔴 初级阶段：红绿科技包（前2小时）</h2>

<h3>第一步：手动→自动化</h3>
<ol>
<li>手动采集少量煤矿和铁矿石，建造第一个蒸汽发电机和采矿机</li>
<li>实现铁板和铜板的自动化生产：采矿机→传送带→熔炉→传送带→箱子</li>
<li>此时你有了源源不断的铁板和铜板，告别手动采矿</li>
</ol>

<h3>红色科技包自动化</h3>
<p>红瓶配方：铁齿轮 ×1 + 铜板 ×1。建设方案：组装机直接从传送带取料，产出送入红瓶专属传送带。初期目标：0.5瓶/秒。</p>

<h3>绿色科技包自动化</h3>
<p>绿瓶配方：绝缘线 ×3 + 铁板 ×1。注意配比——1台铜线组装机刚好供给2台绿板组装机。将此比例固定为生产线的基本模块。</p>

<h2>🚛 主总线（Main Bus）设置</h2>
<p>主总线是异星工场最经典的大型工厂布局，适用于从初期到通关的全过程：</p>
<ul>
<li><strong>总线容量推荐：</strong>4条铁板带 + 4条铜板带 + 2条钢铁带 + 2条绿板带 + 2条塑料带 + 1条红板带 + 1条电池带</li>
<li><strong>分路预留：</strong>每侧留4~6格空间用于分路（Splitter pulling materials），这是从总线取料的核心手段</li>
<li><strong>扩展空间：</strong>总线末端预留至少50格的扩展空间——你的工厂永远会比你预计的更大</li>
</ul>

<blockquote>
<p>💡 <strong>新手最容易忽视的设计原则：</strong>总线的每一条传送带都应该有明确的优先级方向。使用分流器（Splitter）设定输出优先级别，避免上游被下游堵塞导致整条生产线停摆。</p>
</blockquote>

<h2>🚆 铁路系统规划</h2>
<ul>
<li><strong>双轨系统：</strong>统一选择左行或右行，全地图保持一致。在交叉口使用双向信号灯</li>
<li><strong>站台设计：</strong>采用 1~4 列车的标准配置，火车车厢与传统保持一致即可（推荐 4 车厢）</li>
<li><strong>信号灯规则：</strong>轨道两侧都使用常规信号灯，交叉口使用路径信号灯（Chain Signal）。路径信号灯可以防止列车在交叉口内互相堵塞</li>
<li><strong>自动化调度：</strong>每个站点设置"空闲时"条件控制发车，货运站点设置"装满/空"条件</li>
<li><strong>铁路网络应优先连接矿区和冶炼区：</strong>矿物运输量最大，铁路设计应该以矿产运输为第一优先级</li>
</ul>

<h2>🧪 高级科技包自动化配比</h2>

<h3>蓝色科技包（1/秒）</h3>
<p>这是最耗资源的一档。需要 8 台红板组装机 + 20 台引擎单元组装机 + 24 台蓝瓶组装机。供应端需要 4 条铁板带 + 8 条铜板带 + 4 条塑料带。蓝色科技包的自动化标志着你的工厂进入了中期。</p>

<h3>黄色科技包（0.75/秒）</h3>
<p>需要 8 台处理单元 + 12 台电动机 + 10 台黄瓶组装机。需要大量润滑油和蓝板作为上游材料。在这个阶段，石油化工的规划设计会成为瓶颈——建议先设计好炼油厂的布局再开始建设。</p>

<h2>🐛 虫群防御体系</h2>
<p>异星工场的虫子威胁随污染程度增加而升级。污染指数超过 50% 后会出现"巨型虫群"：</p>
<ul>
<li><strong>城墙布局：</strong>双层城墙 + 龙牙（Dragon's Teeth）延阻行径 + 激光炮塔（6个以上覆盖一个方向）</li>
<li><strong>弹药供给：</strong>建设独立弹药生产区，通过机器人网络或传送带供给。每个炮塔每分钟消耗 1 发弹药，1 台组装机能供给约 10 个炮塔</li>
<li><strong>扑火队（响应部队）：</strong>在污染区外围部署配备火焰喷射器的装甲车和战斗霰弹枪——定期清理新建立的虫巢</li>
<li><strong>大炮齐射：</strong>远程火炮配合雷达侦察虫巢位置，先远程轰炸后近战清扫，降低正面压力</li>
</ul>

<h2>🚀 发射火箭最终检查清单</h2>
<p>火箭需要 100 单位各部件：火箭结构（100）、火箭燃料（100）、卫星控制单元（100）。总材料需求：约 3000 块铁板、2000 块铜板、2000 块塑料、300 个电池、300 个处理单元。在发射前确保至少有 5 分钟的电力冗余（连接核电站或大型蒸汽阵列作为备份），以防工厂意外停电导致生产中断。</p>

<h2>⚠️ 新手设计误区</h2>
<ul>
<li><strong>不留扩展余地：</strong>总线只建 2 条铁板带，20 小时后发现不够用又得拆了重建。建造始终预留 50% 的扩展空间</li>
<li><strong>忽略物流优先级：</strong>传送带不分优先级导致上游被下游堵塞，整条生产线停摆。学会使用分流器设定输出优先级</li>
<li><strong>红绿蓝瓶共线生产：</strong>不同颜色的科技包用同一条传送带运输，迟早会因为混合导致供料紊乱</li>
<li><strong>不设自动化弹药供应：</strong>前期手动装弹没问题，50 小时后还在手动装弹就是在浪费时间。建一条弹药自动化生产线</li>
</ul>
                """,
    "strategy-07.html": """                    
<h2>🎖️ 钢铁雄心4：新手指南</h2>

<p>《钢铁雄心4》是 Paradox 旗下最复杂的二战策略游戏之一。它的核心不在于操控每一场战斗，而在于国家层面的战略规划——军工建设、师编制设计、外交博弈、科技研发。本指南将帮你快速从"被AI推平"到"闪电战推平AI"。</p>

<h2>📖 基础概念理解</h2>
<p>钢4的核心是"师编制"（Division Template），它决定了你的地面部队战斗力：</p>
<ul>
<li><strong>宽度（Width）：</strong>师在战斗中占据的宽度。推荐 20 宽度的师（前期），后期升级到 27~42 宽度。注意不同地形的宽度上限不同——40宽在平原无往不利，但在森林和山地会因为超宽受到严重惩罚</li>
<li><strong>组织度（Organization）：</strong>师的战斗持久力。高组织度 = 能打更久的战斗。组织度归零的师会自动撤退</li>
<li><strong>突破（Breakthrough）：</strong>进攻方的关键属性。突破值越高，每回合造成的组织度伤害越大</li>
<li><strong>装甲厚度（Armor）：</strong>如果师的装甲厚度高于对方的穿透力，激活"装甲优势"——受到的伤害减半</li>
</ul>

<h2>🛡️ 最推荐的师编制</h2>

<h3>步兵师（防御型）</h3>
<p>10 步兵 + 支援炮 + 工兵连。20 宽的标准阵地师，造价低廉，适合填战线和防守。每个前线至少需要 24 个步兵师才能形成稳固防线。</p>

<h3>装甲师（进攻型）</h3>
<p>8 坦克 + 8 机动步兵 + 支援炮 + 工兵连 + 维修连。40 宽的突破师，是你打破防线的主力。装甲师的比例建议：步兵师：装甲师 = 4:1。</p>

<h3>山地师（特殊地形）</h3>
<p>10 山地步兵 + 工兵连 + 侦查连。在山地和森林地形中表现优异，适合意大利前线、巴尔干和苏联北部地区。</p>

<h2>⚡ 德国闪电战速通时间线</h2>

<ol>
<li><strong>1936~1939 年（准备期）：</strong>疯狂发展工业，研究坦克科技，建造军用工厂。政治点数优先用于签顾问（-5%消费品工厂）、造核心宣称、签科研顾问</li>
<li><strong>1939 年（首战）：</strong>吞并捷克斯洛伐克（慕尼黑协议）→ 但泽或战争 → 入侵波兰。在 10 月前完成波兰战役</li>
<li><strong>1940 年（西线）：</strong>黄色方案——装甲师绕过马奇诺防线，经低地国家攻入法国。目标在 7 月前让法国投降</li>
<li><strong>1941 年（东线）：</strong>巴巴罗萨计划——三路大军进攻苏联，目标在冬季到来前占领莫斯科。</li>
</ol>

<blockquote>
<p>💡 <strong>关键提示：</strong>早战（1937~1939年开战）比晚战更有利，因为 AI 盟友（尤其是英法美苏）的军工产值随时间指数级增长。越晚开战，你的闪电战就越难达成包围歼灭的效果。</p>
</blockquote>

<h2>✈️ 空战体系</h2>
<ul>
<li><strong>战斗机：</strong>速度和发动机优先研发——制空权是一切地面行动的前提。没有制空权的陆军就是活靶子</li>
<li><strong>近距支援机（CAS）：</strong>对地攻击，提供地面战斗的直接支援。CAS 是闪电战的核心空中力量</li>
<li><strong>战略轰炸机：</strong>破坏敌方工业，但需要前期取得制空权后才能使用</li>
<li><strong>空战配比建议：</strong>战斗机 : CAS : 战略轰炸 = 5:3:1</li>
</ul>

<h2>⚓ 海军与制海权</h2>
<p>不列颠之战（1940）是德国玩家最大的挑战。建议：1938年开始大量建造潜艇和进行空中布雷。用 20~30 艘潜艇埋伏在英格兰周边海峡，配合空中布雷阻断英国的海上补给线。同时派出 CAS 机群轰炸港口设施降低运输效率。</p>

<h2>⚠️ 新手常犯错误</h2>
<ul>
<li><strong>盲目造师不造工厂：</strong>只有足够的军用工厂产出坦克和飞机，你的师才有战斗力。造兵前先确保军工产能</li>
<li><strong>忽略空军：</strong>没有制空权的陆军就是活靶子。钢4的空战系统远比看起来重要——制空权=地面控制权</li>
<li><strong>编制宽度不看地形：</strong>40宽师在平原所向无敌，但在森林/沼泽/山地中会因超宽受到严重惩罚</li>
<li><strong>不画战争计划：</strong>不开战前画好进攻线，陆军就得不到计划经验，进攻时组织度消耗极大</li>
</ul>
                """,
    "strategy-08.html": """                    
<h2>🏰 王国保卫战全系列入门</h2>

<p>《王国保卫战》（Kingdom Rush）系列是塔防游戏的标杆之作。本指南将从防御塔选择、英雄评级到噩梦难度通关策略，帮你打造不可攻破的防线。</p>

<h2>🗼 防御塔选择指南</h2>
<p>每座塔都有两种升级分支，选择合适的分支是通关的关键：</p>

<h3>兵营（Barracks）——拦截核心</h3>
<ul>
<li><strong>圣骑士殿：</strong>高防御 + 自我治疗。适合承受持续伤害的持久战</li>
<li><strong>黑暗骑士：</strong>高伤害 + 吸血。适合快速击杀敌人的爆发场景</li>
<li>至少保持 2 个兵营在关键路口，没有兵营拦截等于门户大开</li>
</ul>

<h3>弓箭塔（Archer Tower）——单体输出</h3>
<ul>
<li><strong>游侠藏身处：</strong>毒箭 + 捆绑控制。适合减速和控制精英敌人</li>
<li><strong>狙击哨站：</strong>暴击 + 秒杀。适合清理高血量单体目标</li>
<li>弓箭塔配合兵营是最基础的拦截-输出组合</li>
</ul>

<h3>法师塔（Mage Tower）——魔法伤害</h3>
<ul>
<li><strong>大法师塔：</strong>高魔法伤害，适合对付高护甲敌人（物理打不动的）</li>
<li><strong>奥术巫师：</strong>传说变形（变羊）控制技能，适合应对精英敌人</li>
<li>法师塔是噩梦难度下每张地图的必备塔型——至少建 2~3 座</li>
</ul>

<h3>炮塔（Artillery）——范围物理伤害</h3>
<ul>
<li><strong>巨型加农炮：</strong>高伤害 + 大范围溅射，适合群体敌人</li>
<li><strong>火箭发射器：</strong>高伤害单体，适合对付 Boss 和精英</li>
<li>在转弯外侧放置炮塔效果最佳——弯道处的敌人会减速，延长爆炸覆盖时间</li>
</ul>

<h2>💰 噩梦难度通用策略</h2>
<ul>
<li><strong>开局：</strong>优先升级兵营到 2 级，拦截敌人争取时间</li>
<li><strong>中路：</strong>每个路径交叉点至少 1 座法师塔——高甲敌人主要靠魔法对付</li>
<li><strong>经济管理：</strong>前 6 波不要浪费金币升级非关键塔。把金币省下来在关键波次升级</li>
<li><strong>英雄技能：</strong>掌握每个英雄技能的冷却时间，在关键时刻使用而不是冷却好了就放</li>
<li><strong>道具管理：</strong>召唤援军和火雨是清场的神器——不要省着不用。噩梦难度下错过时机比浪费道具更致命</li>
</ul>

<h2>⭐ 全系列最佳英雄</h2>
<ul>
<li><strong>《王国保卫战》原版：</strong>Gerald（坦克+治疗）和 Ignus（近战AOE）是最稳的组合</li>
<li><strong>《前线》：</strong>Bonehart（远程龙）和 Alric（全能战士）适用任何关卡</li>
<li><strong>《起源》：</strong>Arivan（精灵法师）和 Phoenix（复活+爆发）适合高难度挑战</li>
<li><strong>《复仇》：</strong>Mortemis（召唤流最强）和 Beresa（蛛后控场）控场能力独一档</li>
</ul>

<h2>🔧 进阶布局黄金法则</h2>

<h3>弯道布局</h3>
<p>在怪物转弯的外侧放置炮塔或法师塔——怪物在弯道处会减速，延长它们在火力范围内的暴露时间。</p>

<h3>拦截-输出三角配置</h3>
<p>每个重要位置采用"1兵营 + 2输出塔"的三角配置。兵营拦截后，法师塔和炮塔同时输出——此组合可以应对 90% 的敌人类型。</p>

<h3>交叉火力</h3>
<p>确保两个以上塔的攻击范围有重叠区域——特别是在飞行怪物路径上。飞行怪物无视兵营拦截，只能靠塔的火力覆盖。</p>

<h2>🥚 全系列隐藏成就</h2>
<ul>
<li><strong>《王国保卫战》原版：</strong>在"腐木林"关卡用毒箭塔击杀 100 个敌人，解锁隐藏英雄"暗夜弓箭手"</li>
<li><strong>《前线》：</strong>在"沙尘"关卡中不使用任何炮塔通关，解锁彩蛋英雄"沙虫骑士"</li>
<li><strong>《起源》：</strong>在"银橡森林"关卡中让精灵法师击碎 50 棵石化树，解锁隐藏道具"古树之心"</li>
<li><strong>《复仇》：</strong>在"龙之裂隙"关卡让 Mortemis 召唤的骷髅击杀巨龙 Boss，解锁"亡灵王"皮肤</li>
</ul>

<h2>⚠️ 新手雷区</h2>
<ul>
<li><strong>只造攻击塔不造兵营：</strong>没有兵营拦截敌人，怪物会直冲终点。至少保持 2 个兵营在关键路口</li>
<li><strong>英雄不用技能：</strong>英雄的技能冷却好了就放——很多新手忘了英雄有主动技能，全程平A浪费大部分战斗力</li>
<li><strong>不卖塔换位：</strong>建错了位置或者前期临时塔已经没用——果断卖掉回收金币重新布局</li>
<li><strong>忽视道具系统：</strong>噩梦难度下道具（援军/火雨/闪电）是通关的关键，要舍得用，不要想着"留着后面"</li>
</ul>
                """
}

for filename, new_content in NEW_CONTENTS.items():
    filepath = f"{BASE}\\{filename}"
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Find the <div class="guide-body"> and its corresponding closing </div>
    # We use a non-greedy match between the opening div and the first </div> that follows
    pattern = r'(<div class="guide-body">)(.*?)(?=\s*</div>\s*</article>)'
    
    # Actually let's be more precise - find guide-body opening, then the CLOSING </div> that ends the guide-body section
    # The pattern is: the guide-body content is between <div class="guide-body"> and the </div> that comes before <div class="affiliate-links"> or <hr style="margin:40px...
    # Let's use a more careful approach
    
    # Strategy 01 has affiliate-links after guide-body
    # Strategy 03, 05, 06, 07, 08 have <hr style="margin:40px 0;" after guide-body
    
    replacement = f'<div class="guide-body">{new_content}'
    
    # Find the guide-body opening
    start = text.find('<div class="guide-body">')
    if start == -1:
        print(f"ERROR: Could not find guide-body in {filename}")
        continue
    
    # Find the closing </div> that belongs to guide-body
    # It's right before either <div class="affiliate-links" or <hr style="margin:40px
    end_markers = ['<div class="affiliate-links"', '<hr style="margin:40px']
    end_pos = None
    for marker in end_markers:
        pos = text.find(marker, start)
        if pos != -1:
            end_pos = pos
            break
    
    if end_pos is None:
        # Try to find </div> followed by </article>
        possible_end = text.find('</div>', start)
        next_article = text.find('</article>', start)
        # Find the last </div> before </article>
        last_div_before_article = text.rfind('</div>', start, next_article)
        if last_div_before_article != -1:
            end_pos = last_div_before_article
    
    if end_pos is None:
        print(f"ERROR: Could not find end marker in {filename}")
        continue
    
    # Find the </div> just before the end marker
    end_div = text.rfind('</div>', start, end_pos)
    if end_div == -1:
        print(f"ERROR: Could not find closing div in {filename}")
        continue
    
    new_text = text[:start] + replacement + text[end_div+6:]  # 6 = len('</div>')
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_text)
    
    print(f"OK {filename} replaced successfully")

print("\nDone!")
