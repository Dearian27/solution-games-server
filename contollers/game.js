import { Game } from "../models/Game.js";
import { randomCode } from "../utils/randomCode.js";

export const createGame = async(req, res, next) => {
  const { name, params, targetUser=null, targetGroup=null } = req.body;
  if(!name || !params) return res.status(400).json({ message: 'Please provide credentials' });
  try {
    const code = randomCode(6);
    const newGame = new Game({name, params, user: targetUser, group: targetGroup, code, author: req.user._id});
    newGame.save();
    return res.status(200).json({ game: newGame, message: 'Game created successfully' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({message: 'Something went wrong'});
  }
}

// export 