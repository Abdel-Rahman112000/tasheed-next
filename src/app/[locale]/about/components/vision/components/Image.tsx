import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Box } from "@mui/material";

export function BackImageComponent({ src }: Props) {
  return (
    <AspectRatio ratio={3 / 4}>
      <Box
        component="img"
        src={src}
        sx={{
          borderTopRightRadius: 32,
          ...IMAGE_FIT_STYLES,
        }}
      />
    </AspectRatio>
  );
}

export function FrontImageComponent({ src }: Props) {
  return (
    <AspectRatio ratio={3 / 4}>
      <Box
        component="img"
        src={src}
        sx={{
          borderRadius: 1,
          borderBottomLeftRadius: 32,
          border: "8px solid transparent",
          borderColor: "text.primary",
          ...IMAGE_FIT_STYLES,
        }}
      />
    </AspectRatio>
  );
}

type Props = {
  src?: string;
};
