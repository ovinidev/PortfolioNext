import { ComponentProps } from "react";

interface VideoProps extends ComponentProps<"iframe"> {}

export function Video(props: VideoProps) {
  return (
    <iframe
      className="w-full sm:w-[500px] xl:w-[560px]"
      height="315"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      {...props}
    />
  );
}
