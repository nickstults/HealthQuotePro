const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const form = new URLSearchParams();

  for (let key in data) {
    form.append(key, data[key]);
  }

  const response = await fetch("https://script.google.com/macros/s/AKfycbwKAa3reXziIuDCl-tS21jNfMaY3_RtvvArranwvvUP2gxICNF5ZeeV7ofuyCa9Njnm/exec", {
    method: "POST",
    body: form
  });

  const resText = await response.text();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Posted to Google Sheets', googleResponse: resText })
  };
};
