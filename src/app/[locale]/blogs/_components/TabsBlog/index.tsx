"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { BlogType } from "@/types/request/blog";
import { getBlogsType } from "@/utils/api/get/blogs-type";
import CeoCard from "../BlogsCeoCard";
import BlogLeft from "../BlogLeft";
import ThirdCard from "../ThirdCard";
import BlogRight from "../BlogRight";
import BlogCard, { BlogGridItem, BlogsGridContainer } from "../BlogCard";

export function TabsBlog() {
  const [value, setValue] = useState("1");
  const [blogType, setBlogType] = useState<BlogType>();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchBlogType = async () => {
      const fetchedBlogType = await getBlogsType(value);
      fetchedBlogType && setBlogType(fetchedBlogType);
    };

    fetchBlogType();
  }, [value]);
  if (!blogType) return <></>;

  return (
    <Box sx={{ width: "100%", py: 9 }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList onChange={handleChange}>
            <Tab
              label="ceo"
              value="1"
              sx={{
                fontWeight: value === "1" ? "600" : "400",
                fontSize: "24px",
              }}
            />
            <Tab
              label="Blog"
              value="2"
              sx={{
                fontWeight: value === "2" ? "600" : "400",
                fontSize: "24px",
              }}
            />
            <Tab
              label="News"
              value="3"
              sx={{
                fontWeight: value === "3" ? "600" : "400",
                fontSize: "24px",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ px: 0 }}>
          {blogType.blogs.map((item) => (
            <>
              <Container maxWidth="lg">
                <Stack>
                  {/* {blogType?.blogs?.map((item, index) => (
                <CeoCard
                  key={item.id}
                  reversed={Boolean(index % 2)}
                  member={item}
                />
              ))} */}
                  {item.type_ceo == "ceo_1" && <CeoCard member={item} />}
                  {item.type_ceo == "ceo_2" && <BlogLeft member={item} />}
                </Stack>
              </Container>
              {item.type_ceo == "ceo_3" && (
                <ThirdCard member={blogType.blogs[0]} />
              )}
              {item.type_ceo == "ceo_4" && (
                <Container maxWidth="lg">
                  <BlogRight member={blogType.blogs[0]} />
                </Container>
              )}
              {item.type_ceo == "null" && (
                <BlogGridItem>
                  <BlogCard blog={item} />
                </BlogGridItem>
              )}
            </>
          ))}
        </TabPanel>
        <TabPanel value="2">
          <Box py={8}>
            <Container maxWidth="xl">
              <Box>
                <BlogsGridContainer>
                  {blogType.blogs.map((blog, index) =>
                    index === 0 ? (
                      <Grid key={blog.id} item xs={12} sm={6} md={12}>
                        <BlogCard horizontal blog={blog} />
                      </Grid>
                    ) : (
                      <BlogGridItem key={blog.id}>
                        <BlogCard blog={blog} />
                      </BlogGridItem>
                    )
                  )}
                </BlogsGridContainer>
              </Box>
            </Container>
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Box py={8}>
            <Container maxWidth="xl">
              <Box>
                <BlogsGridContainer>
                  {blogType.blogs.map((blog, index) =>
                    index === 0 ? (
                      <Grid key={blog.id} item xs={12} sm={6} md={12}>
                        <BlogCard horizontal blog={blog} />
                      </Grid>
                    ) : (
                      <BlogGridItem key={blog.id}>
                        <BlogCard blog={blog} />
                      </BlogGridItem>
                    )
                  )}
                </BlogsGridContainer>
              </Box>
            </Container>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
