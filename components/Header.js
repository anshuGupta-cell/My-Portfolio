import Image from "next/image";
import { motion } from "motion/react"

const Header = () => {

    return (
        <section id="top" className="scroll-mt-20 pt-20 min-h-[96svh] grid place-items-center gap-4 max-w-4xl m-auto ">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image width={100} height={100} className="h-40 w-40 object-cover rounded-full" src="/profile pic.png" alt="" />
            </motion.div>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >Hi, I am Anshu Gupta</motion.p>

            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                Full stack web developer based in India.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className=" text-center text-3xl font-medium">
                I am a full stack web developer based in Sinnar, Nashik with a good knowledge in web development.
            </motion.p>
            <div className="flex gap-2">
                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className=" px-4 py-2 border rounded-full bg-slate-800 text-slate-100 flex items-center gap-2  border-slate-300  hover:-translate-y-1 duration-300">
                    Contact Me
                    <img className="w-5 h-5 invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="arrow" />
                </motion.a>
                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="/resources/Resume - Copy.pdf" download className=" px-4 py-2 border rounded-full bg-slate-100 text-slate-700 flex items-center gap-2 border-slate-700  hover:-translate-y-1 duration-300">
                    My Resume
                    <img className="w-5 h-5" src="/svg/download-01-stroke-rounded.svg" alt="download" />
                </motion.a>
            </div>
        </section>
    )
}

export default Header;
