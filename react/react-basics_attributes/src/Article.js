export default function Article() {
  return (
    <div>
      <article className="article">
        <h2 className="article__title">React is amaZing!!!</h2>
        <label htmlFor="inputField">Subscribe here:</label>
        <input type="text" id="inputField" />
        <a
          className="article__link"
          href="https://en.wikipedia.org/wiki/React_(software)"
        >
          Check this out!
        </a>
      </article>
    </div>
  );
}
