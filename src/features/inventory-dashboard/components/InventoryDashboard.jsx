import { useState } from 'react'
import { PRODUCT_CATEGORIES, STOCK_STATUS } from '../../../shared/constants/inventoryConstants'

export default function InventoryDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const inventoryStats = {
    totalProducts: 145,
    totalValue: 125000,
    lowStock: 12,
    criticalStock: 5
  }

  const products = [
    { id: 1, name: 'Concentrado Premium', category: 'Alimento', quantity: 500, unit: 'kg', minStock: 200, price: 25, status: 'Disponible' },
    { id: 2, name: 'Antibiótico A', category: 'Medicamento', quantity: 15, unit: 'unidad', minStock: 20, price: 45, status: 'Bajo' },
    { id: 3, name: 'Vitamina B12', category: 'Suplemento', quantity: 5, unit: 'frasco', minStock: 10, price: 35, status: 'Crítico' },
    { id: 4, name: 'Forraje Verde', category: 'Alimento', quantity: 1200, unit: 'kg', minStock: 500, price: 8, status: 'Disponible' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Inventario</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            📊 Reportes
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            + Nuevo Producto
          </button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Productos</p>
              <p className="text-3xl font-bold text-gray-900">{inventoryStats.totalProducts}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Valor Total</p>
              <p className="text-3xl font-bold text-gray-900">${inventoryStats.totalValue.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Stock Bajo</p>
              <p className="text-3xl font-bold text-orange-600">{inventoryStats.lowStock}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Stock Crítico</p>
              <p className="text-3xl font-bold text-red-600">{inventoryStats.criticalStock}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-2xl">🚨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-4">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todas las categorías</option>
            {Object.entries(PRODUCT_CATEGORIES).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option value="all">Todos los estados</option>
            {Object.entries(STOCK_STATUS).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Buscar producto..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />

          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Buscar
          </button>
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Producto</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Categoría</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cantidad</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Stock Mínimo</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Precio Unit.</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Valor Total</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <span className="text-lg">📦</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {product.quantity} {product.unit}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.minStock} {product.unit}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    ${(product.quantity * product.price).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.status === 'Disponible' ? 'bg-green-100 text-green-800' :
                      product.status === 'Bajo' ? 'bg-orange-100 text-orange-800' :
                      product.status === 'Crítico' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Editar
                      </button>
                      <button className="text-green-600 hover:text-green-700 text-sm">
                        Movimiento
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alertas de stock bajo */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔔</span> Alertas de Stock
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🚨</span>
              <div>
                <p className="font-medium text-gray-900">Vitamina B12</p>
                <p className="text-sm text-gray-600">Stock crítico: 5 frascos (Mínimo: 10)</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
              Solicitar Compra
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-medium text-gray-900">Antibiótico A</p>
                <p className="text-sm text-gray-600">Stock bajo: 15 unidades (Mínimo: 20)</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
              Solicitar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}