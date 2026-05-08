function FilterButtons({
  filter,
  setFilter,
  clearCompleted,
}) {
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-xl border ${
          filter === 'all'
            ? 'bg-black text-white'
            : 'bg-white'
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-xl border ${
          filter === 'completed'
            ? 'bg-black text-white'
            : 'bg-white'
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter('pending')}
        className={`px-4 py-2 rounded-xl border ${
          filter === 'pending'
            ? 'bg-black text-white'
            : 'bg-white'
        }`}
      >
        Pending
      </button>

      <button
        onClick={clearCompleted}
        className="px-4 py-2 rounded-xl border border-red-500 text-red-500"
      >
        Clear Completed
      </button>
    </div>
  )
}

export default FilterButtons