import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>問い合わせ</h3>

        <form action="" method="POST" className="mt-12 gap-4 flex flex-col">
          <span className="text-white font-medium mt-3">名前</span>
          <input
            type="text"
            name="name"
            placeholder="名前を入力してください"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">メールアドレス</span>
          <input
            type="text"
            name="email"
            placeholder="メールアドレスを入力してください"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">メッセージ</span>
          <textarea
            name="message"
            placeholder="問い合わせ内容を入力してください"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary "
          >
            {loading
              ? "送信中..."
              : "送信(実際の問い合わせは送信できませんのでご注意ください)"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
