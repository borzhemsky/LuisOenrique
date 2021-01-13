$(function() {

    /* Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }

        // console.log(scrollPos);
    });



    /* Smoothe scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        // console.log(elementId);
        // console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });
    

});

var loadMore = function () {
    const btn = document.querySelector('.portfolio__btn');
    const item = document.querySelector('.portfolio__item.hidden');
    textOfBtn = btn.innerHTML;
    btn.addEventListener('click', function () {
        
        event.preventDefault();
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
            btn.innerText = 'close';
        } else {
            item.classList.add('hidden');
            btn.innerText = textOfBtn;
        }
    });
}

loadMore ();


// Back to Top with Vanilla JS
let backToTop = function () {

    const scroll = document.querySelector('.scrollTop');

    window.addEventListener('scroll', function () {
        
        // Если высота больше 200px появляется класс active, если меньше убирается
        scroll.classList.toggle('active', window.scrollY > 200);
    });

    scroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}

backToTop ();

// Page Loeader
let pageLoader = function () {
    const loeaderWrapper = document.querySelector('.loader-wrapper');

    window.addEventListener('load', function () {
        loeaderWrapper.classList.add('hide');
    });
}

pageLoader ();

// Scroll Appear
var scrollAppear = function () {
    var appears = document.querySelectorAll('.appear');
    
    
    appears.forEach((appear) => {
        var appearPosition = appear.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.2;
        if (appearPosition < screenPosition) {
            appear.classList.add('appear-active');
        }
    })
    
    
}

window.addEventListener('scroll', scrollAppear);

/* TYPEWRITING TEXT */
var typeWrite = () =>{
    const texts = ['Experience', 'Interface Expert'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type () {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index); // Прописывает каждую букву отдельно
        
        document.querySelector('.typing').textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout((type), 300);
    
    }());

}

typeWrite();

/* MY SLIDER */
var slider = function () {
    const dotItems = document.querySelectorAll('.slider-dots_item');
    const items = document.querySelectorAll('.testimonials__item');
    
    
    dotItems.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Объект которому присваивается текущая кнопка
            let currentBtn = btn;

            // Переменнная в которой хранится трибут хранящий id айтема
            let itemId = currentBtn.getAttribute('data-item');
            // console.log(itemId);

            // Переменная в которой хранится текущий контент
            let currentItem = document.querySelector(itemId);


            // Условие которое проверяет есть ли класс active у кнопки
            if ( ! currentBtn.classList.contains('current')) {

                // Удаляю класс active у не текущих кнопок
                dotItems.forEach((btn) => {
                    btn.classList.remove('current');
                })

                // Удаляю класс active у не текущих контентов
                items.forEach((item) => {
                    item.classList.remove('current');
                })

                // Добавляю класс active к текущей кнопке
                currentBtn.classList.add('current');

                // Добавляю класс active к текущему контенту
                currentItem.classList.add('current');
            } else {

            }
        });
    });

    // Создаю тригер, который имитирует нажатие на первую кнопку и делает ее активной
    document.querySelector('.slider-dots_item').click();


}

slider ();

/* LIGHTBOX */
var lightBox = function () {
    const lightBox = document.createElement('div');
    lightBox.id = 'lightBoxDiv';
    document.body.appendChild(lightBox);

    const images = document.querySelectorAll('.portfolio__img');

    for (let image of images) {
        image.addEventListener('click', function () {
            lightBox.classList.add('active');
            console.log('qwe')

            /* При клике на картинку создается новая,
            в которую вставляется путь нажатой картинки*/
            const img = document.createElement('img');
            img.src = image.src;

            /* Пока lightBox имеет потомка, 
            он удаляется (используется для того,
                чтобы при повторном кажатии на картинку 
                открывалась уже новая) */
            while (lightBox.firstChild) {
                lightBox.removeChild(lightBox.firstChild);
            }

            /* В lightBox вставляется картинка */
            lightBox.appendChild(img);
        });
    }

    lightBox.addEventListener('click', function () {
        lightBox.classList.remove('active');
    })

}

lightBox ();