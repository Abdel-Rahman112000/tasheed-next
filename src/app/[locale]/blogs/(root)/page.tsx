import IntroImageSection from "@/components/IntroImageSection";
import Typography from "@mui/material/Typography";
import { BlogGridItem, BlogsGridContainer } from "../_components/BlogCard";
import BlogCard from "../_components/BlogCard";
import { Box, Container, Grid } from "@mui/material";
import { getBlogs } from "@/utils/api/get/blogs";
import type { Metadata } from "next";
import { getBlogsType } from "@/utils/api/get/blogs-type";
import { TabsBlog } from "../_components/TabsBlog";

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
  if (!blogs) return <></>;

  return (
    <Box sx={{ background: "#000" }}>
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
    </Box>
  );
}

export default BlogsPage;
