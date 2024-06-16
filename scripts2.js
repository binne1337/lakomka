// Добавление обработчика события для изменения значений в форме
document.getElementById('cakeForm').addEventListener('change', function() {
    // Получение выбранных значений
    var filling = document.getElementById('filling').value;
    var icing = document.getElementById('icing').value;
    var decorations = document.getElementById('decorations').value;
    var message = document.getElementById('message').value;

    // Создание пути к изображениям на основе выбранных значений
    var baseImagePath = 'images/'; // Путь к базовому изображению
    var fillingImagePath = '';
    var icingImagePath = '';
    var decorationsImagePath = '';

    // Определение пути для начинки
    if (filling === 'choco') {
        fillingImagePath = 'images/choco.png'; // Путь к изображению шоколадной начинки
    } else if (filling === 'vanil') {
        fillingImagePath = 'images/vanil.png'; // Путь к изображению ванильной начинки
    } else if (filling === 'caramel') {
        fillingImagePath = 'images/caramel.png'; // Путь к изображению фруктовой начинки
    }

    // Определение пути для покрытия
    if (icing === 'choco') {
        icingImagePath = 'images/choco_icing.png'; // Путь к шоколадному покрытию
    } else if (icing === 'krem') {
        icingImagePath = 'images/krem_icing.png'; // Путь к кремовому покрытию
    } else if (icing === 'glas') {
        icingImagePath = 'images/glas_icing.png'; // Путь к фруктовому покрытию
    }

    // Определение пути для украшений
    if (decorations === 'flow') {
        decorationsImagePath = 'images/flow_decorations.png'; // Путь к украшениям в виде цветов
    } else if (decorations === 'club') {
        decorationsImagePath = 'images/club_decorations.png'; // Путь к украшениям в виде фигурок
    } else if (decorations === 'choco') {
        decorationsImagePath = 'images/choco_decorations.png'; // Путь к украшениям в виде шоколадных стружек
    }

    // Создание HTML-тега img с базовым изображением
    var baseImageElement = document.createElement('img');
    baseImageElement.src = baseImagePath;
    baseImageElement.alt = '';
    baseImageElement.style.position = 'absolute';
    baseImageElement.style.top = '0';
    baseImageElement.style.left = '0';

    // Создание HTML-тега img с выбранным изображением начинки
// Создание HTML-тега img с выбранным изображением начинки
var fillingImageElement = document.createElement('img');
fillingImageElement.src = fillingImagePath;
fillingImageElement.alt = 'Filling Preview';
fillingImageElement.style.width = '100%';
fillingImageElement.style.height = '100%';
fillingImageElement.style.position = 'absolute';
fillingImageElement.style.top = '0';
fillingImageElement.style.left = '0';

// Создание HTML-тега img с выбранным изображением покрытия
var icingImageElement = document.createElement('img');
icingImageElement.src = icingImagePath;
icingImageElement.alt = 'Icing Preview';
icingImageElement.style.width = '100%';
icingImageElement.style.height = '100%';
icingImageElement.style.position = 'absolute';
icingImageElement.style.top = '0';
icingImageElement.style.left = '0';

// Создание HTML-тега img с выбранными украшениями
var decorationsImageElement = document.createElement('img');
decorationsImageElement.src = decorationsImagePath;
decorationsImageElement.alt = 'Decorations Preview';
decorationsImageElement.style.width = '100%';
decorationsImageElement.style.height = '100%';
decorationsImageElement.style.position = 'absolute';
decorationsImageElement.style.top = '0';
decorationsImageElement.style.left = '0';



    // Отображение изображений на странице
    var cakePreview = document.getElementById('cakePreview');
    cakePreview.innerHTML = ''; // Очистка предыдущего предварительного просмотра торта
    cakePreview.appendChild(baseImageElement); // Добавление базового изображения
    if (fillingImagePath !== '') {
        cakePreview.appendChild(fillingImageElement); // Добавление изображения начинки, если оно выбрано
    }
    if (icingImagePath !== '') {
        cakePreview.appendChild(icingImageElement); // Добавление изображения покрытия, если оно выбрано
    }
    if (decorationsImagePath !== '') {
        cakePreview.appendChild(decorationsImageElement); // Добавление украшений, если они выбраны
    }
});

