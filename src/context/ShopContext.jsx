/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(24);
  const [categoryId, setCategoryId] = useState(null);

 
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cartItems"));
      if (!stored) return [];


      return stored.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
    } catch {
      return [];
    }
  });

  const [subTotal, setSubTotal] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const params = { limit, offset };

        if (search) params.filter = search;
        if (categoryId) params.category = categoryId;

        const res = await api.get("/products", { params });

        setProducts(res.data.products);
        setTotal(res.data.total);
      } catch (error) {
        toast.error("Products could not be loaded");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [offset, limit, search, categoryId]);


  useEffect(() => {
    setOffset(0);
  }, [search]);

  const fetchProductById = useCallback(async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  }, []);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (itemId) => {
    const product = products.find(
      (p) => p.id === itemId || p._id === itemId
    );

    if (!product) return;

    toast.success("Sepetinize ürün eklendi");

    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === (product.id || product._id)
      );

      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id || product._id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image || product.images?.[0],
        },
      ];
    });
  };


  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== itemId)
    );
  };
  const allRemoveFromCart = () => {
  localStorage.removeItem("cartItems");
 setCartItems([]);
  };

  const updateCartQuantity = (itemId, qty) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: qty }
          : item
      )
    );
  };


  useEffect(() => {
    const sub = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );

    setSubTotal(sub);
  }, [cartItems]);

  const getCartCount = () =>
    cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

  return (
    <ShopContext.Provider
      value={{
        products,
        loading,
        total,
        setOffset,
        currency,
        limit,
        delivery_fee,
        showSearch,
        setShowSearch,
        search,
        setSearch,
        fetchProductById,
        cartItems,
        addToCart,
        categoryId,
        setCategoryId,
        removeFromCart,
        allRemoveFromCart,
        updateCartQuantity,
        getCartCount,
        subTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
