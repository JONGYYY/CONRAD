import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="eyebrow">404</div>
          <h1 className="h1">That page isn’t here</h1>
          <p className="p">If you followed a link, it may have changed. Use the navigation above to continue.</p>
          <div className="ctaRow">
            <Link to="/" className="button buttonPrimary">
              Back Home
            </Link>
            <Link to="/model" className="button buttonGhost">
              See the App
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


