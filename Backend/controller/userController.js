let users = [];
let id = 1;


exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: id++,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json(newUser);
};


exports.getUser = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById=(req,res)=>{
    const user=users.find((t=>t.id===parseInt(req.params.id)))
    if(user===undefined) return res.status(404).json({message:"User not found"})
}
exports.editUser=(req,res)=> {
    const user=users.find((t=>t.id===parseInt(req.params.id)))
    if(user===undefined) return res.status(404).json({message:"User not found"})
    user.name=req.body.name===undefined?user.name:req.body.name
    user.email=req.body.email||user.email
    res.status(200).json(user)
}

exports.getUserById = (req, res) => {
  const idParam = parseInt(req.params.id);

  const user = users.find(u => u.id === idParam);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};


exports.editUser = (req, res) => {
  const idParam = parseInt(req.params.id);
  const user = users.find(u => u.id === idParam);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  if (req.body.email !== undefined) {
    user.email = req.body.email;
  }

  res.status(200).json(user);
};

exports.deleteUser = (req, res) => {
  const idParam = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === idParam);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(200).json({ message: "User deleted successfully" });
};