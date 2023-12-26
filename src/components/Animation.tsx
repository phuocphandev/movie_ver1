import React, { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Animation: React.FC = (abc:React.FC) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-red-500 z-90">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      ) : 
        ("")
      }
    </div>
  );
};

export default Animation;
