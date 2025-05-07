# JolyGuacamoly 🥑

¡Bienvenido a **JolyGuacamoly**! Este proyecto es una aplicación web para gestionar y comprar productos de guacamole. Incluye un panel de administración para gestionar productos y pedidos, así como una experiencia de usuario amigable para los clientes.

---

## 🚀 **Características**

- **Clientes**:
  - Ver productos disponibles.
  - Agregar productos al carrito.
  - Confirmar pedidos con datos de envío.
  - Ver una página de éxito después de realizar un pedido.

- **Administradores**:
  - Gestionar productos (cambiar precios, marcar como agotados/disponibles).
  - Ver pedidos recientes en un panel con scroll.
  - Acceso protegido al panel de administración.

- **General**:
  - Persistencia de datos con `localStorage`.
  - Simulación de API con `json-server`.
  - Navegación fluida con `react-router-dom`.

---

## 🛠️ **Tecnologías utilizadas**

- **Frontend**:
  - React 19
  - React Router DOM 7.5.3
  - Vite
- **Backend simulado**:
  - `json-server` para simular una API REST.
- **Estilos**:
  - CSS puro.

---

## 📂 **Estructura del proyecto**

```plaintext
src/
├── App.jsx                # Componente principal de la aplicación
├── main.jsx               # Punto de entrada principal
├── routes.jsx             # Configuración de rutas
├── assets/                # Archivos estáticos como imágenes
├── components/            # Componentes reutilizables
│   ├── Header.jsx         # Encabezado
│   └── ProtectedRoute.jsx # Protección de rutas
├── css/                   # Archivos de estilos CSS
├── data/                  # Datos estáticos o simulados
│   └── fakeApi.json       # Archivo JSON simulado para la API
├── pages/                 # Páginas principales
│   ├── AdminPanel/        # Panel de administración
│   ├── CartDrawer/        # Carrito de compras
│   ├── Home/              # Página de inicio
│   ├── Login/             # Página de inicio de sesión
│   ├── OrderSuccess/      # Página de éxito del pedido
│   ├── Products/          # Página de productos
│   └── NotFound.jsx       # Página 404
├── services/              # Servicios para manejar datos y API
│   ├── api.js             # Funciones para interactuar con la API
│   └── fakeApi.json       # Archivo JSON simulado
├── utils/                 # Funciones utilitarias
│   ├── calculateTotal.js  # Calcular totales
│   └── formatDate.js      # Formatear fechas
