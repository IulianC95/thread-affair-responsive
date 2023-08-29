export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" title="Thread Affair Monochrome Suits">
          <picture>
            <img src="/images/products/product-01a.jpg" alt="" />
          </picture>
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="/" title="Thread Affair Monochrome Suit">
            Thread Affair Monochrome Suit
          </a>
        </h1>
        <h2 className="product-tile-subtitle">
          <a href="/" title="Thread Affair monochrome Suit">
            London fit semi-slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">{/*add pricing*/}</section>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to cart</button>
      </footer>
    </article>
  );
}
