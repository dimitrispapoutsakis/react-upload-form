import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 8080;

// Enable CORS for all origins (for demo purposes)
app.use(cors());

// Set up storage for multer
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Use original file name
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Single file upload endpoint
app.post("/upload", upload.array("file"), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }
  res.json({
    message: "Files uploaded successfully",
    files: (req.files as Express.Multer.File[]).map((file) => ({
      filename: file.filename,
      path: `/uploads/${file.filename}`,
    })),
  });
});

// Error handling middleware for multer
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large. Maximum size is 100MB.' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(413).json({ error: 'Too many files. Maximum is 10 files.' });
    }
  }
  next(error);
});

// Multiple files upload endpoint
app.post("/upload-multiple", upload.array("files", 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }
  res.json({
    message: "Files uploaded successfully",
    files: (req.files as Express.Multer.File[]).map((file) => ({
      filename: file.filename,
      path: `/uploads/${file.filename}`,
    })),
  });
});

// Serve uploaded files statically
app.use("/uploads", express.static(uploadDir));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
