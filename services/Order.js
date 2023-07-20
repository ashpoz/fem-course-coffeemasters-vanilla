import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    prodInCart => prodInCart.product.id == product.id
  );
  if (results == 1) {
    // product is already in cart
    // update cart
    app.store.cart = app.store.cart.map(p => {
      p => p.product.id == id
        ? { ...p, quantity: p.quantity + 1 }
        : p
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }]
  }
}

export function removeFromCart() {
  app.store.cart = app.store.cart.filter(p => p.product.id != id);
}