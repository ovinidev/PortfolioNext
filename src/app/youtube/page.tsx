import { Video } from "./Video";

export default function Youtube() {
	return (
		<div className="grid w-full grid-cols-1 justify-items-center gap-4 px-4 xl:w-max xl:grid-cols-2">
			<Video src="https://www.youtube.com/embed/Aeh8B78e0QA?si=Sw3fzmyxUZZWZbJm" />
			<Video src="https://www.youtube.com/embed/HVD9GpU3PkE?si=MQ-eLXOAG_xJ3PSS" />
			<Video src="https://www.youtube.com/embed/lvKr6Ng2090?si=lq81Vll_iENGFsP1" />
			<Video src="https://www.youtube.com/embed/cMd6ji1Zx9g?si=12Y7u5ys5eXx_boS" />
		</div>
	);
}
