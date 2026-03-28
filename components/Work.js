import { motion } from "motion/react"

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="my-work" className="scroll-mt-16 min-h-[88svh] grid py-6 place-items-center gap-4 max-w-4xl m-auto">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl">My latest works</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-medium">My Works</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center">
                A glimpse into my journey as a developer. These projects showcase my passion for clean code, intuitive UI/UX design, and scalable backend systems. I am constantly building and refining.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid res-grid-180 gap-2 w-[100%] items-center justify-around ">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="object-cover bg-center aspect-square rounded-lg cursor-pointer group relative" style={{ backgroundImage: "url('/profile pic.png')" }}>
                    <div className="flex justify-between items-center gap-2 absolute bottom-5 bg-slate-50 dark:bg-purple-950 rounded-lg  w-[80%] ml-[10%] p-2 text-sm group-hover:-translate-y-1 duration-300 group-hover:shadow-dark dark:group-hover:shadow-light">
                        <div className="w-full ">
                            <h2 className="font-bold text-white/80">Geo Based App</h2>
                            <p>Mobile app</p>
                        </div>
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            href="" className="p-1 rounded-full hover:bg-slate-300 border group-hover:bg-purple-600 group-hover:-translate-y-1 group-hover:shadow-dark dark:group-hover:shadow-light duration-300  border-purple-900  ">
                            <img className="object-cover w-6 aspect-square dark:invert" src="/svg/sent-stroke-rounded.svg" alt="link" />
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }} className="object-cover bg-center aspect-square rounded-lg cursor-pointer group relative" style={{ backgroundImage: "url('/profile pic.png')" }}>
                    <div className="flex justify-between items-center gap-2 absolute bottom-5 bg-slate-50 dark:bg-purple-950 rounded-lg  w-[80%] ml-[10%] p-2 text-sm group-hover:-translate-y-1 duration-300 group-hover:shadow-dark dark:group-hover:shadow-light">
                        <div className="w-full ">
                            <h2 className="font-bold">Frontend project</h2>
                            <p>Web design</p>
                        </div>
                        <div className="p-1 rounded-full hover:bg-slate-300 border group-hover:bg-purple-600 group-hover:-translate-y-1 group-hover:shadow-dark dark:group-hover:shadow-light duration-300  border-purple-900  ">
                            <img className="object-cover hover:light:invert w-6 aspect-square dark:invert hover:invert" src="/svg/sent-stroke-rounded.svg" alt="hamburger" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }} className="object-cover bg-center aspect-square rounded-lg cursor-pointer group relative" style={{ backgroundImage: "url('/profile pic.png')" }}>
                    <div className="flex justify-between items-center gap-2 absolute bottom-5 bg-slate-50 dark:bg-purple-950 rounded-lg  w-[80%] ml-[10%] p-2 text-sm group-hover:-translate-y-1 duration-300 group-hover:shadow-dark dark:group-hover:shadow-light">
                        <div className="w-full ">
                            <h2 className="font-bold">UI/UX Designing</h2>
                            <p>UI/UX Design</p>
                        </div>
                        <div className="p-1 rounded-full hover:bg-slate-300 border group-hover:bg-purple-600 group-hover:-translate-y-1 group-hover:shadow-dark dark:group-hover:shadow-light duration-300  border-purple-900  ">
                            <img className="object-cover w-6 aspect-square dark:invert" src="/svg/sent-stroke-rounded.svg" alt="hamburger" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Work;