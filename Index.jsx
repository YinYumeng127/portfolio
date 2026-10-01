import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  CircleGauge,
  Database,
  GraduationCap,
  Menu,
  Network,
  ScanSearch,
  Target,
  WandSparkles,
  X,
} from "lucide-react";

const navItems = [["职业坐标", "coordinates"], ["飞轮", "method"], ["经历", "experience"], ["项目", "campaigns"], ["AI 探索", "ai"], ["能力", "skills"]];

const coordinates = [
  { icon: GraduationCap, code: "01", title: "工程 + 商业管理", text: "工程训练建立结构化拆解能力，商业管理学习提供经营视角与决策框架。" },
  { icon: Network, code: "02", title: "跨行业经历", text: "从工业渠道销售与商管，到互联网平台运营，理解不同商业模式下的增长路径。" },
  { icon: Target, code: "03", title: "B 端经营主线", text: "聚焦客户、渠道与供给经营，把复杂业务转化为可协同、可验证的系统。" },
];

const flywheelSegments = [
  { label: "更多优质供给", desc: "持续扩充高质量供给来源，让更多优质商品和服务进入平台，为整个经营循环打下基础。", icon: BriefcaseBusiness },
  { label: "更优商品信息", desc: "对商品信息进行标准化治理，使信息更准确、完整、可读，让供给能够被高效识别与分发。", icon: Database },
  { label: "更好用户体验", desc: "优质供给与信息质量共同提升用户浏览、选择和决策的体验，降低认知成本与决策门槛。", icon: Target },
  { label: "转化率提升", desc: "体验改善直接带来更高的点击转化和下单概率，让更多流量转化为实际交易。", icon: CircleGauge },
  { label: "更多订单", desc: "转化率提升带来订单量增长，为平台和供给方创造更大的交易规模与商业价值。", icon: ArrowUpRight },
  { label: "更多流量", desc: "更多订单和更好的口碑吸引更多用户访问平台，形成流量正循环。", icon: Network },
  { label: "更精细运营", desc: "流量增长提供了更丰富的数据和场景，支持更精细化的用户与供给运营策略。", icon: ScanSearch },
  { label: "经营效率与增长提升", desc: "精细化运营持续提升经营效率，降低成本、提升产出，推动业务健康增长。", icon: CircleGauge },
  { label: "资源回流并继续扩充供给", desc: "增长带来的收益和资源被重新投入供给建设，形成持续强化的正向飞轮循环。", icon: ArrowUpRight },
];

const careerStories = [
  { code: "01", title: "工业领域：渠道商管与经营协同", subtitle: "渠道网络 · 经营节奏 · 协同落地", icon: Network, content: "围绕代理商分层、年度经营目标和市场覆盖搭建渠道经营节奏，协同数字化运营与产品配置，把策略要求转化为区域可执行动作与经营复盘。", tags: ["代理商分层", "经营协同", "市场覆盖", "数字化运营"] },
  { code: "02", title: "互联网平台：服务商与供给体系搭建", subtitle: "组织机制 · 供给建设 · 规模复制", icon: BriefcaseBusiness, content: "建立 BPO 服务商招募、管理、培养与评估体系，结合智能触达和专家团协作，推动智能组品从区域试点走向可复制的全链路供给建设。", tags: ["服务商体系", "智能触达", "专家协同", "供给搭建"] },
  { code: "03", title: "文旅场景：商品信息治理与增长放大", subtitle: "信息标准 · 优势识别 · 全场域增长", icon: CircleGauge, content: "以商品信息治理识别并分层优势供给，联动货架、搜索推荐与营销场放大 UV 和 CVR 增量，最终归因至大盘 GTV 的可量化增长。", tags: ["商品信息治理", "优势供给", "场域协同", "增长验证"] },
];

