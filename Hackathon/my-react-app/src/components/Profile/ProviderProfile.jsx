import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Input, VStack, Heading } from '@chakra-ui/react';

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
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6}>Provider Profile</Heading>
      <form onSubmit={handleUpdate}>
        <VStack spacing={4}>
          <Input
            type="text"
            placeholder="Name"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email"
            value={profile.email || ''}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Service"
            value={profile.service || ''}
            onChange={(e) => setProfile({ ...profile, service: e.target.value })}
          />
          <Button type="submit" colorScheme="teal" width="full">
            Update Profile
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default ProviderProfile;