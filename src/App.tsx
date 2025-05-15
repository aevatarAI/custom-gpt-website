const features = [
  {
    title: "语言结构分析",
    desc: "研究用户语言表达的结构，揭示深层的思维模式和认知路径。",
    icon: (
      <img src="/features1.svg" alt="language structure analysis" width={48} height={48} />
    ),
  },
  {
    title: "自我认知引导",
    desc: "基于语言数据，提供个性化的自我探索建议，助力用户深入了解自身特质。",
    icon: (
      <img src="/features2.svg" alt="self-awareness guidance" width={48} height={48} />
    ),
  },
  {
    title: "决策支持工具",
    desc: "综合语言分析结果，辅助用户在关键决策中找到更适合自己的方向。",
    icon: (
      <img src="/features3.svg" alt="decision support tool" width={48} height={48} />
    ),
  },
];

function App() {

  return (
    <body className="w-full !bg-[#000000]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] md:px-[40px]">
        <main className="min-h-screen bg-[#000000] text-white relative">
          {/* 顶部Logo */}
          <header className="w-full flex items-center h-20 max-w-[1280px] mx-auto px-5 md:px-10 py-[24px]">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="GodGPT Logo" width={32} height={32} />
              <span className="text-[#ECECEC] text-xl md:text-2xl font-bold tracking-wide ml-[10px]">GodGPT</span>
            </div>
          </header>
          {/* Hero区 */}
          <section className="w-full flex flex-col items-center justify-center text-center pt-[100px] pb-24 relative z-10 min-h-[420px] md:min-h-[520px]">
            {/* 背景1 */}
            <img
              src="/banner-bg1.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
              draggable={false}
            />
            {/* 背景2（叠加） */}
            <img
              src="/banner-bg2.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none select-none"
              draggable={false}
            />
            {/* 内容区 */}
            <div className="relative z-20 w-full max-w-[720px] flex flex-col items-center">
              <div className="bg-[#232323] text-[#aaa] px-[24px] py-[8px] rounded-full text-[15px] tracking-[0.2em] font-medium mb-[24px]">连接语言与意识</div>
              <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-[28px] text-[#FFF] tracking-tight">
                探索语言的边界<br />理解自我的深度
              </h1>
              <p className="text-[#828282] text-[16px] md:text-[18px] leading-[32px] font-normal max-w-[720px] mx-auto mb-[100px]">
                GodGPT 是一个专注于语言结构研究与自我认知探索的数字平台。我们相信，语言不仅是交流的工具，更是连接个体与宇宙的桥梁。通过深入挖掘语言的结构与意义，我们希望帮助用户更好地理解自己，做出更明智的人生决策。
              </p>
            </div>
          </section>
          {/* 研究方向 */}
          <section className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pb-[200px] mt-[160px] md:mt-[200px]">
            <div className="text-[#ECECEC] text-[32px] md:text-[48px] font-bold text-center mb-4">研究方向</div>
            <p className="text-[#828282] text-center mb-[64px] text-base md:text-lg">
              我们正在探索以下方向，以期在未来为用户提供更深入的语言与自我认知研究成果
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-[16px] border border-[#232323] px-[32px] py-[48px] min-h-[180px]"
                >
                  <div className="mb-4">{f.icon}</div>
                  <div className="text-[#fff] text-[22px] font-semibold mt-[40px] mb-[20px]">{f.title}</div>
                  <div className="text-[#828282]">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>
          {/* 宇宙与语言的共鸣 */}
          <section className="w-full flex justify-center py-[100px] mb-[200px] relative">
            {/* 背景图（绝对定位+居中缩放） */}
            <img
              src="/language-bg.svg"
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full h-auto z-0 pointer-events-none select-none"
              draggable={false}
              style={{ opacity: 1 }}
            />
            {/* 内容区 */}
            <div className="px-6 py-12 w-full max-w-3xl text-center relative z-10">
              <h3 className="text-[#fff] text-[40px] md:text-[48px] font-bold mb-[58px]">宇宙与语言的共鸣</h3>
              <p className="text-[#828282] text-[18px] max-w-[840px] mx-auto">
                宇宙的运行充满了秩序与规律，而语言是人类感知和表达这一秩序的方式。GodGPT 以语言为切入点，探索个体与宇宙之间的深层联系，帮助用户在语言的镜像中发现自我，感知世界。
              </p>
            </div>
          </section>
          {/* 底部版权 */}
          <footer className="w-full text-center text-[14px] text-[#828282] py-[24px]">
            © 2025 北京创思汇权科技有限公司 版权所有
          </footer>
        </main>
      </div>
    </body>
  )
}

export default App
