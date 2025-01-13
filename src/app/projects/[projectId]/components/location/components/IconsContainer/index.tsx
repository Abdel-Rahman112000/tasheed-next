"use client";

import { Stack } from "@mui/material";

// Icons Import
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useAtomValue } from "jotai";
import IconButtonWithTooltip from "@/components/IconButtonWithTooltip";
import { WithProjectProps } from "@/app/projects/[projectId]/page";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

function IconsContainer({ project }: WithProjectProps) {
  return (
    <Stack direction={"row"} spacing={1}>
      <IconButtonWithTooltip title="Facebook" url={project.facebook}>
        <FacebookIcon fontSize="large" />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip title="Twitter" url={project.twitter}>
        <XIcon fontSize="large" />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip title="Instagram" url={project.instagram}>
        <InstagramIcon fontSize="large" />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip title="Youtube" url={project.youtube}>
        <YouTubeIcon fontSize="large" />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip title="Telegram" url={project.telegram}>
        <TelegramIcon fontSize="large" />
      </IconButtonWithTooltip>
    </Stack>
  );
}

export default IconsContainer;
