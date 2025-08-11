import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toString() + file.originalname);
  },
});

const fileUpload = multer({ storage });

export default fileUpload;
