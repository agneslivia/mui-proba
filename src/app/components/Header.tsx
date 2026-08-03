"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_ITEMS = [
  { label: "Producttttt", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2, minHeight: 64 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.5,
                color: "text.primary",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Logoly
            </Typography>

            {/* Horizontal nav (desktop) */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
                ml: 2,
                flexGrow: 1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Spacer to push CTA right when nav is hidden */}
            <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

            {/* Secondary link + Primary CTA (desktop) */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.5,
                flexShrink: 0,
              }}
            >
              <Button href="#login" color="inherit" sx={{ color: "text.secondary" }}>
                Log In
              </Button>
              <Button href="#signup" variant="contained" disableElevation>
                Get Started
              </Button>
            </Box>

            {/* Mobile menu toggle */}
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 280 } } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Logoly
          </Typography>
          <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton href={item.href} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 2 }}>
          <Button href="#login" color="inherit" onClick={() => setMobileOpen(false)}>
            Log In
          </Button>
          <Button
            href="#signup"
            variant="contained"
            disableElevation
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
