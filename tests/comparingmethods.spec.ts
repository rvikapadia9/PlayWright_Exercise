import {test,expect,Locator} from '@Playwright/test';

test("Comparing methods",  async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');

   const products:Locator= await page.locator(".product-title");

   const count:number=await products.count();
   console.log("Number of products",count);
/*
   for(let i=0;i<count;i++)
   {
    // const ProductName:string=await products.nth(i).innerText();
    // console.log(ProductName);

     const ProductName:string | null=await products.nth(i).textContent();
    console.log(ProductName?.trim());
    

   }*/

    //allInnerText() vs alltextcontent()
    console.log("****Comparing allInnerText() vs allTextcontent()*****");
    const  productnames: string[]=await products.allInnerTexts();
    console.log("ProductName By allInnerText()",productnames);
    const productnames1: string[]=await products.allTextContents();
    console.log("ProductName By allTextContent()",productnames1);
    console.log("productname of 3rd product:", productnames[2]);
    console.log("productname of 3rd product:", productnames1[2]);
    const productnamestrimmed:string[]= productnames.map(text=>text.trim());
    console.log("Product names trimmed",productnamestrimmed);
    const productnames1trimmed:string[]= productnames1.map(text=>text.trim());
    console.log("Product names1 trimmed",productnames1trimmed);

    //filter
    const filteredproducts=productnames.filter(text=>text.includes("Computers"));
    console.log("Filtered products",filteredproducts);

    //find
    const findproducts=productnames.find(text=>text.includes("14.1-inch Laptop"));
    console.log("Find products",findproducts);


    //all

    const productslocators:Locator[]=await products.all()
    console.log("All products",productslocators); 
    console.log(await productslocators[1].innerText());

    for(const product of productslocators)
    {
        console.log(await product.innerText());

    }
    for (const product in productslocators)
    {
        console.log("Index", product, "Product Name", await productslocators[product].innerText());
    }
});