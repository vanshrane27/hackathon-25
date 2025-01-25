import express from 'express';
import { supabase } from '../config/supabase.mjs';

const router = express.Router();

// Get User Profile
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json(data);
});

// Update User Profile
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', id)
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json(data);
});

export default router;