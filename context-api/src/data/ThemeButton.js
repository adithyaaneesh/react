import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeButton = () => {

    const {theme , toogleTheme} = useContext(ThemeContext)
    return(
        <>
        <button onClick={toogleTheme} style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
            Change Theme
        </button>
        </>
    )
}

export default ThemeButton
