"use client";

import { useMemo, useState } from "react";

type ProductItem = {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  stock: number;
};

const inventory: ProductItem[] = [
  { id: "ultraboost", name: "Adidas Ultraboost", sku: "ADID-UB-001", price: 179.99, category: "Clothing", stock: 2 },
  { id: "coffee-beans", name: "Coffee Beans 1kg", sku: "COFFEE-ARABICA", price: 24.99, category: "Food & Beverages", stock: 71 },
  { id: "garden-hose", name: "Garden Hose 50ft", sku: "GARDEN-HOSE-50", price: 39.99, category: "Home & Garden", stock: 35 },
  { id: "iphone13", name: "iPhone 13", sku: "IPH13-128", price: 799.99, category: "Electronics", stock: 4 },
  { id: "desk-lamp", name: "LED Desk Lamp", sku: "LAMP-LED-DESK", price: 29.99, category: "Home & Garden", stock: 83 },
  { id: "mbp14", name: "MacBook Pro 14", sku: "MBP14-512", price: 1999.99, category: "Electronics", stock: 6 },
  { id: "nike-air", name: "Nike Air Max", sku: "NIKE-AM-001", price: 129.99, category: "Clothing", stock: 43 },
  { id: "organic-tea", name: "Organic Tea Bags", sku: "TEA-ORGANIC-50", price: 12.99, category: "Food & Beverages", stock: 71 },
  { id: "galaxy-s21", name: "Samsung Galaxy S21", sku: "SAMS21-256", price: 699.99, category: "Electronics", stock: 13 },
];

const formatMoney = (value: number) => `Rs. ${value.toFixed(2)}`;
const formatTax = (value: number) => value.toFixed(2);

const InteractivePosDemo = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const addItem = (id: string) => {
    setActiveId(id);
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      const qty = prev[id] ?? 0;
      if (qty <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: qty - 1 };
    });
  };

  const clearCart = () => setCart({});

  const filteredInventory = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return inventory;
    return inventory.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query),
    );
  }, [search]);

  const cartRows = useMemo(() => {
    return inventory
      .filter((item) => (cart[item.id] ?? 0) > 0)
      .map((item) => {
        const qty = cart[item.id] ?? 0;
        const tax = Number((qty * item.price * 0.06).toFixed(2));
        return {
          ...item,
          qty,
          tax,
          total: qty * item.price,
        };
      });
  }, [cart]);

  const grandTotal = cartRows.reduce((sum, row) => sum + row.total, 0);
  const taxTotal = cartRows.reduce((sum, row) => sum + row.tax, 0);

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="rounded-3xl border border-stroke bg-white p-7 shadow-solid-8 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:p-10">
          <h2 className="mb-3 text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
            Try a live POS workflow
          </h2>
          <p className="mb-8 max-w-3xl text-waterloo dark:text-manatee">
            Explore how your team can quickly add products, build a cart, and clear a sale.
            This mini simulation shows the kind of fast checkout experience your staff gets.
          </p>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_1fr]">
            <div className="rounded-2xl border border-[#1E355A] bg-[#182740] p-4 text-white">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Product Search</h3>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#111c32] px-2 py-1 text-xs text-white/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{filteredInventory.length} items</span>
                </div>
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product name or SKU..."
                className="mb-4 w-full rounded-lg border border-[#2A3F66] bg-[#111c32] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
              />

              <div className="grid max-h-[430px] gap-3 overflow-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredInventory.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addItem(item.id)}
                    className={`rounded-xl border p-3 text-left transition ${
                      activeId === item.id
                        ? "border-primary bg-[#1A3155]"
                        : "border-[#2A3F66] bg-[#111c32] hover:border-primary/70"
                    }`}
                  >
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-[11px] text-white/70">SKU: {item.sku}</p>
                    <p className="text-[11px] text-white/70">{item.category}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold">{formatMoney(item.price)}</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                        {item.stock}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#1E355A] bg-[#182740] p-4 text-white xl:flex xl:h-[560px] xl:flex-col">
              <h3 className="mb-4 text-xl font-semibold">Shopping Cart</h3>
              <div className="min-h-0 flex-1 overflow-y-auto">
                {cartRows.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-[#2A3F66] bg-[#111c32] p-6 text-sm text-white/70">
                    Click any product tile to add items into the cart.
                  </p>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-[#2A3F66]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#0E1A30] text-white/70">
                        <tr>
                          <th className="px-2 py-2">Sr.</th>
                          <th className="px-2 py-2">Item Name</th>
                          <th className="px-2 py-2">Desc</th>
                          <th className="px-2 py-2">Qty</th>
                          <th className="px-2 py-2">Price</th>
                          <th className="px-2 py-2">Tax</th>
                          <th className="px-2 py-2">Total</th>
                          <th className="px-2 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#111c32]">
                        {cartRows.map((row, idx) => (
                          <tr key={row.id} className="border-t border-[#2A3F66]">
                            <td className="px-2 py-1.5 text-white/80">{idx + 1}</td>
                            <td className="px-2 py-1.5 font-semibold">{row.name}</td>
                            <td className="px-2 py-1.5 text-white/60">No tax</td>
                            <td className="px-2 py-1.5">{row.qty}</td>
                            <td className="px-2 py-1.5">{row.price.toFixed(2)}</td>
                            <td className="px-2 py-1.5 text-red-400">{formatTax(row.tax)}</td>
                            <td className="px-2 py-1.5 font-semibold">{row.total.toFixed(2)}</td>
                            <td className="px-2 py-1.5">
                              <div className="flex gap-1">
                                <button
                                  type="button"
                                  onClick={() => removeItem(row.id)}
                                  className="h-5 w-5 rounded bg-red-500 text-xs"
                                >
                                  -
                                </button>
                                <button
                                  type="button"
                                  onClick={() => addItem(row.id)}
                                  className="h-5 w-5 rounded bg-emerald-500 text-xs"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        <tr className="border-t border-[#2A3F66] bg-[#0E1A30] font-semibold">
                          <td className="px-2 py-2" colSpan={5}>
                            Total
                          </td>
                          <td className="px-2 py-2 text-red-400">{formatTax(taxTotal)}</td>
                          <td className="px-2 py-2 text-emerald-300">{grandTotal.toFixed(2)}</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-xl border border-[#2A3F66] bg-[#111c32] p-4 xl:mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Final Total</span>
                  <span className="text-xl font-bold text-[#2C90FF]">
                    {formatMoney(grandTotal)}
                  </span>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-md bg-[#D29A00] px-3 py-2 text-xs font-semibold text-white"
                  >
                    Park Sale
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-[#5B4BFF] px-3 py-2 text-xs font-semibold text-white"
                  >
                    Resume
                  </button>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="rounded-md bg-[#FF2A2A] px-3 py-2 text-xs font-semibold text-white"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-[#11A83C] px-3 py-2 text-xs font-semibold text-white"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePosDemo;
