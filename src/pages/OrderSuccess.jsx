/* eslint-disable react-hooks/purity */
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const orderId = state?.orderId || Math.floor(Math.random() * 900000 + 100000);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-10 text-center">
        <CheckCircle2 className="mx-auto text-green-500" size={72} />

        <h1 className="text-3xl font-semibold mt-6">Siparişiniz Oluşturuldu 🎉</h1>
        <p className="text-gray-500 mt-3">
          Siparişiniz başarıyla alındı. Hazırlanıp kargoya verildiğinde size bildirim göndereceğiz.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 mt-8 text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Sipariş No</span>
            <span className="font-semibold">#{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tahmini Teslimat</span>
            <span className="font-semibold">2 - 4 İş Günü</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Ödeme</span>
            <span className="font-semibold">Kapıda Ödeme</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          <Link
            to="/shop"
            className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
          >
            Alışverişe Devam Et
          </Link>
        </div>
      </div>
    </div>
  );
}
