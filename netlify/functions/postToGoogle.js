const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const form = new URLSearchParams();

  for (let key in data) {
    form.append(key, data[key]);
  }

  const response = await fetch("https://script.google.com/macros/s/AKfycbyep7oK-fRP8Ha4_Hu0aMM_t-Cz5ozuqic939Xtj33bn6hmwE9zqQZZNAZP2tsVUbFx/exec", {
    method: "POST",
    body: form
  });

  const resText = await response.text();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Posted to Google Sheets', googleResponse: resText })
  };
};
