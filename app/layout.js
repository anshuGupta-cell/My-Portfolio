
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Anshu's Portfolio",
  description: "The portfolio of Anshu Gupta",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en" className="">
      <body className={` antialiased dark:bg-darkTheme dark:text-white/80`}>

        <ToastContainer />
        <Navbar />

        {children}

      </body>
    </html>
  )
}
