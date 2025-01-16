import { Box, Container, Stack } from "@mui/material";

function Ceo() {
  return (
    <div>
      <Container maxWidth="xl">
        <Stack>
          {/* {team.our_team.map((member, index) => (
            <ManagerCard
              key={member.id}
              reversed={Boolean(index % 2)}
              member={member}
            />
          ))} */}
        </Stack>
      </Container>
    </div>
  );
}

export default Ceo;
