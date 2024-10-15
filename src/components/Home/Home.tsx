import {
  Sheet,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  CardContent,
  AspectRatio,
} from "@mui/joy";
import { Slide, Fade } from "react-awesome-reveal";
import { services, products } from "../../constants";

type ServiceProp = {
  name: string;
  description: string;
};

type ProductProp = {
  name: string;
  brand: string;
  price: number;
  image: string;
};

function Service({ service }: { service: ServiceProp }) {
  const { name, description } = service;
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Typography
        level="title-lg"
        sx={{ textAlign: "center", marginBottom: 2 }}
      >
        {name}
      </Typography>
      <Typography level="body-md" sx={{ textAlign: "center" }}>
        {description}
      </Typography>
    </Box>
  );
}

function HeroSection() {
  return (
    <Sheet
      variant="solid"
      sx={(theme) => ({
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `${theme.vars.palette.primary[500]}`,
      })}
    >
      <Slide direction="down">
        <Typography
          level="h2"
          sx={(theme) => ({
            padding: 3,
            textAlign: "center",
            color: `${theme.vars.palette.common.white}`,
          })}
        >
          Anim mollit occaecat minim nulla mollit Lorem qui in fugiat excepteur
          culpa sit qui. Elit consequat ullamco amet nulla id sunt anim nostrud
          ut et reprehenderit
        </Typography>
      </Slide>
      <Button
        variant="solid"
        size="lg"
        sx={(theme) => ({
          marginTop: 5,
          borderRadius: "lg",
          background: `${theme.vars.palette.primary[700]}`,
        })}
      >
        Order Now
      </Button>
    </Sheet>
  );
}

function Services() {
  return (
    <Box sx={{ marginTop: 3, marginBottom: 3, padding: 2 }}>
      <Typography level="h2" sx={{ textAlign: "center", marginBottom: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Fade cascade>
          {services.map((service, index) => (
            <Grid key={index}>
              <Service service={service} />
            </Grid>
          ))}
        </Fade>
      </Grid>
    </Box>
  );
}

function Product({ product }: { product: ProductProp }) {
  return (
    <Card>
      <AspectRatio>
        <img src={product.image} alt={`Image of ${product.name}`} />
      </AspectRatio>
      <CardContent>
        <Typography level="body-lg">${product.price}</Typography>
        <Typography level="title-lg">{product.name}</Typography>
      </CardContent>
    </Card>
  );
}

function FeaturedProducts() {
  return (
    <Box sx={{ marginBottom: 2, marginTop: 3, padding: 2 }}>
      <Typography level="h2" sx={{ textAlign: "center", marginBottom: 3 }}>
        Featured Products
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {products.map((product, index) => (
          <Grid
            key={index}
            sx={{ width: { xs: 1, sm: 6 / 12, md: 4 / 12, lg: 3 / 12 } }}
          >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <FeaturedProducts />
    </>
  );
}
