"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { darkMode } from "@/tailwind.config";
import Router from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function App() {
  

  return (
    <main className="grid gap-2 p-2 ">
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}
