"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";
import { BlogType } from "@/types/request/blog";
import { getBlogsType } from "@/utils/api/get/blogs-type";
import CeoCard from "../BlogsCeoCard";

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
            <Tab label="ceo" value="1" />
            <Tab label="Blog" value="2" />
            <Tab label="News" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Container maxWidth="xl">
            <Stack>
              {blogType?.blogs?.map((item, index) => (
                <CeoCard
                  key={item.id}
                  reversed={Boolean(index % 2)}
                  member={item}
                />
              ))}
            </Stack>
          </Container>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
