import Button from "../Button";
import style from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { bottomToTop } from "../../variants/animation";

export default function Hero() {
  return (
    <div>
      <div className={style.hero} id="home">
        <div className={style.col_1}>
          <div>
            <motion.h1
              variants={bottomToTop}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <b>C</b>ompreender
              <br />
              <b>A</b>tender
              <br />
              <b>S</b>atisfazer
              <br />
              <b>A</b>gradar
              <br />
            </motion.h1>
            <Button text="Entrar em contato" icon="Send" />
          </div>
        </div>
        <motion.div className={style.col_2}>
          <div>
            <motion.div
              variants={bottomToTop}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src="/img/img-1.webp"
                width={280}
                height={170}
                alt="Imagem 1"
              />
            </motion.div>

            <motion.div
              variants={bottomToTop}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            >
              <Image
                src="/img/img-2.webp"
                width={280}
                height={170}
                alt="Imagem 2"
              />
            </motion.div>
          </div>
          <motion.div
            variants={bottomToTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            <Image
              src="/img/img-3.webp"
              width={588}
              height={237}
              alt="Imagem 3"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
