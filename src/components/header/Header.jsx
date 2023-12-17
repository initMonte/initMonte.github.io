import { useState } from 'react'
import '../../App.css'
import './header.css'

export const Header = () => {

  const[showMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>Monte</a>
        
        <div className={showMenu ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href='#hero' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-estate nav_icon' /> Home
              </a>
            </li>
            <li className='nav_item'>
              <a href='#skills' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-file-alt nav_icon' /> Skills
              </a>
            </li>
            <li className='nav_item'>
              <a href='#projects' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-scenery nav_icon' /> Projects
              </a>
            </li>
            <li className='nav_item'>
              <a href='#contact' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-message nav_icon' /> Contact
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav_close' onClick={() => setShowMenu(!showMenu)} />
        </div>
        
        <div className='nav_toggle' onClick={() => setShowMenu(!showMenu)}>
          <i className='uil uil-apps' />
        </div>
      </nav>
    </header>
  )
}