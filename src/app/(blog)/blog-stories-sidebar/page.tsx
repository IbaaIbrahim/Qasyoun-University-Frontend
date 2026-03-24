import BlogStoriesBanner from "@/components/blog/banner/blog-stories-banner";
import BlogStoriesSidebarArea from "@/components/blog/blog-stories-sidebar-area";

export default function BlogStoriesSidebarPage() {
  return (
    <main>
      {/* blog banner start */}
      <BlogStoriesBanner />
      {/* blog banner end */}

      {/* blog stories area start */}
      <BlogStoriesSidebarArea />
      {/* blog stories area end */}
    </main>
  );
}
