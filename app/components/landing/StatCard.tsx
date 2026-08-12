"use client";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "background.default",
        borderColor: "divider",
        borderRadius: "14px",
        p: 3,
      }}
    >
      <Typography sx={{ fontSize: "1.75rem", fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        {label}
      </Typography>
    </Paper>
  );
}
