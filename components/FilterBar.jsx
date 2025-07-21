"use client";
const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="mb-4 flex gap-2">
      {["all", "done", "pending"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded ${filter === type ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
