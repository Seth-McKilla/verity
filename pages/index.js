import * as React from "react";
import logo from "../public/logo.svg";
import styles from "../styles/Home.module.css";

// Next
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Components
import { Container } from "../components";

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Verity</title>
        <meta name="description" content="A carbon credit NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <div className={styles.logo}>
              <Image width={250} height={250} src={logo} alt="verity-logo" />
            </div>
          </Grid>

          <Grid item xs={12} align="center">
            <Typography variant="h2">Welcome to Verity</Typography>
            <Typography variant="h5" gutterBottom>
              The decentralized marketplace for trading carbon credits.
            </Typography>
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/marketplace")}
            >
              Visit the Marketplace
            </Button>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}
