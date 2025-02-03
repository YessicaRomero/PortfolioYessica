import React, { useEffect, useState } from "react";

const Welcome = () => {
  const words = ["Hello, I'M A FULL STACK DEVELOPER!", "My name is Yessica Romero"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText((prev) => word.slice(0, prev.length + 1));
        if (currentText === word) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(handleTyping, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="animate-slidein  [--slidein-delay:500ms]  w-full h-full flex justify-center items-center my-8 text-white-100 row-span-2 p-8 min-h-[100px]  ">
      <h1 className="text-4xl font-bold min-h-[100px] text-shadow-lg ">{currentText}</h1>
    </div>
  );
};

export default Welcome;

