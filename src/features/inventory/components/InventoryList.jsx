import { useInventory } from "../hooks/useInventory";
import { InventoryHeader } from "./InventoryHeader";
import { InventoryStats } from "./InventoryStats";
import { InventoryAlerts } from "./InventoryAlerts";
import { InventoryFilters } from "./InventoryFilters";
import { InventoryTable } from "./InventoryTable";

export function InventoryList({ onCreate, onEdit }) {
  const { loading, filteredProducts, stats, filters } = useInventory();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      <InventoryHeader onCreate={onCreate} />

      <InventoryStats stats={stats} />

      <InventoryAlerts stats={stats} />

      <InventoryFilters
        searchTerm={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        filterCategory={filters.filterCategory}
        onFilterChange={filters.setFilterCategory}
      />

      <InventoryTable products={filteredProducts} onEdit={onEdit} />
    </div>
  );
}
