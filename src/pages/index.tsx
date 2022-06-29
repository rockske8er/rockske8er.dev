import type { NextPage } from "next";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { BackToTop } from "@components/BackToTop";
import { Projects } from "@components/Projects";

const Home: NextPage = () => {
  return (
    <main className={"relative bg-white"}>
      <Header />
      <Hero />
      <Projects />
      <BackToTop />
    </main>
  );
};

export default Home;
