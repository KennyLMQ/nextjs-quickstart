import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import Link from "../components/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Next.js Quickstart
      </Link>
      {" " + new Date().getFullYear() + "."}
    </Typography>
  );
}
