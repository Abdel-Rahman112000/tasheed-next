"use client";

import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SectionItem } from ".";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useContact } from "@/hooks/contactProvider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { api } from "@/constants/api";
import { useSnackbar } from "notistack";

const newsLetterSchema = z.object({
  email: z.string().email(),
});
type NewsLetterType = z.infer<typeof newsLetterSchema>;

function NewsLetter() {
  const { data } = useContact();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsLetterType>({ resolver: zodResolver(newsLetterSchema) });
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post(api`send-email`, data);
      reset();
      enqueueSnackbar("Subscribed successfully in news letter");
    } catch (error) {
      enqueueSnackbar("Error subscribing in news letter", { variant: "error" });
    }
  });

  return (
    <Stack spacing={6}>
      <SectionItem label="HEAD OFFICE">
        <Typography>{data?.head_office}</Typography>
      </SectionItem>
      <SectionItem label="NEWS LETTER">
        <Box component={"form"} onSubmit={onSubmit}>
          <TextField
            variant="standard"
            type="email"
            placeholder="Enter your email address"
            disabled={isSubmitting}
            label="Enter your email address"
            {...register("email")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="subtitle2" color="error">
            {errors.email?.message}
          </Typography>
          <Button
            fullWidth
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </SectionItem>
    </Stack>
  );
}

export default NewsLetter;
