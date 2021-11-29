const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/logout', authController.protect, authController.logout);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch(
 '/update-me',
 authController.protect,
 userController.userPhotoUpload,
 userController.resizeUserPhoto,
 userController.updateMe
);
router.patch(
 '/update-password',
 authController.protect,
 authController.updatePassword
);
router.get(
 '/me',
 authController.protect,
 userController.getMe,
 userController.getUser
);

router
 .route('/')
 .get(
  authController.protect,
  authController.restrictTo('admin'),
  userController.getAllUsers
 );

router
 .route('/:id')
 .get(
  authController.protect,
  authController.restrictTo('admin'),
  userController.getUser
 )
 .patch(userController.updateUser)
 .delete(userController.deleteUser);

module.exports = router;
