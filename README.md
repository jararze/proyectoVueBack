# Gestor de Contactos

Este proyecto es una aplicación web para gestionar contactos, desarrollada con **Vue 3**, **Vite**, **Vuetify** y **TailwindCSS**. Permite realizar operaciones de CRUD (Crear, Leer, Actualizar y Eliminar) conectadas a un backend con API REST.

## Características
- Tema oscuro habilitado por defecto.
- Tabla interactiva con búsqueda y paginación.
- Integración con Vuetify para componentes de interfaz de usuario.
- Uso de modales para agregar, editar y eliminar contactos.
- Conexión al backend para gestionar datos de contactos.

---

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior recomendado)
- **npm** (v8 o superior) o **yarn**
- Un backend funcional con una API REST que maneje contactos.

---

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone hhttps://github.com/jararze/proyectoVueBack.git
   cd proyectoVueBack
   
2. **Instalar dependencias**
    ```bash
   npm install
3. ** Ejecutar el servidor de desarrollo **
   ```bash
   npm run dev
   
## Abrir en el navegador
Abre http://localhost:5173 en tu navegador para visualizar la aplicación.

## Estructura

```bash
src/
├── assets/             # Archivos estáticos (CSS, imágenes, etc.)
├── components/         # Componentes de Vue
│   ├── ContactForm.vue # Formulario de contacto
│   └── ContactList.vue # Tabla de contactos
├── data/               # Datos estáticos y configuración
├── plugins/            # Configuración de Vuetify
├── main.js             # Punto de entrada principal
├── App.vue             # Componente raí
```


# Uso

### **Agregar Contacto**
- Haz clic en el botón **Agregar Contacto**.
- Llena los campos del formulario en el modal y haz clic en **Guardar**.
- El contacto se guardará y la tabla se actualizará automáticamente.

### **Editar Contacto**
- Haz clic en el botón **Editar** de un contacto en la tabla.
- Actualiza los campos necesarios y guarda los cambios.

### **Eliminar Contacto**
- Haz clic en el botón **Eliminar** de un contacto.
- Confirma la acción en el cuadro de diálogo.

---

## Tecnologías Utilizadas
- **Vue 3**: Framework para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos frontend.
- **Vuetify**: Librería de componentes Material Design.
- **TailwindCSS**: Framework de utilidades CSS.
- **Axios**: Para realizar solicitudes HTTP al backend.

---

## Contribuyente
- **Jorge Arze**


