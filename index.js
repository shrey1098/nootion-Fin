// init start server
const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: 'secret_QXZaBZ55F0Ks0LNwZTzW6xz3Vsmw8Y6YaXJfa12LvXR',
});

const databaseId = '8ebecd0de1ba4f16acc97d57be05e5f4';

async function fetchDatabase() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    if (response.results.length > 0) {
        const firstObject = response.results[0]['properties']['Type']['select']['name'];
        console.log(firstObject);
      } else {
        console.log("No results found.");
      }
  } catch (error) {
    console.error(error.body);
  }
}

fetchDatabase();
//https://www.notion.so/8ebecd0de1ba4f16acc97d57be05e5f4?v=ed0b97b4e08d415bb19e2d687281b598&pvs=4
//https://www.notion.so/8ebecd0de1ba4f16acc97d57be05e5f4?v=ed0b97b4e08d415bb19e2d687281b598&pvs=4
//https://www.notion.so/8ebecd0de1ba4f16acc97d57be05e5f4?v=ed0b97b4e08d415bb19e2d687281b598&pvs=4