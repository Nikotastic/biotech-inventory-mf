# 📦 BioTech Inventory - Gestión de Inventario

Módulo de control de stock de alimentos, medicamentos e insumos.

## 🚀 Características

- **Control de stock**: Inventario en tiempo real
- **Movimientos**: Entradas y salidas
- **Alertas de stock**: Mínimos y críticos
- **Valorización**: Costeo de inventario
- **Reportes**: Análisis de consumo
- **Proveedores**: Gestión de suppliers
- **Órdenes de compra**: Solicitudes automáticas

## 🛠️ Tecnologías

- React 18
- Vite + Module Federation
- React Hook Form + Yup
- Axios
- Zustand
- Tailwind CSS

## 📦 Instalación

```bash
npm install
npm run dev  # Puerto 5006
```

## 🔌 Componentes Expuestos

```javascript
// Dashboard de inventario
import('inventoryMF/InventoryDashboard')

// Gestión de stock
import('inventoryMF/StockManagement')

// Movimientos
import('inventoryMF/StockMovements')

// Store
import('inventoryMF/InventoryStore')
```

## 📁 Estructura

```
src/
├── features/
│   ├── inventory-dashboard/
│   │   ├── components/
│   │   │   └── InventoryDashboard.jsx
│   │   ├── hooks/
│   │   └── services/
│   ├── stock-management/
│   │   ├── components/
│   │   ├── validations/
│   │   └── services/
│   └── stock-movements/
│       ├── components/
│       └── services/
├── shared/
│   ├── store/
│   │   └── inventoryStore.js
│   ├── constants/
│   │   └── inventoryConstants.js
│   └── utils/
└── App.jsx
```

## 📦 Categorías de Productos

```javascript
export const PRODUCT_CATEGORIES = {
  FEED: 'Alimento',
  MEDICINE: 'Medicamento',
  SUPPLEMENT: 'Suplemento',
  EQUIPMENT: 'Equipo',
  SUPPLY: 'Insumo'
}
```

## 📊 Estados de Stock

```javascript
export const STOCK_STATUS = {
  AVAILABLE: 'Disponible',
  LOW: 'Bajo',
  CRITICAL: 'Crítico',
  OUT_OF_STOCK: 'Agotado'
}
```

## 🌍 API Endpoints

```javascript
GET    /api/inventory/products        // Productos
POST   /api/inventory/products        // Nuevo producto
PUT    /api/inventory/products/:id    // Actualizar
GET    /api/inventory/movements       // Movimientos
POST   /api/inventory/movements       // Registrar movimiento
GET    /api/inventory/alerts          // Alertas de stock
GET    /api/inventory/stats           // Estadísticas
```

## 📦 Producto

```typescript
interface Product {
  id: number
  name: string
  category: string
  code: string
  description: string
  quantity: number
  unit: string
  minStock: number
  maxStock: number
  price: number
  supplier: string
  lastPurchase: Date
  location: string
  status: string
}
```

## 📝 Movimiento de Stock

```typescript
interface StockMovement {
  id: number
  productId: number
  type: 'Entrada' | 'Salida' | 'Ajuste' | 'Transferencia'
  quantity: number
  date: Date
  reason: string
  reference: string
  user: string
  notes?: string
}
```

## 🔔 Alertas de Stock

```javascript
// Niveles de alerta
- Stock bajo: cantidad < minStock
- Stock crítico: cantidad < (minStock * 0.5)
- Stock agotado: cantidad = 0

// Notificaciones
- Email a compras
- Notificación en dashboard
- Sugerencia de orden de compra
```

## 📊 Reportes

- Valorización de inventario
- Rotación de productos
- Consumo por período
- Productos sin movimiento
- Análisis ABC

## 🚀 Deploy

```bash
npm run build
vercel --prod
```

## 📞 Contacto

- Email: inventory@biotech.com
- Docs: https://docs.biotech.com/inventory
```