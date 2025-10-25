import { renderUploadImageComponent } from "./upload-image-component.js";
import { renderHeaderComponent } from "./header-component.js";
import { format } from "../helpers.js";

/**
 * 
@param {HTMLElement} params.appEl - Корневой элемент приложения, в который будет рендериться страница.
 *
 */
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
    let imageUrl = "";

    const render = () => {
        // @TODO: Реализовать страницу добавления поста
        const appHtml = `
            <div class="page-container">
                <div class="header-container"></div>
                <div class="form">
                    <h3 class="form-title">Добавить пост</h3>
                    <div class="form-inputs">
                        <div class="upload-image-container"></div>
                            <p>Опишите фотографию</p>
                            <textarea type="textarea" id="text-input" class="input" rows="4" style="height: 100px;"></textarea>
                            <div class="form-error"></div>
                        <button class="button" id="add-button">Добавить</button>
                    </div>
                </div>
            </div>
        `;

        appEl.innerHTML = appHtml;

        const setError = (message) => {
            appEl.querySelector(".form-error").textContent = message;
        };

        renderHeaderComponent({
            element: document.querySelector(".header-container"),
        });

        const uploadImageContainer = appEl.querySelector(
            ".upload-image-container",
        );

        if (uploadImageContainer) {
            renderUploadImageComponent({
                element: uploadImageContainer,
                onImageUrlChange(newImageUrl) {
                    imageUrl = newImageUrl;
                },
            });
        }

        document.getElementById("add-button").addEventListener("click", () => {
            setError("");
            const text = document.getElementById("text-input").value;

            if (!text) {
                alert("Введите текст");
                return;
            }

            if (!imageUrl) {
                alert("Не выбрана фотография");
                return;
            }

            onAddPostClick({
                description: format(text),
                imageUrl: imageUrl,
            });
        });
    };

    render();
}
