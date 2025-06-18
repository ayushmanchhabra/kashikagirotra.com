import Logo from './logo.jpeg';

function App() {

  return (
    <div>

      {/* TODO: componentise this */}
      <header className='h-24 w-full pl-20 flex items-center text-lg'>
        <span className='mt-2'>
          K<span className='text-[#8B92F0]'>.</span>
        </span>

        <nav className='flex items-center justify-center w-full pr-20'>
          <ul className='flex items-center gap-10'>
            <li><a className="text-black text-lg" href="/home">
              <div className="relative h-6 overflow-hidden group w-fit">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Home
                </span>

                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-[#666666]">
                  Home
                </span>
              </div>
            </a></li>
            <li><a className="text-black text-lg" href="/about">
              <div className="relative h-6 overflow-hidden group w-fit">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  About
                </span>

                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-[#666666]">
                  About
                </span>
              </div>
            </a></li>
            <li className="">
              <a className="bg-black hover:bg-white text-white hover:text-black border-1 transition duration-300 rounded-full pt-1.5 pb-1.5 pl-4 pr-4 text-lg absolute right-30 top-7.5" href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className=' h-full pl-20 pt-15 flex justify-start items-center'>

        <div className="flex flex-col items-start justify-center">

          <span className='font-medium mb-8'>4+ years of work experience · Product Design</span>

          <span className="text-[48px] text-black gap-4 leading-tight">
            Hey! I'm <span className='text-[#8A93EF]'>Kashika.</span>
            <br />
            I enjoy crafting user centric,
            <br />
            <span className='text-[#666666]'>impactful digital experiences.</span>
          </span>
        </div>

        <div className="flex items-center justify-center ml-40 mb-30">
          <img
            src={Logo}
            alt="Hero"
            className="w-28 h-28 object-cover rounded-full"
          />
        </div>
      </section>

      <hr className="w-72 ml-20 mt-10 h-[1.0px] bg-gradient-to-r from-transparent via-slate-400 to-transparent border-0" />

      <section className='pl-20 pt-10 grid grid-cols-2 items-center'>
        <div className="flex flex-row items-start justify-center gap-30">
          <div className='flex flex-col items-start justify-center'>
            <span className='text-2xl text-semibold'>Currently</span>
            <span className='text-lg text-semibold text-[#00000080]'>Senior Analyst @ Accenture</span>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-2xl text-semibold'>Previously at</span>
            <span className='text-lg text-semibold text-[#00000080]'>IBM, Delhivery</span>
          </div>
        </div>
      </section>

    </div >
  )
}

export default App
