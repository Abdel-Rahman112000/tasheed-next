"use client";

import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Blog } from "@/types/request/blog";
import {
  Grid,
  Typography,
  Stack,
  Box,
  GridProps,
  Link,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";

export const BlogGridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);
export const BlogsGridContainer = (props: GridProps) => (
  <Grid container spacing={6} {...props} />
);

function BlogCard({ horizontal, blog }: Props) {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery({
    maxWidth: theme.breakpoints.values.md,
  });

  const actualHorizontal = horizontal && !isTabletOrMobile;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Stack
        spacing={2}
        direction={actualHorizontal ? "row" : "column-reverse"}
      >
        <Box width={actualHorizontal ? 0.5 : 1}>
          <Stack
            spacing={2}
            justifyContent={actualHorizontal ? "center" : undefined}
            height={1}
          >
            <Typography variant="h5">{blog.title}</Typography>
            <Typography
              variant="body1"
              color={"text.disabled"}
              component="div"
              dangerouslySetInnerHTML={{ __html: blog.description || "" }}
            />
            <Stack direction="row">
              <Typography variant="body1" color={"text.disabled"} flexGrow={1}>
                {dayjs(blog.created_at).format("YYYY-MM-DD")}
              </Typography>
              <Link
                variant="body1"
                fontWeight={700}
                component={NextLink}
                href={`/blogs/${blog.id}`}
              >
                Read more
              </Link>
            </Stack>
          </Stack>
        </Box>

        <Box width={actualHorizontal ? 0.5 : 1}>
          <AspectRatio ratio={actualHorizontal ? 21 / 9 : 16 / 9}>
            <img
              src={blog.media?.[0]?.original_url}
              alt=""
              style={IMAGE_FIT_STYLES}
            />
          </AspectRatio>
        </Box>
      </Stack>
    </div>
  );
}

type Props = {
  horizontal?: boolean;
  blog: Blog;
};

export default BlogCard;
