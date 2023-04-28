import UserModel from "../model/users.model";
import bcrypt from "bcryptjs";
//import { register, login } from "../services/users.services";

export function register(req, res, next) {
  const { password } = req.body;
  const salt = genSalt(10);

  req.body.password = hashSync(password, salt);

  register(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
}

export function login(req, res, next) {
  const { username, password } = req.body;

  login({ username, password }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
}

export function userProfile(req, res, next) {
  return res.status(200).json({ message: "Authorized User!" });
}
