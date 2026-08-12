"use client";

import Box from "@mui/material/Box";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import DashboardPreview from "./components/landing/DashboardPreview";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Hero />
      <DashboardPreview />
    </Box>
  );
}
