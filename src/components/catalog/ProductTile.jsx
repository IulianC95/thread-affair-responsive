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
            <span>Thread Affair</span> <span>Monochrome</span> Suit
          </a>
        </h1>
        <h2 className="product-tile-subtitle">
          <a href="/" title="Thread Affair monochrome Suit">
            London fit semi-slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">
        <p>399.00</p>
        <p>
          Usd <span>270.00</span>
        </p>
      </section>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to cart</button>
      </footer>
    </article>
  );
}
