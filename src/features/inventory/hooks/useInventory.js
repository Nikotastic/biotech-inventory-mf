import { useState, useEffect, useMemo } from "react";
import { inventoryService } from "../services/inventoryService";
import { STOCK_STATUS } from "@/shared/constants/inventoryConstants";

export function useInventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await inventoryService.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterCategory === "all" || product.category === filterCategory;
      return matchesSearch && matchesFilter;
    });
  }, [products, searchTerm, filterCategory]);

  const stats = useMemo(
    () => ({
      totalProducts: products.length,
      totalValue: products.reduce((acc, p) => acc + p.price * p.stock, 0),
      lowStock: products.filter(
        (p) => p.status === "Bajo" || p.status === STOCK_STATUS.LOW,
      ).length,
      criticalStock: products.filter(
        (p) => p.status === "Crítico" || p.status === STOCK_STATUS.CRITICAL,
      ).length,
    }),
    [products],
  );

  return {
    loading,
    products,
    filteredProducts,
    stats,
    filters: {
      searchTerm,
      setSearchTerm,
      filterCategory,
      setFilterCategory,
    },
    actions: {
      reload: loadProducts,
    },
  };
}
