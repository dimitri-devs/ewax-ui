import jwt from 'jsonwebtoken';
export function signToken(payload){return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'7d'})}
export function verifyToken(req){const token=req.cookies.get('ewax_token')?.value; if(!token)return null; try{return jwt.verify(token,process.env.JWT_SECRET)}catch{return null}}
