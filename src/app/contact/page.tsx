import { Contact } from "@/types/request/contact";
import ContactFormSection from "./_sections/contact-form";
import ContactInfoSection from "./_sections/contact-info";
import getContactPageData from "@/utils/api/get/contact-page";

async function ContactPage() {
  const data = await getContactPageData();

  if (!data) return <></>;

  return (
    <>
      <ContactInfoSection contact={data} />
      <ContactFormSection contact={data} />
    </>
  );
}

export type WithContactProps = {
  contact: Contact;
};

export default ContactPage;
