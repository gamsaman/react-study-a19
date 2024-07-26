import styles from "./category.module.css";

interface IBook {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: [[Object]];
  buy_links: [[Object], [Object], [Object], [Object], [Object]];
  book_uri: string;
}

async function getCategoryLists(id) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  const json = await response.json();
  return json;
}

async function List(props) {
  const data = await getCategoryLists(props.params.id);
  return (
    <div className={styles.categoryWrapper}>
      <h2>{data.results.list_name}</h2>
      <ul>
        {data.results.books.map((book: IBook) => (
          <li>
            <img src={book.book_image} />
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <a href={book.amazon_product_url} target="blank">
              Go To Buy &#8594;
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
