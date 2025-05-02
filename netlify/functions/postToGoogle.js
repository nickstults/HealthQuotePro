// File: postToGoogle.js (Netlify function)

const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://script.google.com/macros/s/AKfycbyZHU17Mkbhkje8SndhJkpYoNmSss3Sr20o6u6SvDGB86atp-D_yPx203Ri0ep-L8/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log("✅ Google Sheets success:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result })
    };
  } catch (error) {
    console.error("❌ Google Sheets submission failed:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
