# CryptoLog - Frontend
Proyecto de aplicación web para el seguimiento en tiempo real de criptomonedas y gestión de transacciones.

## 📄 Descripción
CryptoLog es una aplicación web diseñada para permitir a los usuarios realizar un seguimiento en tiempo real de las cotizaciones de criptomonedas, gestionar transacciones y tener un historial de inicio de sesión, dispositivos e ip para mayor seguridad. Los usuarios pueden ver la cotización actual de diversas criptomonedas, editar su perfil, añadir transacciones para llevar un registro de sus inversiones, y visualizar el historial para detectar actividad no autorizada.

## 🛠️ Dependencias
- axios (^1.6.7): Cliente HTTP para realizar peticiones a la API del backend.
- cloudinary-react (^1.8.1): Librería para trabajar con imágenes y multimedia en la nube de Cloudinary.
- react (^18.2.0): Biblioteca para construir interfaces de usuario.
- react-dom (^18.2.0): Renderizador de React para el navegador web.
- react-router-dom (^6.22.3): Enrutador para React que permite manejar la navegación en la aplicación.
- sweetalert2 (^11.0.18): Biblioteca para crear bonitos y personalizados mensajes emergentes (alertas).

## 📱 Vistas
- Dashboard: Página principal donde se muestra la cotización actual de las criptomonedas y la información relevante, puedes añadir criptomonedas a favoritos para un seguimiento mas ágil.
- Perfil: Vista donde los usuarios pueden editar su perfil como nombre, email y avatar.
- Transacciones: Página donde se pueden ver todas las transacciones realizadas por el usuario, editar, borrar y realizar nuevas transacciones.
- Historial de inicio de sesión: Sección donde se muestra el historial de inicio de sesión para detectar actividad no autorizada.


## 🚀 Scripts
dev: Inicia el servidor de desarrollo.
build: Genera una versión optimizada de la aplicación para producción.
lint: Ejecuta ESLint para buscar y corregir problemas de estilo en el código.
preview: Inicia un servidor para previsualizar la versión de producción de la aplicación.

## 📚 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/DevDesiree/PE11-CryptoLog_FrontEnd.git
```
2. Instalación de dependencias:

Asegúrate de tener Node.js instalado en tu sistema.
En la terminal, navega hasta la carpeta del proyecto y ejecuta:

```bash
npm install
```

3. Configuración del entorno:

Crea un archivo .env en la raíz del proyecto y configura las variables de entorno
Ten en cuenta que este proyecto usa api de CoinGecko y mas

4. Ejecución del servidor de desarrollo:

```bash
npm run dev
```
Esto iniciará el servidor de desarrollo. Abre tu navegador y ve a http://localhost:5173 para ver la aplicación.

> [!IMPORTANT]  
> Recuerda que tambien necesitas tener el servidor del backEnd activo, (Link al readme del backend)


## 📕 Cómo usar CryptoLog
- Al acceder a la aplicación, podrás ver la cotización actual de varias criptomonedas.
- Inicia sesión con tu cuenta para acceder a tu perfil y funciones adicionales.
- En tu perfil, podrás editar tu información personal y ajustes de seguridad.
- Utiliza la opción de "Añadir Transacción" para registrar tus operaciones con criptomonedas.
- Visualiza el historial de inicio de sesión para asegurarte de la seguridad de tu cuenta.

## 💻 Tecnologías Utilizadas
- React.js
- Axios
- Tailwind
- Cloudinary React
- React Router DOM
- SweetAlert2
- Vite

## 👩‍💻 Autora
*Desiree Sánchez*