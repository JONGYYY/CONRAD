import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Innovation concept</div>
            <h1 className="heroTitle">
              Help that feels like <span className="heroEm">care</span>—not surveillance.
            </h1>
            <p className="heroLead">
              GrandGuardian is a compassionate AI-powered companion, offering care and connection to seniors. As A VOICE
              of Love for the Elderly Powered by AI, it brings warmth, support, and safety to aging lives.
            </p>
            <div className="heroActions">
              <Link to="/model" className="button buttonPrimary">
                See the App
              </Link>
              <Link to="/impact-team" className="button buttonGhost">
                Why it matters
              </Link>
            </div>

            <div className="brandPills" aria-label="Brand strip">
              <span className="pill">Warm</span>
              <span className="pill">Respectful</span>
              <span className="pill">Calm-by-design</span>
            </div>
          </div>

          <div className="heroVisual">
            <PlaceholderImage
              label="Warm photo placeholder"
              sublabel="Senior + family (real-life, not tech)"
              aspect="3/2"
            />
            <div className="caption">
              Our visual language is human-first: warm light, real moments, and quiet confidence.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card storyCard storyCardProblem">
            <div className="storyKicker">The problem</div>
            <h2 className="h2 storyTitle">Aging alone turns small moments into constant worry.</h2>

            <div className="poem">
              <span className="poemLine">Millions of seniors around the world live alone,</span>
              <span className="poemLine">often far from their loved ones. As they age,</span>
              <span className="poemLine">everyday tasks can become more difficult, and</span>
              <span className="poemLine">staying safe, healthy, and emotionally</span>
              <span className="poemLine">connected becomes increasingly challenging.</span>
            </div>

            <div className="dividerSoft" aria-hidden="true" />

            <p className="p muted" style={{ marginBottom: 0 }}>
              Yet, many seniors hesitate to ask for help or use complicated technology.
            </p>
          </div>

          <div className="card storyCard storyCardWorry">
            <div className="storyKicker">Families worry constantly</div>
            <h2 className="h2 storyTitle">The questions repeat—because love has no off switch.</h2>
            <div className="questionStack" aria-label="Family worry questions">
              <div className="questionPill">
                <span className="questionMark" aria-hidden="true">
                  ?
                </span>
                Are they okay?
              </div>
              <div className="questionPill">
                <span className="questionMark" aria-hidden="true">
                  ?
                </span>
                Did they take their medications?
              </div>
              <div className="questionPill">
                <span className="questionMark" aria-hidden="true">
                  ?
                </span>
                Are they safe when they go outside?
              </div>
            </div>
            <div className="worryNote">
              When reassurance is missing, families fill the silence with check-ins—often at the cost of dignity.
            </div>
          </div>

          <div className="card">
            <h2 className="h2">The insight</h2>
            <p className="p">
              What everyone misses is that <strong>support is emotional</strong>. It’s not just “detecting events”—it’s
              knowing when to be quiet, when to reassure, and when to escalate. The model must reason about dignity and
              context, not just signals.
            </p>
            <div className="quote">
              “The best help feels invisible—until you need it.”
              <div className="quoteBy">GrandGuardian design principle</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Literature Inspiration</h2>
            <div className="quote">
              “Things have a life of their own… it’s simply a matter of waking up their souls.”
              <div className="quoteBy">-Gabriel García Márquez, One Hundred Years of Solitude</div>
            </div>
            <p className="p" style={{ marginTop: 12 }}>
              In the novel, memory loss spreads through a town like a plague. People label objects to remember names,
              uses—even loved ones.
            </p>
            <p className="p">
              That’s why we created GrandGuardian: A powerful tool to “wake up memories” through the voices of those
              they love.
            </p>
          </div>

          <div className="card">
            <h2 className="h2">What the brand feels like</h2>
            <p className="p">
              Warm, restrained, and human. GrandGuardian isn’t “tech-first”—it’s voice-first: comfort, familiarity, and
              calm presence.
            </p>
            <PlaceholderImage
              label="Photo placeholder"
              sublabel="Warm, real-life moment · family voice connection"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Mission · Vision · Values</h2>
            <p className="muted">
              Brand is more than features: it’s tone, restraint, and how we treat people at their most vulnerable.
            </p>
          </div>

          <div className="grid3">
            <div className="card">
              <h3 className="h3">Mission</h3>
              <p className="p">Make everyday support feel calm, respectful, and human—so independence lasts longer.</p>
            </div>
            <div className="card">
              <h3 className="h3">Vision</h3>
              <p className="p">
                A world where aging at home is guided by dignity—where help arrives softly, before fear grows.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Values</h3>
              <ul className="list">
                <li>
                  <strong>Dignity first</strong> (consent, control, clarity)
                </li>
                <li>
                  <strong>Calm over alerts</strong> (fewer, better interventions)
                </li>
                <li>
                  <strong>Trust is earned</strong> (explainable, predictable behavior)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrative">
            <h2 className="h2">Personal Inspiration</h2>
            <div className="inspirationGrid">
              <div className="inspirationVisual">
                <div className="polaroid">
                  <PlaceholderImage
                    label="Personal inspiration photo placeholder"
                    sublabel="Grandparents · a moment that lights up"
                    aspect="3/2"
                  />
                  <div className="polaroidCaption">“They lit up the moment they heard us.”</div>
                </div>
                <div className="voiceMotif" aria-hidden="true">
                  <div className="voiceBars" />
                </div>
              </div>

              <div className="inspirationText">
                <p className="letter">
                  <span className="dropCap">O</span>ur inspiration came from our grandparents. They lit up every time
                  they heard our voices, even when it was virtually.
                </p>
                <p className="letter">
                  That’s when we realized — a family voice isn’t just sound, it’s emotional care.
                </p>
                <p className="letter" style={{ marginBottom: 0 }}>
                  So we created GrandGuardian to bring that comfort into everyday moments.
                </p>
              </div>
            </div>
            <div className="ctaRow">
              <Link to="/model" className="button buttonPrimary">
                See the App
              </Link>
              <Link to="/feasibility" className="button buttonSecondary">
                Can this work?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


