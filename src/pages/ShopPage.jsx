import React, { useState, useMemo, useContext, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import ProductItem from "../components/ProductItem";
import BreadCrumbSection from "../components/BreadCrumbSection";
import Brands from "../components/Brands";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "../components/SearchBar";

const ShopPage = () => {
  const {
    products,
    loading,
    total,
    limit,
    setOffset,
  } = useContext(ShopContext);

  const [viewMode, setViewMode] = useState("grid");
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const newOffset = (currentPage - 1) * limit;
    setOffset(newOffset);
  }, [currentPage, limit, setOffset]);
  const sortedProducts = useMemo(() => {
    const list = [...products];

    if (sortType === "low-to-high") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sortType === "high-to-low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, sortType]);

  const totalPages = Math.ceil(total / limit);
  const maxVisible = 4;

  const startPage = Math.max(
    1,
    Math.min(currentPage - 1, totalPages - maxVisible + 1)
  );

  const endPage = Math.min(
    totalPages,
    startPage + maxVisible - 1
  );

  return (
    <>
      <BreadCrumbSection />
      <SearchBar></SearchBar>
      <section className="w-full bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-6">
            <p className="text-[#737373] text-sm font-bold">
              Showing {products.length} of {total} results
            </p>

            <div className="flex items-center gap-4 text-[#737373]">
              <span className="font-bold text-sm">Views:</span>

              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 border rounded-md ${viewMode === "grid"
                    ? "bg-[#23A6F0] text-white"
                    : "hover:bg-gray-100"
                  }`}
              >
                <LayoutGrid size={18} />
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`p-3 border rounded-md ${viewMode === "list"
                    ? "bg-[#23A6F0] text-white"
                    : "hover:bg-gray-100"
                  }`}
              >
                <List size={18} />
              </button>
            </div>

            <select
              className="border rounded-md bg-[#F9F9F9] text-sm font-bold px-5 py-2"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="default">Popularity</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {loading && (
            <div className="text-center py-20 text-lg font-bold">
              Loading products...
            </div>
          )}

          {!loading && (
            <div
              className={`grid gap-8 py-12 transition-all ${viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
                }`}
            >
              {sortedProducts.map((item) => (
                <div
                  key={item.id}
                  className={viewMode === "list" ? "border-b pb-8" : ""}
                >
                  <ProductItem
                    id={item.id}
                    image={item.images?.[0].url}
                    price={item.price?.toFixed(2)}
                    discounted={item.price?.toFixed(2)}
                    name={item.name}
                    second_name={item.description}
                    viewMode={viewMode}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center py-16">
            <div className="flex border border-[#BDBDBD] rounded-lg overflow-hidden font-bold text-sm">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-6 py-4 border-r disabled:bg-[#F3F3F3]"
              >
                First
              </button>
              {startPage > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="px-5 py-4 border-r text-[#23A6F0]"
                  >
                    1
                  </button>
                  {startPage > 2 && (
                    <span className="px-4 py-4 border-r">...</span>
                  )}
                </>
              )}
              {Array.from(
                { length: endPage - startPage + 1 },
                (_, i) => startPage + i
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-5 py-4 border-r ${currentPage === page
                      ? "bg-[#23A6F0] text-white"
                      : "text-[#23A6F0] hover:bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              ))}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && (
                    <span className="px-4 py-4 border-r">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-5 py-4 border-r text-[#23A6F0]"
                  >
                    {totalPages}
                  </button>
                </>
              )}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-6 py-4 disabled:bg-[#F3F3F3]"
              >
                Next
              </button>

            </div>
          </div>


        </div>
      </section>

      <Brands />
    </>
  );
};

export default ShopPage;
