export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 bg-neutral-50 py-14 text-neutral-900">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="font-bold">Vinícius Medeiros</h1>
        <img
          className="h-36 rounded-sm"
          alt="vini profile photo"
          src="https://media.licdn.com/dms/image/D4D03AQFv_NVQrTb_Lw/profile-displayphoto-shrink_200_200/0/1681476680521?e=1700697600&v=beta&t=X5rH0QEE1az1zxPz6QaieiX06vaTv_CoVHwidibS05o"
        />
      </div>
      <section className="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] md:w-[60rem]">
        <p>
          Olá, meu nome é Vinícius, tenho 21 anos e sou desenvolvedor frontend a
          2 anos.
        </p>
        <p>
          Minhas principais tecnologias hoje é o React, Next e typescript,
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
            href="https://www.youtube.com/@sidelab/videos"
            target="_blank"
          >
            youtube.
          </a>
        </p>
      </section>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/vinimedeiros13"
          className="underline"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="" className="underline" target="_blank">
          Github
        </a>
      </div>
    </main>
  );
}
