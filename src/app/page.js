import React from "react";
import Banner from "./_components/Home/Banner";
import Expertise from "./_components/Home/Expertise";
import Projects from "./_components/Home/Project";

function page() {
  return (
    <div>
      <Banner />
      <Projects />
      <Expertise />
    </div>
  );
}

export default page;
