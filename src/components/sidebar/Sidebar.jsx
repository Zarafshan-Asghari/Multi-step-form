export default function Sidebar({steps ,formStep}){
    return(
              <div
          className={`flex md:flex-col md:justify-start md:items-start items-center justify-center gap-4 md:bg-[url('../public/images/bg-Sidebar-desktop.svg')] w-full bg-cover bg-center  h-full rounded-2xl px-6 py-8 md:w-1/3  bg-[url('../public/images/bg-Sidebar-mobile.svg')] bg-blue-900`}
        >
          {steps.map((s, index) => (
            <span key={index} className={`flex items-start gap-3  `}>
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full border-1 border-blue-50 ${
                  formStep === index + 1
                    ? "bg-blue-200 border-blue-200 text-black/60 "
                    : " text-blue-50"
                }`}
              >
                {index + 1}
              </span>
              <div className="hidden md:flex flex-col items-start uppercase">
                <span className="text-sm text-blue-200 text-sx font-thin">step {index + 1}</span>
                <p className="text-blue-50 text-sm font-semibold">{s.title}</p>
              </div>
            </span>
          ))}
        </div>
    )
}