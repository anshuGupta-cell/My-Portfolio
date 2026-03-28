const Footer = () => {

    return (
        <section id="contact" className="mt-18 grid py-6 place-items-center gap-6 max-w-4xl m-auto">
            <div className="grid items-center rounded-xl w-[100%] ">
                <a className="m-auto p-2 font-bold text-2xl" href="#top">
                    AnshuG
                </a>
                <div className="flex gap-2 items-center justify-center">
                    <img className="w-5 object-cover dark:invert" src="/svg/mail-01-stroke-rounded.svg" alt="mail icon" />
                    anshuguptacell@gmail.com
                </div>
            </div>
            <div className="border-t-2 border-slate-500 flex flex-wrap gap-2 text-sm justify-between items-center p-2">
                <p className="m-auto">© 2025 Anshu Gupta. All rights reserved.</p>
                <ul className="flex gap-2 m-auto">
                    <li><a target="_blank" href="https://github.com">Github</a></li>
                    <li><a target="_blank" href="https://github.com">Instagram</a></li>
                    <li><a target="_blank" href="https://github.com">LinkedIn</a></li>
                    <li><a target="_blank" href="https://github.com">Twitter</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;