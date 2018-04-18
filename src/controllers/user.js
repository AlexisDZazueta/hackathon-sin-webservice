// Dependencies
const Users = require('../models/user');

// Export modules
module.exports = {

  getUsers: async (req, res, next) => {
    let users = await Users.find({ });
    res.status(200).json(users);
  },
  getUserById: async (req, res) => {
    let { userId } = req.params;
    let user = await Users.findById(userId);
    res.status(200).json(user);
  },
  signUp: async (req, res) => {
    let user = new Users(req.body);
    let newUser = await user.save();
    res.status(200).json(newUser);
  },
  signIn: async (req, res) => {
    let user = await Users.find({ email: req.body.email, pass: req.body.pass }, (err, user) => {
      if(err) return res.status(500).json({ message: `Ocurrio un problema: ${err}` });
      if(!user.length) return res.status(404).json({ message: 'Email o contraseña invalidos' });
      res.status(200).json({ message: `Te has logueado correctamente` });
    });
  },
  updateUser: async (req, res) => {
    let { userId } = req.params;
    let update = req.body;
    await Users.findByIdAndUpdate(userId, update);
    res.status(200).json({ message: 'Usuario modificado exitosamente' });
  },
  deleteUser: async (req, res) => {
    let { userId } = req.params;
    await Users.findByIdAndRemove(userId);
    res.status(200).json({ message: 'Usuario eliminado exitosamente' })
  }

};