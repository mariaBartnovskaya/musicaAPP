import { themes, useThemeContext } from '../../contexts/theme'
import s from './themeSwitcher.module.css'
import light from '../assets/img/icon/light.svg'
import dark from '../assets/img/icon/dark.svg'

function ThemeSwitcher() {
  const { currentTheme, toggleTheme } = useThemeContext()
  const darkTheme = <svg alt="dark">src={light}</svg>
  const lightTheme = <svg alt="light">src={dark}</svg>
  return (
    <div className={s.btn_theme_svg} onClick={toggleTheme} aria-hidden>
      {currentTheme === themes.dark ? darkTheme : lightTheme}
    </div>
  )
}
export default ThemeSwitcher
