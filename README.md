
# Gestión de Informes de Visita en Sitio - ICE/MEP PBS Group

Esta aplicación permite a los técnicos de PBS Group crear, gestionar y exportar informes de visitas en sitio para centros educativos del ICE/MEP. Está construida con Next.js y utiliza componentes ShadCN UI para una interfaz moderna y responsive.

## Características Principales

*   **Creación y Edición de Informes:** Formulario completo para capturar todos los detalles de una visita en sitio, incluyendo información del centro educativo, detalles de la visita, contacto, resumen de inventario y observaciones.
*   **Gestión de Informes:** Visualización de informes en una lista, con opciones para editar, eliminar (con confirmación) y descargar cada informe.
*   **Almacenamiento Local:** Los informes se guardan directamente en el `localStorage` del navegador del usuario.
*   **Resumen de Inventario Dinámico:** Permite añadir múltiples ítems de equipamiento (marca, modelo, tipo, cantidad) al informe.
*   **Carga de Imágenes:** Sección para adjuntar múltiples imágenes relevantes a la visita.
*   **Exportación a Word:** Generación de un documento `.docx` con la información del informe, incluyendo imágenes, para facilitar la documentación y el archivado.
*   **Tema Oscuro:** Interfaz con tema oscuro por defecto para una mejor experiencia visual.
*   **Diseño Responsivo:** Adaptado para funcionar en diferentes tamaños de pantalla.

## Pila Tecnológica

*   **Framework:** Next.js (App Router)
*   **Lenguaje:** TypeScript
*   **UI:** React
*   **Componentes UI:** ShadCN UI
*   **Estilos:** Tailwind CSS
*   **Generación de Documentos:** `docx`, `file-saver`
*   **Gestión de Formularios:** `react-hook-form` con `zod` para validación.
*   **Funcionalidad AI (Base):** Genkit (actualmente utilizado para funcionalidades de inventario no centrales en este flujo de informes, pero parte del stack).

## Prerrequisitos

*   Node.js (v18.x o v20.x recomendado)
*   npm (v8+ o v9+) o yarn (v1.22+)

## Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo:

1.  **Clonar el Repositorio** (Si estás fuera de Firebase Studio):
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO_DEL_PROYECTO>
    ```

2.  **Navegar al Directorio del Proyecto**:
    Si ya tienes el proyecto (por ejemplo, en Firebase Studio), asegúrate de estar en el directorio raíz del proyecto.

3.  **Instalar Dependencias**:
    Usando npm:
    ```bash
    npm install
    ```
    O usando yarn:
    ```bash
    yarn install
    ```

4.  **Variables de Entorno** (Opcional para la configuración actual):
    Crea un archivo `.env` en la raíz del proyecto si necesitas configurar variables de entorno específicas (por ejemplo, claves API para servicios de Google AI si se expande el uso de Genkit). Actualmente, el archivo `.env` puede estar vacío ya que las funcionalidades principales no dependen de variables de entorno externas.
    ```env
    # Ejemplo de variables para Genkit (si se usan)
    # GOOGLE_API_KEY=TU_API_KEY_AQUI
    ```

## Ejecutar la Aplicación en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```
O con yarn:
```bash
yarn dev
```
La aplicación estará disponible por defecto en `http://localhost:9002`.

### Ejecutar Genkit (Desarrollo AI - Opcional)

Si estás trabajando en las funcionalidades de IA con Genkit y necesitas el servidor de Genkit activo:

```bash
npm run genkit:dev
```
O para que se recargue automáticamente con los cambios:
```bash
npm run genkit:watch
```

## Scripts Adicionales

*   **Construir para Producción**:
    ```bash
    npm run build
    ```
    Luego para iniciar el servidor de producción:
    ```bash
    npm run start
    ```

*   **Linting**:
    Para verificar el estilo del código y posibles errores:
    ```bash
    npm run lint
    ```

*   **Type Checking**:
    Para verificar los tipos de TypeScript en todo el proyecto:
    ```bash
    npm run typecheck
    ```

## Nota Importante sobre el Almacenamiento de Datos

Actualmente, todos los datos de los informes se almacenan en el `localStorage` del navegador del usuario. Esto significa:
*   **Los datos son locales:** No se sincronizan entre diferentes navegadores o dispositivos.
*   **Los datos pueden perderse:** Si el usuario limpia los datos de su navegador, los informes se perderán.
Se recomienda a los usuarios descargar los informes importantes como documentos de Word para tener un respaldo.

## Estructura del Proyecto (Resumen)

*   `src/app/`: Contiene las rutas y páginas principales de la aplicación (usando Next.js App Router).
*   `src/components/`: Componentes React reutilizables.
    *   `src/components/ui/`: Componentes ShadCN UI.
    *   `src/components/inventory/`: Componentes específicos para la funcionalidad de informes.
*   `src/lib/`: Utilidades, servicios y definiciones de tipos.
    *   `src/lib/types.ts`: Definiciones de esquemas Zod y tipos TypeScript.
    *   `src/lib/reportService.ts`: Lógica para interactuar con `localStorage` para los informes.
    *   `src/lib/word-export.ts`: Lógica para generar documentos de Word.
*   `src/ai/`: Flujos y configuración de Genkit para funcionalidades de IA.
*   `public/`: Archivos estáticos.

---

Este `README.md` debería proporcionar una buena base para entender y ejecutar el proyecto.
