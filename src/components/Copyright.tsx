import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink
        color="inherit"
        href="https://github.com/KennyLMQ/nextjs-quickstart"
        target="_blank"
      >
        Next.js Quickstart
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
