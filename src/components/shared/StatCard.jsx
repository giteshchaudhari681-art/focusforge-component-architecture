const cardStyle = {
  background: "#1a1a2e",
  border: "1px solid #2d2d44",
  borderRadius: 14,
  padding: "20px 24px",
};

const labelStyle = {
  fontSize: 12,
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 8,
};

const noteStyle = {
  fontSize: 12,
  color: "#64748b",
  marginTop: 4,
};

const progressTrackStyle = {
  height: 4,
  background: "#2d2d44",
  borderRadius: 99,
  marginTop: 8,
};

const progressFillBaseStyle = {
  height: "100%",
  background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
  borderRadius: 99,
  transition: "width 0.4s ease",
};

export default function StatCard({
  label,
  value,
  note,
  valueColor = "#e2e8f0",
  progressPercent,
}) {
  return (
    <div style={cardStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: valueColor }}>
        {value}
      </div>
      {note ? <div style={noteStyle}>{note}</div> : null}
      {typeof progressPercent === "number" ? (
        <div style={progressTrackStyle}>
          <div
            style={{
              ...progressFillBaseStyle,
              width: `${progressPercent}%`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
