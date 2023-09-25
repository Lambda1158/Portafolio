"use client";
import Card from "./card";
import Header from "../components/header/header";

import PageTransition from "../motion/pageTransition";
import Footer from "../about/footer";
export default function Projects() {
  return (
    <PageTransition>
      <section className="bg-background">
        <div className=" mx-auto max-w-[1285px] px-5 pb-24">
          <Header />
          <h1 className=" py-7 text-7xl text-left text-letra font-medium">
            Learning Projects
          </h1>
          <div className="grid gap-x-[20px] gap-y-[20px] grid-cols-1 sm:grid-cols-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Footer />
      </section>
    </PageTransition>
  );
}
