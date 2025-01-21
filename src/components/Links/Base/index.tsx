import { Link } from "@/i18n/routing";
import { Typography, TypographyProps } from "@mui/material";
import { LinkProps } from "next/link";

function BaseLink({ children, props }: Props) {
  return (
    <Typography component={Link} variant="body1" fontWeight={600} {...props}>
      {children}
    </Typography>
  );
}

type Props = {
  children: React.ReactNode;
  props?: LinkProps & TypographyProps;
};

export type BaseLinkProps = Props;
export default BaseLink;
