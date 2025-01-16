"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Ceo from "./Ceo";
import { Container } from "@mui/material";

export default function TabsBlog() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          <Container maxWidth="lg">
            <Ceo />
          </Container>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
