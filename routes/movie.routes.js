import { Router } from "express";
import { upload } from "../config/Upload_function.js";
const router = Router();
//const uploading = require("../config/s3");
import { uploadImage } from "../controllers/image_controller.js";
//import { getmovieupload, movieupload, getYouTubeUrl, postOverlay, postdelete } from "../controllers/movie.controllers";


router.post('/upload_img',upload.array("file"),uploadImage);
// router.get(
//     "/movie/get",
//     getmovieupload
//   );
//   router.post(
//     "/movieupload",
//     movieupload
//   );

//   router.post(
//     "/youtube/post",
//     getYouTubeUrl
//   );
//   router.post(
//     "/layout/add",
//     postOverlay
//   );
//   router.post(
//     "/delete/video",
//     postdelete
//   );
export default router;
