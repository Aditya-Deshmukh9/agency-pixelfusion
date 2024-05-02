"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-140%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[500px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

const cards = [
  {
    url: "/ProjectImage/01.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/ProjectImage/02.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/ProjectImage/03.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/ProjectImage/04.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/ProjectImage/05.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/ProjectImage/06.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/ProjectImage/07.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default Projects;
