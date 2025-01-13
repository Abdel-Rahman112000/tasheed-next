import RotatedTitleInSide from "@/components/RotatedTitleInSide";
import { Container, Stack, Typography } from "@mui/material";
import JobCategoryAccordion from "./_components/JobCategoryAccordion";
import JobCard from "./_components/JobCard";
import MediaViwer from "../_components/MediaViewer";
import RoundedButton from "@/components/RoundedButton";
import getCareersPageData from "@/utils/api/get/careers-page";
import Link from "next/link";

async function CareersPage() {
  const careers = await getCareersPageData();
  if (!careers) {
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
                  {careers.map((category) => (
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
