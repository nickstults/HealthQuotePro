const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const convosoURL = `https://api.convoso.com/v1/leads/insert?auth_token=sg19yks0iek24aeebmmgebhsuwxsmpd4&adaptor_id=&list_id=9689&check_dup=0&check_dup_archive=0&check_dnc=0&check_wireless=0&hopper=1&hopper_priority=99&hopper_expires_in=0&update_if_found=&update_order_by_last_called_time=DESC&blueinkdigital_token=&reject_by_carrier_type=&filter_phone_code=&lead_id=0&phone_code=1&created_by=&email=${encodeURIComponent(data.email)}&last_modified_by=&owner_id=&first_name=${encodeURIComponent(data.first_name)}&last_name=${encodeURIComponent(data.last_name)}&phone_number=${encodeURIComponent(data.phone_number)}&alt_phone_1=&alt_phone_2=&address1=${encodeURIComponent(data.address)}&address2=&city=&state=&province=&postal_code=&country=&gender=&date_of_birth=${encodeURIComponent(data.date_of_birth)}&note=&publisher=healthquotepros`;

  try {
    const convosoResponse = await fetch(convosoURL, { method: "POST" });
    const convosoText = await convosoResponse.text(); // safely get the raw response

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, raw: convosoText })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.toString() })
    };
  }
};
