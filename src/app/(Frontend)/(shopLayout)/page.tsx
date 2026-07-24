import HomeHero from "@/components/HomePage/HomeHero";
import { getFeaturedProduct } from "@/utils/sanity-utils";
import { urlFor } from "@/utils/sanity-client";

export default async function Home() {
	const featuredProduct = await getFeaturedProduct();
	const product = featuredProduct[0].selectProduct;

	return (
		<section id="hero" className="h-[650px]">
			{/* Hero background image container */}
			<div className="absolute top-0 w-full h-[650px] bg-[#191919]">
				<picture>
					<source
						srcSet={urlFor(
							featuredProduct[0].image.desktop.asset
						).url()}
						media="(min-width: 1024px)"
					/>
					<source
						srcSet={urlFor(
							featuredProduct[0].image.tablet.asset
						).url()}
						media="(min-width: 640px)"
					/>
					<img
						src={urlFor(
							featuredProduct[0].image.mobile.asset
						).url()}
						alt=""
						className="object-cover w-auto mx-auto h-full"
					/>
				</picture>
			</div>
			{/* Hero section */}
			<HomeHero product={product} />
		</section>
	);
}
