import { useEffect, useMemo, useRef, useState } from "react";

type IconName =
  | "bell"
  | "book"
  | "check"
  | "chevron"
  | "clock"
  | "droplet"
  | "heart"
  | "lock"
  | "moon"
  | "pause"
  | "play"
  | "reset"
  | "settings"
  | "sparkle"
  | "sun"
  | "utensils";

const Icon = ({ name, size = 20 }: { name: IconName; size?: number }) => {
  const paths: Record<IconName, React.ReactNode> = {
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    droplet: <path d="M12 2.5S5.5 9.2 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 9.2 12 2.5 12 2.5Z" />,
    heart: (
      <path d="M20.8 4.7a5.4 5.4 0 0 0-7.6 0L12 5.9l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.6Z" />
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />,
    pause: (
      <>
        <path d="M9 5v14" />
        <path d="M15 5v14" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7Z" />,
    reset: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 2 1.3 4.2L17.5 8l-4.2 1.8L12 14l-1.3-4.2L6.5 8l4.2-1.8L12 2Z" />
        <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    utensils: (
      <>
        <path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 2 4 5 4 8h-4" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const quotes = [
  ["You don’t have to be perfect.", "You just have to keep going."],
  ["Small steps still move you forward.", "I’m already proud of you."],
  ["This moment is yours.", "Breathe, focus, and take it gently."],
  ["Your best looks different every day.", "And every version is enough."],
  ["A little progress is still progress.", "You’re doing better than you think."],
];

const themes = [
  { id: "rose", label: "Rose", color: "#cc6b7d" },
  { id: "sage", label: "Sage", color: "#70947d" },
  { id: "night", label: "Night", color: "#7476a8" },
];

const notes = [
  {
    title: "For the days that feel heavy",
    text: "You never need to have everything figured out at once. Take today one small piece at a time, and remember that resting is not the same as giving up. I’m always in your corner.",
  },
  {
    title: "A reminder of who you are",
    text: "You are thoughtful, brave, and far more capable than you give yourself credit for. The kindness you carry makes every room warmer, including mine.",
  },
  {
    title: "When you need a little courage",
    text: "Think of everything you have already made it through. This chapter may be difficult, but so are you—and you do not have to face any of it alone.",
  },
];

const formatTime = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
const formatNext = (timestamp: number | null) => {
  if (!timestamp) return "Off";
  const mins = Math.max(0, Math.ceil((timestamp - Date.now()) / 60000));
  if (mins < 60) return `in ${mins} min`;
  const hours = Math.floor(mins / 60);
  return `in ${hours}h ${mins % 60}m`;
};

export default function App() {
  const savedDuration = Number(localStorage.getItem("bloom-timer-duration")) || 25;
  const savedTimerEnd = Number(localStorage.getItem("bloom-timer-end")) || 0;
  const savedTimerRunning =
    localStorage.getItem("bloom-timer-running") === "true" && savedTimerEnd > Date.now();
  const [duration, setDuration] = useState(savedDuration);
  const [secondsLeft, setSecondsLeft] = useState(() =>
    savedTimerRunning
      ? Math.max(0, Math.ceil((savedTimerEnd - Date.now()) / 1000))
      : Number(localStorage.getItem("bloom-timer-seconds")) || savedDuration * 60,
  );
  const [running, setRunning] = useState(savedTimerRunning);
  const [sessions, setSessions] = useState(() =>
    Number(localStorage.getItem("bloom-sessions") || 0),
  );
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [theme, setTheme] = useState(() => localStorage.getItem("bloom-theme") || "rose");
  const [notificationStatus, setNotificationStatus] = useState<
    NotificationPermission | "unsupported"
  >("Notification" in window ? Notification.permission : "unsupported");
  const [waterOn, setWaterOn] = useState(() => localStorage.getItem("bloom-water-on") !== "false");
  const [foodOn, setFoodOn] = useState(() => localStorage.getItem("bloom-food-on") !== "false");
  const [waterNext, setWaterNext] = useState<number | null>(
    () => Number(localStorage.getItem("bloom-water-next")) || Date.now() + 45 * 60000,
  );
  const [foodNext, setFoodNext] = useState<number | null>(
    () => Number(localStorage.getItem("bloom-food-next")) || Date.now() + 3 * 3600000,
  );
  const [secretOpen, setSecretOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [appUnlocked, setAppUnlocked] = useState(
    () => localStorage.getItem("bloom-access-granted") === "true",
  );
  const [appPassword, setAppPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const timerRef = useRef<number | null>(null);
  const timerEndRef = useRef<number | null>(savedTimerRunning ? savedTimerEnd : null);

  const progress = useMemo(() => 1 - secondsLeft / (duration * 60), [duration, secondsLeft]);

  const notify = (title: string, body: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body, icon: "/favicon.ico" });
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("bloom-theme", theme);
  }, [theme]);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setNow(Date.now());
      if (waterOn && waterNext && Date.now() >= waterNext) {
        notify("Time for a little water", "A few sips for your brilliant brain.");
        setWaterNext(Date.now() + 45 * 60000);
      }
      if (foodOn && foodNext && Date.now() >= foodNext) {
        notify("Please have something to eat", "You deserve fuel, care, and a proper break.");
        setFoodNext(Date.now() + 3 * 3600000);
      }
    }, 10000);
    return () => window.clearInterval(tick);
  }, [waterOn, waterNext, foodOn, foodNext]);

  useEffect(() => {
    localStorage.setItem("bloom-water-on", String(waterOn));
    localStorage.setItem("bloom-food-on", String(foodOn));
    if (waterNext) localStorage.setItem("bloom-water-next", String(waterNext));
    if (foodNext) localStorage.setItem("bloom-food-next", String(foodNext));
  }, [waterOn, foodOn, waterNext, foodNext]);

  useEffect(() => {
    localStorage.setItem("bloom-timer-duration", String(duration));
    localStorage.setItem("bloom-timer-seconds", String(secondsLeft));
    localStorage.setItem("bloom-timer-running", String(running));
    if (running && timerEndRef.current) {
      localStorage.setItem("bloom-timer-end", String(timerEndRef.current));
    } else {
      localStorage.removeItem("bloom-timer-end");
    }
  }, [duration, secondsLeft, running]);

  useEffect(() => {
    if (!running) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    timerEndRef.current = Date.now() + secondsLeft * 1000;
    timerRef.current = window.setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil(((timerEndRef.current || Date.now()) - Date.now()) / 1000),
      );
      setSecondsLeft(remaining);
      if (remaining === 0) {
        setRunning(false);
        const nextSessions = sessions + 1;
        setSessions(nextSessions);
        localStorage.setItem("bloom-sessions", String(nextSessions));
        notify("Focus session complete", "Beautiful work. Take a breath and be proud of yourself.");
      }
    }, 250);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [running]);

  const chooseDuration = (minutes: number) => {
    setDuration(minutes);
    setSecondsLeft(minutes * 60);
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setSecondsLeft(duration * 60);
  };

  const requestNotifications = async () => {
    if (!("Notification" in window)) return;
    const permission = await Notification.requestPermission();
    setNotificationStatus(permission);
    if (permission === "granted")
      notify("Notifications are on", "I’ll gently remind you when it’s time.");
  };

  const toggleReminder = (type: "water" | "food") => {
    if (type === "water") {
      const next = !waterOn;
      setWaterOn(next);
      setWaterNext(next ? Date.now() + 45 * 60000 : null);
    } else {
      const next = !foodOn;
      setFoodOn(next);
      setFoodNext(next ? Date.now() + 3 * 3600000 : null);
    }
  };

  const unlock = (event: React.FormEvent) => {
    event.preventDefault();
    if (code === "1207") {
      setUnlocked(true);
      setCodeError(false);
    } else {
      setCodeError(true);
    }
  };

  const enterApp = (event: React.FormEvent) => {
    event.preventDefault();
    if (appPassword === "Pizza") {
      localStorage.setItem("bloom-access-granted", "true");
      setAppUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  if (!appUnlocked) {
    return (
      <main className="welcome-gate">
        <section className="welcome-card">
          <span className="welcome-mark">
            <Icon name="heart" size={24} />
          </span>
          <span className="section-kicker">A PLACE MADE WITH CARE</span>
          <h1>Welcome to bloom.</h1>
          <p>This little corner belongs to someone very special.</p>
          <form onSubmit={enterApp}>
            <label htmlFor="app-password">Your password</label>
            <div className={`password-field ${passwordError ? "error" : ""}`}>
              <Icon name="lock" size={18} />
              <input
                id="app-password"
                type="password"
                value={appPassword}
                onChange={(event) => {
                  setAppPassword(event.target.value);
                  setPasswordError(false);
                }}
                placeholder="Enter password"
                autoComplete="current-password"
                autoFocus
              />
            </div>
            {passwordError && (
              <span className="password-error">That password isn’t right yet.</span>
            )}
            <button className="primary-button" type="submit">
              Open my little corner <Icon name="chevron" size={17} />
            </button>
          </form>
          <small>You’ll stay signed in on this device.</small>
        </section>
      </main>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Icon name="heart" size={19} />
          </span>
          <span>bloom.</span>
        </div>
        <nav>
          <a className="active" href="#today">
            <Icon name="sun" />
            Today
          </a>
          <a href="#focus">
            <Icon name="clock" />
            Focus
          </a>
          <a href="#care">
            <Icon name="droplet" />
            Self-care
          </a>
          <button onClick={() => setSecretOpen(true)}>
            <Icon name="lock" />
            Just for you
          </button>
        </nav>
        <div className="sidebar-bottom">
          <button
            className="quiet-button"
            onClick={() =>
              setTheme(themes[(themes.findIndex((t) => t.id === theme) + 1) % themes.length].id)
            }
          >
            <Icon name="settings" />
            Change theme
          </button>
          <div className="made-with">
            <Icon name="heart" size={14} /> made just for you
          </div>
        </div>
      </aside>

      <main>
        <header id="today" className="topbar">
          <div>
            <p className="eyebrow">YOUR LITTLE CORNER</p>
            <h1>Hi, lovely.</h1>
            <p className="subtitle">Let’s make today feel a little lighter.</p>
          </div>
          <button
            className={`notification-pill ${notificationStatus === "granted" ? "enabled" : ""}`}
            onClick={requestNotifications}
          >
            <Icon name={notificationStatus === "granted" ? "check" : "bell"} size={18} />
            {notificationStatus === "granted" ? "Notifications on" : "Turn on notifications"}
          </button>
        </header>

        <section className="content-grid">
          <div className="main-column">
            <article id="focus" className="card focus-card">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">FOCUS TIME</span>
                  <h2>One thing at a time.</h2>
                </div>
                <span className="session-count">
                  <Icon name="sparkle" size={15} /> {sessions} sessions done
                </span>
              </div>

              <div className="timer-wrap">
                <svg className="progress-ring" viewBox="0 0 260 260">
                  <circle className="ring-track" cx="130" cy="130" r="116" />
                  <circle
                    className="ring-progress"
                    cx="130"
                    cy="130"
                    r="116"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress * 100}
                  />
                </svg>
                <div className="timer-center">
                  <span className="timer-label">{running ? "FOCUSING" : "READY WHEN YOU ARE"}</span>
                  <strong>{formatTime(secondsLeft)}</strong>
                  <span>{duration} minute session</span>
                </div>
              </div>

              <div className="duration-picker">
                {[15, 25, 45, 60].map((minutes) => (
                  <button
                    key={minutes}
                    onClick={() => chooseDuration(minutes)}
                    className={duration === minutes ? "selected" : ""}
                  >
                    {minutes} min
                  </button>
                ))}
              </div>
              <div className="timer-actions">
                <button className="primary-button" onClick={() => setRunning((value) => !value)}>
                  <Icon name={running ? "pause" : "play"} size={19} />{" "}
                  {running
                    ? "Pause session"
                    : secondsLeft < duration * 60
                      ? "Keep going"
                      : "Start focusing"}
                </button>
                <button className="icon-button" onClick={resetTimer} aria-label="Reset timer">
                  <Icon name="reset" />
                </button>
              </div>
            </article>

            <article id="care" className="card care-card">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">GENTLE REMINDERS</span>
                  <h2>Take care of you, too.</h2>
                </div>
              </div>
              <div className="reminder-list">
                <div className="reminder-row">
                  <span className="reminder-icon water">
                    <Icon name="droplet" />
                  </span>
                  <div className="reminder-copy">
                    <strong>Drink some water</strong>
                    <span>Every 45 minutes · Next {formatNext(waterOn ? waterNext : null)}</span>
                  </div>
                  <button
                    className={`toggle ${waterOn ? "on" : ""}`}
                    onClick={() => toggleReminder("water")}
                    aria-label="Toggle water reminders"
                  >
                    <span />
                  </button>
                </div>
                <div className="reminder-row">
                  <span className="reminder-icon food">
                    <Icon name="utensils" />
                  </span>
                  <div className="reminder-copy">
                    <strong>Have something to eat</strong>
                    <span>Every 3 hours · Next {formatNext(foodOn ? foodNext : null)}</span>
                  </div>
                  <button
                    className={`toggle ${foodOn ? "on" : ""}`}
                    onClick={() => toggleReminder("food")}
                    aria-label="Toggle food reminders"
                  >
                    <span />
                  </button>
                </div>
              </div>
              {notificationStatus !== "granted" && (
                <button className="care-notice" onClick={requestNotifications}>
                  <Icon name="bell" size={17} /> Allow browser notifications so I can remind you{" "}
                  <Icon name="chevron" size={16} />
                </button>
              )}
            </article>
          </div>

          <aside className="right-column">
            <article className="quote-card">
              <span className="quote-spark">
                <Icon name="sparkle" />
              </span>
              <span className="section-kicker">A NOTE FOR YOU</span>
              <blockquote>
                “{quotes[quoteIndex][0]}
                <br />
                <em>{quotes[quoteIndex][1]}</em>”
              </blockquote>
              <p>— someone who believes in you</p>
              <div className="quote-actions">
                <button onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)}>
                  Another one
                </button>
                <button
                  className="round-button"
                  onClick={() =>
                    notify(
                      "A little note for you",
                      `${quotes[quoteIndex][0]} ${quotes[quoteIndex][1]}`,
                    )
                  }
                  aria-label="Send as notification"
                >
                  <Icon name="bell" size={17} />
                </button>
              </div>
            </article>

            <article className="theme-card">
              <div>
                <span className="section-kicker">MAKE IT YOURS</span>
                <h3>Choose your mood</h3>
              </div>
              <div className="theme-options">
                {themes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={theme === item.id ? "active" : ""}
                    aria-label={`${item.label} theme`}
                  >
                    <span style={{ background: item.color }} />
                    {item.label}
                  </button>
                ))}
              </div>
            </article>

            <button className="secret-card" onClick={() => setSecretOpen(true)}>
              <span className="secret-icon">
                <Icon name="lock" />
              </span>
              <span>
                <small>JUST FOR YOU</small>
                <strong>There’s something here...</strong>
              </span>
              <Icon name="chevron" />
            </button>
          </aside>
        </section>
        <p className="mobile-signoff">
          <Icon name="heart" size={13} /> made just for you
        </p>
      </main>

      {secretOpen && (
        <div className="modal-backdrop" onMouseDown={() => setSecretOpen(false)}>
          <section className="secret-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSecretOpen(false)} aria-label="Close">
              ×
            </button>
            {!unlocked ? (
              <div className="unlock-view">
                <span className="big-lock">
                  <Icon name="lock" size={27} />
                </span>
                <span className="section-kicker">A PRIVATE LITTLE PLACE</span>
                <h2>This part is only for you.</h2>
                <p>Enter our four-digit code to open it.</p>
                <form onSubmit={unlock}>
                  <input
                    value={code}
                    onChange={(event) => {
                      setCode(event.target.value.replace(/\D/g, "").slice(0, 4));
                      setCodeError(false);
                    }}
                    placeholder="••••"
                    inputMode="numeric"
                    aria-label="Secret code"
                    autoFocus
                  />
                  <button className="primary-button" type="submit">
                    <Icon name="lock" size={17} /> Open my letters
                  </button>
                </form>
                {codeError && (
                  <span className="code-error">That’s not quite it. Try our special date.</span>
                )}
              </div>
            ) : (
              <div className="letters-view">
                <span className="section-kicker">WORDS TO KEEP</span>
                <h2>For whenever you need them.</h2>
                <p>
                  Come back to these on the good days, the hard days, and all the ordinary ones
                  between.
                </p>
                <div className="letters-list">
                  {notes.map((note, index) => (
                    <button
                      key={note.title}
                      className={expandedNote === index ? "expanded" : ""}
                      onClick={() => setExpandedNote(expandedNote === index ? null : index)}
                    >
                      <span>
                        <Icon name="heart" size={16} />
                        {note.title}
                      </span>
                      <Icon name="chevron" size={18} />
                      {expandedNote === index && <p>{note.text}</p>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
