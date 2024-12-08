import Hero from "@/Components/Hero";
import Best from "@/Components/Best";
import Image from "next/image";
import Feature from "@/Components/Feature";
import Gear from "@/Components/Gear";
import Miss from "@/Components/Miss";
import Footer from "./Layout/Footer";
import Essential from "@/Components/Essential";
import Icon from "@/Components/Icon";

export default function Home() {
  return (
    <div>
   <Hero/>
   <Best/>
   <Feature/>
   <Gear/>
   <Miss/>
   <Essential/>
   <Icon/>
   <Footer/>
   </div>
   
  );
}
