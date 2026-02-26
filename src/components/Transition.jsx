// Transition.jsx — Screen-level slide transitions for push/pop navigation.
//
// Wrap a screen in <SlideIn> when pushing it onto the stack —
// it slides in from the right and stays put.
//
// Usage:
//   <SlideIn key={screenId}>
//     <SomeScreen />
//   </SlideIn>
//
// The `key` prop is important: changing it re-mounts the component
// and re-triggers the entrance animation.

import React, { useEffect, useState } from 'react'

export function SlideIn({ children }) {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className="absolute inset-0"
      style={{
        transform:  entered ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.32, 0.72, 0, 1)',
      }}
    >
      {children}
    </div>
  )
}

// FadeIn — lighter entrance for modal-style screens or tab switches
export function FadeIn({ children }) {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity:    entered ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      {children}
    </div>
  )
}
