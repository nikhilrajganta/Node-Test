import {
  createCart,
  getCartByUserId,
  deleteCart,
} from "../services/cart.service.js";
import { v4 as uuidv4 } from "uuid";

async function createNewCart(req, res) {
  const data = req.body;

  const totalPrice = data.quantity * data.price;
  const cartData = {
    userId: uuidv4(),
    products: [{ productId: data.productId, quantity: data.quantity }],
    totalPrice,
  };
  try {
    const newCart = await createCart(cartData);
    res.status(201).send(newCart.data);
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).send({ msg: "Error creating cart" });
  }
}

async function getCart(req, res) {
  const userId = req.params.id;
  const cart = await getCartByUserId(userId);
  if (cart.data) {
    res.send(cart.data);
  } else {
    res.status(404).send({ msg: "Cart not found" });
  }
}

async function deleteCartItem(req, res) {
  const userId = req.params.id;

  const deletedCart = await deleteCart(userId);
  if (deletedCart.data) {
    res.send({ msg: "Cart deleted 🎉", deletedCart: deletedCart.data });
  } else {
    res.status(404).send(`Cart didn't exist for the UserId ${userId} 🥲`);
  }
}

export { createNewCart, getCart, deleteCartItem };
