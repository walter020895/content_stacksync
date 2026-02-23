'use client'

interface FiltersProps {
  persons: string[]
  selectedPersons: string[]
  search: string
  onPersonToggle: (person: string) => void
  onSearchChange: (value: string) => void
  totalCount: number
  filteredCount: number
}

export default function Filters({
  persons,
  selectedPersons,
  search,
  onPersonToggle,
  onSearchChange,
  totalCount,
  filteredCount,
}: FiltersProps) {
  const allSelected = selectedPersons.length === 0

  return (
    <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] px-3 py-2.5 flex flex-wrap gap-2 items-center">
      {/* Person chips */}
      <button
        onClick={() => selectedPersons.forEach((p) => onPersonToggle(p))}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
          allSelected
            ? 'bg-[#1d2226] text-white'
            : 'bg-[#f3f2ef] text-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.08)]'
        }`}
      >
        All
      </button>
      {persons.map((person) => {
        const active = selectedPersons.includes(person)
        return (
          <button
            key={person}
            onClick={() => onPersonToggle(person)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              active
                ? 'bg-[#0a66c2] text-white'
                : 'bg-[#f3f2ef] text-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.08)]'
            }`}
          >
            {person}
          </button>
        )
      })}

      {/* Search */}
      <div className="relative ml-auto">
        <svg
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[rgba(0,0,0,0.4)] pointer-events-none"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search…"
          className="pl-7 pr-3 py-1 rounded-full border border-[rgba(0,0,0,0.15)] text-xs bg-white
            focus:outline-none focus:ring-2 focus:ring-[#0a66c2]/30 focus:border-[#0a66c2] w-36"
        />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {(search || !allSelected) && (
        <span className="text-[10px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">
          {filteredCount}/{totalCount}
        </span>
      )}
    </div>
  )
}
