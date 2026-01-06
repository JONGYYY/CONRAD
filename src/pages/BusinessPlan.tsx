import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export function BusinessPlanPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 4 · Business Plan</div>
            <h1 className="h1">A business that scales calm</h1>
            <p className="lead">
              GrandGuardian is a subscription-based senior care technology company built around one goal: make
              aging-at-home support scalable, affordable, and easy for families to adopt.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/feasibility">
                ← Back: Feasibility
              </Link>
              <span className="bpIntroDivider" aria-hidden="true">
                ·
              </span>
              <Link className="textLink" to="/impact">
                Next: Impact →
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="bpSummaryCard card" role="note" aria-label="Business plan summary">
              <div className="bpSummaryKicker">Plan summary</div>
              <p className="bpSummaryBody">
                We serve two customer groups: <strong>adult children</strong> who pay for peace of mind and{' '}
                <strong>seniors</strong> who need a simple, trusted experience. Revenue comes from recurring SaaS tiers
                plus institutional licensing to accelerate distribution.
              </p>
              <div className="bpPills" aria-label="Key positioning pillars">
                <span className="pill pillSoft">Subscription SaaS</span>
                <span className="pill pillSoft">Senior-first UX</span>
                <span className="pill pillSoft">Family peace of mind</span>
                <span className="pill pillSoft">Partner distribution</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Business model snapshot</h2>
            <p className="muted">The “one-minute” version: customers, pricing, and launch economics.</p>
          </div>

          <div className="metrics" aria-label="Business model key numbers">
            <Reveal className="metricCard" delayMs={40}>
              <div className="metricValue">$</div>
              <div className="metricTitle">3 subscription tiers</div>
              <div className="metricBody">About $15/mo, $30/mo, and $45/mo for families.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={90}>
              <div className="metricValue">◎</div>
              <div className="metricTitle">2 customer groups</div>
              <div className="metricBody">Adult children pay; seniors experience care that feels simple and trusted.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={140}>
              <div className="metricValue">MRR</div>
              <div className="metricTitle">Launch target</div>
              <div className="metricBody">~100 paying users and ~$2,400 monthly recurring revenue.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={190}>
              <div className="metricValue">GM</div>
              <div className="metricTitle">Gross profit at launch</div>
              <div className="metricBody">~$1,270–$1,570/month before operating expenses.</div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section sectionTint" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Pricing</h2>
            <p className="muted">Simple tiers for families, plus licensing for organizations.</p>
          </div>

          <div className="pricingGrid" aria-label="Subscription tiers">
            <Reveal className="card tierCard" delayMs={40}>
              <div className="tierBadge">Starter</div>
              <div className="tierTitle">Peace of mind</div>
              <div className="tierPrice">~$15</div>
              <div className="tierSub">per month · entry-level reassurance</div>
              <ul className="tierList">
                <li>Core companion experience</li>
                <li>Gentle routine support</li>
                <li>Family check-in signals</li>
              </ul>
            </Reveal>

            <Reveal className="card tierCard tierCardFeatured" delayMs={90}>
              <div className="tierBadge tierBadgeFeatured">Most popular</div>
              <div className="tierTitle">Confidence</div>
              <div className="tierPrice">~$30</div>
              <div className="tierSub">per month · balanced value</div>
              <ul className="tierList">
                <li>Everything in Starter</li>
                <li>More personalization and moments</li>
                <li>Expanded caregiver preferences</li>
              </ul>
            </Reveal>

            <Reveal className="card tierCard" delayMs={140}>
              <div className="tierBadge">Premium</div>
              <div className="tierTitle">Always there</div>
              <div className="tierPrice">~$45</div>
              <div className="tierSub">per month · maximum support</div>
              <ul className="tierList">
                <li>Everything in Confidence</li>
                <li>Highest support depth + coverage</li>
                <li>Priority help + onboarding</li>
              </ul>
            </Reveal>
          </div>

          <div className="spacer" />

          <div className="grid2" aria-label="Institutional licensing">
            <Reveal className="card" delayMs={60}>
              <h3 className="h3">Institutional licensing</h3>
              <p className="p">
                We expand through senior living communities and home care agencies with pricing of about{' '}
                <strong>$8–$15 per resident/month</strong>.
              </p>
              <ul className="list">
                <li>
                  <strong>Why it works:</strong> predictable recurring revenue and faster distribution
                </li>
                <li>
                  <strong>What partners get:</strong> a trust-forward experience that supports staff, residents, and
                  families
                </li>
              </ul>
            </Reveal>

            <Reveal className="card" delayMs={120}>
              <h3 className="h3">Who we sell to (two-sided UX)</h3>
              <div className="bpPersona">
                <div className="bpPersonaTitle">Adult child (payer)</div>
                <div className="bpPersonaBody">Pays for reassurance and control without constant “Are you okay?” loops.</div>
              </div>
              <div className="bpPersona">
                <div className="bpPersonaTitle">Senior (primary user)</div>
                <div className="bpPersonaBody">Gets a simple, trusted experience that feels like care—not monitoring.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container grid2">
          <Reveal className="card" delayMs={40}>
            <h2 className="h2">Go-to-market</h2>
            <p className="p">
              We launch direct-to-consumer to validate pricing and retention quickly, then expand through partnerships
              and licensing for faster distribution.
            </p>
            <div className="timeline" aria-label="Go-to-market timeline">
              <Reveal as="div" className="timelineStep" delayMs={70}>
                <div className="timelineDot" />
                <div className="timelineCard">
                  <div className="timelineTitle">Phase 1 · Direct-to-consumer launch</div>
                  <div className="timelineBody">Validate messaging, pricing, onboarding, and retention.</div>
                </div>
              </Reveal>
              <Reveal as="div" className="timelineStep" delayMs={120}>
                <div className="timelineDot" />
                <div className="timelineCard">
                  <div className="timelineTitle">Phase 2 · Caregiver communities + referrals</div>
                  <div className="timelineBody">Build predictable recurring revenue through trust-based channels.</div>
                </div>
              </Reveal>
              <Reveal as="div" className="timelineStep" delayMs={170}>
                <div className="timelineDot" />
                <div className="timelineCard">
                  <div className="timelineTitle">Phase 3 · Partnerships + licensing</div>
                  <div className="timelineBody">Scale distribution via communities and agencies.</div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal className="card" delayMs={120}>
            <h2 className="h2">Launch unit economics (100 users)</h2>
            <p className="p">
              Cost of revenue scales efficiently (cloud + usage-based AI + a fixed voice minimum), totaling about{' '}
              <strong>$830–$1,130/month</strong> at ~100 users.
            </p>
            <div className="stackList" aria-label="Economics breakdown">
              <div className="stackItem">
                <div className="stackTitle">Monthly recurring revenue (MRR)</div>
                <div className="stackBody">~$2,400 at ~100 paying users.</div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Cost of revenue</div>
                <div className="stackBody">~$830–$1,130/month (cloud + AI usage + voice infrastructure).</div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Gross profit</div>
                <div className="stackBody">~$1,270–$1,570/month at launch; margins improve with volume.</div>
              </div>
            </div>
            <div className="callout">
              <div className="calloutTitle">Growth strategy</div>
              <div className="calloutBody">
                Caregiver communities, referrals, and partner channels create long-term customer value and predictable
                recurring revenue.
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section sectionTint" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">5-year forecast (visuals)</h2>
            <p className="muted">Revenue, cost of revenue, and gross profit split by user type.</p>
          </div>

          <div className="bpGraphRow" aria-label="5-year forecast charts">
            <Reveal className="card bpGraphCard" delayMs={40}>
              <div className="bpGraphHeader">
                <div className="bpGraphTitle">Revenue</div>
                <div className="bpGraphMeta">DTC · B2B · Total</div>
              </div>
              <a
                className="bpGraphLink"
                href="/images/Graphs/grandguardian_revenue_lines_by_type_reco_1.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Revenue forecast chart in a new tab"
              >
                <img
                  className="bpGraphImg"
                  src="/images/Graphs/grandguardian_revenue_lines_by_type_reco_1.png"
                  alt="5-year forecast: Revenue by user type (DTC, B2B, Total), years Y1–Y5."
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </Reveal>

            <Reveal className="card bpGraphCard" delayMs={90}>
              <div className="bpGraphHeader">
                <div className="bpGraphTitle">Cost of revenue</div>
                <div className="bpGraphMeta">DTC · B2B · Total</div>
              </div>
              <a
                className="bpGraphLink"
                href="/images/Graphs/grandguardian_cogs_lines_by_type_reco_1.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Cost of revenue forecast chart in a new tab"
              >
                <img
                  className="bpGraphImg"
                  src="/images/Graphs/grandguardian_cogs_lines_by_type_reco_1.png"
                  alt="5-year forecast: Cost of revenue by user type (DTC, B2B, Total), years Y1–Y5."
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </Reveal>

            <Reveal className="card bpGraphCard" delayMs={140}>
              <div className="bpGraphHeader">
                <div className="bpGraphTitle">Gross profit</div>
                <div className="bpGraphMeta">DTC · B2B · Total</div>
              </div>
              <a
                className="bpGraphLink"
                href="/images/Graphs/grandguardian_profit_lines_by_type_reco.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Gross profit forecast chart in a new tab"
              >
                <img
                  className="bpGraphImg"
                  src="/images/Graphs/grandguardian_profit_lines_by_type_reco.png"
                  alt="5-year forecast: Gross profit by user type (DTC, B2B, Total), years Y1–Y5."
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <Reveal className="ctaRow" delayMs={60}>
            <Link to="/impact" className="button buttonPrimary">
              Next: Impact
            </Link>
            <Link to="/feasibility" className="button buttonGhost">
              Back to Feasibility
            </Link>
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}

export default BusinessPlanPage


