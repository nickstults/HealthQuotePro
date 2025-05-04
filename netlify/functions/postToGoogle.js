const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = new URLSearchParams(event.body);

  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbx0rk9e_ygUuS7yA1XzsjsytetzfwjsMyLUg9eFNb8LtU4vik9cNsHubJDS6wc2w/exec";

  const response = await fetch(googleScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  });

  const resultText = await response.text();

  return {
    statusCode: 200,
    body: resultText
  };
};
