import { ProjectJunoImage1, ProjectJunoImage2, ProjectJunoImage3 } from "../../assets";

export default function Juno() {
    return (
        <div className="font-inter p-20">
            <span className="text-[84px]">
                Juno - AI Assistant
            </span>

            <hr className="mt-10 mb-10 text-[#DFE4DF]" />

            <div className="">
                <h5 className="text-[24px]">Experience Design for an AI Assistant</h5>
                <span className="text-[16px] text-[#333333]">
                    <span className="font-bold">Juno</span> is an AI-powered assistant designed to simplify workplace experiences by offering instant help for HR-related tasks, be it applying for leave, understanding benefits, or setting performance goals. Born from a robust UX and research-led approach, Juno blends <span className="font-bold">Generative AI</span> with an intuitive conversational interface to enhance the employee experience.
                </span>
                <img className="border-0 rounded-[20px] mt-25 mb-25" alt="Project Juno Image 1" src={ProjectJunoImage1} />
            </div>

            <span className="mt-30 text-[42px]">
                Background & Problem
            </span>

            <hr className="mt-15 mb-10 text-[#DFE4DF]" />

            <div className="h-full pt-15 grid grid-cols-[1fr_2fr] flex items-start">
                <div>
                    <span className="text-[#333333] text-[30px]">
                        What problem were we solving?
                    </span>
                </div>

                <div>
                    <span className="text-[#333333] text-[16px]">While the ExP portal simplified how employees interact with HR systems, it still required them to navigate through multiple sections to complete even simple tasks. This constant back-and-forth, no matter how streamlined, added to their mental load and took time away from actual work.</span>
                    <br /><br />
                    <span className="text-[#333333] text-[16px]">We realized that employees didn’t just need a better system, they needed a smarter, more human way to interact with it. One that could understand their intent, automate repetitive tasks, and offer support in a natural, conversational manner.</span>
                </div>
            </div>

            <div className="h-full pt-15 pb-20 grid grid-cols-[1fr_2fr] flex items-start">
                <div>
                    <span className="text-[#333333] text-[30px]">
                        What was the project goal?
                    </span>
                </div>

                <div>
                    <span className="text-[#333333] text-[16px]">The goal of this project was to <span className="font-bold"> create a virtual AI assistant from scratch, which is intelligent, intuitive, and human-centered,</span> one that could live inside the eXp platform and support employees across their entire workplace journey, from onboarding support and feedback writing to learning recommendations and policy queries.</span>
                    <br /><br />
                    <span className="text-[#333333] text-[16px]">The goal was to make it feel less like a bot and more like a <span className="font-bold">workplace buddy,</span> helping people simplify complex tasks through natural conversation.</span>
                </div>
            </div>

            <span className=" mt-30 text-[42px]">
                Research & Insight
            </span>

            <hr className="mt-15 mb-10 text-[#DFE4DF]" />

            <span className=" mt-30 text-[42px] text-[#525252]">
                Primary Research
            </span>

            <div className="h-full pt-15 pb-20 grid grid-cols-[1fr_2fr] flex items-start">
                <div>
                    <span className="text-[#333333] text-[30px]">
                        Why was the initial research conducted?
                    </span>
                </div>

                <div>
                    <span className="text-[#333333] text-[16px]">To understand HR processes and the overall employee experience.</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">To map out the complete employee journey from start to finish.</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">To identify opportunities to improve HR interactions using a Virtual Assistant.</span>
                </div>
            </div>

            <div className="">
                <span className="text-[#333333] text-[30px]">
                    Understanding HR processes and employee experience
                </span>

                <img className="border-0 rounded-[20px] mt-25 mb-25" alt="Project Juno Image 1" src={ProjectJunoImage2} />
            </div>

            <div className="h-full pt-15 pb-20 grid grid-cols-[1fr_2fr] flex items-start">
                <div>
                    <span className="text-[#333333] text-[30px]">
                        Who would be using it?
                    </span>
                </div>

                <div>
                    <span className="text-[#333333] text-[16px] font-bold">Employees Seeking Information & Support:</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">New Hires</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">Current Employees</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">Managers</span>
                    <br /><br />
                    <span className="text-[#333333] text-[16px] font-bold">HR Professionals:</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">HR Specialists</span>
                    <br />
                    <span className="text-[#333333] text-[16px]">Recruiters</span>
                </div>
            </div>

            <div className="h-full pt-15 pb-20 grid grid-cols-[1fr_2fr] flex items-start">
                <div>
                    <span className="text-[#333333] text-[30px]">
                        Persona
                    </span>
                </div>

                <div className="bg-[#F5F5F5] rounded-[20px]">
                    <img className="border-0 rounded-t-[20px]" alt="Project Juno Image 1" src={ProjectJunoImage3} />
                    <div className="p-5">
                        <span className="text-[#333333] text-[16px] font-bold">Priya Mehta (Senior Developer, 38)</span>
                        <br />
                        <span className="text-[#333333] text-[16px] font-bold">About:</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">I'm a passionate developer and leader who thrives on continuous learning and building successful teams. I'm driven to make a positive impact, both through my own technical expertise and by empowering those around me.</span>
                        <br />
                        <span className="text-[#333333] text-[16px] font-bold">Goals:</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">To be an effective leader & developer, constantly improve her skills, and contribute to the team's success.</span>
                        <br />
                        <span className="text-[#333333] text-[16px] font-bold">Challenges:</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">Limited Awareness: Priya struggles to find relevant resources on company platforms and isn't fully aware of development opportunities.</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">Onboarding Obstacles: Technical difficulties and a lack of clear information might hinder her growth.</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">Feature Gaps: Some of the tools available lack features Priya needs, and inaccurate data displayed causes confusion.</span>
                        <br />
                        <span className="text-[#333333] text-[16px] font-bold">Needs:</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Easy & quick access to work information</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Task efficiency for day to day tasks </span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Clear guidelines for actionable items</span>
                        <br />
                        <span className="text-[#333333] text-[16px] font-bold">Tasks:</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Supervisory Feedbacks</span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Performance Management </span>
                        <br />
                        <span className="text-[#333333] text-[16px]">✦ Learning & Development</span>
                        <br />
                    </div>
                </div>
            </div>

            <span className="text-[#333333] text-[30px]">
                Opportunities
            </span>
            <br />
            <span className="text-[#333333] text-[16px]">
                Here's how a generative AI-powered virtual assistant can address Priya's needs:
            </span>
            <div className="grid grid-cols-3 gap-10 pt-10 pb-10 ">
                <div className="bg-[#F7F7F7] rounded-[25px] p-5 col-span-2">
                    <span className="text-[#2cb2c8] text-[32px]">
                        ✦
                    </span>
                    <br />
                    <span className="text-[#333333] text-[20px]">
                        Onboarding Buddy
                    </span>
                    <br />
                    <span className="text-[#525252] text-[16px]">
                        Guide - through role-specific company resources and track her progress.
                    </span>
                </div>
                <div className="bg-[#F7F7F7] rounded-[25px] p-5">
                    <span className="text-[#2cb2c8] text-[32px]">
                        ✦
                    </span>
                    <br />
                    <span className="text-[#333333] text-[20px]">
                        Goal Coach
                    </span>
                    <br />
                    <span className="text-[#525252] text-[16px]">
                        Facilitate collaborative goal setting with team members.
                    </span>
                </div>
                <div className="bg-[#F7F7F7] rounded-[25px] p-5">
                    <span className="text-[#2cb2c8] text-[32px]">
                        ✦
                    </span>
                    <br />
                    <span className="text-[#333333] text-[20px]">
                        Feedback Whisperer
                    </span>
                    <br />
                    <span className="text-[#525252] text-[16px]">
                        Offer secure, feedback options and remind her to request/give feedback.
                    </span>
                </div>
                <div className="bg-[#F7F7F7] rounded-[25px] p-5">
                    <span className="text-[#2cb2c8] text-[32px]">
                        ✦
                    </span>
                    <br />
                    <span className="text-[#333333] text-[20px]">
                        Skill Hunter
                    </span>
                    <br />
                    <span className="text-[#525252] text-[16px]">
                        Recommend personalized learning paths with bite-sized learning modules
                    </span>
                </div>
                <div className="bg-[#F7F7F7] rounded-[25px] p-5">
                    <span className="text-[#2cb2c8] text-[32px]">
                        ✦
                    </span>
                    <br />
                    <span className="text-[#333333] text-[20px]">
                        Knowledge Sharer
                    </span>
                    <br />
                    <span className="text-[#525252] text-[16px]">
                        Facilitate knowledge sharing through a platform & connect with mentors.
                    </span>
                </div>
            </div>

            <span className=" mt-30 text-[42px] text-[#525252]">
                Secondary Research
            </span>
            <br /><br />
            <div className="h-[525x] overflow-x-auto flex flex-row gap-5">
                <div className="h-full min-w-[400px]">
                    <span className="text-[#333333] text-[24px]">
                        User Interface (UI) Design
                    </span>
                    <br /><br />
                    <div className="bg-[#F7F7F7] rounded-[25px] p-10 h-full">
                        <span className="text-[#525252] text-[20px]">
                            Best practices for Designing conversational interfaces for virtual assistants
                        </span>
                        <br /><br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Conversational tone and personality
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Speak like a friend, not a robot.
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    User prompts and guidance
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Guide users like a coach
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Error handling
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Learn & provide clear instructions 
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Feedback mechanisms
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Informative error messages that help users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full min-w-[400px]">
                    <span className="text-[#333333] text-[24px]">
                        User Interface (UI) Design
                    </span>
                    <br /><br />
                    <div className="bg-[#F7F7F7] rounded-[25px] p-10 h-full">
                        <span className="text-[#525252] text-[20px]">
                            Research techniques for Managing conversation flow in your virtual assistant. This includes:
                        </span>
                        <br /><br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Conversational tone and personality
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Speak like a friend, not a robot.
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    User prompts and guidance
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Guide users like a coach
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Error handling
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Learn & provide clear instructions 
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Feedback mechanisms
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Informative error messages that help users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full min-w-[400px]">
                    <span className="text-[#333333] text-[24px]">
                        User Interface (UI) Design
                    </span>
                    <br /><br />
                    <div className="bg-[#F7F7F7] rounded-[25px] p-10 h-full">
                        <span className="text-[#525252] text-[20px]">
                            Best practices for Designing conversational interfaces for virtual assistants
                        </span>
                        <br /><br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Conversational tone and personality
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Speak like a friend, not a robot.
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    User prompts and guidance
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Guide users like a coach
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Error handling
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Learn & provide clear instructions 
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Feedback mechanisms
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Informative error messages that help users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full min-w-[400px]">
                    <span className="text-[#333333] text-[24px]">
                        User Interface (UI) Design
                    </span>
                    <br /><br />
                    <div className="bg-[#F7F7F7] rounded-[25px] p-10 h-full">
                        <span className="text-[#525252] text-[20px]">
                            Best practices for Designing conversational interfaces for virtual assistants
                        </span>
                        <br /><br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Conversational tone and personality
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Speak like a friend, not a robot.
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    User prompts and guidance
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Guide users like a coach
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Error handling
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Learn & provide clear instructions 
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start gap-2">
                            <span className="text-[#00847f] text-[24px]">
                                ✦
                            </span>
                            <div>
                                <span className="text-[#333333] text-[20px]">
                                    Feedback mechanisms
                                </span>
                                <br />
                                <span className="text-[#525252] text-[16px]">
                                    Informative error messages that help users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
