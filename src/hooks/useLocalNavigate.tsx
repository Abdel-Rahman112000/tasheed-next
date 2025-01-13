import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const LocalNavLink = forwardRef(function (
  { to, ...props }: { to: string } & React.ComponentProps<typeof Link>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { local } = useParams();

  // Check if 'local' and 'to' are valid
  if (!local) {
    console.error("Language ('local') is missing in the URL.");
    return null;
  }

  // Ensure the 'to' prop is a valid string before calling 'startsWith'
  const linkTo =
    typeof to === "string" && to.startsWith("/") ? `/${local}${to}` : to;

  return (
    <Link {...props} href={linkTo} ref={ref}>
      {props.children}
    </Link>
  );
});

LocalNavLink.displayName = "LocalNavLink";
