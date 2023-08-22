const express = require('express');
const { loginController, registerController } = require('../controllers/HospitalController');

const HospitalRouter = express.Router();

HospitalRouter.post('/login', loginController);
HospitalRouter.post('/register', registerController);

module.exports = HospitalRouter;