import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createError } from '../error.js';


export const signUp = async(req, res, next) => {
  try {
    console.log('signUp\n');
    const { name, email, role, password } = req.body;
    const isSignedUp = await User.findOne({ email });
    if (isSignedUp) {
      return res.status(400).json({ error: 'User already exists', reason: "user" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User(
      {name, email, role, password: hashedPassword}
    );
    await newUser.save();

    const token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY)
    const { userPassword, ...other } = newUser._doc;
    res.status(200).json({
      token,
      user: other,
      message: "user has been created"
    })
  } catch(err) {
    next(createError(404, "not found"));
  }
}