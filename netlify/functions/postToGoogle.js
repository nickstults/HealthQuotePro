const fetch = require("node-fetch");

exports.handler = async function (event) {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch("https://script.google.com/macros/s/AKfycbwKAa3reXziIuDCl-tS21jNfMaY3_RtvvArranwvvUP2gxICNF5ZeeV7ofuyCa9Njnm/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
