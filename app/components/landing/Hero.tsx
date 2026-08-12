"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        px: 3,
        pt: { xs: 4, sm: 6 },
        pb: { xs: 6, sm: 8 },
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" } }}
      >
        Your GitHub story, at a glance
      </Typography>

      <Typography variant="subtitle1" sx={{ maxWidth: 560, mx: "auto", mt: 2.5 }}>
        Turn commits, streaks, pull requests, and repository momentum into
        one calm developer dashboard.
      </Typography>

      <Button
        variant="contained"
        disableElevation
        startIcon={<GitHubIcon />}
        sx={{
          mt: 4,
          bgcolor: "common.white",
          color: "grey.900",
          px: 3.5,
          py: 1.4,
          fontSize: "0.95rem",
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        Sign in with GitHub
      </Button>
    </Box>
  );
}
