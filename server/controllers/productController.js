import express from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import * as productService from "../services/productService.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await productService.getAll();

    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/recent", async (req, res, next) => {
  try {
    const products = await productService.getRecent();

    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/details/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.getSingle(productId);

    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post("/create", isAuth, async (req, res, next) => {
  const data = req.body;

  try {
    await productService.create({ ...data, owner: req.user._id });

    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

router.post("/edit/:id", isAuth, async (req, res, next) => {
  const productId = req.params.id;
  const user = req.user;
  const data = req.body;
  const product = await productService.getSingle(productId);
  try {
    if (product.owner == user?._id) await productService.edit(productId, data);

    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

router.post("/delete/:id", isAuth, async (req, res, next) => {
  const user = req.user;
  const productId = req.params.id;
  const product = await productService.getSingle(productId);
  try {
    if (product.owner == user?._id) await productService.remove(productId);

    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

router.post("/buy/:id", isAuth, async (req, res, next) => {
    const productId = req.params.id;
    const userId = req.user?._id;
    try{
        await productService.buy(productId, userId);

        res.status(200).end();
    } catch(err){
        next(err);
    }
});

router.post("/search", async (req, res, next) => {
  try {
    const { search } = req.body;
    const products = await productService.search(search);

    res.json(products);
  } catch (err) {
    next(err);
  }
});

export { router };
