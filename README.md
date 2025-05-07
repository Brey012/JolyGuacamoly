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

⚙️ Instalación
Clona el repositorio:

Instala las dependencias:

Inicia el servidor simulado (json-server):

Inicia la aplicación:

🧑‍💻 Uso
Clientes
Accede a la página de productos (/products).
Agrega productos al carrito.
Confirma tu pedido ingresando los datos de envío.
Visualiza la página de éxito del pedido.
Administradores
Inicia sesión como administrador.
Accede al panel de administración (/admin).
Gestiona productos:
Cambia precios.
Marca productos como agotados o disponibles.
Visualiza pedidos recientes en el panel.
📋 Scripts disponibles
npm run dev: Inicia la aplicación en modo desarrollo.
npm run build: Genera una versión optimizada para producción.
npm run lint: Ejecuta ESLint para verificar errores de estilo.
npm run server: Inicia el servidor simulado con json-server.
🔒 Protección de rutas
El acceso al panel de administración está protegido mediante el componente ProtectedRoute. Solo los usuarios con el rol de "admin" pueden acceder a /admin.
🛠️ Mejoras futuras
Implementar autenticación real con un backend.
Agregar pruebas unitarias y de integración.
Mejorar la experiencia de usuario con animaciones y transiciones.
Implementar un sistema de roles más robusto.
📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

📞 Contacto
Si tienes preguntas o sugerencias, no dudes en contactarme:

Email: tu-email@example.com
GitHub: tu-usuario
