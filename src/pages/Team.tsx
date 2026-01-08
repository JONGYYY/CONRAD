import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useState } from 'react'

type TeamMember = {
  name: string
  role: string
  initials: string
  note: string
}

const team: TeamMember[] = [
  { name: 'Suri Li', role: '', initials: 'SL', note: '' },
  { name: 'Jonathan Shan', role: '', initials: 'JS', note: ' ' },
  { name: 'Justin Tang', role: '', initials: 'JT', note: ' ' },
  { name: 'Justin Wang', role: '', initials: 'JW', note: ' ' },
]

const buildLog = [
  "We interviewed families about what “support” feels like vs “surveillance.”",
  'We designed an adoption flow focused on consent and dignity.',
  'We tested our concept model with peer feedback and refined language.',
  'We mapped constraints (privacy, false alarms, adoption, cost) into mitigations.',
  'We drafted a pilot plan oriented around trust, not just detection.',
]

function TeamAvatar({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false)
  const slug = member.name.toLowerCase().replace(/\s+/g, '-')
  const src = `/images/team/${slug}.png`
  const showImg = !imageError
  return showImg ? (
    <img className="teamHeroImg" src={src} alt={member.name} onError={() => setImageError(true)} />
  ) : (
    <div className="avatarImgAlt">{member.initials}</div>
  )
}
export function TeamPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 6 · Team</div>
            <h1 className="h1">Who we are</h1>
            <p className="lead">
              A Voice of Love for the Elderly Powered by AI.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/impact">
                ← Back to the Impact
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="teamHeroGrid" role="group" aria-label="Team members">
              {team.slice(0, 4).map((m) => (
                <div className="teamHeroItem" key={m.name}>
                  <div className="teamHeroPhoto" aria-hidden="true">
                    <TeamAvatar member={m} />
                  </div>
                  <div className="teamHeroName">{m.name}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          {/* <div className="sectionHeader">
            <h2 className="h2">Team</h2>
            <p className="muted">Swap names, roles, and photos anytime. Placeholders are intentional.</p>
          </div> */}
{/* 
          <div className="teamGrid">
            {team.map((m, idx) => (
              <Reveal className="teamCard" key={m.role} delayMs={40 + idx * 55}>
                <div className="avatar" aria-hidden="true">
                  {m.initials}
                </div>
                <div>
                  <div className="teamName">{m.name}</div>
                  <div className="teamRole">{m.role}</div>
                  <div className="teamNote">{m.note}</div>
                </div>
              </Reveal>
            ))}
          </div> */}

          <div className="spacer" />

          <div className="grid2">
            <Reveal className="card" delayMs={60}>
              <h2 className="h2">Build Log</h2>
              {/* <p className="muted">
                Transparency without app mechanics—this “broadcasts what we’re working on” in a judge-friendly way.
              </p> */}
              <ul className="list">
                {buildLog.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card" delayMs={120}>
              <h2 className="h2">Contact + Video Links</h2>
              {/* <p className="p">
                Add a real email and an updates link when you’re ready. For now, these are safe placeholders.
              </p> */}
              <div className="contactBox">
                <div className="contactRow">
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">
                    <a className="textLink" href="mailto:grandguardianapp@gmail.com">
                      grandguardianapp@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contactRow">
                  <div className="contactLabel">Product Video Link</div>
                  <div className="contactValue">
                    <a className="textLink" href="https://youtu.be/5-Fyv4fC074" target="_blank" rel="noreferrer">
                      https://youtu.be/5-Fyv4fC074
                    </a>
                  </div>
                </div>
                <div className="contactRow">
                  <div className="contactLabel">Business Plan Video Link</div>
                  <div className="contactValue">
                    <a className="textLink" href="#" onClick={(e) => e.preventDefault()}>
                      Placeholder business plan video link
                    </a>
                  </div>
                </div>
              </div>

              <div className="ctaRow">
                <Link to="/model" className="button buttonSecondary">
                  Revisit the Model
                </Link>
                <Link to="/feasibility" className="button buttonGhost">
                  Feasibility
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="spacer" />

          <Reveal className="quote" delayMs={140}>
            “We’re building a concept that feels human first: calm, consented, and easy to adopt.”
            <div className="quoteBy">Team principle</div>
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}


export default TeamPage