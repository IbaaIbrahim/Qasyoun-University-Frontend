import { Metadata } from "next";
import BlogListArea from "@/components/blog/blog-list-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";


export const metadata: Metadata = {
  title: "Blog List - Acadia",
};

export default function BlogListPage() {
  return (
    <main>

        {/* breadcrumb area start */}
        <BreadcrumbOne subtitle="Our Blog" title="Right Sidebar" />
        {/* breadcrumb area end */}


        {/* blog list area start */}
        <BlogListArea/>
        {/* blog list area end */}
    </main>
  )
}
