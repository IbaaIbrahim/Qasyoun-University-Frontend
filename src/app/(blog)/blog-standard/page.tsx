import BlogStandardArea from "@/components/blog/blog-standard-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";


export default function BlogStandardPage() {
  return (
    <main>

        {/* breadcrumb area start */}
        <BreadcrumbOne subtitle="Our Blog" title="Blog Standard" />
        {/* breadcrumb area end */}


        {/* blog standard area start */}
        <BlogStandardArea/>
        {/* blog standard area end */}
    </main>
  )
}
