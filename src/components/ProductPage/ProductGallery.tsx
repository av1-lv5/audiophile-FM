/* This component is used only in ProductPageContent.tsx component */

import type { Product } from "@/types/product";
import ResponsiveImage from "../UI/ResponsiveImage";
import { urlFor } from "@/utils/sanity-client";

export type Props = {
	product: Product;
};

function ProductGallery({ product }: Props) {
	const { gallery } = product;

	return (
		<section id="product-gallery">
			<div className="container px-6 lg:px-20 mx-auto my-12 lg:my-20 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
				{/* First image */}
				<ResponsiveImage
					className="rounded-lg"
					imgClassName="object-cover w-full rounded-lg"
					aspectClassName="aspect-[445/280]"
					src={urlFor(gallery.first.mobile.asset).url()}
					sources={[
						{ srcSet: urlFor(gallery.first.desktop.asset).url() },
						{ srcSet: urlFor(gallery.first.tablet.asset).url() },
					]}
				/>
				{/* Second image */}
				<ResponsiveImage
					className="col-start-1 row-start-2 rounded-lg"
					imgClassName="object-cover w-full rounded-lg"
					aspectClassName="aspect-[445/280]"
					src={urlFor(gallery.second.mobile.asset).url()}
					sources={[
						{ srcSet: urlFor(gallery.second.desktop.asset).url() },
						{ srcSet: urlFor(gallery.second.tablet.asset).url() },
					]}
				/>
				{/* third image */}
				<ResponsiveImage
					className="row-span-2 rounded-lg"
					imgClassName="object-cover h-full w-full rounded-lg"
					aspectClassName="aspect-[635/592]"
					src={urlFor(gallery.third.mobile.asset).url()}
					sources={[
						{ srcSet: urlFor(gallery.third.desktop.asset).url() },
						{ srcSet: urlFor(gallery.third.tablet.asset).url() },
					]}
				/>
			</div>
		</section>
	);
}

export default ProductGallery;
