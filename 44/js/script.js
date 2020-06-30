window.addEventListener('DOMContentLoaded', () => { // назначаем глобальный обработчик событий,
      // Табы                     //который упорядочит загрузку контента 
    const tabs = document.querySelectorAll('.tabheader__item'), // табы на которые нажимаем
          tabsContent = document.querySelectorAll('.tabcontent'), //весь контент, который нахдиться в нашей верстке
          tabsParent = document.querySelector('.tabheader__items'); //
// точка указывает на класс
    //    function hideTabContent() { // ф-я, которая только скрывает все ненужные нам табы, 
    //                               //элемены страници, которые есть сейчас на сайте
    //     tabsContent.forEach(item => {// называем item аргумент списеа в результате перебора табов
    //         item.style.display = 'none';

      function hideTabContent() { // ф-я, которая только скрывает все ненужные нам табы, 
       
           tabsContent.forEach(item => { // с использованием классов

               item.classList.add('hide'); // классы css, hide скрываем элементы
               item.classList.remove('show', 'fade'); // удаляем показ 

           });

           // удаляем класс активности
           tabs.forEach(item => {
               item.classList.remove('tabheader__item_active'); // точку не ставим так как итак 
           });                      //работаеь с классами на что указывает classList
       }
          //функция которая показует табы

    //    function showTabContent(i = 0) {
    //        tabsContent[i].style.display = 'block';
    //        tabs[i].classList.add('tabheader__item_active');//добавляеи класс активности          
    //    }

    function showTabContent(i = 0) {     //функция которая показует табы
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); //в каждом элементе таба удаляем класс активности
          }

       hideTabContent();
       showTabContent();

       // используем дилегирование событий и назначить обработчик события клика
       tabsParent.addEventListener('click', (event) => {  //назначаем событие клик
           const target = event.target;

           if (target && target.classList.contains('tabheader__item')) { 
                           //через contains определим,
                             //что точно кликнули в таб
            tabs.forEach((item, i) => { // нужно определить номер ссылки на таб и показать контент
                          //item список табов,а i номер єлемента таба
                if (target == item) { // если элемент псевдо массива совпадает с тем куда кликнул пользователь
                    hideTabContent(); // target элемент в который кликнули, будет сопадать
                                     //с элементом item который перебираем в цикле forEach
                    showTabContent(i); //тогда мы берем номер таба и показываем на странице
                   }// а остальные скрываем
                });
                   }
       });

       // Таймер

       const deadline = '2020-07-01';

       function getTimeRemaining(endtime) { // расчет всех временных промежутков
           const t = Date.parse(endtime) - Date.parse(new Date()),
                 days = Math.floor(t / (1000*60*60*24)), // округляем
                 // сколько времени осталост на время в сутках , в милисекундах
                 hours = Math.floor((t / (1000*60*60) % 24)),
// делим остаток (endtime) времени на час в милисекундах
// %  делит и возвращает остаток от деления
// получим колличество часов которые не хватает до полных суток
                 minutes = Math.floor((t / 1000/60) % 60),
                 seconds = Math.floor((t / 1000) % 60);

                 return {          // возвращаем объект
                     'total': t,   // если таймер закончился
                     'days': days,
                     'hours': hours,
                     'minutes': minutes,
                     'seconds': seconds
                 };
       }
       function getZero(num) { // вспомогательная функция, которая запускает число 
        if (num >= 0 && num < 10) { //и что-то делает внутри
            return `0${num}`;
        } else {
            return num;
        }
    }

// устанавливаем таймер на страницу
       function setClock(selector, endtime) {

            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'), // уникальные id
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

                  updateClock();// запускает дату устранив мегание прошлой даты

// будет обновлять наш таймер каждую секунду
       function updateClock() {
           const t = getTimeRemaining(endtime); // расчет времени который 
           //остался на данный момент, поместим на станицу это дедлайн
           
           days.innerHTML = getZero(t.days); // передаем значение в ф-ю getZero
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);
           // интервал нужно остановить
           if (t.total <= 0) {             //если время уже вышло
               clearInterval(timeInterval); //останавливаем таймер
           }
       }
       }
       setClock('.timer', deadline);

     // Modal
     
     const modalTrigger = document.querySelectorAll('[data-modal]'),
     // кнопки которые будут вызывать модальное окно
           modal = document.querySelector(".modal"),
     // переменная, которая отвечает за само модальное окно      
           modalCloseBtn = document.querySelector('[data-close]');
     // кнопка отвечающая за закрытие

     function openModal() {
        modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show'); переключатель вместо пред двух
           // назначить класс в верстке
            document.body.style.overflow = 'hidden';
          clearInterval(modalTimerId); // форма окрывается только один раз  
    }

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    // () => {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     // modal.classList.toggle('show'); переключатель вместо пред двух
    //     document.body.style.overflow = 'hidden';// окно за формой не прокручиваеться
});

//});



function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
// () => {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
//     document.body.style.overflow = 'hidden';
// });

modal.addEventListener('click', (e) => { // форма убераеться кликом в области окна
    if (e.target === modal) {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        // document.body.style.overflow = ''; 
        closeModal();
    }
});

document.addEventListener('keydown', (e) => { // закрытие формы нажатие Esc
                                             // , открытие Enter 
    if (e.code === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal, 6000);
// через 3 сек форма появляется

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientWidth >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
        // один раз закрыл форму и она не появляеться
    }
}

window.addEventListener('scroll', showModalByScroll); // долистал до конца и форма появляеться
    
}); // , {once: true}




