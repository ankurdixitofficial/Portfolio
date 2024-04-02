import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const container =(delay) => ({
    hidden:{x: -100, opacity:0},
    visible : {x: 0, opacity:1,
    transition:{duration:0.5, delay:delay}
},
})
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About  
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center lg:justify-start">
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: -100}}
            transition={{duration:0.5,delay:1}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-left">
                    <img className="rounded-2xl" src={ aboutImg } alt="about" />
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2 lg:p-1">
                <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className="pt-5 pb-4 md:pt-1 text-6xl font-thin tracking-tight lg:mt-0.5 lg:text-10xl">Mr. Ankur Dixit</motion.h1>
                <p className="my-2 max-w-xl lg:max-w-1xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>

            </div>
        </div>
    </div>
  );
};

export default About;