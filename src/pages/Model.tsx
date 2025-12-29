import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

function SystemDiagramImage() {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <PlaceholderImage
        label="System Diagram placeholder"
        sublabel="GrandGuardian app ecosystem"
        aspect="21/9"
      />
    )
  }

  return (
    <div className="systemDiagramWrapper">
      <img
        src="/images/system-diagram.png"
        alt="GrandGuardian app ecosystem diagram"
        className="systemDiagram"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

type ModelStep = {
  title: string
  what: string
  how: string[]
  why: string
  imageLabel: string
  imageSublabel: string
}

const steps: ModelStep[] = [
  {
    title: 'Step 1: Voice Cloning',
    what: 'Create a voice clone of a loved one so support sounds like love.',
    how: [
      'Create a voice clone using ElevenLabs through uploading the user’s loved one’s voice.',
      'Use the API (Voice ID) and connect to MIT App Inventor.',
      'Generate a real-time, personalized voice of a loved one based on their needs.',
    ],
    why: 'Providing reminders and sharing stories helps create long-lasting memories, reduce anxiety, and deepen family bonds.',
    imageLabel: 'Step 1 placeholder',
    imageSublabel: 'Upload voice → Voice ID → real-time loved voice',
  },
  {
    title: 'Step 2: Object Detector',
    what: 'Turn real-world obstacles into calm spoken alerts.',
    how: [
      'Connect the app to ChatGPT’s Image Classification.',
      'When the user opens the app, the phone’s camera continuously monitors the surroundings to detect obstacles in real time.',
      'Convert detections into spoken alerts in the familiar, comforting voice of a loved one using ElevenLabs voice cloning.',
    ],
    why: 'Real-time guidance in a trusted voice can reduce anxiety and improve confidence while moving through the world.',
    imageLabel: 'Step 2 placeholder',
    imageSublabel: 'Camera → classification → loved-voice alert',
  },
  {
    title: 'Step 3: Story Time',
    what: 'Read-aloud stories for emotional support, narrated in a loved one’s voice.',
    how: [
      'Users can select from 6 storytelling styles: Family, Memories, Animals, Kindness, Bedtime, and Shuffle.',
      'Stories are narrated in a loved one’s voice to provide comfort and connection.',
    ],
    why: 'Personalized storytelling brings comfort, joy, and emotional connection through familiar narration.',
    imageLabel: 'Step 3 placeholder',
    imageSublabel: '6 styles · loved-voice narration',
  },
  {
    title: 'Step 4: First Aid',
    what: 'A bystander-friendly emergency profile that can announce critical information fast.',
    how: [
      'Users set up First Aid information: name, age, gender, medical history, current medications (including medication locations), heart rate range, allergies, blood type, other notes, and emergency contacts.',
      'Bystanders press “Announce Information” to quickly announce the user’s information in case of an emergency.',
    ],
    why: 'When seconds matter, this helps people nearby respond with clarity and confidence.',
    imageLabel: 'Step 4 placeholder',
    imageSublabel: 'Emergency profile → announce button',
  },
  {
    title: 'Step 5: Reminders',
    what: 'Smart reminders for medications and events—spoken in a loved one’s voice.',
    how: [
      'Users can add, edit, and delete medication and event reminders.',
      'Text-to-speech uses a loved one’s voice to announce upcoming appointments, events, and medication intake times.',
    ],
    why: 'Turns routines into reassurance—supportive, familiar, and easy to follow.',
    imageLabel: 'Step 5 placeholder',
    imageSublabel: 'Medication + events → loved-voice reminders',
  },
  {
    title: 'Step 6: SOS - Heart Rate Monitoring',
    what: 'Automatic SOS based on heart rate monitoring via Bluetooth.',
    how: [
      'Connect a heart rate monitoring device to the app through Bluetooth communication.',
      'Users set a monitoring measurement based on health condition and recommendations from a doctor.',
      'When the user’s heart rate exceeds the pre-set range due to an unhealthy condition or sudden fall, the sensor captures it immediately and the app shows “out-of-range.”',
      'A real-time message is sent to the emergency contact. At the same time, alarms go off to alert people around, calling for help.',
    ],
    why: 'Escalates quickly when it matters most—help can arrive sooner with less guesswork.',
    imageLabel: 'Step 6 placeholder',
    imageSublabel: 'Bluetooth HR → thresholds → SOS + alarm',
  },
  {
    title: 'Step 7: Invisible Fall Detection',
    what: 'Hands-free fall detection using the phone’s motion sensors (no button or wearable needed).',
    how: [
      'Detects falls using the phone’s motion sensors — no button or wearable device needed.',
      'Triggers alert if a fall is detected and not recovered within 5 seconds.',
      'Reduces false alarms from accidental phone drops.',
    ],
    why: 'Discreet safety that stays in the background—ready when needed, quiet when not.',
    imageLabel: 'Step 7 placeholder',
    imageSublabel: 'Motion sensors → detect → confirm → alert',
  },
]

export function ModelPage() {
  return (
    <>
      <section className="pageIntro">
        <div className="container introGrid">
          <div>
            <div className="eyebrow">Page 2 · The App</div>
            <h1 className="h1">The App</h1>
            <p className="lead">
              GrandGuardian is designed as a single companion experience made of seven building blocks—each one focused
              on safety, comfort, and connection through a loved one’s voice.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/feasibility">
                Next: Feasibility →
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="App overview placeholder"
            sublabel="7 steps · one companion experience"
            aspect="21/9"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Seven steps: how GrandGuardian “wakes up memories”</h2>
            <p className="muted">Each step includes a placeholder image you can replace later.</p>
          </div>

          <div className="grid2">
            {steps.map((step) => (
              <div className="card" key={step.title}>
                <h3 className="h3">{step.title}</h3>
                <div className="appStep">
                  <div className="appStepSection">
                    <div className="appStepLabel">What it is</div>
                    <div className="appStepText">{step.what}</div>
                  </div>
                  <div className="appStepSection">
                    <div className="appStepLabel">How it works</div>
                    <ul className="appStepList">
                      {step.how.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="appStepSection">
                    <div className="appStepLabel">Why it matters</div>
                    <div className="appStepText">{step.why}</div>
                  </div>
                </div>
                <PlaceholderImage label={step.imageLabel} sublabel={step.imageSublabel} aspect="16/9" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Three pillars (artistic, human-first)</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3">Familiarity</h3>
              <p className="p">
                The comfort of a loved voice: memory, warmth, and “I’m here” — delivered in a way that feels personal.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Restraint</h3>
              <p className="p">
                Care is often what you don’t do: fewer interruptions, softer moments, and silence that respects daily
                life.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Dignity</h3>
              <p className="p">
                Support that asks, not takes. Consent, clarity, and control—so help never feels like being watched.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="h2">System Diagram</h2>
            <p className="p">
              A visual overview of the GrandGuardian app ecosystem: senior app, family app, voice library, and care logic.
            </p>
            <SystemDiagramImage />
          </div>
        </div>
      </section>
    </>
  )
}


