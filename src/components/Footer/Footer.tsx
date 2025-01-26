import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/joy';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { PHARMACY_NAME } from '../../constants';

export default function Footer() {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: 'background.surface',
      borderTop: '1px solid',
      borderColor: 'divider'
    }}>
      <Container>
        {/* Main Content */}
        <Grid container spacing={4} sx={{ py: 6 }}>
          <Grid xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img 
                src={logo} 
                alt="Nyonyi Nordic Logo"
                style={{ height: '60px', width: 'auto' }}
              />
            </Box>
            <Typography level="body-md" sx={{ mb: 2 }}>
              Providing quality healthcare services since 2024. Your trusted pharmacy partner for a healthier community.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton variant="soft" component="a" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton variant="soft" component="a" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton variant="soft" component="a" href="https://instagram.com">
                <Instagram />
              </IconButton>
              <IconButton variant="soft" component="a" href="https://linkedin.com">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid xs={12} md={4}>
            <Typography level="title-lg" sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography level="body-md">
                📍 Ggaba Bypass Rd
              </Typography>
              <Typography 
                level="body-md" 
                component={RouterLink} 
                to="tel:+256705224801"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.600' }
                }}
              >
                📞 +256 705 224 801
              </Typography>
              <Typography 
                level="body-md"
                component={RouterLink}
                to="mailto:nyonyinordicassets@gmail.com"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.600' }
                }}
              >
                ✉️ nyonyinordicassets@gmail.com
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} md={4}>
            <Typography level="title-lg" sx={{ mb: 2 }}>
              Opening Hours
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography level="body-md">
                Open 24 Hours from Monday to Sunday
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        {/* Copyright Bar */}
        <Box sx={{ 
          py: 3, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography level="body-sm" textAlign="center">
            © {new Date().getFullYear()} {PHARMACY_NAME}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};