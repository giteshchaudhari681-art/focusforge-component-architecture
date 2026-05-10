import StatCard from "../shared/StatCard";

const statsRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  marginBottom: 32,
};

export default function StatsRow({
  totalCount,
  completedCount,
  progressPercent,
}) {
  return (
    <div style={statsRowStyle}>
      <StatCard label="Total Tasks" value={totalCount} note="All time" />
      <StatCard
        label="Completed"
        value={completedCount}
        note="Done ✓"
        valueColor="#22c55e"
      />
      <StatCard
        label="Remaining"
        value={totalCount - completedCount}
        note="To do"
        valueColor="#f59e0b"
      />
      <StatCard
        label="Progress"
        value={`${progressPercent}%`}
        valueColor="#6366f1"
        progressPercent={progressPercent}
      />
    </div>
  );
}
