import { Metadata } from "next";
import CategoryBannerArea from "./_components/category-banner-area";
import CategoryArea from "./_components/category-area";
import BannerArea from "@/components/banner/banner-area";


export const metadata: Metadata = {
    title: "Course Categories - Acadia",
}

export default function CourseCategoriesPage() {
    return (
        <main>

            {/* category banner area start */}
            <CategoryBannerArea/>
            {/* category banner area end */}

            {/* category area start */}
            <CategoryArea/>
            {/* category area end */}

            {/* banner area start */}
            <BannerArea/>
            {/* banner area end */}
        </main>
    )
}
