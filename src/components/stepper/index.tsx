import { Box } from "@mui/material";
import React from "react";

export const Stepper = ({ steps, currentStep }: { steps: number; currentStep: number }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {new Array(steps)
        .fill(0)
        .map((_, index) => index + 1)
        .map((dot, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                height: "10px",
                borderRadius: "30px",
                background: "black",
                backgroundColor: currentStep === idx ? "#1247b9" : "#8f98a6",
                width: currentStep === idx ? "40px" : "10px",
                transition: "all 0.3s",
              }}
            />
          );
        })}
    </Box>
  );
};
