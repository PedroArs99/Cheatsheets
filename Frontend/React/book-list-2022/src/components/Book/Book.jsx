import "./Book.css";

export default function Book({ title, author, img }) {
  const clickHandler = (author) => alert(author);

  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => clickHandler(author)}>
        Alert the author
      </button>
    </article>
  );
}
