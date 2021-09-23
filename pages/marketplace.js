import React from "react";

// Next
import Head from "next/head";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { Container, Content } from "../components";

export default function Marketplace() {
  return (
    <Container>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Verity marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h3">Marketplace Placeholder</Typography>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
}
