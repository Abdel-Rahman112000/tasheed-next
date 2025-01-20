import IntroImageSection from "@/components/IntroImageSection";
import Typography from "@mui/material/Typography";
import { BlogGridItem, BlogsGridContainer } from "../_components/BlogCard";
import BlogCard from "../_components/BlogCard";
import { Box, Container, Grid } from "@mui/material";
import { getBlogs } from "@/utils/api/get/blogs";
import { TabsBlog } from "@/app/blogs/_components/TabsBlog";
import type { Metadata } from "next";
import { getBlogsType } from "@/utils/api/get/blogs-type";

export async function generateMetadata(): Promise<Metadata> {
  const blogs = await getBlogs();

  return {
    title: blogs?.caver?.seo?.title,
    description: blogs?.caver?.seo?.description,
    openGraph: {
      images: blogs?.caver.media[0].original_url,
    },
  };
}
async function BlogsPage() {
  const blogs = await getBlogs();
  const fetchedBlogType = await getBlogsType("1");
  console.log("fetchedBlogType", fetchedBlogType);
  if (!blogs && !fetchedBlogType) return <></>;

  return (
    <>
      {blogs?.caver.media[0] && (
        <IntroImageSection media={blogs?.caver.media[0]}>
          <Typography variant="h2" textAlign="center">
            {blogs?.caver.title}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            dangerouslySetInnerHTML={{ __html: blogs?.caver.description || "" }}
            fontWeight={500}
            textAlign="center"
          />
        </IntroImageSection>
      )}
      <Box>
        <TabsBlog />
      </Box>
      <Box py={8}>
        <Container maxWidth="xl">
          <Box>
            <BlogsGridContainer>
              {blogs?.blogs.map((blog, index) =>
                index === 0 ? (
                  <Grid key={blog.id} item xs={12} sm={6} md={12}>
                    <BlogCard horizontal blog={blog} />
                  </Grid>
                ) : (
                  <BlogGridItem key={blog.id}>
                    <BlogCard blog={blog} />
                  </BlogGridItem>
                )
              )}
            </BlogsGridContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BlogsPage;
