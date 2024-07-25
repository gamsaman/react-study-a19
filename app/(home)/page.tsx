const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBookLists() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const lists = await getBookLists();
  console.log(lists);
  return <h1>{JSON.stringify(lists)}</h1>;
}
