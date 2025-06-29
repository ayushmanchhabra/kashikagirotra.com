import { Logo } from '../assets';

export default function Home() {

    return (
        <>
            <section className='h-full pl-20 max-md:pl-10 pt-15 grid grid-cols-[2fr_1fr] items-center flex justify-start items-center'>

                <div className="flex flex-col items-start justify-center">

                    <span className='font-medium mb-8'>4+ years of work experience · Product Design</span>

                    <span className="text-[48px] max-sm:text-[36px] text-black gap-4 leading-tight">
                        Hey! I'm <span className='text-[#8A93EF]'>Kashika.</span>
                        <br />
                        I enjoy crafting user centric,
                        <br />
                        <span className='text-[#666666]'>impactful digital experiences.</span>
                    </span>
                </div>

                <div className="max-sm:hidden h-full w-full flex flex-col items-center justify-center">
                    <img
                        src={Logo}
                        alt="Hero"
                        className="w-28 h-28 object-cover rounded-full"
                    />
                </div>
            </section>

            <hr className="w-96 ml-20 max-md:ml-10 mt-10 h-[1.0px] bg-gradient-to-r from-transparent via-slate-400 to-transparent border-0" />

            <section className='pl-20 max-md:pl-10 pt-10 grid grid-cols-2 items-center'>
                <div className="flex md:flex-row items-start justify-center max-sm:flex-col max-sm:gap-10 md:gap-30">
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
        </>
    );
}