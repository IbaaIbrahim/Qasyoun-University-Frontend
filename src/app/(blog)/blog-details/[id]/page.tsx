import all_blogs from "@/data/blog-data";
import DetailsBreadcrumb from "../_components/details-breadcrumb";
import BlogDetailsArea from "../_components/blog-details-area";
import BlogDetailsRelatedBlogs from "@/components/blog/details/blog-details-related-blogs";
import { PageParamsProps } from "@/types/custom-d-t";

export async function generateMetadata(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;
  const blog = all_blogs.find((item) => item.id == id);
  return {
    title: blog?.title
  };
}

export default async function BlogDetailsPage(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;
  const blog = all_blogs.find((item) => item.id == id);

  return (
    <main>
      {blog ? (
        <>
          {/* breadcrumb area start */}
          <DetailsBreadcrumb title={blog.title} />
          {/* breadcrumb area end */}

          {/* blog details area start */}
          <BlogDetailsArea blog={blog} />
          {/* blog details area end */}

          {/* related blogs area start */}
          <BlogDetailsRelatedBlogs/>
          {/* related blogs area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No blog found with id: {id}
        </div>
      )}
    </main>
  );
}
