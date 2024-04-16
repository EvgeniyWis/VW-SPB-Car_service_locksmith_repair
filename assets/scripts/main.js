/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const locksmith_repair__filters__items = document.querySelectorAll(".locksmith_repair__filters--item");


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
for (let item of locksmith_repair__filters__items) {
    item.addEventListener("click", () => {
        item.classList.toggle("locksmith_repair__filters--item--active");
        const locksmith_repair__filters__item_add = item.querySelector(".locksmith_repair__filters--item_add");
        const locksmith_repair__filters__item_delete = item.querySelector(".locksmith_repair__filters--item_delete");
        locksmith_repair__filters__item_add.classList.toggle("hidden");
        locksmith_repair__filters__item_delete.classList.toggle("hidden");
    })
}