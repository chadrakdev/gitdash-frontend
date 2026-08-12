"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 6 },
        py: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F2027 0%, #0B1D26 100%)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 6 V16"
            stroke="#8957e5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 16 C6 20, 10 18, 12 14 C14 10, 16 8, 18 8"
            stroke="#8957e5"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="6" cy="18" r="2.5" fill="#0B1D26" stroke="#8957e5" strokeWidth="2" />
          <circle cx="6" cy="6" r="2.5" fill="#0B1D26" stroke="#8957e5" strokeWidth="2" />
          <circle cx="18" cy="8" r="2.5" fill="#0B1D26" stroke="#8957e5" strokeWidth="2" />
        </svg>
      </Box>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: 700 }}>
          GitPulse
        </Typography>
      </Box>

      <IconButton
        aria-label="Toggle dark mode"
        sx={{
          width: 40,
          height: 40,
          borderRadius: "10px",
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <DarkModeOutlinedIcon sx={{ fontSize: 20, color: "text.primary" }} />
      </IconButton>
    </Box>
  );
}