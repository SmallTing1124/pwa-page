import './App.css'
function App() {
  return (
    <section className="relative h-screen px-[10vw] overflow-hidden">
      {/* 背景固定層 */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: "url(/images/home/bg.png)" }}
        />
        <div
          className="absolute top-[-10%] right-[-10%] w-full h-full bg-no-repeat bg-right-top opacity-50 pointer-events-none animate-treeShadow"
          style={{ backgroundImage: "url(/images/home/tree-shadow.png)" }}
        />
        <div className="absolute top-0 left-0 w-[45px] h-[70vh] bg-[#4d4d4d]" />
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-[length:100%] pointer-events-none"
          style={{ backgroundImage: "url(/images/home/bg01.png)" }}
        />
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-[length:100%] pointer-events-none"
          style={{ backgroundImage: "url(/images/home/bg02.png)" }}
        />
      </div>

      {/* 主內容層 */}
      <div className="relative z-10 flex h-full items-center justify-center pb-[5vw]">
        <div className="w-1/4">
          <img src="/images/logo.svg" alt="玖木蘊" className="h-[35vh] w-auto" />
        </div>
        <div className="w-3/4">
          <ul className="flex h-[35vh] list-none p-0 m-0">
            {[
              "談　玖木",
              "和築建築師",
              "講講生活",
              "建築之蘊",
              "蘊藏想像",
            ].map((label, i) => (
              <li key={i} className="relative flex items-end px-4">
                <a
                  href="#"
                  className="relative text-white text-[1.1rem] leading-[3] tracking-[15px] writing-vertical whitespace-nowrap opacity-70 hover:opacity-100 transition-all duration-500 group"
                >
                  <span className="absolute top-0 left-0 w-[3px] h-0 bg-[#e38012] group-hover:h-[93%] transition-all duration-1000" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default App
