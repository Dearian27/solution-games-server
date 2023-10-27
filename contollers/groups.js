import { Group } from "../models/Group.js";
import { User } from "../models/User.js";
import { randomCode } from "../utils/randomCode.js";

export const createGroup = async(req, res, next) => {
  const { name } = req.body;
  if(!name) return res.status(500).json({ message: 'Please, provide credentials' });
  try {
    const creator = await User.findOne({ _id: req.user.id});
    const code = randomCode(6);
    const newGroup = new Group({name: name, creator: creator._id, code });
    await newGroup.save();
    return res.status(200).json({ message: 'Group has been created' });
  } catch (err) {
    res.status(404).json({message: 'Something went wrong'});
  }
}