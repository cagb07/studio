# Testing Guidelines for Report Management Application

This document outlines conceptual test cases for the core functionalities of the application. These tests should ideally be implemented using a testing framework like Jest with React Testing Library.

## 1. `ReportForm` Component (`src/components/ReportForm.tsx`)

### Rendering Tests
-   It should render the "Nombre del Centro Educativo" input field.
-   It should render the "Fecha de Visita" input field.
-   It should render the "Nombre del Contacto" input field.
-   It should render the "Línea virtual #" input field.
-   It should render the "Resumen de Inventario" textarea.
-   It should render the "Observaciones" textarea.
-   It should render the "Guardar Informe" submit button.

### Validation Tests
-   Submitting the form with an empty "Nombre del Centro Educativo" should display an error message for that field.
-   Submitting the form with an empty "Fecha de Visita" should display an error message for that field.
-   Submitting the form with an empty "Nombre del Contacto" should display an error message for that field.
-   The form should not call the submit handler if required fields are empty/invalid.
-   Valid text should be accepted by the "Línea virtual #" field.
-   Valid text should be accepted by the "Resumen de Inventario" field.
-   Valid text should be accepted by the "Observaciones" field.

### Submission Logic
-   When the form is submitted with valid data, the `saveReport` function from `reportService` should be called with the correct data object, including the `virtualLineNumber`.

### Data Loading (from localStorage)
-   On component mount, the `loadReport` function from `reportService` should be called.
-   If `loadReport` returns data, the form fields (including "Línea virtual #", "Resumen de Inventario", and "Observaciones") should be pre-filled with this data.

## 2. Report Schema (`src/lib/types.ts`) - `reportSchema`
-   The `reportSchema` should successfully parse a valid report object containing all fields, including optional ones.
-   The `reportSchema` should successfully parse a valid report object with only required fields present.
-   The `reportSchema` should fail to parse an object if `schoolName` is missing.
-   The `reportSchema` should fail to parse an object if `visitDate` is missing.
-   The `reportSchema` should fail to parse an object if `contactName` is missing.
-   The `reportSchema` should fail to parse an object if `schoolName` is not a string.
-   The `reportSchema` should fail to parse an object if `visitDate` is not a string (or a date, if type is changed).
-   The `reportSchema` should fail to parse an object if `contactName` is not a string.
-   The `virtualLineNumber` field should accept a string.
-   The `virtualLineNumber` field should accept `undefined` (be optional).
-   The `inventorySummary` field should accept a string.
-   The `inventorySummary` field should accept `undefined` (be optional).
-   The `observations` field should accept a string.
-   The `observations` field should accept `undefined` (be optional).

## 3. Report Service (`src/lib/reportService.ts`)

### `saveReport(data: ReportData)`
-   Given valid `ReportData`, `localStorage.setItem` should be called with the key `LOCAL_STORAGE_KEY` (which is "reportFormData") and the JSON stringified version of the data.
-   If `localStorage.setItem` throws an error (e.g., localStorage is full or unavailable), the error should be caught and logged to the console.

### `loadReport()`
-   If `localStorage.getItem(LOCAL_STORAGE_KEY)` returns a valid JSON string representing `ReportData`, `loadReport` should parse it and return the corresponding JavaScript object.
-   If `localStorage.getItem(LOCAL_STORAGE_KEY)` returns `null` (key not found), `loadReport` should return `null`.
-   If `localStorage.getItem(LOCAL_STORAGE_KEY)` returns a malformed JSON string, `loadReport` should catch the parsing error (e.g., `SyntaxError`), log it to the console, and return `null`.
-   If `localStorage.getItem` itself throws an error, the error should be caught and logged to the console, and the function should return `null`.
