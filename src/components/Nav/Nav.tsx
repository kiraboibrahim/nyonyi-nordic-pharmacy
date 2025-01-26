import { useState } from 'react';
import {Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  IconButton, 
  List, 
  ListItem,
  Button, 
  Sheet,
  Drawer
} from '@mui/joy';
import {
  Menu as MenuIcon,
  ShoppingCart,
  Close as CloseIcon
} from '@mui/icons-material';
import logo from "../../assets/logo.png";

const navigationItems = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/products' },
  { title: 'Services', path: '/services' },
  { title: 'Prescriptions', path: '/prescriptions' },
  { title: 'Contact', path: '/contact' }
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Sheet 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '64px',
          }}
        >
          {/* Logo */}
          <Box component={RouterLink} to="/" sx={{padding: "5px"}}>
          <img 
            src={logo} 
            alt="Nyonyi Nordic Logo" 
            style={{ 
              height: '60px',
              width: 'auto'
            }} 
          />
          </Box>

          {/* Desktop Navigation */}
          <List
            role="menubar"
            orientation="horizontal"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2
            }}
          >
            {navigationItems.map((item) => (
              <ListItem key={item.title}>
                <Button
                  component="a"
                  href={item.path}
                  variant="soft"
                  color="neutral"
                  sx={{borderRadius: "60px"}}
                >
                  {item.title}
                </Button>
              </ListItem>
            ))}
          </List>

          {/* Actions */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton>
              <ShoppingCart />
            </IconButton>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Mobile Menu */}
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.title}>
                <Button
                  fullWidth
                  component={RouterLink}
                  to={item.path}
                  variant="plain"
                  color="neutral"
                  sx={{borderRadius: "60px"}}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Button>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </Sheet>
  );
}