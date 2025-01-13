import DashSeparator from "@/components/DashSeparator";
import { About } from "@/types/request/home";
import { Grid, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

function AboutContent({ about: { title, description_home } }: Props) {
  return (
    <Grid item xs={12} md={5.5}>
      <Stack py={"20px"} spacing={4}>
        <DashSeparator />
        <Typography variant="h2" lineHeight="1.5em" letterSpacing={".15em"}>
          {title || (
            <>
              ABOUT <br /> US
            </>
          )}
        </Typography>
        <Typography
          component={"div"}
          dangerouslySetInnerHTML={{ __html: description_home || "" }}
          sx={{
            transition: "200ms",
            display: "-webkit-box",
            WebkitLineClamp: 20,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        />
        <Link color="secondary.main" component={NextLink} href={"/about"}>
          See More!
        </Link>
      </Stack>
    </Grid>
  );
}

type Props = {
  about: About;
};

export default AboutContent;
