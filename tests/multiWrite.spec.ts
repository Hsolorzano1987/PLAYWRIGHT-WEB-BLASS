import { test, expect } from "@playwright/test";

test.describe("MultiWrite", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("Multi-Write");
  });

  test("Rellenar Formulario", async ({ page }) => {
    //Escribir en todos los imputs
    for (const input of await page.getByRole("textbox").all()) {
      await input.fill("Hernan el mejor");
    }

    //Presionar el boton
    await page.getByRole("button", { name: "Validar" }).click();
    //Verificar el mensaje de exito
    await expect.soft(page.getByTestId("result")).toBeVisible();
    await expect.soft(page.getByTestId("result")).toHaveText("Son Iguales");
  });
});
