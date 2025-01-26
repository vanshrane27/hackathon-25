import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

function ProviderProfile({ userId }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profile/${userId}`);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/profile/${userId}`, profile);
      setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Provider Profile
        </Typography>
        <form onSubmit={handleUpdate}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={profile.email || ''}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <TextField
            label="Service"
            type="text"
            fullWidth
            margin="normal"
            value={profile.service || ''}
            onChange={(e) => setProfile({ ...profile, service: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Profile
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default ProviderProfile;