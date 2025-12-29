import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export function NotFoundPage() {
  return (
    <Reveal as="section" className="section" delayMs={0}>
      <div className="container">
        <Reveal className="card" delayMs={60}>
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
        </Reveal>
      </div>
    </Reveal>
  )
}


