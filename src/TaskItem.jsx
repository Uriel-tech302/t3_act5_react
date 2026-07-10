export function TaskItem({ task, onDelete }) {
  return (
    <li style={{ margin: '10px 0' }}>
      {task.text}
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px', color: 'red' }}>
        Eliminar
      </button>
    </li>
  );
}