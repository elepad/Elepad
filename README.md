# 🐘 Elepad

<p align="center">
  <p align="center"><b>¡Conectá con tus seres queridos mediante amor y tecnología!</b></p>
  <img src="packages/assets/ele-excited.png" alt="Ele, el elefante de Elepad" />
</p>

Elepad es una aplicación móvil diseñada para fortalecer la conexión entre adultos mayores y sus familias a través de una plataforma intuitiva y fácil de usar.

1. 📱 Descargá Elepad desde Google Play.
2. 👨‍👩‍👧‍👦 Creá un grupo familiar.
3. 📆 Registrá actividades en tu calendario semanal.
4. 🧩 Resolvé desafíos para ejercitar la mente.
5. 🎯 ¡Conectá con tus seres queridos mediante amor y tecnología!

Elepad ofrece una interfaz intuitiva diseñada para todas las edades. Está disponible en:

- iOS 12.0 o superior
- Android 8.0 o superior

¿Tenés preguntas o sugerencias? ¡Nos encantaría escucharte!

- Email: [proyectoelepad@gmail.com](mailto:proyectoelepad@gmail.com)
- Sitio web: pendiente...

## 🗺️ Proyecto

La planificación del proyecto se puede ver en varias partes:

- [Especificación de Requisitos de Software](https://docs.google.com/document/d/1R3vB02NTxqxi9H_KYEBNzvEl6xEbmV-Q1nAyWVGubfI).
- [Planificación](https://docs.google.com/document/d/1NqHx6Go_-peDly_qNYltLgTfeM6FCRMo5ZNa35w0yvI).
- [Backlog](https://github.com/users/elepad/projects/1/views/3).
- [Tablero de la release actual](https://github.com/users/elepad/projects/1/views/3).
- [Roadmap](https://github.com/users/elepad/projects/1/views/3).

Cada historia de usuario planificada se puede ver en el [listado de Issues](https://github.com/elepad/Elepad/issues?q=is%3Aissue) de este repositorio.

## 🚀 Cómo Levantar la Aplicación

Para levantar la app en un entorno de desarrollo:

```bash
npm install
npm run start
```

Por dentro se utiliza Turborepo (con el comando `turbo`) para levantar todos los componentes de la aplicación.

## 🧑‍💻 Flujo de Trabajo

Se aplicarán **prácticas de DevOps** en el desarrollo de Elepad para poder trabajar de manera productiva y asincrónica. Dado que los cinco miembros del equipo cursamos múltiples materias juntos, constantemente se comunica el progreso del proyecto.

### 🔨 Herramientas

Herramientas de desarrollo:

- npm: gestor de paquetes.
- Turborepo: build system para el monorepo.
- eslint: linter de JavaScript.
- Pendiente...

### 📂 Estructura del Repositorio

Estructura de monorepo utilizando Turborepo.

```yaml
├── apps
│   └── mobile      # App móvil con React Native
│   └── api         # Servidor back end
│   └── web         # Landing page muy sencilla para publicitar la app
└── packages
    └── api-client  # Cliente REST autogenerado para la api
    └── assets      # Imágenes de Elepad
    └── types       # Tipos de datos de TS compartidos
    └── validation  # Zod schemas compartidos
```

Pendiente...

### ✅ Convenciones

Si bien la planificación se debe documentar en español, en lo posible se intentará **desarrollar en inglés** con el objetivo de adoptar convenciones de la industria.

Siempre que sea conveniente se utilizará la siguiente **estructura de ramas**:

- `prod`: la rama con el código fuente a desplegar.
- `main`: la rama principal de desarrollo.
- `feature/`: para nuevas funcionalidades y cambios (por ejemplo, `feature/add-login`).
- `bugfix/`: para correcciones de errores (por ejemplo, `bugfix/fix-header-bug`).
- `hotfix/`: para correcciones urgentes (por ejemplo, `hotfix/security-patch`).
- `chore/`: para tareas que no implican cambios en el código, como actualización de dependencias o documentación (por ejemplo, `chore/update-deps`).

Referencia: [https://conventional-branch.github.io/](https://conventional-branch.github.io/).

En lo posible, los **mensajes de commits** tendrán la estructura `<type>: <description>` donde:

- `<type>`: indica el tipo de cambio. Puede ser `fix`, `feat`, `refactor`, `docs`, `test`, `ci`, etc.
- `<description>`: es un breve resumen de los cambios. Se escribe en infinitivo, describiendo lo que el commit va a hacer.

Referencia: [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/).
