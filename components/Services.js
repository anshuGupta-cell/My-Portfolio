import Image from "next/image"
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" className="scroll-mt-16 min-h-[88svh] grid py-6 place-items-center gap-4 max-w-4xl m-auto ">
            <motion.h4

                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl">Services</motion.h4>
            <motion.h2

                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} className="text-3xl font-medium">My Services</motion.h2>
            <motion.p

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center">
                With a good understanding of both client-side and server-side development, I provide end-to-end web solutions. Whether it's crafting interative UIs in React or architechting secure databases. 
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid res-grid-200 gap-2 w-[100%]">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="grid border border-slate-700 rounded-lg p-4 cursor-pointer hover:-translate-y-1 hover:bg-lightHover duration-300 hover:shadow-dark dark:hover:bg-darkHover dark:hover:shadow-light">
                    <Image width={100} height={100} className="w-10 h-10 object-cover rounded" src="/profile pic.png" alt="gddf" />
                    <h3 className="font-bold">
                        Frontend Development
                    </h3>
                    <p>
                        Focusing on UI/UX and React
                    </p>
                    <a href="" className="flex text-sm items-center">
                        Read more <Image width={100} height={100} className="w-5 dark:invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="grid border border-slate-700 rounded-lg p-4 cursor-pointer hover:-translate-y-1 hover:bg-lightHover duration-300 hover:shadow-dark dark:hover:bg-darkHover dark:hover:shadow-light">
                    <Image width={100} height={100} className="w-10 h-10 object-cover rounded" src="/profile pic.png" alt="gddf" />
                    <h3 className="font-bold">
                        Frontend Development
                    </h3>
                    <p>
                        Focusing on APIs and Databases
                    </p>
                    <a href="" className="flex text-sm items-center">
                        Read more <Image width={100} height={100} className="w-5 dark:invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="grid border border-slate-700 rounded-lg p-4 cursor-pointer hover:-translate-y-1 hover:bg-lightHover duration-300 hover:shadow-dark dark:hover:bg-darkHover dark:hover:shadow-light">
                    <Image width={100} height={100} className="w-10 h-10 object-cover rounded" src="/profile pic.png" alt="gddf" />
                    <h3 className="font-bold">
                        Full Stack Development
                    </h3>
                    <p>
                        Focusing on building end to end website
                    </p>
                    <a href="" className="flex text-sm items-center">
                        Read more <Image width={100} height={100} className="w-5 dark:invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="" />
                    </a>
                </motion.div>

            </motion.div>
        </motion.section>
    )
}

export default Services