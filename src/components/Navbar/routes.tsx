import { ReactNode } from "react";
import LinkIcon from "@mui/icons-material/Link";

// Icons Import
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import CallIcon from "@mui/icons-material/Call";
import { useTranslations } from "next-intl";

export const createRoute = (
  name: string,
  path: RouteType["path"],
  icon: RouteType["icon"] = <LinkIcon />,
  isPrimary: RouteType["isPrimary"] = true
): RouteType => ({ name, path, icon, isPrimary });

export const useRoutes = () => {
  const t = useTranslations();

  return [
    createRoute(t("HomePage.home"), "/", <HomeIcon />),
    createRoute(t("HomePage.projects"), "/projects", <GridViewIcon />),
    createRoute(t("HomePage.aboutUs"), "/about", <QuestionMarkIcon />),
    createRoute(t("HomePage.blogs"), "/blogs", <AssignmentIcon />),
    // createRoute(t("ourTeam"), "/team", <GroupsIcon />),
    createRoute(t("HomePage.careers"), "/careers", <WorkHistoryIcon />),
    createRoute(t("HomePage.contactUs"), "/contact", <CallIcon />, false),
  ];
};

export type RouteType = {
  name: string;
  path: string;
  icon: ReactNode;
  isPrimary: boolean;
};
