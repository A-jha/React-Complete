import { GameLayout } from "./GameLayout";
import React from "react";

const FinalLayout = ({ data }) => {
  console.log(data[1]);
  return (
    <div className="background">
      <main className="glass">
        <GameLayout data={data} />
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
};
export default FinalLayout;
