/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

export default function AppBarComponent({ seconds }) {
  const h = Math.floor(seconds / 3600) > 0 ? Math.floor(seconds / 3600) : 0;
  const m =
    Math.floor((seconds % 3600) / 60) > 0
      ? Math.floor((seconds % 3600) / 60)
      : 0;
  const s =
    Math.floor((seconds % 3600) % 60) > 0
      ? Math.floor((seconds % 3600) % 60)
      : 0;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            background: "white",
            width: "97vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="./src/assets/logo1.svg" alt="" />
          </IconButton>

          <Typography
            variant="h5"
            style={{ color: "black", marginRight: "10%" }}
            gutterBottom
          >
            Total Time Spent {h}:{m}:{s}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
