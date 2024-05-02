import React from "react";
import Card from "./Card";

function Expertise() {
  const cardData = [
    {
      learnmore: "#",
      service: "Website design",
      imageSrc: "/e1.jpg",
    },
    {
      learnmore: "#",
      service: "Social Media",
      imageSrc: "/e2.jpg",
    },
    {
      learnmore: "#",
      service: "Illustration",
      imageSrc: "/e3.jpg",
    },
    {
      learnmore: "#",
      service: "Animated videos",
      imageSrc: "/e4.jpg",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center py-10 gap-y-6">
      <h3 className="gradient-text font-bold text-4xl">Our expertise</h3>
      <p className="text-nowrap text-center opacity-70">
        Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat
        <br />
        nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
        dolor.
      </p>
      <div className="mt-12 flex items-center justify-evenly w-full">
        {cardData.map((e, index) => (
          <Card key={index} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Expertise;
