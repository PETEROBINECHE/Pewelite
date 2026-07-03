import React from "react";

export default function SummaryPage() {
  const cart = [
    { id: 1, type: "product", name: "Dog Food", qty: 2, price: 5000 },
    { id: 2, type: "product", name: "Pet Shampoo", qty: 1, price: 3000 },
    { id: 3, type: "pet", name: "German Shepherd Puppy", price: 80000 },
    { id: 4, type: "service", name: "Full Grooming", date: "24 April", price: 7000 },
    { id: 5, type: "service", name: "Vet Consultation", date: "26 April", price: 10000 }
  ];

  const products = cart.filter(item => item.type === "product");
  const pets = cart.filter(item => item.type === "pet");
  const services = cart.filter(item => item.type === "service");

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Order Summary
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* PRODUCTS */}
          {products.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-4">
                🛒 Products Purchased
              </h2>

              {products.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-3 text-sm md:text-base"
                >
                  <span>{item.name}</span>
                  <span>x{item.qty}</span>
                  <span>₦{item.price * item.qty}</span>
                </div>
              ))}
            </div>
          )}

          {/* PETS */}
          {pets.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-4">
                🐾 Pet Reserved / Adoption
              </h2>

              {pets.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-3 text-sm md:text-base"
                >
                  <span>{item.name}</span>
                  <span>₦{item.price}</span>
                </div>
              ))}
            </div>
          )}

          {/* SERVICES */}
          {services.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
              <h2 className="text-xl font-semibold mb-4">
                🛠 Services Booked
              </h2>

              {services.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-3 text-sm md:text-base"
                >
                  <span>{item.name}</span>
                  <span>{item.date}</span>
                  <span>₦{item.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-5">
            <h2 className="text-xl font-semibold mb-5">
              Payment Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₦{total}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}