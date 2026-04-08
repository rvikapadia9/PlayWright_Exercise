 /*
locators -identifies element on the page
DOM- Document Object model
 
*/

import { test, expect, Locator } from "@playwright/test";
import { chromium } from "playwright-extra";
// @ts-ignore
import stealth from "puppeteer-extra-plugin-stealth";

chromium.use(stealth());

test("Verify Playwright BuiltIn Locators", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demo.nopcommerce.com/");
  //1.page.getbyAltText()-  identifies images(and similar elements) based on the alt atributes
  //use this locator when your element supports alt text such as img and area elements
  //
  const logo:Locator = page.getByAltText("nopCommerce demo store");       //alt text is nopCommerce demo store
  await expect(logo).toBeVisible();
  const text:Locator = page.getByText("Welcome to our store");
  await expect(text).toContainText((/welcome\s+To\s+Our\s+Store/i));   
  //get by role
  await page.getByRole("link",{name:"Register"}).click();
  
  // Best Practice: getByRole
  // await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();
  
  //getby text (adding .first() to avoid strictly mode violation)
  await expect(page.getByText("Register").first()).toBeVisible();

//   await browser.close();

//4.getbylabel() -identifies form elements based on the associated label text
//use this locator when your element has an associated label

await page.getByLabel("First name:").fill("Ravi");
await page.getByLabel("Last name:").fill("Kapadia");
await page.getByLabel("Email:").fill("rvkapadia9@gmail.com");
//5.getbyplaceholder() -identifies form elements based on the placeholder attribute
//use this locator when your element has a placeholder attribute

await page.getByPlaceholder("search").fill("Apple Macbook Pro");


//6.getbytitle() -identifies elements based on the title attribute
//use this locator when your element has a title attribute

await page.goto("http://127.0.0.1:5500/tests/app.html");
await expect(page.getByTitle("Home page link")).toHaveText("Home");
await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");
//7.Getbytestifd()
 
await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

});

