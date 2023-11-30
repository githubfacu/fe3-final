import {createContext} from 'react'

export const themes = {
    light: {
        font: 'black',
        background: 'white',  
        backgroundSize:'50%'
    },
    dark: {
        font: 'white',
        background: 'rgb(12, 12, 12)',
        backgroundSize:'150%'
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext
