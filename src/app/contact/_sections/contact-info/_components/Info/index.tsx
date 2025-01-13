import { WithContactProps } from "@/app/contact/page";
import { phone } from "phone";
import {
  Box,
  LinkProps,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

const Link = (props: LinkProps) => (
  <MuiLink color={"text.primary"} display={"block"} {...props} />
);

const InfoItem = ({ label, children }: InfoItemProps) => (
  <div>
    <Typography variant="h4" textTransform={"uppercase"} fontWeight={300}>
      {label}
    </Typography>
    <Typography variant="h5" fontWeight={300}>
      {children}
    </Typography>
  </div>
);
type InfoItemProps = {
  label?: ReactNode;
  children?: ReactNode;
};
function Info({ contact }: WithContactProps) {
  return (
    <Box>
      <Box mb={10}>
        <Typography variant="h2" gutterBottom>
          DISCOVER US
        </Typography>
        <Typography
          variant="body1"
          component={"div"}
          dangerouslySetInnerHTML={{ __html: contact.description || "" }}
        />
      </Box>
      <div>
        <Stack spacing={4}>
          <InfoItem label={"Visit Us"}>
             {contact.visit_us?.map((office, index) => (
               <Link href={office.visit_link} key={index} target="_blank">
                {office.visit_us}
               </Link>
            ))}
          </InfoItem>
          <InfoItem label={"Email Us"}>
            <Link href={`mailto:${contact.email_us}`}>{contact.email_us}</Link>
          </InfoItem>
          <InfoItem label={"Call Us"}>
            {contact.call_us?.map((num) => {
              const { isValid, phoneNumber } = phone(num);
              return (
                <Link
                  key={num}
                  href={isValid ? `tel:${phoneNumber}` : undefined}
                >
                  {num}
                </Link>
              );
            })}
          </InfoItem>
        </Stack>
      </div>
    </Box>
  );
}

export default Info;
