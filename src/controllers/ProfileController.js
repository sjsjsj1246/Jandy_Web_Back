import express from "express";
import * as AuthHandler from "../middlewares/AuthHandler";
import * as ProfileServices from "../services/ProfileServices";
import * as ProfileValidation from "../validations/ProfileValidation";

const Router = express.Router();

Router.post(
    "/",
    AuthHandler.isLoggedIn,
    ProfileValidation.CreateRequestValid,
    ProfileServices.CreateProfile
);
Router.patch(
    "/",
    AuthHandler.isLoggedIn,
    ProfileValidation.UpdateRequestValid,
    ProfileServices.UpdateUserProfile
);
Router.get(
    "/:userId",
    ProfileValidation.GetRequestValid,
    ProfileServices.GetUserProfile
);
Router.post(
    "/password",
    AuthHandler.isLoggedIn,
    ProfileValidation.PasswordRequestValid,
    ProfileServices.CheckPassword
);
Router.patch(
    "/password",
    AuthHandler.isLoggedIn,
    ProfileValidation.PasswordRequestValid,
    ProfileServices.UpdatePassword
);
Router.post(
    "/follow",
    AuthHandler.isLoggedIn,
    ProfileValidation.FollowRequestValid,
    ProfileServices.UserFollow
);
Router.post(
    "/unfollow",
    AuthHandler.isLoggedIn,
    ProfileValidation.FollowRequestValid,
    ProfileServices.UserUnFollow
);
export default Router;
