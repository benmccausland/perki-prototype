// TabBar.jsx — iOS-style bottom tab bar.
// 83px tall: 49px for tab items + 34px home indicator safe area.
// Frosted glass background, 0.5px top border.

import React from 'react'

// ─── Icons ──────────────────────────────────────────────────────────────────

function HomeIcon({ active }) {
  return active ? (
    // Filled
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L3 10.5V21h6v-5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V21h6V10.5L12 3Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    // Outlined
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L3 10.5V21h6v-5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V21h6V10.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PerksIcon({ active }) {
  return active ? (
    // Filled
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="3" fill="currentColor" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 12h20" stroke="white" strokeWidth="1.5" />
    </svg>
  ) : (
    // Outlined
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// ─── Tab bar ────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'home',  label: 'Home',  Icon: HomeIcon  },
  { id: 'perks', label: 'Perks', Icon: PerksIcon  },
]

export default function TabBar({ activeTab, onChange }) {
  return (
    <div
      className="glass shrink-0 flex items-start justify-around"
      style={{ height: 83, boxShadow: '0 -0.5px 0 rgba(0,0,0,0.10)' }}
    >
      {TABS.map(({ id, label, Icon }) => {
        const isActive = activeTab === id
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex flex-col items-center pt-[10px] gap-[3px] w-24 pressable"
            style={{ color: isActive ? '#1C1C1E' : '#AEAEB2' }}
            aria-label={label}
          >
            <Icon active={isActive} />
            <span className="text-[10px] font-medium tracking-tight">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
