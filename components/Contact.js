import { motion } from "motion/react"
import { sendEmail } from "@/app/actions/email";
import { toast } from "react-toastify";


const Contact = () => {

    const submitForm = async (formData) => {
        const res = sendEmail(formData)
        toast("Submmitted")
        
    }


    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact" className="scroll-mt-16 min-h-[88svh] grid py-6 place-items-center gap-4 max-w-4xl m-auto ">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="">Connect with me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-medium">Get in touch</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center">
                Got a question or just want to say hi? My inbox is always open. Drop a message and I'll get back to you within 24 hours.
            </motion.p>
            <motion.form
                action={submitForm}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="grid gap-3 focus-within:outline outline-purple-600 w-[100%] px-4 py-6 rounded-lg ">
                <div className="grid res-grid-200 w-[100%] gap-2 items-center">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="focus:outline-purple-600 outline-none rounded-full py-2 px-3 bg-slate-100 dark:bg-gradient-to-r from-indigo-900  via-purple-900 to-pink-900 border-2 dark:border-none" 
                        type="text" 
                        name="name"
                        placeholder="Enter your name" 
                        required 
                        />
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="focus:outline-purple-600 outline-none rounded-full py-2 px-3 bg-slate-100 dark:bg-gradient-to-r from-indigo-900  via-purple-900 to-pink-900 border-2 dark:border-none" 
                        type="email" 
                        name="email"
                        placeholder="Enter your Email" 
                        required />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="focus:outline-purple-600 outline-none rounded-lg py-2 px-3 bg-slate-100 dark:bg-gradient-to-r from-indigo-900  via-purple-900 to-pink-900 border-2 dark:border-none" 
                    rows={6} 
                    name="message"
                    placeholder="Enter description" 
                    required />

                <button className="m-auto text-slate-100 focus:outline-orange-400 rounded-full px-4 py-2 bg-slate-950 border-2 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-dark hover:-translate-x-1 duration-200 hover:outline-orange-400 active:translate-x-1 active:translate-y-1 active:shadow-none" type="submit">Submit now &rarr;</button>
            </motion.form>
        </motion.section>
    )
}



export default Contact;