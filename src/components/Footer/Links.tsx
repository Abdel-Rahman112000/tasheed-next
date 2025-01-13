import { Grid, Link as MuiLink, Stack } from "@mui/material";
import { SectionItem } from ".";
import Link from "next/link";
import { ReactNode } from "react";
import { routes } from "../Navbar/routes";
import { useContact } from "@/hooks/contactProvider";

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

  return (
    <Grid container>
      <Grid item xs={6}>
        <SectionItem label="SITEMAP">
          <Stack spacing={2}>
            {routes.map(({ name, path }) => (
              <LinkItem key={`${name} - ${path}`} href={path}>
                {name}
              </LinkItem>
            ))}
          </Stack>
        </SectionItem>
      </Grid>
      <Grid item xs={6}>
        <SectionItem label="SOCIALS">
          <Stack spacing={2}>
            <LinkItem href={data?.facebook || ""}>Facebook</LinkItem>
            <LinkItem href={data?.linkedin || ""}>LinkedIn</LinkItem>
            <LinkItem href={data?.instagram || ""}>Instagram</LinkItem>
            <LinkItem href={data?.twitter || ""}>Twitter</LinkItem>
          </Stack>
        </SectionItem>
      </Grid>
    </Grid>
  );
}

export default Links;
