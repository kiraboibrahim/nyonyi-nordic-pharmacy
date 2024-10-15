import { Chip, Sheet, Stack, Typography } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <Sheet>
      <Stack direction="row" sx={{ padding: 2 }}>
        <Typography
          level="h1"
          sx={{
            fontSize: { xs: "22px", sm: "30px" },
            fontFamily: "cursive",
            flexGrow: 2,
          }}
        >
          Nyonyi Nordic
        </Typography>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          {[
            { path: "/", name: "Home" },
            { path: "/podcasts", name: "Podcasts" },
            { path: "/contact", name: "Contact" },
          ].map(({ path, name }, index, routes) => (
            <Chip
              size="md"
              component={RouterLink}
              to={`${path}`}
              sx={{
                marginRight: index !== routes.length - 1 ? 3 : 0,
                padding: { sm: "10px" },
                fontSize: { sm: "md" },
              }}
            >
              {name}
            </Chip>
          ))}
        </Stack>
      </Stack>
    </Sheet>
  );
}
