import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AboutVideo() {
  const videoRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.4 } // plays when ~40% visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="space-y-4 text-center"
    >
      <div className="mx-auto overflow-hidden rounded-2xl shadow-2xl max-w-4xl">
        <video
          ref={videoRef}
          src="aboutusvideo.mp4"
          playsInline
          className="w-full object-cover rounded-2xl"
        />
      </div>
    </motion.div>
  );
}
