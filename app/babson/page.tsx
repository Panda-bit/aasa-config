export default function BabsonPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        background:
          "linear-gradient(180deg, #f5f1e8 0%, #ffffff 45%, #eef5ef 100%)",
        color: "#123524",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <p
          style={{
            marginBottom: 12,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#597c31",
          }}
        >
          Otur
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1,
          }}
        >
          Babson Campus Tour
        </h1>

        <p
          style={{
            marginTop: 16,
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "#355744",
          }}
        >
          Explore Babson with Otur. Launch the App Clip to start a guided
          campus tour with directions, stops, and tour highlights.
        </p>

        <a
          href="https://www.oturapp.com/babson"
          style={{
            display: "inline-block",
            marginTop: 28,
            padding: "14px 22px",
            borderRadius: 999,
            background: "#123524",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Open in Otur
        </a>

        <p
          style={{
            marginTop: 18,
            fontSize: 14,
            color: "#5f6f65",
          }}
        >
          If the App Clip doesn’t open automatically, scan the App Clip code or
          open this link on iPhone.
        </p>
      </div>
    </main>
  );
}
