import { useState } from 'react';

export default ({changeOffset}) => {

    const windowScroll = (e) => {
      changeOffset('-100vh')
    }

    return(
    <div className='main_window_container' onWheel={windowScroll}>
      <header className="main_window_header">
        <ul className="main_window_header__menu">
          <li className="main_window_header__menu_item">О нас</li>
          <li className="main_window_header__menu_item">Услуги</li>
          <li className="main_window_header__menu_item">Контакты</li>
          <li className="main_window_header__menu_item">Другое</li>
        </ul>
      </header>
      <main className='main_window_content'>
      </main>
      <footer className='main_window_footer'>

      </footer>
    </div>
    )
}