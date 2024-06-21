import jwt from 'jsonwebtoken';

const secretKey = process.env.REACT_APP_JWT_SECRET || 'default_jwt_secret';

export const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};