import { Stack } from "@mui/material";
import Intro from "./_sections/intro";
import FeaturedProjects from "./_sections/featured-projects";
import AboutUs from "./_sections/about-us";
import NewsAndBlogs from "./_sections/news-blogs";
import OngoingProjects from "./_sections/ongoing-projects";
import GetHomePageData from "@/utils/api/get/home-page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await GetHomePageData();

  return {
    title: data?.home[0]?.seo?.title,
    description: data?.home[0]?.seo?.description,
    openGraph: {
      images: [data?.home[0].media[0].original_url],
    },
  };
}
async function RootPage() {
  const data = await GetHomePageData();
  return (
    <Stack spacing={12}>
      <Intro data={data} />
      <FeaturedProjects data={data} />
      <AboutUs data={data} />
      <OngoingProjects data={data} />
      <NewsAndBlogs data={data} />
    </Stack>
  );
}

export default RootPage;
