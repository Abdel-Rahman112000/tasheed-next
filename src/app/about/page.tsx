import { Stack } from "@mui/material";
import IntroMedia from "./components/intro-media";
import Breif from "./components/breif";
import Vision from "./components/vision";
import Benifits from "./components/benifits";
import GridImagesView from "./components/grid-imges-view";
import OurGallery from "./components/our-gallery";
import getAboutPageData from "@/utils/api/get/about-page";
import { About } from "@/types/request/about";
import Mission from "./components/mission";
import OurProjects from "./components/our-projects";
export async function generateMetadata({ params }) {
  return {
    title: "...",
  };
}
async function AboutUsPage() {
  const about = await getAboutPageData();

  if (!about) return <></>;

  return (
    <Stack spacing={4}>
      <div>
        <IntroMedia about={about} />
        <Breif about={about} />
      </div>
      <Vision about={about} />
      <Mission about={about} />
      {about.Benefit && about.Benefit.length && <Benifits about={about} />}
      {about.ongoing && about.ongoing.length && (
        <OurProjects projects={about.ongoing} />
      )}
    </Stack>
  );
}

export type WithAboutProps = {
  about: About;
};

export default AboutUsPage;
