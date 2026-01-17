import { MOCK_PRODUCTS } from "@/shared/mocks/inventoryMock";

const USE_MOCK = true; // Set to false to use real API

export const inventoryService = {
  getProducts: async () => {
    if (USE_MOCK) {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return MOCK_PRODUCTS;
    }

    // Placeholder for real API call
    // const response = await fetch('/api/inventory');
    // return response.json();
  },
};
