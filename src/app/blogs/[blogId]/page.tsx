import { Container, Stack } from "@mui/material";
import { getBlog } from "@/utils/api/get/blogs";
import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Blog } from "@/types/request/blog";
import BlogContent from "./_components/BlogContent";

async function BlogPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getBlog(blogId);

  if (!blog) return <></>;

  return (
    <Container maxWidth="xl">
      <Stack spacing={4}>
        <AspectRatio ratio={21 / 9}>
          <img
            src={blog.media?.[0]?.original_url}
            alt="blog banner"
            style={IMAGE_FIT_STYLES}
          />
        </AspectRatio>
        <BlogContent blog={blog} />
      </Stack>
    </Container>
  );
}

export type WithBlogProps = {
  blog: Blog;
};

export default BlogPage;
