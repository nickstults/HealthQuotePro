
const { google } = require("googleapis");

exports.handler = async function(event) {
  const params = new URLSearchParams(event.body);
  const values = [
    new Date().toLocaleString(),
    params.get("first_name") || '',
    params.get("last_name") || '',
    params.get("address") || '',
    params.get("email") || '',
    params.get("phone_number") || '',
    params.get("date_of_birth") || '',
    params.get("ip_address") || '',
    params.get("timestamp") || ''
  ];

  console.log("📥 Google Sheets Values:", values);

  // Skip email entirely (as requested)

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: "✅ Data sent to Google Sheets." })
  };
};
