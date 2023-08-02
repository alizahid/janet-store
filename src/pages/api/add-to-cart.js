import { getCookie, hasCookie, setCookie } from "cookies-next";
import { produce } from "immer";

const CART_KEY = "cart";

export default function handler(req, res) {
  const productId = Number(req.query.productId);

  const hasCart = hasCookie(CART_KEY, {
    req,
    res,
  });

  if (hasCart) {
    // cart exists in cookie
    // we'll just manipulate the cart data

    const cart = JSON.parse(
      getCookie(CART_KEY, {
        req,
        res,
      })
    );

    const productIndex = cart.findIndex((item) => item.productId === productId);

    if (productIndex >= 0) {
      // product is already in cart
      // just update quantity by 1

      const next = produce(cart, (state) => {
        state[productIndex].quantity += 1;
      });

      setCookie(CART_KEY, JSON.stringify(next), {
        req,
        res,
      });
    } else {
      // product not in cart
      // add new object to cart array

      const next = produce(cart, (state) => {
        state.push({
          productId,
          quantity: 1,
        });
      });

      setCookie(CART_KEY, JSON.stringify(next), {
        req,
        res,
      });
    }
  } else {
    // cart doesn't exist in cookie yet
    // so we'll create a new cart array

    const cart = [
      {
        productId,
        quantity: 1,
      },
    ];

    setCookie(CART_KEY, JSON.stringify(cart), {
      req,
      res,
    });
  }

  res.status(200).json({
    name: "John Doe",
  });
}
