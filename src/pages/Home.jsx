import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-[#13131F]">
      <Header />
      <Resume />
      <section className="flex flex-col gap-40">
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </section>
    </div>
  );
}
