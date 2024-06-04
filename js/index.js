window.addEventListener('load', function() {

    // Common locale configuration
    const localeConfig = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    };

    // Common SVG icons for prev and next buttons
    const prevHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.2609 3.5L11.0834 4.3225L8.41171 7L11.0834 9.6775L10.2609 10.5L6.76087 7L10.2609 3.5Z" fill="black"/><path d="M6.41676 3.5L7.23926 4.3225L4.56759 7L7.23926 9.6775L6.41676 10.5L2.91676 7L6.41676 3.5Z" fill="black"/></svg>';
    const nextHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.73913 3.5L2.91663 4.3225L5.58829 7L2.91663 9.6775L3.73913 10.5L7.23913 7L3.73913 3.5Z" fill="black"/><path d="M7.58324 3.5L6.76074 4.3225L9.43241 7L6.76074 9.6775L7.58324 10.5L11.0832 7L7.58324 3.5Z" fill="black"/></svg>';

    // Function to initialize datepicker
    const initDatepicker = (selector) => {
        return new AirDatepicker(selector, {
            position: 'bottom left',
            locale: localeConfig,
            prevHtml,
            nextHtml,
        });
    };

    // Initialize datepickers
    const dateFrom = initDatepicker('#date-from');
    const dateTo = initDatepicker('#date-to');

    // Function to reset datepicker
    const addResetListener = (btnSelector, datepicker) => {
        const resetBtn = document.querySelector(btnSelector);
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                datepicker.clear();
            });
        }
    };

    // Add reset listeners
    addResetListener('.header__date-from .delete-icon', dateFrom);
    addResetListener('.header__date-to .delete-icon', dateTo);

    // Change sort functionality
    const sortTiles = document.querySelector('.account-list__tiles');
    const sortRows = document.querySelector('.account-list__rows');
    const itemsList = document.querySelector('.account-list__items');

    if (sortTiles && sortRows && itemsList) {
        sortTiles.addEventListener('click', function() {
            sortTiles.classList.add('active');
            sortRows.classList.remove('active');
            itemsList.classList.add('display-tiles');
        });

        sortRows.addEventListener('click', function() {
            sortTiles.classList.remove('active');
            sortRows.classList.add('active');
            itemsList.classList.remove('display-tiles');
        });
    }

    function checkWidthAndUpdateClass() {
        if (window.innerWidth < 769) { 
            itemsList.classList.add('display-tiles');
            sortTiles.classList.add('active');
            sortRows.classList.remove('active');
        }
    }

    checkWidthAndUpdateClass();

    window.addEventListener('resize', checkWidthAndUpdateClass);

});
