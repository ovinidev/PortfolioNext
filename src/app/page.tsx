import { Link } from "@components/Link";
import { Logo } from "@components/Logo";
import { TECHNOLOGIES } from "@constants/technologies";
import NextLink from "next/link";

export default function Home() {
	return (
		<>
			<section className="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] lg:w-[60rem]">
				<p>
					Olá, meu nome é Vinícius, tenho 22 anos e sou desenvolvedor frontend a
					mais de 3 anos.
				</p>
				<p>
					Minhas principais tecnologias hoje são o React, Next e typescript,
					porém, estou estudando Vue e, em breve, Angular.
				</p>
				<p>
					Já trabalhei com várias tecnologias de estilização como styled
					components, stitches, sass, etc. Hoje estou trabalhando bastante com
					Chakra UI e Tailwind.
				</p>
				<p>
					Atualmente sou Software Engineer III na{" "}
					<Link
						link="https://www.linkedin.com/company/stone-co"
						name="Stone."
					/>
				</p>
				<p>
					Sou professor de desenvolvimento frontend na{" "}
					<Link link="https://www.inclus.com.br/index.html" name="Inclus." />{" "}
					Uma iniciativa filantrópica consolidada em minha cidade há 15 anos, na
					qual oferta alguns cursos na área de tecnologia.
				</p>
				<p>
					Estou em constante evolução e buscando sempre me aventurar por novos
					desafios.
				</p>
				<p>
					Confira alguns vídeos técnicos meus no{" "}
					<NextLink className="underline" href="/youtube">
						youtube.
					</NextLink>
				</p>
			</section>

			<div className="flex flex-col items-center space-y-6 px-8 pb-14">
				<section className="flex flex-wrap items-center gap-3">
					{TECHNOLOGIES.map((tech) => {
						return <Logo key={tech.alt} alt={tech.alt} src={tech.src} />;
					})}
				</section>

				<footer className="flex items-center space-x-4 text-secondary">
					<Link
						link="https://www.linkedin.com/in/vinimedeiros13"
						name="LinkedIn"
					/>
					<Link link="https://github.com/ovinidev" name="Github" />
				</footer>
			</div>
		</>
	);
}
