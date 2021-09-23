import * as React from "react";
import styles from "./index.module.css";
import logo_white from "../../public/logo_white.svg";
import { Context } from "../../context";
import Cookies from "js-cookie";
import { getActivePublicKey } from "../../services/casper";

// Next
import Image from "next/image";
import { useRouter } from "next/router";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Components
import { Alert } from "..";
import { Link } from "@mui/material";

export default function NavBar() {
  const router = useRouter();
  const { state, dispatch } = React.useContext(Context);
  const [showAlert, setShowAlert] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = async () => {
    try {
      const publicKey = await getActivePublicKey();

      dispatch({
        type: "ASSIGN_PUB_KEY",
        payload: publicKey,
      });
      Cookies.set("casper_pub_key", publicKey, { expires: 7 });
      return setAnchorEl(null);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setAnchorEl(null);
      return setShowAlert(true);
    }
  };

  const handleLogout = async () => {
    dispatch({
      type: "ASSIGN_PUB_KEY",
      payload: "",
    });

    Cookies.remove("casper_pub_key");
    setAnchorEl(null);
    return router.push("/");
  };

  return (
    <>
      <Alert
        open={showAlert}
        handleClose={() => setShowAlert(false)}
        title={error}
        children={
          <>
            <Typography variant="body1">
              Need help setting up the CasperLabs Signer extension? The setup
              instructions can be found{" "}
              <Link
                href="https://docs.casperlabs.io/en/latest/workflow/staking.html#creating-your-wallet-with-the-casperlabs-signer"
                target="__blank"
              >
                here.
              </Link>
            </Typography>
          </>
        }
        btnText="Close"
      />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <div className={styles.logoContainer}>
              <div>
                <IconButton size="small" onClick={() => router.push("/")}>
                  <Image
                    width={50}
                    height={50}
                    src={logo_white}
                    alt="verity-logo"
                  />
                </IconButton>
              </div>
            </div>
            {mounted && (
              <div className={styles.account}>
                <Tooltip
                  title={
                    state.user ? `Public Key: ${state.user}` : "Signed out"
                  }
                >
                  {state.user ? (
                    <IconButton onClick={handleMenu}>
                      <AccountCircleIcon color="secondary" />
                    </IconButton>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleLogin}
                    >
                      Log in
                    </Button>
                  )}
                </Tooltip>
              </div>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={!!anchorEl}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={handleLogout}>
                {mounted && (
                  <Typography>{state.user ? "LOG OUT" : "LOG IN"}</Typography>
                )}
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
