import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  if(!token) return res.status(401).json({message: 'You are not authenticated'});
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(token)
    if(err) return res.status(403).json({ message: 'Token is invalid or expired'});
    console.log("user", user);
    req.user = user;
    next();
  })
}