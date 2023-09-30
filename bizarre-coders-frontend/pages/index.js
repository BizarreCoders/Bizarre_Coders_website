// import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Team from "./Team";
import JoinUs from "./JoinUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <Hero />
      <JoinUs />
      <Team />

      {/* <button onClick={() => router.push('/team')}>Team</button> */}
    </div>
  );
}
