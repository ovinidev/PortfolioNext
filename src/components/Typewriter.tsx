"use client";
import TypewriterEffect from "typewriter-effect";

export function Typewriter() {
  return (
    <TypewriterEffect
      options={{
        wrapperClassName: "font-bold",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Vinícius Medeiros")
          .pauseFor(1000 * 60 * 60)
          .start();
      }}
    />
  );
}
