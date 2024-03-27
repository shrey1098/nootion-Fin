// init start server
const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: '',
});

const databaseId = '';

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
