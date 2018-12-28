const { readFile, writeFileSync } = require("fs");
const { simpleParser } = require("mailparser");
const { load } = require("cheerio");

readFile("original_msg.txt", async (err, data) => {
  // console.log(data.toString());
  const parsed = await simpleParser(data);
  // console.log(parsed.text);

  const $ = load(parsed.html);

  const [_, price, paymentMethod] = parsed.text.match(
    /Subscription Price: (.+)Payment Method: (.+)/
  );

  const p = {
    subscription: parsed.text.match(/Subscription: (.+)/)[1],
    app: parsed.text.match(/App: (.+)/)[1],
    img: $("img.large-artwork").attr("src"),
    price,
    paymentMethod,
    dateOfPurchase: new Date(parsed.text.match(/Date of Purchase: (.+)/)[1]),
    cancelBy: new Date(parsed.text.match(/unless cancelled by (.+)./)[1])
  };
  console.log(p);

  // writeFileSync("parsed.html", parsed.html);
});
