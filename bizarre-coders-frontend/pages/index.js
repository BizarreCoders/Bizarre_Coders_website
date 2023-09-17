// import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import Navbar from "./Navbar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return <div>
  <Navbar />
     {/* <button onClick={() => router.push('/Navbar')}>Navbar</button> */}
  </div>;
}
