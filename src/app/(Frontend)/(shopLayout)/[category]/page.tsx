// Components
import CategoryProductsList from "@/components/CategoryPage/CategoryProductsList";
import CommonHero from "@/components/CategoryPage/CommonHero";

// types
import { ProductCategories } from "@/types/productCategories";
type Props = {
	params: Promise<{
		category: ProductCategories;
	}>;
};

// READ: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// READ: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
	const categories = ["headphones", "earphones", "speakers"];

	return categories.map((category) => ({
		category,
	}));
}

async function CategoryPage({ params }: Props) {
	const { category } = await params;

	return (
		<>
			<CommonHero headerTitle={`${category}`} />
			<CategoryProductsList productCategory={`${category}`} />
		</>
	);
}

export default CategoryPage;
