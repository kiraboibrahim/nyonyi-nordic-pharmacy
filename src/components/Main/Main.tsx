import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <Box>
      <Nav />
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
