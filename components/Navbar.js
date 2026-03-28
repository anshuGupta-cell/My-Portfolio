"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"



const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(()=>{
        if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
            
        }
    },[])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.theme = ""

        }
    }, [isDarkMode])

    const pathName = usePathname()
    const active = "bg-slate-800 rounded-lg font-bold text-white"
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-11.5rem)"
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(11.5rem)"
    }

    console.log(pathName);
    

    return (
        <>
            <div className="fixed z-40 top-0 text-sm w-[100vw] p-2 bg-[#f1f5f578] dark:bg-[#0e0a0a78] backdrop-blur-lg">
                <div className="z-10 mx-auto max-w-[90vw]  rounded-full shadow-sm bg-slate-100  dark:shadow-white/20 dark:bg-slate-800 dark:text-salte-300">
                    <div className="flex  items-center justify-between md:justify-around p-2 gap-3 ">

                        <div className="flex items-center bg-gradient-to-bl rounded-xl">
                            <Link className="p-2 text-xl font-bold" href="/">
                                AnshuG
                            </Link>
                        </div>

                        <div className="hidden md:flex py-2 px-3 text-nowrap text-slate-600 dark:text-slate-300 gap-1 bg-ma-100 dark:bg-slate-700 rounded-full">
                            <Link className={`p-2 ${pathName == "top" ? active : ""}`} href="#top">Home</Link>
                            <Link className={`p-2 ${pathName == "about-me" ? active : ""}`} href="#about-me">About me</Link>
                            <Link className={`p-2 ${pathName == "#services" ? active : ""}`} href="#services">Services</Link>
                            <Link className={`p-2 ${pathName == "#my-work" ? active : ""}`} href="#my-work">My work</Link>
                            <Link className={`p-2 ${pathName == "#contact" ? active : ""}`} href="#contact">Contact me</Link>
                        </div>

                        <div className="flex gap-2">

                            <button onClick={()=>{setIsDarkMode(!isDarkMode)}} className="p-2 rounded-full hover:bg-slate-300 dark:hover:bg-darkHover">
                                <img className="w-5 h-5 dark:invert" src={`${isDarkMode? "/svg/moon-02-stroke-rounded.svg":"/svg/sun-02-stroke-rounded.svg"}`} alt="theme" />
                            </button>

                            <Link className={`py-2 px-3 hidden md:flex items-center bg-slate-300 rounded-full border border-slate-600 dark:bg-slate-900 ${pathName == "#contact" ? active : ""}`} href="#contact">
                                Contact me
                                <img className="w-5 h-5 dark:invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="arrow" />
                            </Link>

                            <button className="p-2 rounded-full hover:bg-slate-300 dark:hover:bg-darkHover block md:hidden lg:hidden " onClick={openMenu}>
                                <img className="w-5 h-5 dark:invert" src="/svg/bars-solid.svg" alt="hamburger" />
                            </button>

                        </div>


                    </div>
                </div>

                {/* mobile menu */}

                <div ref={sideMenuRef} className="fixed grid w-40 top-2 -right-40 md:hidden p-3 text-nowrap   gap-1 bg-slate-100 dark:bg-slate-900 z-10 mx-auto rounded-xl transition duration-500 text-slate-600 dark:text-slate-300 ">

                    <button onClick={closeMenu} className="p-2 rounded-full hover:bg-slate-300 dark:hover:bg-darkHover block md:hidden lg:hidden place-self-end">
                        <img className="w-5 h-5 dark:invert " src="/svg/xmark-regular.svg" alt="cross" />
                    </button>

                    <Link onClick={closeMenu} className={`p-2 ${pathName == "#top" ? active : ""}`} href="#top">Home</Link>
                    <Link onClick={closeMenu} className={`p-2 ${pathName == "#about-me" ? active : ""}`} href="#about-me">About me</Link>
                    <Link onClick={closeMenu} className={`p-2 ${pathName == "#services" ? active : ""}`} href="#services">Services</Link>
                    <Link onClick={closeMenu} className={`p-2 ${pathName == "#my-work" ? active : ""}`} href="#my-work">My work</Link>
                    <Link onClick={closeMenu} className={`p-2 ${pathName == "#contact" ? active : ""}`} href="#contact">Contact me</Link>

                </div>

            </div>

        </>
    )
}

export default Navbar;
