"use client";

import Box from "@mui/material/Box";

// Decorative activity strip echoing a GitHub-style contribution graph,
// simplified to the handful of bars shown in the mockup.
const bars: { color: string; width: number }[] = [
  { color: "success.dark", width: 32 },
  { color: "success.main", width: 32 },
  { color: "success.dark", width: 32 },
  { color: "success.dark", width: 32 },
  { color: "success.main", width: 32 },
  { color: "success.main", width: 32 },
  { color: "success.main", width: 32 }
];

export default function ContributionBars() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 3.5 }}>
      {bars.map((bar, index) => (
        <Box
          key={index}
          sx={{
            width: bar.width,
            height: 8,
            borderRadius: 4,
            bgcolor: bar.color,
          }}
        />
      ))}
      <Box sx={{ width: 32 }} />
    </Box>
  );
}
