// Components
import ProductPageContent from "@/components/ProductPage/ProductPageContent";
import GoBack from "@/components/GoBack";
import { getAllProducts, getProduct } from "@/utils/sanity-utils";
import { Product } from "@/types/product";

// Types
export type Props = {
	params: Promise<{ productId: string }>;
};

// READ: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// READ: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
	const products: Product[] = await getAllProducts();
	return products.map((eachProduct) => ({
		productId: eachProduct.slug.current,
	}));
}

async function ProductPage({ params }: Props) {
	const { productId } = await params;
	const product = await getProduct(productId);
	const currentProduct = product[0];
	return (
		<main>
			<div className="h-20 bg-black"></div>
			{currentProduct ? (
				<>
					<GoBack slug={currentProduct.category} />
					<ProductPageContent product={currentProduct} />
				</>
			) : (
				<h2 className="uppercase text-4xl bold text-center mt-20">
					404: Product does not exist
				</h2>
			)}
		</main>
	);
}

export default ProductPage;
