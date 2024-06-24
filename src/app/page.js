"use client";
import Image from "next/image";
import balaji from "../app/assets/balaji.png";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Antonio, Just_Another_Hand, Joti_One } from "next/font/google";
import blurFire from "../app/assets/blur fire.png";
import chilli from "../app/assets/chili.png";
import chip from "../app/assets/tri.png";
import fire from "../app/assets/fire.png";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const antonio = Antonio({ subsets: ["latin"], weight: "700" });
const just = Just_Another_Hand({ subsets: ["latin"], weight: "400" });
const joti = Joti_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div className=" w-full h-screen flex justify-center gap-20 pt-10">
        <div className=" flex flex-col w-full h-full justify-between">
          <div className=" flex w-full justify-center items-center">
            <div className=" flex flex-col h-full gap-20 w-full items-center ml-[200px]">
              <div
                className={`${just.className} flex flex-col  items-center z-50`}
              >
                <h1 className=" text-5xl font-bold tracking-wider">LAYSI</h1>
                <h1 className=" tracking-widest text-xl">a fresh baked</h1>
              </div>
              <motion.div
                className="z-50"
                initial={{ x: 1400, y: 300 }}
                animate={{ x: 0, y: 0 }}
                whileInView={{ y: 0 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <Image
                  src={balaji}
                  width={350}
                  className="z-10 drop-shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="fixed z-10 animate-pulse"
                initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                transition={hovered == true ? { delay: 0 } : { delay: 0.5 }}
                animate={hovered ? { scale: 1.2 } : { scale: 1 }}
              >
                <Image src={fire} className="mt-[-300px] z-10" width={1500} />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-[-480px] mt-[200px]"
                initial={{ x: -1500 }}
                // animate={{ x: 0 }}
                transition={hovered ? { delay: 0 } : { delay: 0.8 }}
                animate={
                  hovered
                    ? { scale: 1.6, x: -400, y: -250 }
                    : { scale: 1, x: 0, y: 0 }
                }
              >
                <Image
                  src={chip}
                  width={200}
                  className={`${hovered ? "rotate-90" : ""}`}
                  style={{ transitionDuration: "1s" }}
                />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-96 mt-32"
                initial={{ x: 1500 }}
                // animate={{ x: 0 }}
                transition={hovered ? { delay: 0 } : { delay: 1 }}
                animate={
                  hovered
                    ? { scale: 1.2, x: 440, y: -200 }
                    : { scale: 1, x: 0, y: 0 }
                }
              >
                <Image
                  src={chip}
                  width={150}
                  className={`${hovered ? "rotate-180" : "rotate-45"}`}
                  style={{ transitionDuration: "0.5s" }}
                />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-[600px] mt-[550px]"
                initial={{ y: 1500 }}
                // animate={{ y: 0 }}
                transition={hovered ? { delay: 0 } : { delay: 1.2 }}
                animate={hovered ? { scale: 1.2, y: 100 } : { scale: 1, y: 0 }}
              >
                <Image src={chip} width={100} className="rotate-180" />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-[-450px] mt-[550px]"
                initial={{ y: 1500 }}
                // animate={{ y: 0 }}
                transition={hovered ? { delay: 0 } : { delay: 1.4 }}
                animate={
                  hovered
                    ? { scale: 1.2, x: -450, y: 40 }
                    : { scale: 1, x: 0, y: 0 }
                }
              >
                <Image src={chip} width={90} className="rotate-90" />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-[-550px] mt-[550px]"
                initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                transition={hovered ? { delay: 0 } : { delay: 1.4 }}
                animate={
                  hovered
                    ? { scale: 1.2, x: -350, y: -300 }
                    : { scale: 1, x: 0, y: 0 }
                }
              >
                <Image
                  src={chilli}
                  width={200}
                  className={`${hovered ? "rotate-180" : "rotate-90"}`}
                  style={{ transitionDuration: "0.5s" }}
                />
              </motion.div>

              <motion.div
                className="fixed z-50 ml-[500px] mt-[300px]"
                initial={{ y: -1500 }}
                // animate={{ y: 0 }}
                transition={hovered ? { delay: 0 } : { delay: 1.6 }}
                animate={
                  hovered
                    ? { scale: 1.2, x: 300, y: 0 }
                    : { scale: 1, y: 0, x: 0 }
                }
              >
                <Image
                  src={chilli}
                  width={250}
                  className={`${hovered ? "rotate-90" : ""}`}
                  style={{ transitionDuration: "0.5s" }}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <div className={` flex flex-col  ml-[-100px]`}>
                <h1 className={`${just.className} text-7xl uppercase`}>
                  Flamin hot nachoos
                </h1>
                <h1 className=" text-sm w-64 text-gray-400">
                  Presenting the classic nachoos chip with a flaming hot twist.
                  it will rock your taste buds with its chilla & lime
                </h1>
                <div className=" w-44 px-1 py-1 flex gap-2 items-center bg-black rounded-full mt-5">
                  <div className=" w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                    <FaShoppingCart />
                  </div>
                  <h1 className=" text-white ">Add to cart</h1>
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className="bg-red-500 bg-opacity-80 w-full h-[1000px] flex flex-col justify-end fixed"
            style={{
              clipPath: "ellipse(55% 58% at 50% 100%)",
            }}
          >
            <div
              className=" w-full h-[800px] bg-red-600 flex flex-col justify-center items-center"
              style={{ clipPath: "ellipse(51% 65% at 50% 100%)" }}
            >
              <h1
                className={`${joti.className} text-[200px] font-black  mt-[250px] opacity-20`}
              >
                nachoos
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
