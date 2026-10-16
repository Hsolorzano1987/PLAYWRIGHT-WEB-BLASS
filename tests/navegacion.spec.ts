import { test, expect } from '@playwright/test';

test.describe("navegacion", () => {
    test("primer test", async ({page}) => {
        await page.goto("");
        const urlActual = page.url();
        await expect(page).toHaveURL(urlActual);
    });

    test("login example", async ({page})=>{
        await page.goto("login");
        await page.getByRole("textbox", {name: "Usuario"}).fill("hola");
        await page.getByRole("textbox", {name: "Clave"}).fill("mundo");
        await page.getByRole("button", {name: "Ingresar"}).click();
    });
});