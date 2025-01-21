import RenderMedia from "@/components/RenderMedia";
import RoundedButton from "@/components/RoundedButton";
import { Link } from "@/i18n/routing";
import { Home } from "@/types/request/home";
import { Box, Stack, Typography } from "@mui/material";

function Video({ onClick, introData }: VideoProps) {
  const media = introData.media[0];

  return (
    <Stack position={"relative"} width={1} height={1} onClick={onClick}>
      {/* video placeholder */}
      <div style={{ width: "100%", height: "100%", background: "#333333" }}>
        {media && <RenderMedia media={media} />}
      </div>
      <Stack
        height={1}
        width={1}
        direction={"column-reverse"}
        position={"absolute"}
        zIndex={10}
        sx={{ pointerEvents: "none" }}
      >
        {!onClick && (
          <Box px={{ xs: 1, md: 4, lg: 8 }} pb={{ xs: 6, md: 12 }}>
            <Typography variant="h2" sx={{ wordWrap: "break-word" }}>
              {introData.title}{" "}
              <Typography component="span" fontWeight={700} variant="h5">
                {introData.date}
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              component={"div"}
              dangerouslySetInnerHTML={{
                __html: introData.description || "",
              }}
            ></Typography>
            <RoundedButton
              size="large"
              component={Link}
              href="/projects"
              sx={{ mt: 4, pointerEvents: "all" }}
            >
              Learn More
            </RoundedButton>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}
export type VideoProps = {
  onClick?: () => void;
  introData: Home;
};
export default Video;
