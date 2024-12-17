import { Product } from "../models/Product.js";

export const getAll = () => Product.find();

export const getSingle = (id) => Product.findById(id);

export const getRecent = () => Product.find().sort({ createdAt: -1 }).limit(6);

export const create = (data) => Product.create(data);

export const edit = (id, data) => Product.findByIdAndUpdate(id, data);

export const remove = (id) => Product.findByIdAndDelete(id);

export const buy = (ProductId, userId) => Product.findByIdAndUpdate(ProductId, {$push: {boughtBy: userId}});

export const search = (query) => Product.find({name: {$regex: query, $options: "i"}});