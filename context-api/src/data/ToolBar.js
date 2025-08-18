import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeButton from './ThemeButton'

const ToolBar = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <div style={{ background: theme === 'light' ? '#eee' : '#333' ,color: theme === 'light' ? '#000' : '#fff'}}>
      <ThemeButton/>
    </div>
  )
}

export default ToolBar
