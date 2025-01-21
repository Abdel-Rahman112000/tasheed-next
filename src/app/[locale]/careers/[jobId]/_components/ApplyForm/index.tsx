"use client";

import AddLabelToEl from "@/components/AddLabelToEl";
import RoundedButton from "@/components/RoundedButton";
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
import { FilePond } from "react-filepond";
import { Controller, useForm } from "react-hook-form";
import { z, infer } from "zod";
import { WithJobProps } from "../../page";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { sendJobApplication } from "@/utils/api/post/job-application";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

const GridItem = ({
  fieldLabel,
  fieldError,
  children,
  ...props
}: GridProps & { fieldLabel: string; fieldError?: string }) => (
  <Grid item xs={12} md={6} {...props}>
    <AddLabelToEl
      label={fieldLabel}
      error={fieldError}
      labelTypographyProps={{
        sx: { textTransform: "uppercase" },
        variant: "body1",
        gutterBottom: true,
        fontWeight: 700,
      }}
    >
      {children}
    </AddLabelToEl>
  </Grid>
);

const TEXT_FIELD_DEFAULT_PROPS: TextFieldProps = {
  fullWidth: true,
  variant: "standard",
};

const schema = z.object({
  fullName: z
    .string()
    .min(5, "Full name should not be less than 5 characters."),
  email: z.string().email("Invalid email address."),
  dateOfBirth: z
    .string()
    .datetime()
    .refine((date) => {
      const dateObj = moment(date);
      return dateObj.isBefore();
    }, "Date of birth cannot be in the future."),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number."),
  linkedInProfile: z.string().url("Invalid LinkedIn profile URL."),
  resumeFile: z.array(z.instanceof(File)).length(1, "Resume is required!"),
});

type FormType = z.infer<typeof schema>;

function ApplyForm({ job }: WithJobProps) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormType>({ resolver: zodResolver(schema) });
  const onSubmit = handleSubmit(async (dto) => {
    const {
      dateOfBirth,
      email,
      fullName,
      linkedInProfile,
      phoneNumber,
      resumeFile,
    } = dto;
    try {
      const res = await sendJobApplication({
        "birth-date": dateOfBirth,
        email,
        full_name: fullName,
        file: resumeFile[0],
        job_id: job.id,
        linked_in: linkedInProfile,
        phone: phoneNumber,
      });
      enqueueSnackbar("Your application submitted successfully!");
      router.push("/");
    } catch (error) {
      enqueueSnackbar("Error Submitting your application!", {
        variant: "error",
      });
    }
  });
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Typography variant="h3" gutterBottom>
        Apply For The Job
      </Typography>
      <Box>
        <Grid container columnSpacing={{ md: 8, lg: 20 }} rowSpacing={4}>
          <GridItem fieldLabel="Fullname" fieldError={errors.fullName?.message}>
            <TextField
              placeholder="Fullname"
              {...TEXT_FIELD_DEFAULT_PROPS}
              {...register("fullName")}
            />
          </GridItem>
          <GridItem fieldLabel="Email" fieldError={errors.email?.message}>
            <TextField
              placeholder="Email"
              {...TEXT_FIELD_DEFAULT_PROPS}
              {...register("email")}
            />
          </GridItem>

          <GridItem
            fieldLabel="Phone number"
            fieldError={errors.phoneNumber?.message}
          >
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <MuiPhoneNumber
                  {...TEXT_FIELD_DEFAULT_PROPS}
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
          <GridItem
            fieldLabel="LinkedIn profile"
            fieldError={errors.linkedInProfile?.message}
          >
            <TextField
              placeholder="LinkedIn Profile"
              {...TEXT_FIELD_DEFAULT_PROPS}
              {...register("linkedInProfile")}
            />
          </GridItem>
          <GridItem
            fieldLabel="Date of birth"
            fieldError={errors.dateOfBirth?.message}
          >
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field }) => (
                <DatePicker
                  slotProps={{ textField: TEXT_FIELD_DEFAULT_PROPS }}
                  defaultValue={null}
                  label={"Date of birth"}
                  value={field.value ? moment(field.value) : null}
                  onChange={(value) => field.onChange(value?.toISOString())}
                  disableFuture
                />
              )}
            />
          </GridItem>
          <GridItem fieldLabel="Resume" fieldError={errors.resumeFile?.message}>
            <Controller
              name="resumeFile"
              control={control}
              render={({ field }) => (
                <FilePond
                  files={field.value}
                  onupdatefiles={(files) => {
                    field.onChange(
                      files.map((filepondFile) => filepondFile.file)
                    );
                  }}
                  allowMultiple={false}
                  acceptedFileTypes={["application/*"]}
                />
              )}
            />
          </GridItem>
        </Grid>
      </Box>
      <RoundedButton sx={{ mt: 4 }} type="submit" color="secondary">
        Apply
      </RoundedButton>
    </Box>
  );
}

export default ApplyForm;
