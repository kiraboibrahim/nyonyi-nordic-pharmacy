import { Box, Card, Typography, Container, Grid, AspectRatio, CardOverflow } from '@mui/joy';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Prescription Services',
    description: 'Professional medication dispensing with expert guidance from our licensed pharmacists.',
    image: "https://ik.imagekit.io/8mch78q847k/drugprescription_eBAm056hO?updatedAt=1737828178427"
  },
  {
    id: 2,
    title: 'Health Consultations',
    description: 'One-on-one consultations with our qualified healthcare professionals.',
    image: "https://ik.imagekit.io/8mch78q847k/health_consultation_dOoGRTy14.jpg"
  },
  {
    id: 3,
    title: 'Health Screening',
    description: 'Comprehensive health testing and monitoring services.',
    image: "https://ik.imagekit.io/8mch78q847k/healthscreening_NDBj5zmYy?updatedAt=1737828178427"
  },
  {
    id: 4,
    title: 'Home Delivery',
    description: 'Fast and reliable medication delivery to your doorstep.',
    image: "https://ik.imagekit.io/8mch78q847k/home_delivery_bqNFTucQn.jpg"
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.surface' }}>
      <Container>
        <Typography 
          level="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 4,
            color: 'primary.800'
          }}
        >
          Our Services
        </Typography>
        
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} xs={12} sm={6} md={3}>
              <Card
                variant="soft"
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'md'
                  }
                }}
              >
                <CardOverflow>
                <AspectRatio ratio="16/9">
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ objectFit: 'cover' }}
                  />
                </AspectRatio>
                </CardOverflow>

                <Box sx={{ p: 2 }}>
                  <Typography level="title-lg" sx={{ mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography level="body-xs">
                    {service.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;