// import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import Navbar from "./Navbar";
import Hero from './Hero' 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return <div>
  <Navbar />
  <Hero />
     {/* <button onClick={() => router.push('/team')}>Team</button> */}
  </div>;
}
