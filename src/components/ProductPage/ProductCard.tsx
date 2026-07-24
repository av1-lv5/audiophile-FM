/* Product cards in "you may also like" section.*/

import Link from "next/link";
import StyledButton from "../UI/Button";
import ResponsiveImage from "../UI/ResponsiveImage";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/utils/sanity-client";

// Types
export type Props = {
	slug: string;
	name: string;
	image: {
		mobile: SanityImageObject;
		tablet: SanityImageObject;
		desktop: SanityImageObject;
	};
};

function ProductCard(props: Props) {
	const { name, slug, image } = props;
	return (
		<div className="max-w-sm flex gap-4 flex-col items-center">
			<div className="w-full">
				<ResponsiveImage
					className="rounded-md"
					imgClassName="w-full rounded-md"
					aspectClassName="aspect-square"
					src={urlFor(image.mobile.asset._ref).url()}
					sources={[
						{
							srcSet: urlFor(image.desktop.asset._ref).url(),
							media: "(min-width: 1080px)",
						},
						{
							srcSet: urlFor(image.tablet.asset._ref).url(),
							media: "(min-width: 640px)",
						},
					]}
				/>
			</div>
			<p className="md:text-2xl text-xl font-semibold tracking-wide uppercase">
				{name}
			</p>
			<Link href={`/products/${slug}`}>
				<StyledButton text="See product" />
			</Link>
		</div>
	);
}

export default ProductCard;
