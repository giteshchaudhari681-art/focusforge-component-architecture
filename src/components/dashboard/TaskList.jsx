import TaskItem from "../shared/TaskItem";

const listStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const emptyStateStyle = {
  textAlign: "center",
  padding: "48px 0",
  color: "#475569",
};

const emptyIconStyle = {
  fontSize: 40,
  marginBottom: 12,
};

const emptyTitleStyle = {
  fontSize: 16,
  fontWeight: 600,
};

const emptyTextStyle = {
  fontSize: 13,
  marginTop: 4,
};

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <div style={emptyIconStyle}>🎯</div>
        <div style={emptyTitleStyle}>No tasks found</div>
        <div style={emptyTextStyle}>Add a task above to get started</div>
      </div>
    );
  }

  return (
    <div style={listStyle}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}
