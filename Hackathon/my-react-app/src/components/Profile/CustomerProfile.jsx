// filepath: src/components/Profile/CustomerProfile.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerProfile({ userId }) {
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
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Name"
        value={profile.name || ''}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={profile.email || ''}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default CustomerProfile;