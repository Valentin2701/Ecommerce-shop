import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export const getAll = () => Product.find();

export const getSingle = (id) => Product.findById(id);

export const getRecent = () => Product.find().sort({ createdAt: -1 }).limit(6);

export const create = (data) => Product.create(data);

export const edit = (id, data) => Product.findByIdAndUpdate(id, data);

export const remove = (id) => Product.findByIdAndDelete(id);

export const buy = (productId, userId) => Product.findByIdAndUpdate(productId, {$addToSet: {boughtBy: userId}});

export const addToCart = (productId, userId) => User.findByIdAndUpdate(userId, {$addToSet: {cart: productId}});

export const getCart = (cart) => Product.find({ _id: { $in: cart } });

export const removeFromCart = (productId, userId) => User.findByIdAndUpdate(userId, { $pull: { cart: productId } });

export const search = (query) => Product.find({name: {$regex: query, $options: "i"}});