const campaigns = [
  { id: "channel", number: "01", label: "CHANNEL PARTNER MANAGEMENT", title: "渠道伙伴分层与年度经营框架", challenge: "在行业承压周期中，需要提前锁定渠道伙伴资源与年度承诺，并持续提升全年履约质量；目标是建立不少于 5 万台的年度承诺基础。", strategy: "建立覆盖合作年限、商业发展模式、企业规模、发展潜力、合作意愿与价值观的多维伙伴画像；以“我方重要性 × 伙伴重要性”构建四象限分层，形成战略合作伙伴、忠诚伙伴、关键机会伙伴和潜力伙伴四类对象。针对不同分层配置差异化支持：核心伙伴强化承诺与资源协同，高潜伙伴降低参与门槛，提供能力培训、发展支持与成长辅导；同时将基础承诺、阶段冲刺和过程监控拆分设计，并结合历史、市场与竞争环境制定阶梯激励，按过程达成动态校准。", results: ["新增 507 家：合作伙伴拓展与经营覆盖提升", "3 站：完成伙伴沟通与年度经营路演", "1,150 家：在 Q1 前完成有效签约", "约 7 万台：提前锁定年度承诺，较原目标超额约 2 万台", "5.3 万台：在既定资源范围内完成全年销售目标，并在行业承压中保持增长"], method: "用伙伴画像识别差异，用分层政策配置资源，用过程监控动态校准激励，把渠道合作转化为可经营、可预测、可复用的增长系统。" },
  { id: "supply", number: "02", label: "INTELLIGENT SUPPLY", title: "智能组品全链路供给建设", challenge: "区域供给质量与经营动作存在差异，供给建设需要同时解决组织协同、组品效率与交易转化。", strategy: "搭建服务商体系与专家团协作机制，引入智能触达，围绕组品标准、执行节奏与营销承接推动全链路建设。", results: ["4%：百城组品交易占比", "+23.8%：增量贡献", "+58.8%：套餐日均订单环比", "+3.3pt：访购率环比"], method: "用服务商机制承接规模，用专家规则保障质量，用数据复盘迭代组品策略。" },
  { id: "scenic", number: "03", label: "ADVANTAGE AMPLIFICATION", title: "景点商品标准化与优势供给放大", challenge: "商品信息质量难以直接转化为经营价值，优势供给需要被识别、分发与验证。", strategy: "重建商品信息标准并识别优势供给，通过货架、搜索推荐及营销场协同提升 UV 和 CVR；以实验与节点经营验证增长对 GTV 的贡献。", results: ["1,800 个：头部 POI 标准覆盖", "97.9% / 98.2%：基础 / 丰富字段准确率", "+0.19pt：AB 测试 CVR 提升", "6,006 万 + 2,800 万：消费 GTV 与纯增量支付 GTV"], method: "标准化不是终点：标准识别优势、场域放大优势、实验验证增长、资产沉淀方法。" },
];

