import { Sheet, Typography, Stack, Box } from "@mui/joy";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Sheet
      color="neutral"
      sx={(theme) => ({
        padding: 2,
        background: `${theme.vars.palette.neutral[800]}`,
      })}
    >
      <Stack spacing={3} sx={{ alignItems: "center" }}>
        <Box>
          <Typography
            level="title-md"
            sx={(theme) => ({
              marginBottom: 2,
              textAlign: "center",
              color: `${theme.vars.palette.neutral[300]}`,
            })}
          >
            Location
          </Typography>
          <Typography level="body-sm">
            Ggaba Bypass Road, Nakatude Close, Kampala, Uganda
          </Typography>
        </Box>
        <Box>
          <Typography
            level="title-md"
            sx={(theme) => ({
              marginBottom: 2,
              textAlign: "center",
              color: `${theme.vars.palette.neutral[300]}`,
            })}
          >
            Working Hours
          </Typography>
          <Typography level="body-sm">
            Open 24/7 from Monday - Sunday
          </Typography>
        </Box>

        <Box>
          <Typography
            level="title-md"
            sx={(theme) => ({
              marginBottom: 2,
              textAlign: "center",
              color: `${theme.vars.palette.neutral[300]}`,
            })}
          >
            Contact Us
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{ alignItems: "center" }}
          >
            <Typography
              level="body-sm"
              sx={{
                textDecoration: "none",
                marginRight: { xs: 0, sm: 2 },
                marginBottom: { xs: 2 },
              }}
              startDecorator={<LocalPhoneOutlinedIcon color="success" />}
              component={RouterLink}
              to="tel:+256705224801"
            >
              +256 705 224801
            </Typography>
            <Typography
              level="body-sm"
              startDecorator={<EmailOutlinedIcon color="success" />}
              component={RouterLink}
              to="mailto:nyonyinordicassets@gmail.com"
              sx={{ textDecoration: "none" }}
            >
              nyonyinordicassets@gmail.com
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row">
          <Typography
            level="body-sm"
            component={RouterLink}
            to="#"
            sx={{ textDecoration: "none", marginRight: 3 }}
          >
            Privacy Policy
          </Typography>
          <Typography
            level="body-sm"
            component={RouterLink}
            to="#"
            sx={{ textDecoration: "none" }}
          >
            Terms of Use
          </Typography>
        </Stack>
      </Stack>
    </Sheet>
  );
}
