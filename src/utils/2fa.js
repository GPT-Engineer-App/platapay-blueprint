import speakeasy from 'speakeasy';

export const generateSecret = () => {
  return speakeasy.generateSecret({ length: 20 });
};

export const generateToken = (secret) => {
  return speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
};

export const verifyToken = (token, secret) => {
  return speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token,
    window: 1,
  });
};