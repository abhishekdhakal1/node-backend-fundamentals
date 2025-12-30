const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body.first_name || !body.email) {
    return res.status(400).json({ msg: "First Name and Email are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
  });
  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = { handleGetAllUsers, handleCreateNewUser };