Steps for Using NextAuth:
1) npm install next-auth
2) openssl rand -base64 32
3) Make an environment variable namely "AUTH_SECRET" and its value is the generated key 

// lib/auth.js
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

// lib/users.js
import bcrypt from 'bcryptjs';

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('password123', 10), // hash it for demo
  },
];

export function findUser(username) {
  return users.find(u => u.username === username);
}

// Login Post Request:
export const loginUser(req,res) =>
  {
    const {username, password} = req.json();
  }
