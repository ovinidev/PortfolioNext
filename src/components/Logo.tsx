import { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"img"> {}

export function Logo(props: LogoProps) {
  return <img className="h-12" {...props} />;
}
