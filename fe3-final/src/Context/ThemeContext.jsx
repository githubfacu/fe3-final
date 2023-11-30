import {createContext} from 'react'

export const themes = {
    light: {
        font: 'black',
        background: 'white',  
        backgroundImage: `url('../../public/images/psy-pers2.png')`,
        backgroundSize:'50%'
    },
    dark: {
        font: 'white',
        background: 'rgb(12, 12, 12)',
        backgroundImage: `url('../../public/images/backgroundc10.png')`,
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext
