import{test,expect} from "@playwright/test"

test("Verify Page title",async({page})=>{
 await page.goto("https://playwright.dev/");
 let title:string = await page.title();
 console.log("Title",title);
 await expect(page).toHaveTitle(/Playwright/);
})

test("Verify URL",async({page})=>{
 await page.goto("https://playwright.dev/");
 let url:string = await page.url();
 console.log("URL",url);
 await expect(page).toHaveURL(/playwright/);

})

test("Verify Page Source",async({page})=>{
 await page.goto("https://playwright.dev/");
 let source:string = await page.content();
 expect(source).toContain('Playwright');
})

test("Verify Page Source1",async({page})=>{
 await page.goto("https://playwright.dev/");
 let source:string = await page.content();
 expect(source).toContain('Playwright');
})