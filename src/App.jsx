import { InventoryList } from "./features/inventory/components/InventoryList";

function App() {
  const handleCreate = () => {
    console.log("Create product clicked");
    // Implement create logic or modal opening here
  };

  const handleEdit = (id) => {
    console.log("Edit product clicked", id);
    // Implement edit logic or modal opening here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="w-full mx-auto">
        <InventoryList onCreate={handleCreate} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
