import AspectRatio from "@/components/AspectRatio";
import MediaComponent from "@/components/video-player";
import { WithTeamProps } from "../../page";
import RenderMedia from "@/components/RenderMedia";

function MediaViwer({ team: { meet_team_page } }: WithTeamProps) {
  return (
    <AspectRatio ratio={21 / 9}>
      <MediaComponent
        videoSrc={meet_team_page.media?.[0]?.original_url || ""}
      />
      {meet_team_page.media[0] && (
        <RenderMedia media={meet_team_page.media[0]} />
      )}
    </AspectRatio>
  );
}

export default MediaViwer;
