import mongoose from "mongoose";

export const errorMiddleware = (err, req, res, next) => {
    let errMessage;
    if(err instanceof mongoose.MongooseError) errMessage = Object.values(err.errors).at(0).message;
    else if(err instanceof Error) errMessage = err.message;
    console.log("Error on backend: ", errMessage);
    res.status(400).json({error: true, user: null, message: errMessage});
}