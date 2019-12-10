const puppeteer = require("puppeteer");
// const request = require("request");

exports.handler = async event => {
  const LINK = "";
  try {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();

    // await page.emulateMedia("screen");

    // const response = await page.goto(LINK, {
    //   waitUntil: "domcontentloaded"
    // });

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(
    //     {
    //       status: response._status,
    //       url: response._url,
    //       statusText: response._statusText
    //     },
    //     null,
    //     2
    //   )
    // };
    return {
      statusCode: 200,
      body: "all ok"
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      body: `Failed: ${err}`
    };
  }
};
