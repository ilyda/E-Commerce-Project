/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const emptyForm = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  address: "",
};

export default function PlaceOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    cartItems,
    subTotal,
    currency,
    delivery_fee,
    allRemoveFromCart
  } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);

  const { register, handleSubmit, reset } = useForm({ defaultValues: emptyForm });
  const { register: registerCard, handleSubmit: handleSubmitCard, reset: resetCard } = useForm();



  const fetchAddresses = async () => {
    try {
      const res = await api.get("/user/address");
      setAddresses(res.data);
    } catch {
      navigate("/login")
    }
  };

  useEffect(() => { fetchAddresses(); }, []);

  const onSubmitAddress = async (data) => {
    try {
      if (editingId) await api.put("/user/address", { id: editingId, ...data });
      else await api.post("/user/address", data);

      toast.success("Address saved");
      setShowForm(false);
      setEditingId(null);
      reset(emptyForm);
      fetchAddresses();
    } catch { toast.error("Address save failed"); }
  };



  const fetchCards = async () => {
    try {
      const res = await api.get("/user/card");
      setCards(res.data);
    } catch { toast.error("Cards could not load"); }
  };

  useEffect(() => { if (step === 2) fetchCards(); }, [step]);

  const saveCard = async (data) => {
    try {
      await api.post("/user/card", {
        card_no: data.card_no,
        expire_month: Number(data.expire_month),
        expire_year: Number(data.expire_year),
        name_on_card: data.name_on_card
      });
      toast.success("Card saved");
      resetCard();
      setShowCardForm(false);
      fetchCards();
    } catch { toast.error("Card save failed"); }
  };



  const goToPayment = () => {
    if (addresses.length === 0) return toast.error("Cart empty");
    if (!selectedAddress) return toast.error("Select address");
    setStep(2);
  };

  const placeOrder = async () => {
    try {
      if (!selectedCard) return toast.error("Select card");

      const card = cards.find(c => c.id === selectedCard);
      if (!card) return toast.error("Card not found");

      const payload = {
        address_id: selectedAddress,
        order_date: new Date().toISOString(),
        card_no: Number(card.card_no),
        card_name: card.name_on_card,
        card_expire_month: Number(card.expire_month),
        card_expire_year: Number(card.expire_year),
        card_ccv: 123,
        price: Number(subTotal),
        products: cartItems.map(i => ({
          product_id: i.id,
          count: Number(i.count),
          detail: i.detail || ""
        }))
      };

      await api.post("/order", payload);

  

      dispatch(clearCart());
      setSelectedAddress(null);
      setSelectedCard(null);
      allRemoveFromCart();
      setTimeout(() => navigate("/order-success"), 1500);
      
    } catch (err) {
      console.log(err?.response?.data || err);
      toast.error("Order failed");
    }
  };


  return (
    <div className="min-h-screen py-12 container mx-auto px-6">
      <div className="flex gap-8 text-xl font-semibold mb-10">
        <div className={step === 1 ? "text-black" : "text-gray-400"}>DELIVERY</div>
        <div className={step === 2 ? "text-black" : "text-gray-400"}>PAYMENT</div>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          {step === 1 && (
            <>
              <button onClick={() => { setShowForm(true); setEditingId(null); reset(emptyForm) }} className="border px-4 py-2 mb-6">
                + Add Address
              </button>

              {showForm && (
                <form onSubmit={handleSubmit(onSubmitAddress)} className="space-y-3 mb-6">
                  <input {...register("title", { required: true })} placeholder="Title" className="border p-2 w-full" />
                  <input {...register("name", { required: true })} placeholder="Name" className="border p-2 w-full" />
                  <input {...register("surname", { required: true })} placeholder="Surname" className="border p-2 w-full" />
                  <input {...register("phone", { required: true })} placeholder="Phone" className="border p-2 w-full" />
                  <input {...register("city", { required: true })} placeholder="City" className="border p-2 w-full" />
                  <input {...register("district", { required: true })} placeholder="District" className="border p-2 w-full" />
                  <textarea {...register("address", { required: true })} placeholder="Address" className="border p-2 w-full" />
                  <button className="bg-black text-white px-6 py-2">Save</button>
                </form>
              )}

              {addresses.map(a => (
                <div key={a.id} onClick={() => setSelectedAddress(a.id)} className={`border p-4 mb-3 cursor-pointer ${selectedAddress === a.id ? "border-black" : "border-gray-300"}`}>
                  <p className="font-semibold">{a.title}</p>
                  <p>{a.name} {a.surname}</p>
                  <p>{a.city}/{a.district}</p>
                </div>
              ))}


            </>
          )}

          {step === 2 && (
            <>
              <button onClick={() => setShowCardForm(!showCardForm)} className="border px-4 py-2 mb-4">+ New Card</button>

              {showCardForm && (
                <form onSubmit={handleSubmitCard(saveCard)} className="space-y-3 mb-6">
                  <input {...registerCard("card_no", { required: true })} placeholder="Card No" className="border p-2 w-full" />
                  <input {...registerCard("expire_month", { required: true })} placeholder="MM" className="border p-2 w-full" />
                  <input {...registerCard("expire_year", { required: true })} placeholder="YY" className="border p-2 w-full" />
                  <input {...registerCard("name_on_card", { required: true })} placeholder="Name" className="border p-2 w-full" />
                  <button className="bg-black text-white px-6 py-2">Save Card</button>
                </form>
              )}

              <div className="space-y-4">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`border p-4 rounded cursor-pointer ${selectedCard === card.id
                        ? "border-black"
                        : "border-gray-300"
                      }`}
                  >
                    <p>**** **** **** {card.card_no.slice(-4)}</p>
                    <p>
                      {card.expire_month}/{card.expire_year}
                    </p>
                    <p>{card.name_on_card}</p>
                  </div>
                ))}
              </div>

              <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 underline">
                ← Back to Delivery
              </button>

            </>
          )}
        </div>
        <div>
          <div className="bg-white p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-6">CART TOTALS</h3>
            <div className="flex justify-between mb-3"><span>Subtotal</span><span>{currency} {subTotal.toFixed(2)}</span></div>
            <div className="flex justify-between mb-3"><span>Shipping Fee</span><span>{currency} {delivery_fee.toFixed(2)}</span></div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg"><span>Total</span><span> {currency} {(delivery_fee + subTotal).toFixed(2)}</span></div>
          </div>
          {step == 1 && (
            <button onClick={goToPayment} className="mt-8 bg-black text-white px-8 py-3">
              Save & Continue
            </button>

          )}
          {step == 2 && (
            <button onClick={placeOrder} className="bg-black text-white px-8 py-3 mt-6 w-full">
              Pay
            </button>
          )}
        </div>
      </div>

    </div>

  );
}