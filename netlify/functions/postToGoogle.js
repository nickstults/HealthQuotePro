const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxrd1QfKygzfiDKCfwADjer_kQYAP_DbPe1w4L-f3_dF_uNldZJ6Bpv4r5SEsD782ZW/exec", {
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
