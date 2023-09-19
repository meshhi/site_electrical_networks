import { useState } from 'react';

export default ({changeOffset}) => {

    const windowScroll = (e, val) => {
      changeOffset(val)
    }

    return(
    <div className='main_window_container' onWheel={(e) => windowScroll(e, '-100vh')}>
      <header className="main_window_header">
        <ul className="main_window_header__menu">
          <li className="main_window_header__menu_item" onClick={(e) => windowScroll(e, '-100vh')}>О нас</li>
          <li className="main_window_header__menu_item">Услуги</li>
          <li className="main_window_header__menu_item">Контакты</li>
          <li className="main_window_header__menu_item">Другое</li>
        </ul>
      </header>
      <main className='main_window_content'>
        <div className='main_window_content__inner_container'>

        </div>
      </main>
      <footer className='main_window_footer'>

      </footer>
    </div>
    )
}