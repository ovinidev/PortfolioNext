"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 bg-background py-14 text-slate-50">
      <div className=" flex flex-col items-center space-y-3">
        <Typewriter
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
        <img
          className="h-36"
          alt="vini profile photo"
          src="https://github.com/ovinidev.png"
        />
      </div>
      <section className="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] lg:w-[60rem]">
        <p>
          Olá, meu nome é Vinícius, tenho 21 anos e sou desenvolvedor frontend a
          2 anos.
        </p>
        <p>
          Minhas principais tecnologias hoje são o React, Next e typescript,
          porém, estou de olho no Vue e Angular.
        </p>
        <p>
          Já trabalhei com várias tecnologias de estilização como styled
          components, stitches, sass, etc. Hoje estou trabalhando bastante com
          Chakra UI e Tailwind.
        </p>
        <p>
          Estou em constante evolução e buscando sempre me aventurar por novos
          desafios.
        </p>
        <p>
          Confira alguns vídeos técnicos meus no{" "}
          <a
            className="underline"
            href="https://www.youtube.com/@vinimedeiros3333/videos"
            target="_blank"
            rel="noreferrer"
          >
            youtube.
          </a>
        </p>
      </section>
      <div className="text-secondary flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/vinimedeiros13"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ovinidev"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </main>
  );
}
