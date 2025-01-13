import { Box, Stack, Typography } from "@mui/material";
import { WithBlogProps } from "../../page";
import moment from "moment";

function BlogContent({ blog }: WithBlogProps) {
  return (
    <div>
      <Stack spacing={12}>
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "end" }}
        >
          <Typography variant="h2" flexGrow={1}>
            {blog.title}
          </Typography>
          <Typography color="text.disabled">
            {moment(blog.created_at).format("HH:MM | DD-MM-YYYY")}
          </Typography>
        </div>
        {blog.descriptions.map((description) => (
          <div key={description.id}>
            {description.media?.map((media) => (
              <Box
                key={media.id}
                width={1}
                component="img"
                src={media.original_url}
              />
            ))}
            {description.description && (
              <Typography
                component="div"
                dangerouslySetInnerHTML={{ __html: description.description }}
              />
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default BlogContent;
