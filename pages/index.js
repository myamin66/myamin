import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>M.Yamin</title>
        <meta name="description" content="Yamin's portfolio developed using Next.js." />
        <meta name="keywords" content="myamin66,myamin,m yamin,machine learning engineer,mern stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
