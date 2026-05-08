import TaskItem from './TaskItem'

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No tasks found
        </div>
      ) : (
        tasks.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList