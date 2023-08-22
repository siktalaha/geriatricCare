const express = require('express');
const { loginController, registerController } = require('../controllers/DoctorController');

const DoctorRouter = express.Router();

DoctorRouter.post('/login', loginController);
DoctorRouter.post('/register', registerController);

module.exports = DoctorRouter;