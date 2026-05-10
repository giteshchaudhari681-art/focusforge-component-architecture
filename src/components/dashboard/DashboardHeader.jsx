const headerStyle = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  padding: "20px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #2d2d44",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const brandIconStyle = {
  width: 36,
  height: 36,
  borderRadius: 10,
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18,
};

const brandTextStyle = {
  fontSize: 22,
  fontWeight: 700,
  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const profileRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const greetingStyle = {
  fontSize: 14,
  color: "#94a3b8",
};

const avatarStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
};

export default function DashboardHeader() {
  return (
    <div style={headerStyle}>
      <div style={brandStyle}>
        <div style={brandIconStyle}>⚡</div>
        <span style={brandTextStyle}>FocusForge</span>
      </div>
      <div style={profileRowStyle}>
        <span style={greetingStyle}>Good morning 👋</span>
        <div style={avatarStyle}>JD</div>
      </div>
    </div>
  );
}
