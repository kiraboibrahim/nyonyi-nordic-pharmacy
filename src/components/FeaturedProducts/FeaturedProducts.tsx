import { Box, Card, Typography, Container, Grid, AspectRatio, Button } from '@mui/joy';

const products = [
  {
    id: 1,
    name: 'Pain Relief Medication',
    price: 'UGX 15,000',
    image: "https://ik.imagekit.io/8mch78q847k/pain_relief_a8L_axTum.jpeg",
    description: 'Fast-acting pain relief medication for various conditions.'
  },
  {
    id: 2,
    name: 'Multivitamin Complex',
    price: 'UGX 45,000',
    image: "https://ik.imagekit.io/8mch78q847k/multi_vitamin_3wh7W05MH.jpeg",
    description: 'Complete daily multivitamin supplement for adults.'
  },
  {
    id: 3,
    name: 'First Aid Kit',
    price: 'UGX 75,000',
    image: "https://ik.imagekit.io/8mch78q847k/first_aid_kit_kUchgNwb9x.jpeg",
    description: 'Comprehensive first aid kit for home and travel.'
  },
  {
    id: 4,
    name: 'Blood Pressure Monitor',
    price: 'UGX 250,000',
    image: "https://ik.imagekit.io/8mch78q847k/blood_pressure_kit_uKlnv8urIq.jpeg",
    description: 'Digital blood pressure monitor for home use.'
  }
];

const FeaturedProducts = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.level1' }}>
      <Container>
        <Typography 
          level="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 4,
            color: 'primary.800'
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={3}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 'md',
                    borderColor: 'primary.300'
                  }
                }}
              >
                <AspectRatio ratio="1" sx={{ mb: 1 }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ objectFit: 'cover' }}
                  />
                </AspectRatio>
                <Box sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column" }}>
                    
                  <Typography level="title-lg" sx={{ mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography level="body-xs" sx={{ mb: 2, color: 'text.secondary' }}>
                    {product.description}
                  </Typography>
                  <Typography 
                    level="h4" 
                    sx={{ 
                      color: 'primary.600',
                      mb: 2 
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Button 
                    fullWidth 
                    variant="soft"
                    color="primary"
                    
                    sx={{borderRadius: "60px", marginTop: "auto"}}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;