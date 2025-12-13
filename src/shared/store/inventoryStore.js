import { create } from 'zustand'

export const useInventoryStore = create((set) => ({
  products: [],
  movements: [],
  alerts: [],
  loading: false,
  
  setProducts: (products) => set({ products }),
  setMovements: (movements) => set({ movements }),
  setAlerts: (alerts) => set({ alerts }),
  setLoading: (loading) => set({ loading })
}))