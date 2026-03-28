import Image from "next/image";
import { motion } from "motion/react"
import { delay } from "motion";

const About = () => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about-me"
            className="scroll-mt-16 min-h-[88svh] grid py-6 place-items-center gap-4 max-w-4xl m-auto ">
            <motion.h4

                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl">Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-medium">About</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid md:flex place-items-center gap-2">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >

                    <Image width={100} height={100} className="w-72 object-cover rounded-xl duration-300 hover:scale-105" src="/profile pic.png" alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid h-[100%] gap-7 ">
                    <p className="text-center">
                        I am a full-stack web developer passionate about building scalable applications/web applications and constantly expand my technical toolkit.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid md:flex  gap-2">
                        <div className="grid flex-grow border border-slate-700 rounded-xl p-2 items-center  hover:-translate-y-1 duration-300 hover:shadow-dark hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-light">
                            <img className="w-10 h-10 dark:invert" src="/svg/source-code-stroke-rounded.svg" alt="" />
                            <h3 className="font-medium ">Languages</h3>
                            <p className="text-sm">HTML, CSS, JS, React Js, Next Js, PostgreSQL</p>
                        </div>
                        <div className="grid flex-grow border border-slate-700 rounded-xl p-2 items-center  hover:-translate-y-1 duration-300 hover:shadow-dark hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-light">
                            <img className="w-10 h-10 dark:invert" src="/svg/graduation-scroll-stroke-rounded.svg" alt="" />
                            <h3 className="font-medium ">Education</h3>
                            <p className="text-sm">SYBCS</p>
                        </div>
                        <div className="grid flex-grow border border-slate-700 rounded-xl p-2 items-center  hover:-translate-y-1 duration-300 hover:shadow-dark hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-light">
                            <img className="w-10 h-10 dark:invert" src="/svg/briefcase-regular-full.svg" alt="" />
                            <h3 className="font-medium ">Projects</h3>
                            <p className="text-sm">Built more than 5 projects</p>
                        </div>
                    </motion.div>
                    <motion.h3

                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="font-bold" >Tools I use</motion.h3>
                    <motion.ul initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="flex gap-3 flex-wrap">
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/Git.svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/Visual Studio Code (VS code).svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/MongoDB.svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/PostgresSQL.svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/Tailwind CSS.svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover " src="/svg/React.svg" alt="" />
                        </li>
                        <li className="rounded-full h-12 w-12 p-2 border border-slate-700 hover:bg-lightHover dark:hover:bg-darkHover  hover:-translate-y-1 duration-300 ">
                            <Image width={100} height={100} className="object-cover dark:invert" src="/svg/Next.js.svg" alt="" />
                        </li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default About;