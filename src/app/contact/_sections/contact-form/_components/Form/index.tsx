"use client";

import URLParse from "url-parse";
import RoundedButton from "@/components/RoundedButton";
import { sendContactForm } from "@/utils/api/post/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MuiPhoneNumber from "mui-phone-number";
import {
  Box,
  Grid,
  GridProps,
  TextFieldProps,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const GridItem = ({
  fieldError,
  children,
  ...props
}: GridProps & { fieldError?: string }) => (
  <Grid item xs={12} md={6} {...props}>
    {children}
    {fieldError && (
      <Typography variant="body2" color="error">
        {fieldError}
      </Typography>
    )}
  </Grid>
);

const TEXT_FIELD_DEFAULT_PROPS: TextFieldProps = {
  fullWidth: true,
  variant: "standard",
};

const textFieldDefaultProps = (label: string): TextFieldProps => ({
  ...TEXT_FIELD_DEFAULT_PROPS,
  label,
  placeholder: label,
});

const schema = z.object({
  name: z.string().min(5, "Full name should not be less than 5 characters."),
  email: z.string().email("Invalid email address."),
  country: z.string().min(1),
  company: z.string(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number."),
  interested: z.string(),
  message: z.string().min(15).max(400),
});

type FormType = z.infer<typeof schema>;

function ContactForm() {
  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormType>({ resolver: zodResolver(schema) });
  const { enqueueSnackbar } = useSnackbar();
  const { push } = useRouter();
  const onSubmit = handleSubmit(
    async ({
      country,
      email,
      interested,
      message,
      name,
      phoneNumber,
      company,
    }) => {
      try {
        const url = URLParse(window.location.href, true);

        await sendContactForm({
          company_name: company,
          country,
          email,
          interested_in: interested,
          message,
          name,
          phone: phoneNumber,
          from_project: url.query?.["from-project"],
        });
        enqueueSnackbar("Your form submitted successfully!");
        push("/");
      } catch (error) {
        enqueueSnackbar("Error Submitting form!", { variant: "error" });
      }
    }
  );
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Box>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <GridItem fieldError={errors.name?.message}>
            <TextField
              {...textFieldDefaultProps("Your Name")}
              {...register("name")}
            />
          </GridItem>
          <GridItem fieldError={errors.email?.message}>
            <TextField
              {...textFieldDefaultProps("Your Email")}
              {...register("email")}
            />
          </GridItem>
          <GridItem fieldError={errors.country?.message}>
            <TextField
              {...textFieldDefaultProps("Country")}
              {...register("country")}
            />
          </GridItem>
          <GridItem fieldError={errors.company?.message}>
            <TextField
              {...textFieldDefaultProps("Company")}
              {...register("company")}
            />
          </GridItem>
          <GridItem fieldError={errors.phoneNumber?.message}>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <MuiPhoneNumber
                  {...textFieldDefaultProps("Phone Number")}
                  autoFormat={false}
                  defaultCountry={"eg"}
                  onlyCountries={["eg"]}
                  countryCodeEditable={false}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </GridItem>
          <GridItem fieldError={errors.interested?.message}>
            <TextField
              {...textFieldDefaultProps("Interested In")}
              {...register("interested")}
            />
          </GridItem>
          <GridItem fieldError={errors.message?.message}>
            <TextField
              multiline
              {...textFieldDefaultProps("Message")}
              {...register("message")}
            />
          </GridItem>
        </Grid>
      </Box>
      <RoundedButton
        disabled={isSubmitting}
        sx={{ mt: 4, px: 10 }}
        type="submit"
      >
        Submit
      </RoundedButton>
    </Box>
  );
}

export default ContactForm;
