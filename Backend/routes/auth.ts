import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.status(201).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) return res.status(404).json({ message: 'User not found' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;