import express from 'express';
import { supabase } from '../config/supabase.mjs';

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  // Add user role to the database
  const { error: dbError } = await supabase
    .from('users')
    .insert([{ id: data.user.id, email, role }]);

  if (dbError) return res.status(400).json({ error: dbError.message });

  res.status(200).json({ message: 'User registered successfully' });
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({ message: 'User logged in successfully', data });
});

export default router;