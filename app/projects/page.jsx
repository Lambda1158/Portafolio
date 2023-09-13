"use client";
import Link from "next/link";
import Header from "../components/header/header";

import PageTransition from "../motion/pageTransition";
export default function Projects() {
  return (
    <div className="bg-letra">
      <PageTransition>
        <section className="bg-background">
          <div
            className=" mx-auto max-w-[1285px] px-3 text-white overflow-hidden h-screen
"
          >
            <Header />
            <div className="mx-auto h-screen px-5 border-white">
              <h1 className="text-8xl text-center">My Projects</h1>
              <Link href="/nav">
                <button className="bg-magenta hover:bg-purple-light-1 hover:font-semibold text-white font-bold py-2 px-4 border-b-4 border-purple-light-2 hover:border-purple-light-1 rounded">
                  Take me Back
                </button>
              </Link>
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
