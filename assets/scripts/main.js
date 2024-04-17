/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const locksmith_repair__filters__items = document.querySelectorAll(".locksmith_repair__filters--item");
const locksmith_repair__leave_request__filters = document.getElementById("locksmith_repair__leave_request--filters");


/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("navbar__adaptive--active");
    popup__background.classList.add("popup__background__active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("navbar__adaptive--active");
    popup__background.classList.remove("popup__background__active");
})


/* Нажатие на фильтр */
const locksmith_repair__form_filters = [];

for (let item of locksmith_repair__filters__items) {
    item.addEventListener("click", () => {

        /* Изменение стилей элемента */
        item.classList.toggle("locksmith_repair__filters--item--active");
        const locksmith_repair__filters__item_add = item.querySelector(".locksmith_repair__filters--item_add");
        const locksmith_repair__filters__item_delete = item.querySelector(".locksmith_repair__filters--item_delete");
        locksmith_repair__filters__item_add.classList.toggle("hidden");
        locksmith_repair__filters__item_delete.classList.toggle("hidden");

        /* Добавление фильтров в форму */
        const item_text = item.querySelector(".locksmith_repair__filters--item_title").textContent;

        if (!locksmith_repair__form_filters.includes(item_text)) {
            locksmith_repair__form_filters.push(item_text);
            html_item = `
            <div class="locksmith_repair__leave_request--filter_item">

                <svg class="locksmith_repair__leave_request--filter_item_cancel" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_660_1489)">
                <path d="M13.6334 2.63726L2.31971 13.951M2.31971 2.63726L13.6334 13.951" stroke="black" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_660_1489">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                <p class="locksmith_repair__leave_request--filter_item_text">${item_text}</p>
            </div>`;

            locksmith_repair__leave_request__filters.insertAdjacentHTML(`beforeend`, html_item);

            const locksmith_repair__leave_request__filters__items = document.querySelectorAll(".locksmith_repair__leave_request--filter_item");

            for (let filter_item of locksmith_repair__leave_request__filters__items) {

                const filter_item_close = filter_item.querySelector(".locksmith_repair__leave_request--filter_item_cancel");

                const filter_item_text = filter_item.querySelector(".locksmith_repair__leave_request--filter_item_text").textContent;

                if (filter_item_text == item_text) {

                    filter_item_close.addEventListener("click", () => {
                        locksmith_repair__leave_request__filters.removeChild(filter_item);
                        locksmith_repair__form_filters.splice(locksmith_repair__form_filters.indexOf(item_text), 1);
                        item.classList.remove("locksmith_repair__filters--item--active");
                        locksmith_repair__filters__item_add.classList.remove("hidden");
                        locksmith_repair__filters__item_delete.classList.add("hidden");
                    })
                }
            }

        } else {
            locksmith_repair__form_filters.splice(locksmith_repair__form_filters.indexOf(item_text), 1);

            const locksmith_repair__leave_request__filters__items = document.querySelectorAll(".locksmith_repair__leave_request--filter_item");

            for (let filter_item of locksmith_repair__leave_request__filters__items) {

                const filter_item_text = filter_item.querySelector(".locksmith_repair__leave_request--filter_item_text").textContent;

                if (filter_item_text == item_text) {
                    locksmith_repair__leave_request__filters.removeChild(filter_item);
                    break;
                }
            }
        }
    }
    )
}