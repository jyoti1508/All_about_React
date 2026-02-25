import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
} from "react-icons/fa6";
import { GiThunderBlade } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { animate, motion } from "framer-motion";
import { Repeat } from "lucide-react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="skills" className=" pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiExpress className="text-7xl text-gray-200" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaDatabase className="text-7xl text-indigo-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className="p-4"
        >
          <FaJava className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiC className="text-7xl text-white" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiCplusplus className="text-7xl text-white" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <FaGithub className="text-7xl text-black dark:text-white" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className="p-4"
        >
          <SiRedux className="text-7xl text-purple-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
