import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { pool } from "../database/db";

type Props = {
  result: string;
};

export default function Home({ result }: Props) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" textAlign="center" mb="1em">
        Next.js Quickstart
      </Typography>
      <Typography variant="body1" component="p" textAlign="center">
        PSQL SELECT NOW():
      </Typography>
      <Typography variant="body1" component="p" textAlign="center">
        {result}
      </Typography>
    </Container>
  );
}

export async function getStaticProps() {
  let result;

  try {
    const res = await pool.query("SELECT NOW()");

    result = res.rows[0]["now"];
    result = result.toTimeString();
  } catch (err: any) {
    console.error(err.message);
  }

  return {
    props: { result: result },
  };
}
