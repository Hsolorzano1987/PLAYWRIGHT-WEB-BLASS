import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    //Navegar a al pagina
    await page.goto("Login");
  });

  test("Credenciales erroneas", async ({ page }) => {
    //Escribir ususario
    await page.getByRole("textbox", { name: "Usuario" }).fill("Hernan");

    //Escribir la clave
    await page.getByRole("textbox", { name: "Clave" }).fill("clave");

    //Hacer click en boton
    await page.getByRole("button", { name: "Ingresar" }).click();

    //Verificar mensaje de error
    await expect(page.getByText("Usuario o clave incorrectos. Intente de nuevo")).toBeVisible;
  });

  test("UI", async ({ page }) => {
    //Navegar a al pagina
    await page.goto("Login");

    await expect.soft(page.getByRole("textbox", { name: "Usuario" })).toBeVisible();
    await expect.soft(page.getByRole("textbox", { name: "Usuario" })).toBeEnabled();
    await expect.soft(page.getByRole("textbox", { name: "Clave" })).toBeVisible();
    await expect.soft(page.getByRole("textbox", { name: "Clave" })).toBeEnabled();
    await expect.soft(page.getByRole("button", { name: "Ingresar" })).toBeVisible();
    await expect.soft(page.getByRole("button", { name: "Ingresar" })).toBeDisabled();
    await expect.soft(page.getByRole("heading", { name: "Login" })).toBeVisible();
  });

  test("Credenciales correctas UI", async ({ page }) => {
    //Escribir ususario
    await page.getByRole("textbox", { name: "Usuario" }).fill("blass_academy");

    //Escribir la clave
    await page.getByRole("textbox", { name: "Clave" }).fill("web_blass");

    //Hacer click en boton
    await page.getByRole("button", { name: "Ingresar" }).click();

    //Verificar UI
    await expect.soft(page.getByRole("heading", { name: "Login exitoso" })).toBeVisible();
    await expect.soft(page.getByText("Este es su intranet privada")).toBeVisible();
    await expect.soft(page.getByRole("button", { name: "Logout" })).toBeVisible();
    await expect.soft(page.getByRole("button", { name: "Logout" })).toBeEnabled();
  });

  test("Logout UI", async ({ page }) => {
    //Escribir ususario
    await page.getByRole("textbox", { name: "Usuario" }).fill("blass_academy");

    //Escribir la clave
    await page.getByRole("textbox", { name: "Clave" }).fill("web_blass");

    //Hacer click en boton
    await page.getByRole("button", { name: "Ingresar" }).click();

    //Hacer click en el boton logout
    await page.getByRole("button", { name: "Logout" }).click();

    //Verificar que el titulo visible de login
    await expect.soft(page.getByRole("heading", { name: "Login" })).toBeVisible();
  });
});
