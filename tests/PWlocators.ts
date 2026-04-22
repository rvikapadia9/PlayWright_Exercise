 /*
locators -identifies element on the page
DOM- Document Object model
 
*/

import{test,expect, Locator} from "@Playwright/test"
test("Verify Playwright BuiltIn Locators",async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
//1.page.getbyAltText()-  identifies images(and similar elements) based on the alt atributes
//use this locator when your element supports alt text such as img and area elements
//
const logo:Locator = page.getByAltText("nopCommerce demo store");   
logo.click();    //alt text is nopCommerce demo store
await expect(logo).toBeVisible();
//2.getbytext()-  identifies elements based on the visible text content
//use this locator when your element has visible text content
const welcome:Locator = page.getByText("Welcome to our store");
await expect(welcome).toBeVisible();
})
