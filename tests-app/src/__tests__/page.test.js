/**
 * @jest-environment puppeteer
 */

/* eslint-disable no-undef */

describe("homePage", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  }, 30000);

  it("contains the name text", async () => {
    await page.waitForSelector("p");
    const text = await page.$eval("p", (e) => e.textContent);
    expect(text).toContain("CreativeHubbers");
  });

  it("should navigate to home page from navbar", async () => {
    const [button] = await page.$x("//a[contains(., 'Home')]");

    if (button) await button.click();

    await page.waitForNavigation();
    await expect(page).toMatch("W E L C O M E");
  });

  it("should navigate to user repository from search", async () => {
    const [button] = await page.$$(".searchBtn");

    if (button) await button.click();

    await page.waitForNavigation();
    await expect(page).toMatch("See Repos");
  });
});

describe("userPage", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/users/HonoriusHD");
  }, 15000);

  it("should navigate to repository content", async () => {
    const [button] = await page.$$(".repoName");

    if (button) await button.click();

    await page.waitForNavigation();
    await expect(page).toMatch("Repository");
  }, 15000);

  it("should be 1 repos on page", async () => {
    const repo = await page.$(".cards:nth-child(1)");
    const text = await page.evaluate((el) => el.innerText, repo);
    expect(text).toMatch("MyPortolio");
  });
});

// describe("repoPage", () => {
//   beforeEach(async () => {
//     await page.goto("http://localhost:3000/users/HonoriusHD/MyPortfolio");
//   });

//   it("should navigate between folders", async () => {
//     const [button] = await page.$$("#DesignPictures");

//     if (button) await button.click();

//     await page.waitForNavigation();
//     await expect(page).toMatch("banner1.jpg");
//   }, 15000);
// });
