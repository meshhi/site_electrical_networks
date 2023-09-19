import { useState } from 'react';
import { useEffect } from 'react';

export default ({changeOffset}) => {
    const [offset, setOffset] = useState(0);

    const windowScroll = (e) => {
        changeOffset('0vh')
      }

    useEffect(() => {
        let customoffset = 100 * document.querySelector('.carousel_content__left').children.length;
        customoffset -= 100;
        document.querySelector('.carousel_content__left').style.top = `-${customoffset}vh`
    }, [])
    return(
        <div className='container carousel' 
        onWheel={windowScroll}
        onClick={(e) => {
            setOffset((prev) => {
              if (prev >= 200) {
                return 0;
              } else {
                return prev + 100
              }
            });
            document.querySelector('.carousel_content__left').style.top = `-${(100 * document.querySelector('.carousel_content__left').children.length)-offset - 100}vh`;
            document.querySelector('.carousel_content__right').style.top = `-${offset}vh`;
          }}>
            <div className='carousel_content__left'>
              <div className='carousel_item carousel_item__left_1'>
                <div>
                Особенности прокладки кабелей подключения
                Прокладка кабелей — это первый этап любых электромонтажных работ при оборудовании электроснабжения новостроек, ремонте, реконструкции и модернизации электросетей.
  
                Задача этого вида электромонтажа:
                
  
                - соединить силовыми линиями источники энергии с распределительными подстанциями и силовыми энергопотребляющими модулями (внешнее подключение);
                - соединить энергопотребляющее оборудование и светильники в единую внутреннюю электрическую схему для подключения к единому ВРУ (внутреннее подключение).
                </div>
              </div>
              <div className='carousel_item carousel_item__left_2'>
            
              </div>
              <div className='carousel_item carousel_item__left_3'>
            </div>
            </div>
            <div className='carousel_content__right'>
              <div className='carousel_item carousel_item__right_1'>
              
              </div>
              <div className='carousel_item carousel_item__right_2'>
              
              </div>
              <div className='carousel_item carousel_item__right_3'>
              
              </div>
            </div>
          </div>
    )
}