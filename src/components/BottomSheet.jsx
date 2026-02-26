// BottomSheet.jsx — iOS-style bottom sheet with backdrop and drag handle.
// Usage:
//   <BottomSheet isOpen={open} onClose={() => setOpen(false)} title="Sheet title">
//     ...content...
//   </BottomSheet>
//
// Place inside a relative-positioned container (the Shell content area).

import React from 'react'

export default function BottomSheet({ isOpen, onClose, title, children }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-40 transition-opacity duration-300"
        style={{
          background:    'rgba(0,0,0,0.36)',
          opacity:       isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden
      />

      {/* Sheet panel */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 bg-surface flex flex-col"
        style={{
          borderRadius:    '28px 28px 0 0',
          boxShadow:       '0 -1px 0 rgba(0,0,0,0.05), 0 -8px 32px rgba(0,0,0,0.10)',
          maxHeight:       '80%',
          transform:       isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition:      'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-9 rounded-full bg-border" style={{ height: 5 }} />
        </div>

        {/* Optional title */}
        {title && (
          <div className="px-5 pt-2 pb-4 border-b border-border shrink-0">
            <h2 className="text-[17px] font-semibold text-label">{title}</h2>
          </div>
        )}

        {/* Scrollable content */}
        <div className="ios-scroll flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  )
}
