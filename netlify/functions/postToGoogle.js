const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://script.google.com/macros/s/AKfycbyI289Y0NRytSctjebKp2025bZYFQwnm3lKzE5qQ0aS_bxlpYVzRhwvUekI5rO7Oak8/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const result = await response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result })
    };
  } catch (err) {
    console.error("❌ Google Sheets error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
};
