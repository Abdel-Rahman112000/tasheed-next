import { Grid, Link as MuiLink, Stack } from "@mui/material";
import { SectionItem } from ".";
import { Link } from "@/i18n/routing";
import { ReactNode } from "react";
import { useRoutes } from "../Navbar/routes";
import { useContact } from "@/hooks/contactProvider";
import { useTranslations } from "next-intl";

const LinkItem = ({ children, href }: LinkItemProps) => (
  <MuiLink
    component={Link}
    href={href}
    underline="hover"
    color={"text.primary"}
  >
    {children}
  </MuiLink>
);
type LinkItemProps = { children: ReactNode; href: string };

function Links() {
  const { data } = useContact();
  const t = useTranslations();

  return (
    <Grid container>
      <Grid item xs={6}>
        <SectionItem label={t("HomePage.SITEMAP")}>
          <Stack spacing={2}>
            {useRoutes().map(({ name, path }) => (
              <LinkItem key={`${name} - ${path}`} href={path}>
                {name}
              </LinkItem>
            ))}
          </Stack>
        </SectionItem>
      </Grid>
      <Grid item xs={6}>
        <SectionItem label={t("HomePage.SOCIALS")}>
          <Stack spacing={2}>
            <LinkItem href={data?.facebook || ""}>
              {t("HomePage.Facebook")}
            </LinkItem>
            <LinkItem href={data?.linkedin || ""}>
              {t("HomePage.LinkedIn")}
            </LinkItem>
            <LinkItem href={data?.instagram || ""}>
              {t("HomePage.Instagram")}
            </LinkItem>
            <LinkItem href={data?.twitter || ""}>
              {t("HomePage.Twitter")}
            </LinkItem>
          </Stack>
        </SectionItem>
      </Grid>
    </Grid>
  );
}

export default Links;
