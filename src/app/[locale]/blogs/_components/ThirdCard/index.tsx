import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { PropsBlogType } from "../BlogsCeoCard";

function ThirdCard({ reversed, member }: PropsBlogType) {
  return (
    <Box
      sx={{
        mt: 8,
        height: "400px",
        backgroundImage: `url(${member?.media[0]?.original_url})`,
        width: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", my: 6, width: "50%" }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            eius odit quaerat adipisci eaque, iste voluptatum optio molestiae
            saepe repellat sint, nesciunt iusto praesentium accusamus dolorum
            corrupti. Alias provident architecto voluptatem ut similique nulla
            explicabo ad ipsa quis, molestiae officiis nobis expedita,
            perspiciatis placeat minus voluptate velit consectetur assumenda
            facere autem. Dolorum, vel aperiam? Cupiditate non vel nulla
            repudiandae. Maxime iste modi mollitia consectetur aliquid
            necessitatibus, incidunt, accusamus animi illo nisi laboriosam
            officia dolorum neque, voluptate quae impedit ratione beatae alias
            harum iure blanditiis fugiat cum sit inventore. Dolorum aliquid
            autem ipsa earum beatae itaque facilis id tempore, illo quaerat?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ThirdCard;
