const multer = require('multer');
const { diskStorage } = require('multer');
const AppError = require('../utils/appError.js');

const storage = diskStorage({
 destination: (req, file, cb) => {
  cb(null, 'frontend/public/images');
 },
 filename: (req, file, cb) => {
  const ext = file.mimetype.split('/')[1];

  cb(null, `${file.originalname.split('.')[0]}-${Date.now()}.${ext}`);
 },
});

const fileFilter = (req, file, cb) => {
 if (file.mimetype.startsWith('image')) {
  cb(null, true);
 } else {
  cb(
   new AppError(
    `The file type uploaded is '${
     file.mimetype.split('.')[1]
    }' and it is not allowed on this server!`,
    400
   ),
   false
  );
 }
};

const upload = multer({
 storage,
 fileFilter,
});

exports.uploads = upload.single('photo');

exports.uploadPhoto = (req, res, next) => {
 if (!req.file) {
  new AppError('No file recieved');
 }

 const path = req.file.path.split('public')[1];
 console.log({ path });
 res.status(200).json({
  status: 'success',
  path,
 });
};
