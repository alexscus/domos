ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.763199, 37.540587],
        zoom: 16,
        // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
        // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
        controls: []
    });

     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'DOMOS',
            balloonContent: 'г. Москва, Стрельбищенский переулок, 30 стр. 1А, офис 403 (м. Улица 1905 года)'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'html/images/iconmap.png',
            // Размеры метки.
            iconImageSize: [31, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -58]
        });
     
     myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}); 