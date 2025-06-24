import React from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="h-24 w-full pl-20 flex items-center text-lg relative z-50">
            <span className="mt-2">
                K<span className="text-[#8B92F0]">.</span>
            </span>

            <nav className="flex items-center justify-center w-full pr-20">
                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    <li>
                        <a className="text-black text-lg" href="#">
                            <div className="relative h-6 overflow-hidden group w-fit">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Home
                                </span>
                                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-[#666666]">
                                    Home
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="text-black text-lg" href="#">
                            <div className="relative h-6 overflow-hidden group w-fit">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    About
                                </span>
                                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-[#666666]">
                                    About
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            className="bg-black hover:bg-white text-white hover:text-black border-1 border-black transition duration-300 rounded-full pt-1.5 pb-1.5 pl-4 pr-4 text-lg absolute right-25 top-7"
                            href="https://www.linkedin.com/in/kashika-girotra-3b6a58184"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div
                    className="md:hidden h-9 w-9 flex flex-col justify-center items-center gap-1 cursor-pointer absolute right-10 top-8"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`h-[2px] w-full bg-black rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-[2px] w-full bg-black rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                    ></span>
                    <span
                        className={`h-[2px] w-full bg-black rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                            }`}
                    ></span>
                </div>

                {/* Mobile Dropdown Menu (not full screen) */}
                <div
                    ref={menuRef}
                    className={`md:hidden absolute top-8 w-full bg-white shadow-md transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                >
                    <ul className="flex flex-col items-center p-4 gap-4 text-lg font-medium">
                        <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a className="bg-black text-white border-1 border-black transition duration-300 rounded-full pt-1.5 pb-1.5 pl-4 pr-4 text-lg" href="/resume" onClick={() => setIsOpen(false)}>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}