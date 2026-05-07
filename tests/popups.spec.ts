import {test,expect,Page} from "@playwright/test";

test("handle popups",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multple popups

    //page.waitForEvent('popup');
    //await page.locator("#PopUp").click();

    await page.locator("#PopUp").click();

    // Wait until all 3 pages (1 main + 2 popups) are opened
    await expect(async () => {
        expect(context.pages().length).toBe(3);
    }).toPass();

    const allPopupWindows=context.pages(); // Returns array of pages
    console.log("Number of pages/windows:",allPopupWindows.length); //3

    console.log(allPopupWindows[0].url()); // returns url of main page/parent
    console.log(allPopupWindows[1].url());
    console.log(allPopupWindows[2].url());


    for(const pw of allPopupWindows)
    {
        const title=await pw.title();
        if(title.includes('Playwright')){
                await pw.locator('.getStarted_Sjon').click();
                await page.waitForTimeout(5000);
                //Perform any other actions....
                await pw.close(); // This will close playwrigt popup window

        }

    }

    await page.waitForTimeout(5000);
    
   
})