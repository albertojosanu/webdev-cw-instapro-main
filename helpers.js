import { renderUploadImageComponent } from "./components/upload-image-component.js";
import { renderHeaderComponent } from "./components/header-component.js";

export function saveUserToLocalStorage(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage() {
    try {
        return JSON.parse(window.localStorage.getItem("user"));
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function removeUserFromLocalStorage() {
    window.localStorage.removeItem("user");
}

export const format = (text) =>
    text.replaceAll("<", "&lt").replaceAll(">", "&gt").replaceAll(/^ *$/g, "");

export let url = "";

export const updateUrl = (newUrl) => {
    url = newUrl;
};

export function loadImage(element, html) {
    let imageUrl = "";
    updateUrl(imageUrl);
    element.innerHTML = html;

    /**
     * Устанавливает сообщение об ошибке в форме.
     * @param {string} message - Текст сообщения об ошибке.
     */
    const setError = (message) => {
        element.querySelector(".form-error").textContent = message;
    };

    // Рендерим заголовок страницы
    renderHeaderComponent({
        element: document.querySelector(".header-container"),
    });

    // Если режим регистрации, рендерим компонент загрузки изображения
    const uploadImageContainer = element.querySelector(
        ".upload-image-container",
    );
    if (uploadImageContainer) {
        console.log(imageUrl);
        renderUploadImageComponent({
            element: uploadImageContainer,
            onImageUrlChange(newImageUrl) {
                imageUrl = newImageUrl;
            },
        });
    }

    return setError;
}
