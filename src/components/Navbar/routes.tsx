import { ReactNode } from "react";
import LinkIcon from "@mui/icons-material/Link";

//Icons Import
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import CallIcon from "@mui/icons-material/Call";

export const createRoute = (
  name: RouteType["name"],
  path: RouteType["path"],
  icon: RouteType["icon"] = <LinkIcon />,
  isPrimary: RouteType["isPrimary"] = true
): RouteType => ({ name, path, icon, isPrimary });

export const routes = [
  createRoute("Home", "/", <HomeIcon />),
  createRoute("Projects", "/projects", <GridViewIcon />),
  createRoute("About Us", "/about", <QuestionMarkIcon />),
  createRoute("Blogs", "/blogs", <AssignmentIcon />),
  // createRoute("Our Team", "/team", <GroupsIcon />),
  createRoute("Careers", "/careers", <WorkHistoryIcon />),
  createRoute("Contact Us", "/contact", <CallIcon />, false),
];

export type RouteType = {
  name: string;
  path: string;
  icon: ReactNode;
  isPrimary: boolean;
};
