import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Modal, 
  AspectRatio,
  IconButton
} from '@mui/joy';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


type Image = {
    id: number;
    title: string;
    img: string;
    description: string;
};

const galleryImages = [
  {
    id: 1,
    title: 'Meet our team',
    img: "https://ik.imagekit.io/8mch78q847k/all_employees_8fD4CHQ1fn.jpg",
    description: 'Meet our team'
  },
  {
    id: 2,
    title: 'Corridor',
    img: "https://ik.imagekit.io/8mch78q847k/corridor_Eomcgt2D3.jpg",
    description: 'Private consultation area for personalized care'
  },
  {
    id: 3,
    title: 'Medicine Section',
    img: "https://ik.imagekit.io/8mch78q847k/counter01_78fTqunRcs.jpg",
    description: 'Well-organized medicine display'
  },
  {
    id: 4,
    title: 'Laboratory',
    img: "https://ik.imagekit.io/8mch78q847k/patient02_ifBTrKRDX.jpg",
    description: 'Modern testing facilities'
  },
  {
    id: 5,
    title: 'Front Door',
    img: "https://ik.imagekit.io/8mch78q847k/front_door_ZvF8UT7_F.JPG",
    description: 'Front of our pharmacy'
  },
  {
    id: 6,
    title: 'Pharmacist at Work',
    img: "https://ik.imagekit.io/8mch78q847k/employee04_NDy_9X9_7.jpg",
    description: 'Our professional staff at work'
  },
  {
    id: 7,
    title: 'Our Uniform',
    img: "https://ik.imagekit.io/8mch78q847k/uniform_0Q8UTKJaGo.jpg",
    description: 'Our Uniform'
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

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
          Our Gallery
        </Typography>
        
        <ImageList
          sx={{
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)!important',
              sm: 'repeat(2, 1fr)!important',
              md: 'repeat(3, 1fr)!important'
            },
            gap: '16px!important'
          }}
        >
          {galleryImages.map((item) => (
            <ImageListItem 
              key={item.id}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
              onClick={() => handleOpen(item)}
            >
              <AspectRatio ratio="4/3">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </AspectRatio>
            </ImageListItem>
          ))}
        </ImageList>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'background.surface',
              borderRadius: 'md',
              p: 2
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                zIndex: 1,
                backgroundColor: 'background.surface'
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
            {selectedImage && (
              <Box>
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(90vh - 100px)',
                    objectFit: 'contain'
                  }}
                />
                <Typography level="title-md" sx={{ mt: 2 }}>
                  {selectedImage.title}
                </Typography>
                <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                  {selectedImage.description}
                </Typography>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Gallery;