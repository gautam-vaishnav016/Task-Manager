function TaskItem({
  item,
  toggleTask,
  deleteTask,
}) {
  return (
    <div className="flex items-center justify-between bg-gray-50 border rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTask(item.id)}
          className="w-5 h-5"
        />

        <p
          className={`text-lg ${
            item.completed
              ? 'line-through text-gray-400'
              : 'text-black'
          }`}
        >
          {item.title}
        </p>
      </div>

      <button
        onClick={() => deleteTask(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem