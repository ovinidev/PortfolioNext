interface LinkProps {
  name: string;
  link: string;
}

export function Link({ name, link }: LinkProps) {
  return (
    <a className="underline" target="_blank" rel="noreferrer" href={link}>
      {name}
    </a>
  );
}
