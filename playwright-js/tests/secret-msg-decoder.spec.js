// @ts-check
import { test, expect } from '@playwright/test';

test('Get table data', async ({ page }) => {
  await page.goto('https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub');

  // Expect the page to have a heading with the name of "Secret Message".
  await expect(page.getByText('This is an example document showing the format of the input data for the coding assessment exercise.')).toBeVisible();

  // Get the table data.
  let tableData = await page.locator('table').allInnerTexts();
  console.log("This is allinner texts: ", tableData);

  // split the table data into rows and columns
  let rows = tableData[0].split('\n\n');
  let table = rows.map(row => row.split('\t'));
  console.log("This is the table: ", table);

  // print the table data in a grid format
  for (let row of table) {
    console.log("This is a row: ", row.join(' '));
  }
});