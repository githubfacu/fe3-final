import {createContext} from 'react'

export const themes = {
    light: {
        font: 'black',
        background: 'white'
    },
    dark: {
        font: 'white',
        background: 'rgb(12, 12, 12)'
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext
