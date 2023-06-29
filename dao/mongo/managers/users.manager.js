import userModel from "../models/user.model.js";


export default class UsersManager {

    getUsers = () => {
        return userModel.find().lean();
    }

    getUserBy = (email) => {
        return userModel.findOne({ email: email });
    }

    createUser = (user) => {
        return userModel.create(user);
    }

    updateUser = (id, user) => {
        return userModel.findByIdAndUpdate(id, { $set: user });
    }

    deleteUser = (id) => {
        return userModel.findByIdAndDelete(id);
    }

}