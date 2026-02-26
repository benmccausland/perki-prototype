// HomeScreen.jsx — Home tab.
// Shows up to 4 highlighted perks as "worth noticing" cards.
// Source-first label (partner name) under each perk title.
// Placeholder only — layout and copy will follow Figma screens.

import React from 'react'
import { highlightedPerks } from '../data/perks'

function PerkCard({ perk }) {
  return (
    <button className="w-full text-left bg-surface rounded-[16px] p-4 pressable" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
      {/* Category + frequency row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-label3 uppercase tracking-wider">
          {perk.category}
        </span>
        <span className="text-[11px] text-label3">{perk.frequency}</span>
      </div>

      {/* Perk title */}
      <p className="text-[16px] font-semibold text-label leading-snug">{perk.title}</p>

      {/* Partner name — source-first */}
      <p className="text-[13px] text-label2 mt-1">{perk.partnerName}</p>
    </button>
  )
}

export default function HomeScreen() {
  const cards = highlightedPerks

  return (
    <div className="ios-scroll flex-1 bg-canvas px-5 pt-5 pb-6">

      {/* Page heading */}
      <div className="mb-6">
        <p className="text-[14px] text-label2 mb-0.5">Good morning</p>
        <h1 className="text-[28px] font-bold text-label tracking-tight leading-tight">
          Your perks
        </h1>
      </div>

      {/* Worth noticing */}
      {cards.length > 0 ? (
        <section>
          <p className="text-[13px] font-semibold text-label2 mb-3 uppercase tracking-wider">
            Worth noticing
          </p>
          <div className="flex flex-col gap-3">
            {cards.map(perk => (
              <PerkCard key={perk.id} perk={perk} />
            ))}
          </div>
        </section>
      ) : (
        // Empty state
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <p className="text-[17px] font-medium text-label text-center">Nothing here yet.</p>
          <p className="text-[14px] text-label2 text-center leading-relaxed px-8">
            Add your first perk and it will appear here.
          </p>
        </div>
      )}
    </div>
  )
}