const skillGroups = [
  ["经营设计", ["经营诊断", "策略拆解", "供给 / 渠道策略"]],
  ["系统执行", ["项目管理", "组织协同", "流程与规则设计"]],
  ["增长验证", ["数据分析", "SQL", "AB 测试", "经营数据可视化"]],
  ["智能化", ["AI 工作流", "业务规则建模", "规模化应用"]],
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [expandedCampaign, setExpandedCampaign] = useState("scenic");
  const [activeSegment, setActiveSegment] = useState(null);

  useEffect(() => {
    const ids = ["top", ...navItems.map(([, id]) => id)];
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setActiveSection(current.target.id);
    }, { rootMargin: "-28% 0px -62% 0px" });
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  const navigateTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenuOpen(false); };

  return <main className="portfolio-shell">
    <div className="scanlines" aria-hidden="true" />
    <header className="site-header">
      <button className="brand" onClick={() => navigateTo("top")} aria-label="返回顶部"><span className="brand-mark">YYM</span><span className="brand-label">殷雨濛 · OPERATING PORTFOLIO / 2026</span></button>
      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="页面导航">{navItems.map(([label, id]) => <button key={id} className={activeSection === id ? "active" : ""} onClick={() => navigateTo(id)}>{label}</button>)}</nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "关闭导航" : "打开导航"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </header>

    <section id="top" className="hero profile-hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span /> 殷雨濛 / YIN YUMENG · OPERATING PORTFOLIO 2026</p>
        <h1 className="identity-title"><span className="identity-cn">殷雨濛</span><span className="identity-en">YIN YUMENG</span></h1>
        <p className="hero-statement">跨学科、跨行业的 B 端经营与运营实践者</p>
        <p className="hero-description">在复杂业务中，把问题拆成可执行的经营系统。工程与商业管理教育背景，经历销售渠道与商管、平台供给运营，并持续探索 AI 驱动的业务工作流。</p>
        <button className="text-link" onClick={() => navigateTo("coordinates")}>了解职业坐标 <ArrowDown size={16} /></button>
      </div>
      <div className="profile-identity" aria-label="个人身份与头像">
        <div className="avatar-ring">
          <img src="/portfolio/avatar.jpg" alt="殷雨濛头像" className="avatar-img" />
        </div>
        <p className="avatar-name">殷雨濛 · YIN YUMENG</p>
      </div>
    </section>

    <section id="coordinates" className="section-wrap content-section">
      <div className="section-heading"><p>01 / BACKGROUND & COORDINATES</p><h2>多元背景与职业坐标</h2><span>将跨学科训练、跨行业经验与 B 端经营能力汇聚为一条主线</span></div>
      <div className="coordinate-grid">{coordinates.map(({ icon: Icon, code, title, text }) => <article key={code}><Icon size={22} /><p>{code}</p><h3>{title}</h3><span>{text}</span></article>)}</div>
      <div className="education-strip"><span>EDUCATION</span><p><strong>帝国理工学院</strong> 水利工程与商业管理硕士 <i /> <strong>南京信息工程大学 × 雷丁大学</strong> 环境工程学士</p></div>
    </section>

    <section id="method" className="section-wrap content-section method-section">
      <div className="section-heading">
        <p>02 / SUPPLY-DRIVEN FLYWHEEL</p>
        <h2>供给标准化驱动的业务价值飞轮</h2>
        <span>以供给标准化为起点，形成从供给扩充到资源回流的自增强增长循环</span>
      </div>
      <div className="flywheel-container">
        <div className="flywheel-visual">
          <div className="flywheel-outer-ring"></div>
          <div className="flywheel-middle-ring"></div>
          <div className="flywheel-inner-ring"></div>
          <div className="flywheel-center">
            <Target size={26} />
            <span>供给标准化<br />业务价值飞轮</span>
          </div>
          {flywheelSegments.map((seg, i) => {
            const angle = (i * 360) / flywheelSegments.length - 90;
            const radius = 44;
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
            return (
              <button
                key={i}
                className={`flywheel-segment ${activeSegment === i ? "is-active" : ""}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setActiveSegment(i)}
                onMouseLeave={() => setActiveSegment(null)}
                onClick={() => setActiveSegment(activeSegment === i ? null : i)}
                aria-label={seg.label}
              >
                <span className="segment-dot"></span>
                <span className="segment-num">{String(i + 1).padStart(2, '0')}</span>
              </button>
            );
          })}
          <div className="flywheel-arrows">
            {flywheelSegments.map((_, i) => {
              const angle = (i * 360) / flywheelSegments.length - 90;
              return <span key={i} className="flow-arrow" style={{ transform: `rotate(${angle + 45}deg)` }} />;
            })}
          </div>
        </div>
        <div className="flywheel-legend">
          <div className="legend-active">
            {activeSegment !== null ? (
              <>
                <p className="legend-label">环节 {String(activeSegment + 1).padStart(2, '0')}</p>
                <h3>{flywheelSegments[activeSegment].label}</h3>
                <p className="legend-desc">{flywheelSegments[activeSegment].desc}</p>
              </>
            ) : (
              <p className="legend-hint">悬停或点击飞轮各环节，查看业务含义</p>
            )}
          </div>
          <div className="legend-list">
            {flywheelSegments.map((seg, i) => (
              <button
                key={i}
                className={`legend-item ${activeSegment === i ? "is-active" : ""}`}
                onMouseEnter={() => setActiveSegment(i)}
                onMouseLeave={() => setActiveSegment(null)}
                onClick={() => setActiveSegment(activeSegment === i ? null : i)}
              >
                <span className="legend-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="legend-text">{seg.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="experience" className="section-wrap content-section">
      <div className="section-heading"><p>03 / CROSS-INDUSTRY JOURNEY</p><h2>跨行业经历</h2><span>能力阶段随业务复杂度持续升级</span></div>
      <div className="story-grid">{careerStories.map(({ code, title, subtitle, icon: Icon, content, tags }) => <article className="story-card" key={code}><div className="story-top"><p>{code}</p><Icon size={21} /></div><p className="story-subtitle">{subtitle}</p><h3>{title}</h3><p className="story-content">{content}</p><div className="role-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    </section>

    <section id="campaigns" className="section-wrap content-section">
      <div className="section-heading"><p>04 / REPRESENTATIVE PROJECTS</p><h2>代表项目</h2><span>从渠道、供给到文旅场景，呈现可迁移的经营方法</span></div>
      <div className="campaign-list">{campaigns.map((campaign) => {
        const expanded = expandedCampaign === campaign.id;
        return <article className={`campaign-card ${expanded ? "is-expanded" : ""}`} key={campaign.id}>
          <button className="campaign-trigger" onClick={() => setExpandedCampaign(expanded ? "" : campaign.id)} aria-expanded={expanded}>
            <span className="campaign-number">{campaign.number}</span>
            <span className="campaign-title"><small>{campaign.label}</small><strong>{campaign.title}</strong></span>
            <span className="campaign-action">{expanded ? "收起档案" : "展开档案"}<ChevronDown size={18} /></span>
          </button>
          {expanded && <div className="campaign-detail">
            <div><p>业务难题</p><h4>{campaign.challenge}</h4></div>
            <div><p>策略动作</p><h4>{campaign.strategy}</h4></div>
            <div><p>关键结果</p><ul>{campaign.results.map((result) => <li key={result}>{result}</li>)}</ul></div>
            <div><p>可复用方法</p><h4>{campaign.method}</h4></div>
          </div>}
        </article>;
      })}</div>
    </section>

    <section id="ai" className="section-wrap content-section ai-section">
      <div className="ai-intro"><p className="eyebrow"><span /> AI EXPLORATION</p><h2>AI 驱动的供给运营能力沉淀</h2><p>这不是简单使用效率工具，而是围绕运营流程进行再设计，将业务标准与工作方法沉淀为可规模化应用的智能能力，持续提升供给运营的执行质量与协同效率。</p></div>
      <div className="ai-grid">
        <article><WandSparkles size={23} /><p className="explore-code">L1 AI / SKILL</p><h3>L1 AI｜票种命名改写 Skill</h3><p>核心价值不在于单条改名，而是将商品标准沉淀为轻量、可复用的智能能力。已服务 100+ 前后线同学使用，让标准从少数专家的人工判断转化为可自助调用的日常工具，显著降低标准落地门槛，提升执行效率与一致性。</p><span>标准沉淀 · 自助调用 · 一致执行</span></article>
        <article><Bot size={23} /><p className="explore-code">L2 AI / AGENT & WORKFLOW</p><h3>L2 AI｜货架走查智能 Agent 与 Workflow</h3><p>核心价值是重塑供给质量走查的工作闭环：由 AI 完成走查、识别、分析、总结、汇报与可视化的端到端流程；人从执行者转为关键结果确认与例外处理者，形成“AI 闭环执行，人负责确认”的人机协同模式。</p><span>端到端走查 · AI 闭环执行 · 人机协同确认</span></article>
      </div>
    </section>

    <section id="skills" className="section-wrap content-section">
      <div className="section-heading"><p>06 / CAPABILITY MATRIX</p><h2>能力矩阵</h2><span>面向 B 端复杂业务的通用经营能力组合</span></div>
      <div className="skill-grid">{skillGroups.map(([title, skills], index) => <article key={title}><p>0{index + 1} / {title}</p><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
    </section>

    <footer><span>殷雨濛 · YIN YUMENG / OPERATING PORTFOLIO</span><button onClick={() => navigateTo("top")}>BACK TO TOP <ArrowUpRight size={14} /></button><span>PREVIEW ONLY · 2026</span></footer>
  </main>;
};

export default Index;
