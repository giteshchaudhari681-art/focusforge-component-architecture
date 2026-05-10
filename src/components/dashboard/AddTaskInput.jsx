const cardStyle = {
  background: "#1a1a2e",
  border: "1px solid #2d2d44",
  borderRadius: 14,
  padding: "20px 24px",
  marginBottom: 24,
};

const labelStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: "#94a3b8",
  marginBottom: 12,
};

const inputRowStyle = {
  display: "flex",
  gap: 10,
};

const inputStyle = {
  flex: 1,
  background: "#0f0f1a",
  border: "1px solid #2d2d44",
  borderRadius: 10,
  padding: "10px 16px",
  color: "#e2e8f0",
  fontSize: 14,
  outline: "none",
};

const buttonStyle = {
  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  border: "none",
  borderRadius: 10,
  padding: "10px 20px",
  color: "#fff",
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
};

export default function AddTaskInput({
  newTask,
  onNewTaskChange,
  onAddTask,
}) {
  return (
    <div style={cardStyle}>
      <div style={labelStyle}>Add New Task</div>
      <div style={inputRowStyle}>
        <input
          value={newTask}
          onChange={(event) => onNewTaskChange(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && onAddTask()}
          placeholder="What needs to get done today?"
          style={inputStyle}
        />
        <button onClick={onAddTask} style={buttonStyle}>
          + Add Task
        </button>
      </div>
    </div>
  );
}
