"use client";
import { BasketProduct } from "@/types/products";
import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext<CartContextType>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  total: 0,
  addPosition: () => {},
  removePosition: () => {},
});

interface CartContextType {
  cart: BasketProduct[];
  addProduct: (product: BasketProduct) => void;
  removeProduct: (id: number) => void;
  total: number;
  addPosition: (id: number) => void;
  removePosition: (id: number) => void;
}

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<BasketProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [cart]);

  const getTotal = () => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.number;
    }, 0);

    setTotal(total);
  };

  const addProduct = (product: BasketProduct) => {
    const isAdded = Boolean(
      cart.filter((cart) => cart.id === product.id).length
    );
    if (isAdded) {
      setCart(
        cart.map((cart) => {
          if (cart.id === product.id) {
            return {
              ...cart,
              number: cart.number + product.number,
            };
          }
          return cart;
        })
      );
    } else {
      setCart((cart) => [...cart, product]);
    }
  };

  const removeProduct = (id: number) => {
    setCart((carts) => {
      return carts.filter((product) => product.id !== id);
    });
  };

  const addPosition = (id: number) => {
    setCart((carts) => {
      return carts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            number: product.number + 1,
          };
        }
        return product;
      });
    });
  };
  const removePosition = (id: number) => {
    setCart((carts) => {
      return carts.map((product) => {
        if (product.id === id) {
          const updateCart = {
            ...product,
            number: product.number - 1,
          };
          if (updateCart.number <= 0) {
            removeProduct(id);
          }
          return updateCart;
        }
        return product;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        total,
        addPosition,
        removePosition,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
