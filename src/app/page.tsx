import { Link } from "@components/Link";
import { Logo } from "@components/Logo";
import { Typewriter } from "@components/Typewriter";
import { TECHNOLOGIES } from "@constants/technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 bg-background py-14 text-slate-50">
      <header className="flex flex-col items-center space-y-3">
        <Typewriter />

        <img
          className="h-36"
          alt="vini profile photo"
          src="https://github.com/ovinidev.png"
        />
      </header>

      <section className="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] lg:w-[60rem]">
        <p>
          Olá, meu nome é Vinícius, tenho 21 anos e sou desenvolvedor frontend a
          mais de 2 anos.
        </p>
        <p>
          Minhas principais tecnologias hoje são o React, Next e typescript,
          porém, estou estudando Vue e em breve Angular.
        </p>
        <p>
          Já trabalhei com várias tecnologias de estilização como styled
          components, stitches, sass, etc. Hoje estou trabalhando bastante com
          Chakra UI e Tailwind.
        </p>
        <p>
          Atualmente sou desenvolvedor frontend pleno na{" "}
          <Link
            link="https://www.linkedin.com/company/dataside-data-ia"
            name="Dataside."
          />
        </p>
        <p>
          Sou professor de desenvolvimento frontend na{" "}
          <Link link="https://www.inclus.com.br/index.html" name="Inclus." /> A
          Inclus é uma iniciativa filantrópica que já existe a mais de 10 anos
          na minha cidade onde ofertam alguns cursos na área de tecnologia.
        </p>
        <p>
          Estou em constante evolução e buscando sempre me aventurar por novos
          desafios.
        </p>
        <p>
          Confira alguns vídeos técnicos meus no{" "}
          <Link
            link="https://www.youtube.com/@ovinidev/videos"
            name="youtube."
          />
        </p>
      </section>

      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-wrap items-center gap-3 px-8">
          {TECHNOLOGIES.map((tech) => {
            return <Logo key={tech.alt} alt={tech.alt} src={tech.src} />;
          })}
        </div>

        <div className="text-secondary flex items-center space-x-4">
          <Link
            link="httEps://www.linkedin.com/in/vinimedeiros13"
            name="LinkedIn"
          />
          <Link link="https://github.com/ovinidev" name="Github" />
          <Link link="https://youtube.com/ovinidev" name="Youtube" />
        </div>
      </div>
    </main>
  );
}
