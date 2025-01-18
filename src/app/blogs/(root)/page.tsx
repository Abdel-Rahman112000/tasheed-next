import IntroImageSection from "@/components/IntroImageSection";
import Typography from "@mui/material/Typography";
import { BlogGridItem, BlogsGridContainer } from "../_components/BlogCard";
import BlogCard from "../_components/BlogCard";
import { Box, Container, Grid } from "@mui/material";
import { getBlogs } from "@/utils/api/get/blogs";
import { TabsBlog } from "@/components/TabsBlog";

async function BlogsPage() {
  const blogs = await getBlogs();

  if (!blogs) return <></>;

  const { caver: cover } = blogs;

  return (
    <div>
      {cover.media[0] && (
        <IntroImageSection media={cover.media[0]}>
          <Typography variant="h2" textAlign="center">
            {cover.title}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            dangerouslySetInnerHTML={{ __html: cover.description || "" }}
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
              {blogs.blogs.map((blog, index) =>
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
    </div>
  );
}

export default BlogsPage;
