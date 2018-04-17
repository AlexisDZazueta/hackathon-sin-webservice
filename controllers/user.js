'use strict'

// Dependencies
const User = require('../models/user');
const service = require('../services');

// Export modules
module.exports = {
  signUp: async (req, res) => {
    let user = new User(req.body);
    await user.save((err) => {
      if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` });
      return res.status(201).send({ token: service.createToken(user) });
    });
  },
  signIn: async (req, res) => {
    await User.find({ email: req.body.email }, (err, user) => {
      if (err) return res.status(500).send({ message: `Ocurrio un error ${err}` });
      if (!user) return res.status(404).send({ message: `El ususario o contraseña no existen` });
      req.user = user
      res.status(200).send({  
        message: `Te has logueado correctamente`,
        token: service.createToken(user)
      });
    });
  },
  updateUser: async (req, res) => {
    let { userId } = req.params;
    let update = req.body;
    await User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
      if (err) res.status(500).send({ message: `Error al actualizar al usuario: ${err}` });
      res.status(200).send({ product: userUpdated });
    });
  },
  deleteUser: async (req, res) => {
    let { userId } = req.params;
    await Users.findByIdAndRemove(userId, (err) => {
      if (err) res.status(500).send({ message: `Error al eliminar al usuario: ${err}` });
      res.status(200).send({ message: `Usuario eliminado correctamente` });
    });
  }
};