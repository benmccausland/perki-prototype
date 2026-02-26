// PerksScreen.jsx — Perks tab.
// Partners list, source-first IA — grouped by the subscription/membership,
// not by category. Each partner row shows name + perk count.
// Placeholder only — layout will follow Figma screens.

import React from 'react'
import { partners } from '../data/perks'

function PartnerRow({ partner }) {
  const count = partner.perks.length

  return (
    <button className="w-full text-left flex items-center gap-3 py-3.5 pressable">
      {/* Partner initial avatar — placeholder for logo */}
      <div
        className="shrink-0 flex items-center justify-center rounded-[10px] bg-surface2 text-[15px] font-semibold text-label2"
        style={{ width: 40, height: 40 }}
      >
        {partner.name[0]}
      </div>

      {/* Name + perk count */}
      <div className="flex-1 min-w-0">
        <p className="text-[16px] font-medium text-label truncate">{partner.name}</p>
        <p className="text-[13px] text-label2">
          {count} {count === 1 ? 'perk' : 'perks'}
        </p>
      </div>

      {/* Chevron */}
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
        <path
          d="M1 1l5 5-5 5"
          stroke="#AEAEB2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default function PerksScreen() {
  return (
    <div className="ios-scroll flex-1 bg-canvas px-5 pt-5 pb-6">

      {/* Page heading */}
      <h1 className="text-[28px] font-bold text-label tracking-tight leading-tight mb-6">
        Perks
      </h1>

      {/* Partner list — grouped rows, dividers between each */}
      {partners.length > 0 ? (
        <div
          className="bg-surface rounded-[16px] px-4 divide-y divide-border"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
        >
          {partners.map(partner => (
            <PartnerRow key={partner.id} partner={partner} />
          ))}
        </div>
      ) : (
        // Empty state
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <p className="text-[17px] font-medium text-label text-center">No partners yet.</p>
          <p className="text-[14px] text-label2 text-center leading-relaxed px-8">
            Add a perk from your subscriptions and it will appear here.
          </p>
        </div>
      )}
    </div>
  )
}
