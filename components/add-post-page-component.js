import { format, loadImage, url } from "../helpers.js";

/**
 * 
@param {HTMLElement} params.appEl - Корневой элемент приложения, в который будет рендериться страница.
 *
 */
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
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

        let post = loadImage(appEl, appHtml);

        document.getElementById("add-button").addEventListener("click", () => {
            post("");
            const text = document.getElementById("text-input").value;

            if (!text) {
                alert("Введите текст");
                return;
            }

            if (!url) {
                alert("Не выбрана фотография");
                return;
            }

            onAddPostClick({
                description: format(text),
                imageUrl: url,
            }).catch((error) => {
                console.warn(error);
                post(error.message);
            });
        });
    };

    render();
}
