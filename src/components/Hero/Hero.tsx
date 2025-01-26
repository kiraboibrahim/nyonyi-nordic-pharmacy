import { Box, Typography, Button, Container } from '@mui/joy';

const Hero = () => {
  const heroImage = "https://ik.imagekit.io/8mch78q847k/counter01_78fTqunRcs.jpg";
  return (
    <Box 
      sx={(theme) => ({
        minHeight: '80vh',
        backgroundImage: `linear-gradient(50deg, rgba(${theme.vars.palette.primary.darkChannel} / 1.0), rgba(${theme.vars.palette.primary.lightChannel} / 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Container>
        <Box sx={{ maxWidth: 600 }}>
          <Typography level="h1" sx={{ mb: 2, color: "neutral.100" }}>
            Your Health Is Our Priority
          </Typography>
          <Typography sx={{ mb: 4, color: "neutral.200" }}>
            Professional pharmaceutical care with a personal touch. We provide quality medications and expert health advice.
          </Typography>
          <Button size="lg" color="primary" sx={{borderRadius: "50px"}}>
            Our Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;