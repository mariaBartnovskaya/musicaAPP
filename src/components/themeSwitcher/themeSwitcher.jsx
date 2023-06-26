import { useContext } from 'react'
import { themes, ThemeContext } from '../../contexts/theme'
import s from './themeSwitcher.module.css'
import DarkIcon from '../assets/img/dark.png'
import LightIcon from '../assets/img/light.png'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={s.btn_theme_svg} onClick={toggleTheme} aria-hidden>
      <img
        className={s.btn_theme_svg}
        src={theme === themes.dark ? DarkIcon : LightIcon}
        alt="switcher"
      />
    </div>
  )
}
export default ThemeSwitcher
