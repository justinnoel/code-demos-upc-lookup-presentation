import Presentation from "./data/presentation.json";

const { slides } = Presentation;

export function findSlideIndex(pathName: string) {
	const slideLink = pathName.replace("/slides/", "");
	return slides.findIndex((slide) => slide.link === slideLink);
}

export function getPrevNext(pathName: string) {
	if (pathName === "/") {
		return { nextSlide: slides[0], previousSlide: null, slideIndex: null };
	}

	const slideIndex = findSlideIndex(pathName);

	return {
		nextSlide: slides[slideIndex + 1],
		previousSlide: slides[slideIndex - 1],
		slideIndex,
	};
}

export function getSeoProps(pathName: string) {
	const openGraph = {
		...Presentation.splashScreen.openGraph,
		basic: {
			...Presentation.splashScreen.openGraph.basic,
			image: `${Presentation.canonical}${Presentation.splashScreen.openGraph.basic.image}`,
			type: "website",
			url: Presentation.canonical,
		},
	};

	if (pathName === "/") {
		return {
			title: Presentation.splashScreen.title,
			description: Presentation.splashScreen.description,
			canonical: Presentation.canonical,
			openGraph,
		};
	}

	const slideIndex = findSlideIndex(pathName);
	const slide = slides[slideIndex] || {
		description: "",
		link: "",
		openGraph,
		title: "",
	};

	return {
		canonical: `${Presentation.canonical}${slide.link}`,
		description: slide.description,
		openGraph,
		title: slide.title,
	};
}
