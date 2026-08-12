"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ContributionBars from "./ContributionBars";
import StatCard from "./StatCard";

const stats = [
  { value: "19", label: "Total commits" },
  { value: "3 days", label: "Longest streak" },
  { value: "gitdash-frontend", label: "Most active repository" },
];

export default function DashboardPreview() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, pb: { xs: 6, sm: 10 } }}>
      <Paper
        variant="outlined"
        sx={{
          maxWidth: 1100,
          mx: "auto",
          borderColor: "divider",
          borderRadius: "20px",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
            Good morning, coder
          </Typography>
          <Chip label="This week" color="primary" sx={{ borderRadius: "8px" }} />
        </Box>

        <ContributionBars />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
