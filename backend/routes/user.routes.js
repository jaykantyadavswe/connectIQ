import { Router } from 'express';
import { getUserAndProfile, login, register, updateProfileData, updateProfilePicture, updateUserProfile, getAllUserProfile, downloadProfile } from '../controllers/user.controller.js';
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });
router.route('/update_profile_picture').post(
    upload.single("profile_picture"),
    updateProfilePicture
);


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user_update').post(updateUserProfile);
router.route('/get_user_and_profile').get(getUserAndProfile);
router.route('/update_profile_data').post(updateProfileData);
router.route('/user/get_all_users').get(getAllUserProfile);
router.route('/user/download_resume').get(downloadProfile)



export default router;
