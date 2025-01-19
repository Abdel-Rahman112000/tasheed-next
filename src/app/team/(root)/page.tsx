import { Container, Stack, Typography } from "@mui/material";
import MediaViwer from "./_components/MediaViewer";
import ManagerCard from "./_components/ManagerCard";
import BoardOfDirectors from "./_components/BoardOfDirectors";
import getTeamPageData from "@/utils/api/get/team-page";
import { TeamPageGetRoot } from "@/types/request/team";
import type { Metadata } from "next";
import Custom404 from "@/app/not-found";

export async function generateMetadata(): Promise<Metadata> {
  const team = await getTeamPageData();

  return {
    title: team?.meet_team_page?.seo.title,
    description: team?.meet_team_page?.seo?.description,
    openGraph: {
      images: team?.meet_team_page?.media[0].original_url,
    },
  };
}
async function OurTeam() {
  const team = await getTeamPageData();
  return <Custom404 />;

  // if (!team) return <></>;

  // return (
  //   <Stack spacing={4}>
  //     <MediaViwer team={team} />
  //     <Typography variant="h2" textAlign="center">
  //       MEET OUR TEAM
  //     </Typography>
  //     <div>
  //       <Container maxWidth="xl">
  //         <Stack>
  //           {team.our_team.map((member, index) => (
  //             <ManagerCard
  //               key={member.id}
  //               reversed={Boolean(index % 2)}
  //               member={member}
  //             />
  //           ))}
  //         </Stack>
  //       </Container>
  //     </div>
  //     <div>
  //       <Container maxWidth="xl" sx={{ mt: 12 }}>
  //         <Typography variant="h2" textAlign="center" gutterBottom>
  //           Board Of Directors
  //         </Typography>
  //         <BoardOfDirectors team={team} />
  //       </Container>
  //     </div>
  //   </Stack>
  // );
}

export type WithTeamProps = {
  team: TeamPageGetRoot;
};

export default OurTeam;
