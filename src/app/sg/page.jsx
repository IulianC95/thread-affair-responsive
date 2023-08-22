export default function StyleGuide() {
  return (
    <>
      <div className="mt-4">
        <button className="button button-primary">Hello</button>
        <button className="button button-primary button-lg">Hello</button>

        <a href="/" className="button button-primary">
          Hello
        </a>
        <a href="/" className="button button-primary button-lg">
          Hello
        </a>
      </div>
      <div className="mt-4">
        <button className="button button-primary-outline">Hello</button>
        <button className="button button-primary-outline button-lg">
          Hello
        </button>

        <a href="/" className="button button-primary-outline">
          Hello
        </a>
        <a href="/" className="button button-primary-outline button-lg">
          Hello
        </a>
      </div>

      <div className="mt-4 gap-2 d-flex">
        <span className="badge badge-primary">small text</span>
        <span className="badge badge-primary badge-lg">%</span>
        <span className="badge badge-secondary badge-lg">small text</span>
        <span className="badge badge-secondary badge-lg">%</span>
      </div>
    </>
  );
}
