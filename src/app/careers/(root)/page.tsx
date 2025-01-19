import RotatedTitleInSide from "@/components/RotatedTitleInSide";
import { Container, Stack, Typography } from "@mui/material";
import JobCategoryAccordion from "./_components/JobCategoryAccordion";
import MediaViwer from "../_components/MediaViewer";
import RoundedButton from "@/components/RoundedButton";
import getCareersPageData from "@/utils/api/get/careers-page";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCareersPageData();

  return {
    title: data?.career_cover?.seo?.title,
    description: data?.career_cover?.seo?.description,
    openGraph: {
      images: data?.career_cover.media[0].original_url,
    },
  };
}
async function CareersPage() {
  const data = await getCareersPageData();
  if (!data) {
    return <></>;
  }
  return (
    <Stack>
      <MediaViwer />
      <Stack py={4}>
        <Container maxWidth="xl">
          <div>
            <Stack spacing={4}>
              <RotatedTitleInSide title="CAREERS">
                <Stack spacing={2}>
                  {data.careers.map((category) => (
                    <JobCategoryAccordion career={category} key={category.id} />
                  ))}
                </Stack>
              </RotatedTitleInSide>
              <Stack spacing={2} alignItems={"center"}>
                <Typography variant="h3" textAlign={"center"}>
                  REACH OUT TO US
                </Typography>
                <Typography variant="h4" textAlign={"center"} fontWeight={300}>
                  WE ARE ALWAYS LOOKING FOR TALENTED PEOPLE
                </Typography>
                <RoundedButton
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/contact"
                >
                  Email Us
                </RoundedButton>
              </Stack>
            </Stack>
          </div>
        </Container>
      </Stack>
    </Stack>
  );
}

export default CareersPage;
