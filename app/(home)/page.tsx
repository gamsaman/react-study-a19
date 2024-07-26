import styels from "./home.module.css";
import Link from "next/link";

const URL = "https://books-api.nomadcoders.workers.dev/lists";

interface IResult {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getBookLists() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const data = await getBookLists();
  return (
    <div className={styels.listWrapper}>
      <h2>The New York Times Best Seller Explorer</h2>
      <ul>
        {data.results.map((result: IResult) => (
          <li>
            <Link href={`/list/${result.list_name_encoded}`}>
              {result.display_name} &#8594;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
