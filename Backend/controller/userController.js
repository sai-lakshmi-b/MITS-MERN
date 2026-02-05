const User = require("../models/user");
// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" })
    }

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" })
    }

    const newUser = await User.create({
      name,
      email
    })

    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
