import React from "react";
import DevCard from "./ui/dev-card";
import Ruhaan from "@/app/assets/Ruhaan.jpg";

function DevGrid() {
  return (
    <div className="flex flex-col mx-auto min-w-screen justify-center items-center mb-6">
      <div className="pb-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Our Devs
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center w-auto">
        <DevCard
          imageName={Ruhaan}
          devName="Aditya Agrawal"
          hoverContentHeading="App Developer"
          hoverContentBody="The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
        ></DevCard>
        <DevCard
          imageName={Ruhaan}
          devName="Mahendrakumar Suthar"
          hoverContentHeading="App Developer"
          hoverContentBody="The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
        ></DevCard>
        <DevCard
          imageName={Ruhaan}
          devName="Ruhaan Sande"
          hoverContentHeading="App Developer"
          hoverContentBody="The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
        ></DevCard>
      </div>
    </div>
  );
}

export default DevGrid;
