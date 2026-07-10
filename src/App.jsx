import { useState } from 'react'
import { Header } from './Header'
import { TaskItem } from './TaskItem'
import './App.css' // Puedes mantener los estilos por defecto o borrarlos

function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Ver el video del curso de React' },
    { id: 2, text: 'Configurar proyecto con Vite' }
  ])
  
  // Estado para el texto del input
  const [newTask, setNewTask] = useState('')

  // Función para agregar tareas
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(), // Genera un ID único básico
      text: newTask
    }
    setTasks([...tasks, newTaskObj])
    setNewTask('') // Limpia el input
  }

  // Función para eliminar tareas
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div>
      <Header />
      
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea..."
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <ul>
        {/* Renderizado dinámico de la lista usando .map() */}
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={handleDeleteTask} 
          />
        ))}
      </ul>
    </div>
  )
}

export default App