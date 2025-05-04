const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/PASTE_YOUR_SCRIPT_URL_HERE/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString()
  });

  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
