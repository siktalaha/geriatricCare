const express = require('express');
const { loginController, registerController, sendEmail } = require('../controllers/PatientController');

const patientRouter = express.Router();

patientRouter.post('/login', loginController);
patientRouter.post('/register', registerController);
patientRouter.post('/sendEmail',sendEmail)

module.exports = patientRouter;