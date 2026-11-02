import { motion } from "motion/react"

const Work = () => {

    const projects = [
        {
            pId: 1,
            title: "iNoteBook",
            desc: "Online note keeping app",
            demoUrl: "https://inotebook-celll.vercel.app/",
            pic: "/resources/iNoteBook.png"
        },
        {
            pId: 2,
            title: "Link Pool",
            desc: "Manage al links at one place",
            demoUrl: "https://link-pool.vercel.app/",
            pic: "/resources/link-pool.png  "
        },
        {
            pId: 3,
            title: "Solar PV System",
            desc: "Project for Client",
            demoUrl: "https://st-solar-collge-project.vercel.app/",
            pic: "/resources/solar-pv-system.jpg"
        },
        {
            pId: 4,
            title: "E-Commerce",
            desc: "Frontend Project",
            demoUrl: "https://anshugupta-cell.github.io/eCommerce-frontend-components/",
            pic: "/resources/ECom.JPG"
        },
        {
            pId: 5,
            title: "Puzzle Game",
            desc: "Fun game",
            demoUrl: "https://anshugupta-cell.github.io/Puzzle_Jigsaw/",
            pic: "/resources/puzzle.png"
        },
    ]

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
                className="text-center ">
                A glimpse into my journey as a developer. These projects showcase my passion for clean code, intuitive UI/UX design, and scalable backend systems. I am constantly building and refining.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid res-grid-200 gap-2 w-[100%] items-center justify-around ">
               
                {projects.map((p, i) => (

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-contain bg-no-repeat dark:bg-purple-950/40 bg-center aspect-square rounded-lg cursor-pointer group relative"
                        style={{ backgroundImage: "url(" + p.pic + ")" }}
                        key={p.pId}
                    >
                        <div className="flex justify-between items-center gap-2 absolute bottom-5 bg-slate-50 dark:bg-purple-950 rounded-lg  w-[80%] ml-[10%] p-2 text-sm group-hover:-translate-y-1 duration-300 group-hover:shadow-dark dark:group-hover:shadow-light">
                            <div className="w-full ">
                                <h2 className="font-bold">{p.title}</h2>
                                <p>{p.desc}</p>
                            </div>
                            <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                href={p.demoUrl} target="_blank" className="p-1 rounded-full hover:bg-slate-300 border group-hover:bg-purple-600 group-hover:-translate-y-1 group-hover:shadow-dark dark:group-hover:shadow-light duration-300  border-purple-900  ">
                                <img className="object-cover w-6 aspect-square dark:invert" src="/svg/sent-stroke-rounded.svg" alt="link" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}

              
            </motion.div>
        </motion.section>
    )
}

export default Work;