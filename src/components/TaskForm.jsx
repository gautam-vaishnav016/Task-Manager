function TaskForm({ task, setTask, addTask }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />

      <button
        onClick={addTask}
        className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition"
      >
        Add
      </button>
    </div>
  )
}

export default TaskForm