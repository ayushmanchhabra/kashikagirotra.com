import { ProjectJunoImage1 } from "../../assets";

export default function Juno() {
    return (
        <div    >
            <span className="pl-20 text-[84px]">
                Juno - AI Assistant
            </span>

            <hr className="mt-10 mb-10 ml-20 mr-20 text-[#DFE4DF]" />

            <div className="pl-20 pr-20">
                <h5 className="text-[24px]">Experience Design for an AI Assistant</h5>
                <span className="text-[16px] text-[#333333]">
                    Juno is an AI-powered assistant designed to simplify workplace experiences by offering instant help for HR-related tasks, be it applying for leave, understanding benefits, or setting performance goals. Born from a robust UX and research-led approach, Juno blends Generative AI with an intuitive conversational interface to enhance the employee experience.
                </span>
                <img className="border-0 rounded-[20px] mt-25 mb-25" alt="Project Juno Image 1" src={ProjectJunoImage1} />
            </div>

            <span className="pl-20 mt-30 text-[42px]">
                Background & Problem
            </span>

            <hr className="mt-10 mb-10 ml-20 mr-20 text-[#DFE4DF]" />

            <div className="h-full pl-20 pt-15 grid grid-cols-[1fr_2fr] items-center flex justify-start items-center">
                <div>
                    <span>
                        What problem were we solving?
                    </span>
                </div>
                <div>
                    <span>While the ExP portal simplified how employees interact with HR systems, it still required them to navigate through multiple sections to complete even simple tasks. This constant back-and-forth, no matter how streamlined, added to their mental load and took time away from actual work.</span>
                    <span>We realized that employees didn’t just need a better system, they needed a smarter, more human way to interact with it. One that could understand their intent, automate repetitive tasks, and offer support in a natural, conversational manner.</span>
                </div>
            </div>

        </div>
    );
}
