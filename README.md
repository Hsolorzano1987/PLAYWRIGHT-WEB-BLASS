# 🎭 PLAYWRIGHT-WEB-TS

> Automatización de pruebas **End-to-End (E2E)** para [Blass Academy Tutorials](https://tutorials.blassacademy.com), construida con **Playwright** + **TypeScript**.

[![Playwright](https://img.shields.io/badge/Playwright-1.59+-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](#-licencia)

> 🚧 **Proyecto en desarrollo activo.** La suite de pruebas se encuentra en construcción progresiva; se irán agregando nuevos escenarios y recursos a medida que avance el proyecto.

---

## 📋 Tabla de contenidos

- [Descripción](#-descripción)
- [Stack tecnológico](#-stack-tecnológico)
- [Requisitos previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo ejecutar los tests](#-cómo-ejecutar-los-tests)
- [Navegadores soportados](#-navegadores-soportados)
- [Reportes y trazas](#-reportes-y-trazas)
- [Convenciones y buenas prácticas](#-convenciones-y-buenas-prácticas)
- [Roadmap](#-roadmap)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 📖 Descripción

Este repositorio contiene la **automatización de pruebas funcionales de interfaz web** para el sitio de tutoriales de Blass Academy. El objetivo es garantizar la calidad de los flujos críticos de la aplicación mediante pruebas reproducibles, rápidas y mantenibles.

**Características principales:**

- ✅ Pruebas E2E multi-navegador (**Chromium, Firefox, WebKit y Google Chrome**).
- ✅ Ejecución en paralelo para mayor velocidad.
- ✅ Captura automática de **trazas** en caso de fallos.
- ✅ Reporte **HTML interactivo** generado por Playwright.
- ✅ Selectores robustos mediante atributo personalizado `data-test`.
- ✅ Tipado estricto con TypeScript.

---

## 🛠 Stack tecnológico

| Herramienta | Versión | Rol |
|---|---|---|
| [Playwright Test](https://playwright.dev/) | `^1.59.1` | Framework de testing E2E |
| [TypeScript](https://www.typescriptlang.org/) | `^5.x` | Lenguaje de programación |
| [Node.js](https://nodejs.org/) | `>= 18.x` | Entorno de ejecución |
| [npm](https://www.npmjs.com/) | `>= 9.x` | Gestor de paquetes |

---

## ✅ Requisitos previos

Antes de clonar y ejecutar el proyecto, asegurate de tener instalado:

| Herramienta | Verificar con |
|---|---|
| Node.js `>= 18.x` (LTS recomendado) | `node -v` |
| npm `>= 9.x` | `npm -v` |
| Git | `git --version` |

---

## 📦 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Hsolorzano1987/PLAYWRIGHT-WEB-TS.git
   cd PLAYWRIGHT-WEB-TS
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

   > 💡 Gracias al hook `postinstall`, los navegadores de Playwright se descargan automáticamente. Si por alguna razón no sucede, ejecutá manualmente:
   >
   > ```bash
   > npx playwright install
   > ```

3. **Verificar la instalación**

   ```bash
   npx playwright --version
   ```

---

## ⚙️ Configuración

La configuración principal vive en `playwright.config.ts`. Valores clave:

| Opción | Valor | Descripción |
|---|---|---|
| `testDir` | `./tests` | Carpeta donde se ubican los specs |
| `baseURL` | `https://tutorials.blassacademy.com` | URL base usada en `page.goto('/')` |
| `testIdAttribute` | `data-test` | Atributo usado por `getByTestId()` |
| `fullyParallel` | `true` | Tests dentro de un archivo corren en paralelo |
| `retries` | `2` (solo en CI) | Reintentos automáticos de tests fallidos |
| `workers` | `1` (solo en CI) | Ejecución secuencial en CI |
| `forbidOnly` | `true` en CI | Falla el build si hay `test.only` |
| `reporter` | `html` | Genera reporte HTML interactivo |
| `trace` | `on-first-retry` | Guarda traza al reintentar un fallo |

### 🔐 Variables de entorno

Si en el futuro se requieren credenciales, tokens o URLs alternativas, seguí este patrón:

1. Crear un archivo `.env` en la raíz (**NO se versiona**, ya está en `.gitignore`).
2. Crear un `.env.example` con las claves sin valores (**sí se versiona**, sirve de plantilla).
3. Descomentar el bloque de `dotenv` en `playwright.config.ts`.

Ejemplo de `.env.example`:

```env
BASE_URL=https://tutorials.blassacademy.com
USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password
```

---

## 🗂 Estructura del proyecto

```
PLAYWRIGHT-WEB-TS/
├── tests/                  # Suites de pruebas (specs)
│   └── *.spec.ts
├── playwright-report/      # Reporte HTML generado (ignorado por git)
├── test-results/           # Resultados y trazas (ignorado por git)
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

> 📌 **Nota:** La carpeta `tests/` se irá poblando con nuevos specs a medida que avance el proyecto.

---

## ▶️ Cómo ejecutar los tests

### Ejecutar toda la suite (todos los navegadores)

```bash
npm test
# equivalente a: npx playwright test
```

### Ejecutar en un navegador específico

```bash
npm run test:chromium    # Chromium
npm run test:firefox     # Firefox
npm run test:webkit      # WebKit (Safari)
npm run test:chrome      # Google Chrome (canal instalado)
```

### Ejecutar un archivo específico

```bash
npx playwright test tests/mi-test.spec.ts
```

### Ejecutar tests que coincidan con un nombre

```bash
npx playwright test -g "login exitoso"
```

### Modo UI (interactivo — ideal para desarrollar y depurar)

```bash
npm run test:ui
```

### Modo headed (ver el navegador mientras corre)

```bash
npm run test:headed
```

### Modo debug (paso a paso con inspector)

```bash
npm run test:debug
```

### Ver el último reporte HTML

```bash
npm run report
```

---

## 🌐 Navegadores soportados

El proyecto está configurado para correr en **4 navegadores**:

| Proyecto | Navegador | Notas |
|---|---|---|
| `chromium` | Chromium (Playwright) | Rápido, headless por defecto |
| `firefox` | Firefox (Playwright) | Validación cross-browser |
| `webkit` | WebKit (Safari) | Validación cross-browser |
| `Google Chrome` | Chrome (canal instalado) | Ventana maximizada, `viewport: null` |

> ⚠️ El proyecto **Google Chrome** requiere tener Chrome instalado en el sistema (usa `channel: 'chrome'` en lugar de un binario de Playwright).

---

## 📊 Reportes y trazas

### Reporte HTML

Playwright genera automáticamente un reporte HTML tras cada ejecución:

```bash
npm run report
```

Se abre en `http://localhost:9323` y muestra:
- ✅ Resultado por test (passed / failed / skipped / flaky).
- 📸 Screenshots en caso de fallo.
- 🎥 Videos (si se habilita `video` en la config).
- 🐛 Stack traces detallados.
- ⏱ Tiempos por test y por suite.

### Trace Viewer

Cuando un test falla y se reintenta, se genera una **traza** (gracias a `trace: 'on-first-retry'`). Para inspeccionarla:

```bash
npx playwright show-trace test-results/<carpeta>/trace.zip
```

La traza incluye: DOM snapshots, red, consola, acciones paso a paso, screenshots.

---

## 🧭 Convenciones y buenas prácticas

- 🏷 **Selectores**: usar siempre `data-test` como atributo de test id (configurado en `testIdAttribute`). Ejemplo en HTML: `<button data-test="submit-btn">`. En el test: `page.getByTestId('submit-btn')`.
- 🧩 **Page Object Model (POM)**: a medida que crezcan los tests, extraer páginas/componentes a clases reutilizables.
- 🎯 **Un `describe` por feature/flujo**, con nombres descriptivos en español.
- 🚫 **No commitear** `node_modules/`, `playwright-report/`, `test-results/` ni `.env`.
- 🔒 **Nunca** subir credenciales ni tokens al repositorio.
- ✅ **Ejecutar localmente** antes de hacer push (`npm test`).
- 📝 **Un archivo por feature** (por ejemplo: `login.spec.ts`, `cursos.spec.ts`, `perfil.spec.ts`).

---

## 🗺 Roadmap

> 🚧 Proyecto **en desarrollo activo**. Estado actual:

- [x] Configuración inicial del proyecto (Playwright + TypeScript).
- [x] Soporte multi-navegador (Chromium, Firefox, WebKit, Chrome).
- [x] Integración de reporte HTML y trazas.
- [ ] Definición del Page Object Model (POM).
- [ ] Cobertura de flujos críticos (login, navegación, cursos).
- [ ] Integración con CI/CD (GitHub Actions).
- [ ] Datos de prueba parametrizados (fixtures / JSON).
- [ ] Reportes adicionales (Allure, JUnit, etc.).

---

## 👤 Autor

**Hernán Solórzano** — [@Hsolorzano1987](https://github.com/Hsolorzano1987)

---

## 📄 Licencia

Este proyecto está bajo la licencia **ISC**. Consultá el archivo `LICENSE` (si aplica) para más detalles.

---

<p align="center">
  Hecho con ❤️ usando <a href="https://playwright.dev/">Playwright</a> + <a href="https://www.typescriptlang.org/">TypeScript</a>
</p>
