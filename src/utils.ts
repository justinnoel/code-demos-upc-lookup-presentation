import slides from "./data/slides.json";

export function getPrevNext(pathName: string) {
	if (pathName === "/") {
		return { nextSlide: slides[0], previousSlide: null, slideIndex: null };
	}

	const slideLink = pathName.replace("/slides/", "");
	const slideIndex = slides.findIndex((slide) => slide.linkText === slideLink);

	return {
		nextSlide: slides[slideIndex + 1],
		previousSlide: slides[slideIndex - 1],
		slideIndex,
	};
}
