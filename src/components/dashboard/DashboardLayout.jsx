const shellStyle = {
  minHeight: "100vh",
  background: "#0f0f1a",
  color: "#e2e8f0",
  fontFamily: "sans-serif",
};

const contentStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "32px 24px",
};

export default function DashboardLayout({ header, children }) {
  return (
    <div style={shellStyle}>
      {header}
      <div style={contentStyle}>{children}</div>
    </div>
  );
}
