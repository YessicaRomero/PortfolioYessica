

import { motion } from "framer-motion";

export default function Animation() {
  const codeLines = [
    "const [avatar, setAvatar] = useState([]);",
    "useEffect(() => {",
    "  getAvatars()",
    "    .then((res) => res.json())",
    "    .then((data) => setAvatar(data));",
    "}, []);",
    "",
    "return (",
    "  <div>",
    "    <NavLogin />",
    "    <AnimatedTitle />",
    "    <CardPremium />",
    "    <CarrouselAvatars avatar={avatar} />",
    "    <CardPoints />",
    "  </div>",
    ");",
  ];

  return (
    <div className="relative w-full max-w-[400px] h-[220px] flex justify-center items-center select-none">
      <div className="font-mono text-[10px] md:text-sm text-green-400 text-opacity-50  leading-relaxed text-left whitespace-pre-wrap">
        {codeLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.4 }}
            className="whitespace-pre"
          >
            {line}
          </motion.p>
        ))}

        <motion.span
          className="text-green-500"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ▊
        </motion.span>
      </div>
    </div>
  );
}
