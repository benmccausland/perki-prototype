// Shell.jsx — Fixed 402×874 device frame.
// Renders the Dynamic Island, status bar, and home indicator.
// Children receive the content area between the status bar and the bottom of the device.

import React from 'react'

// ─── Status bar icons ───────────────────────────────────────────────────────

function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" aria-hidden>
      <rect x="0"  y="8"  width="3" height="4" rx="1" />
      <rect x="4"  y="5"  width="3" height="7" rx="1" />
      <rect x="8"  y="3"  width="3" height="9" rx="1" />
      <rect x="12" y="0"  width="3" height="12" rx="1" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden>
      <path fillOpacity="0.3" d="M8 3A9.3 9.3 0 0 0 .5 6.5l1.5 1.5A7.3 7.3 0 0 1 8 5.8a7.3 7.3 0 0 1 6 2.2l1.5-1.5A9.3 9.3 0 0 0 8 3Z" />
      <path fillOpacity="0.6" d="M8 6a5.8 5.8 0 0 0-4.2 1.8l1.5 1.5A3.7 3.7 0 0 1 8 8.2a3.7 3.7 0 0 1 2.7 1.1l1.5-1.5A5.8 5.8 0 0 0 8 6Z" />
      <circle cx="8" cy="11" r="1.5" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="1"   y="1"   width="17" height="10" rx="3"   fill="currentColor" />
      <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

// ─── Shell ─────────────────────────────────────────────────────────────────

export default function Shell({ children }) {
  return (
    // Page background — neutral linen to frame the device
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#DDDDD9' }}>

      {/* Device frame — 402×874, iPhone 14 Pro proportions */}
      <div
        className="relative flex flex-col bg-canvas overflow-hidden"
        style={{
          width:        402,
          height:       874,
          borderRadius: 54,
          boxShadow:    '0 0 0 1.5px #C8C8C4, 0 40px 100px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.12)',
          flexShrink:   0,
        }}
      >
        {/* ── Status bar (54px) ───────────────────────────── */}
        <div className="relative shrink-0 text-label" style={{ height: 54 }}>

          {/* Dynamic Island */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full"
            style={{ width: 120, height: 34 }}
          />

          {/* Time — left */}
          <span
            className="absolute left-8 top-[14px] font-semibold tabular-nums"
            style={{ fontSize: 15, letterSpacing: -0.3 }}
          >
            9:41
          </span>

          {/* Icons — right */}
          <div className="absolute right-7 top-[15px] flex items-center gap-[5px]">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* ── Content area (flex-1, below status bar) ─────── */}
        <div className="relative flex-1 flex flex-col min-h-0">
          {children}
        </div>

        {/* ── Home indicator — absolute at device bottom ───── */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-[10px] pointer-events-none z-50"
        >
          <div
            className="bg-label rounded-full"
            style={{ width: 134, height: 5, opacity: 0.18 }}
          />
        </div>
      </div>
    </div>
  )
}
