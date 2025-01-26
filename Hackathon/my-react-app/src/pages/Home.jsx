import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our Marketplace
        </Typography>
        <Typography variant="body1" paragraph>
          Discover and book local services with ease. Whether you need a haircut, home maintenance, or repairs, we've got you covered.
        </Typography>
        <Link to="/services">
          <Button variant="contained" color="primary" fullWidth>
            Explore Services
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="outlined" color="primary" fullWidth>
            Get Started
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Home;