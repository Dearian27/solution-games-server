import { Group } from "../models/Group.js";
import { User } from "../models/User.js";

export const createGroup = async(req, res, next) => {
  const { name } = req.body;
  if(!name) return res.status(500).json({ message: 'Please, provide credentials' });
  try {
    const creator = await User.findOne({ _id: req.user.id});
    const newGroup = new Group({name: name, creator: creator._id });
    await newGroup.save();
    return res.status(200).json({ message: 'Group has been created' });
  } catch (err) {
    res.status(404).json({message: 'Something went wrong'});
  }
}

export const deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await Group.findOne({ _id: groupId });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    if (group.creator.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You do not have permission to delete this group' });
    }

    await Group.deleteOne({ _id: groupId });
    return res.status(200).json({ message: 'Group has been deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}