import { useState } from 'react';
import { Box, Container, Typography, AspectRatio, IconButton, Modal, Card } from '@mui/joy';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';

const videoContent = {
  title: "Meet Our Dedicated Team",
  description: "Get to know the passionate professionals behind Nyonyi Nordic Pharmacy. Our team is committed to providing exceptional pharmaceutical care to our community.",
  videoUrl: "https://ik.imagekit.io/8mch78q847k/employee_XZzvryt2Z.mp4",
  thumbnail: "https://ik.imagekit.io/8mch78q847k/counter01_78fTqunRcs.jpg"
};

export default function TeamIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.level1' }}>
      <Container>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 4, color: "primary.800" }}>
          {videoContent.title}
        </Typography>

        <Card variant="outlined" sx={{ maxWidth: 900, mx: 'auto' }}>
          <AspectRatio ratio="16/9" sx={{ position: 'relative' }}>
            {!isPlaying ? (
              <>
                <img
                  src={videoContent.thumbnail}
                  alt="Team thumbnail"
                  style={{ objectFit: 'cover', width: '100%' }}
                />
                <IconButton
                  onClick={() => setIsPlaying(true)}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.body',
                    '&:hover': { bgcolor: 'primary.softBg' }
                  }}
                >
                  <PlayArrowRounded sx={{ fontSize: 48 }} />
                </IconButton>
              </>
            ) : (
              <video
                controls
                autoPlay
                src={videoContent.videoUrl}
                style={{ width: '100%', height: '100%' }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </AspectRatio>

          <Box sx={{ py: 3 }}>
            <Typography level="body-sm">
              {videoContent.description}
            </Typography>
          </Box>
        </Card>
      </Container>

      <Modal
        open={isPlaying}
        onClose={() => setIsPlaying(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ 
          position: 'relative',
          width: '90vw',
          maxWidth: 1200,
          bgcolor: 'background.body',
          borderRadius: 'md',
          p: 2 
        }}>
          <IconButton
            onClick={() => setIsPlaying(false)}
            sx={{ position: 'absolute', top: -40, right: 0 }}
          >
            <CloseRounded />
          </IconButton>
          <video
            controls
            autoPlay
            src={videoContent.videoUrl}
            style={{ width: '100%' }}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </Box>
  );
}