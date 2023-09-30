import Image, { ImageProps } from "next/image";

interface LogoProps extends ImageProps {}

export function Logo(props: LogoProps) {
  return <Image height={48} width={48} {...props} />;
}
