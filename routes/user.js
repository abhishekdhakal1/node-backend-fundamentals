const express = require("express");
const {
  handleGetAllUsers,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

module.exports = router;
