import { test, expect } from "@playwright/test";

test.describe("register", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("register");
  });

  test("UI", async ({ page }) => {
    await expect.soft(page.getByRole("checkbox", { name: "Deportes" })).not.toBeChecked();
    await expect.soft(page.getByRole("checkbox", { name: "Deportes" })).toBeEnabled();
    await expect.soft(page.getByRole("checkbox", { name: "Deportes" })).toBeVisible();

    await expect.soft(page.getByRole("checkbox", { name: "Videojuegos" })).not.toBeChecked();
    await expect.soft(page.getByRole("checkbox", { name: "Videojuegos" })).toBeEnabled();
    await expect.soft(page.getByRole("checkbox", { name: "Videojuegos" })).toBeVisible();

    await expect.soft(page.getByRole("checkbox", { name: "Peliculas" })).not.toBeChecked();
    await expect.soft(page.getByRole("checkbox", { name: "Peliculas" })).toBeEnabled();
    await expect.soft(page.getByRole("checkbox", { name: "Peliculas" })).toBeVisible();

    await expect.soft(page.getByRole("checkbox", { name: "Libros" })).not.toBeChecked();
    await expect.soft(page.getByRole("checkbox", { name: "Libros" })).toBeEnabled();
    await expect.soft(page.getByRole("checkbox", { name: "Libros" })).toBeVisible();

    await expect.soft(page.getByRole("radio", { name: "Diario" })).not.toBeChecked();
    await expect.soft(page.getByRole("radio", { name: "Diario" })).toBeEnabled();
    await expect.soft(page.getByRole("radio", { name: "Diario" })).toBeVisible();

    await expect.soft(page.getByRole("radio", { name: "Semanal" })).not.toBeChecked();
    await expect.soft(page.getByRole("radio", { name: "Semanal" })).toBeEnabled();
    await expect.soft(page.getByRole("radio", { name: "Semanal" })).toBeVisible();

    await expect.soft(page.getByRole("radio", { name: "Mensual" })).not.toBeChecked();
    await expect.soft(page.getByRole("radio", { name: "Mensual" })).toBeEnabled();
    await expect.soft(page.getByRole("radio", { name: "Mensual" })).toBeVisible();

    await expect.soft(page.getByRole("button", { name: "Registrar" })).toBeDisabled();
    await expect.soft(page.getByRole("button", { name: "Registrar" })).toBeVisible();
  });

  test("Radiobutton", async ({ page }) => {
    //Seleccionar el radiobutton semanal
    await page.getByRole("radio", { name: "Semanal" }).check();
    //Verificar que este seleccionado
    await expect.soft(page.getByRole("radio", { name: "Semanal" })).toBeChecked();
  });

  test("Checkbox", async ({ page }) => {
    //Seleccionar el checkbox libros
    await page.getByRole("checkbox", { name: "Libros" }).check();
    //Verificar que este seleccionado
    await expect.soft(page.getByRole("checkbox", { name: "Libros" })).toBeChecked();
  });
});
