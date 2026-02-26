// App.jsx — Top-level navigation shell.
// Manages the active tab. Each tab can later grow its own screen stack.

import React, { useState } from 'react'
import Shell from './components/Shell'
import TabBar from './components/TabBar'
import HomeScreen from './screens/HomeScreen'
import PerksScreen from './screens/PerksScreen'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Shell>
      {/* Screen content — fills the space between status bar and tab bar */}
      <div className="relative flex-1 overflow-hidden">
        {activeTab === 'home'  && <HomeScreen />}
        {activeTab === 'perks' && <PerksScreen />}
      </div>

      {/* Tab bar — pinned to bottom of content area */}
      <TabBar activeTab={activeTab} onChange={setActiveTab} />
    </Shell>
  )
}
