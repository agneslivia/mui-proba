import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="sm">
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            hello, this is us
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "1.125rem" }}>
            A production-ready starting point that pairs the Next.js App Router
            with Material UI, so you can focus on building your product instead
            of wiring up components from scratch.
          </Typography>
          <Button href="#signup" variant="contained" size="large" disableElevation>
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
