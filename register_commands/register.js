require('dotenv').config()
const axios = require('axios').default;

let url = `https://discord.com/api/v10/applications/${process.env.APP_ID}/guilds/${process.env.GUILD_ID}/commands`

const headers = {
  "Authorization": `Bot ${process.env.BOT_TOKEN}`,
  "Content-Type": "application/json"
}

let command_data = {
  "name": "foo",
  "type": 1,
  "description": "replies with bar ;/",
}

axios.post(url, JSON.stringify(command_data), {
  headers: headers,
}).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });