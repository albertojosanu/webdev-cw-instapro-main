import { USER_POSTS_PAGE, POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken, page } from "../index.js";
import { deletePost, like, disLike } from "../api.js";

export function renderPostsPageComponent({ appEl }) {
    // @TODO: реализовать рендер постов из api
    console.log("Актуальный список постов:", posts);

    /**
     * @TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
     * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
     */

    // const appHtml = `
    //           <div class="page-container">
    //             <div class="header-container"></div>
    //             <ul class="posts">
    //               <li class="post">
    //                 <div class="post-header" data-user-id="642d00329b190443860c2f31">
    //                     <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" class="post-header__user-image">
    //                     <p class="post-header__user-name">Иван Иваныч</p>
    //                 </div>
    //                 <div class="post-image-container">
    //                   <img class="post-image" src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg">
    //                 </div>
    //                 <div class="post-likes">
    //                   <button data-post-id="642d00579b190443860c2f32" class="like-button">
    //                     <img src="./assets/images/like-active.svg">
    //                   </button>
    //                   <p class="post-likes-text">
    //                     Нравится: <strong>2</strong>
    //                   </p>
    //                 </div>
    //                 <p class="post-text">
    //                   <span class="user-name">Иван Иваныч</span>
    //                   Ромашка, ромашка...
    //                 </p>
    //                 <p class="post-date">
    //                   19 минут назад
    //                 </p>
    //               </li>
    //               <li class="post">
    //                 <div class="post-header" data-user-id="6425602ce156b600f7858df2">
    //                     <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">
    //                     <p class="post-header__user-name">Варварва Н.</p>
    //                 </div>

    //                 <div class="post-image-container">
    //                   <img class="post-image" src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680670675451-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-03-31%2520%25C3%2590%25C2%25B2%252012.51.20.png">
    //                 </div>
    //                 <div class="post-likes">
    //                   <button data-post-id="642cffed9b190443860c2f30" class="like-button">
    //                     <img src="./assets/images/like-not-active.svg">
    //                   </button>
    //                   <p class="post-likes-text">
    //                     Нравится: <strong>35</strong>
    //                   </p>
    //                 </div>
    //                 <p class="post-text">
    //                   <span class="user-name">Варварва Н.</span>
    //                   Нарисовала картину, посмотрите какая красивая
    //                 </p>
    //                 <p class="post-date">
    //                   3 часа назад
    //                 </p>
    //               </li>
    //               <li class="post">
    //                 <div class="post-header" data-user-id="6425602ce156b600f7858df2">
    //                     <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">
    //                     <p class="post-header__user-name">Варварва Н.</p>
    //                 </div>

    //                 <div class="post-image-container">
    //                   <img class="post-image" src="https://leonardo.osnova.io/97a160ca-76b6-5cba-87c6-84ef29136bb3/">
    //                 </div>
    //                 <div class="post-likes">
    //                   <button data-post-id="642cf82e9b190443860c2f2b" class="like-button">
    //                     <img src="./assets/images/like-not-active.svg">
    //                   </button>
    //                   <p class="post-likes-text">
    //                     Нравится: <strong>0</strong>
    //                   </p>
    //                 </div>
    //                 <p class="post-text">
    //                   <span class="user-name">Варварва Н.</span>
    //                   Голова
    //                 </p>
    //                 <p class="post-date">
    //                   8 дней назад
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>`;

    appEl.innerHTML = `<div class="page-container">
                <div class="header-container"></div>
                <ul class="posts"></ul>    
              </div>`;

    const container = document.querySelector(".posts");

    container.innerHTML = posts
        .map(
            (element) => `<li class="post" data-post-id=${element.id}>
                    <div class="post-header" data-user-id=${element.user.id}>
                        <img src=${element.user.imageUrl} class="post-header__user-image">
                        <p class="post-header__user-name">${element.user.name}</p>
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src=${element.imageUrl}>
                    </div>
                    <div class="post-likes">
                      <button class="like-button" data-is-liked=${element.isLiked}>
                        <img src= ${element.isLiked ? "./assets/images/like-active.svg" : "./assets/images/like-not-active.svg"}>
                      </button>
                      <p class="post-likes-text">
                        Нравится: <strong>${element.likes.length !== 0 ? element.likes[0].name + (element.likes.length > 1 ? " и еще " + (element.likes.length - 1) : "") : 0} </strong>
                      </p>
                    </div>
                    <p class="post-text">
                      <span class="user-name">${element.user.name}</span>
                      ${element.description}
                    </p>
                    <p class="post-date">
                      ${element.createdAt}
                    </p>
                    <button class="button delete-button">Удалить</button>
                  </li>`,
        )
        .join("");

    renderHeaderComponent({
        element: document.querySelector(".header-container"),
    });

    for (let userEl of document.querySelectorAll(".post")) {
        userEl.querySelector(".post-header").addEventListener("click", () => {
            goToPage(USER_POSTS_PAGE, {
                userId: userEl.querySelector(".post-header").dataset.userId,
            });
        });

        userEl.querySelector(".delete-button").addEventListener("click", () => {
            if (!getToken()) {
                alert("Требуется авторизация");
                return;
            }
            deletePost({ token: getToken(), id: userEl.dataset.postId }).then(
                () => {
                    goToPage(POSTS_PAGE);
                    if (page === USER_POSTS_PAGE) {
                        goToPage(USER_POSTS_PAGE, {
                            userId: userEl.querySelector(".post-header").dataset
                                .userId,
                        });
                    }
                },
            );
        });

        const likeButtonListener = () => {
            userEl
                .querySelector(".like-button")
                .addEventListener("click", () => {
                    if (!getToken()) {
                        alert("Требуется авторизация");
                        return;
                    }
                    if (
                        userEl.querySelector(".like-button").dataset.isLiked ===
                        "true"
                    ) {
                        disLike({
                            token: getToken(),
                            id: userEl.dataset.postId,
                        }).then((data) => {
                            let index = posts.indexOf(
                                posts.filter(
                                    (element) =>
                                        element.id === userEl.dataset.postId,
                                )[0],
                            );
                            posts[index] = data.post;

                            userEl.querySelector(".post-likes").innerHTML =
                                `<button class="like-button" data-is-liked=${data.post.isLiked}>
                                <img src= ${data.post.isLiked ? "./assets/images/like-active.svg" : "./assets/images/like-not-active.svg"}>
                            </button>
                            <p class="post-likes-text">
                                Нравится: <strong>${data.post.likes.length !== 0 ? data.post.likes[0].name + (data.post.likes.length > 1 ? " и еще " + (data.post.likes.length - 1) : "") : 0} </strong>
                            </p>`;

                            likeButtonListener();
                        });
                    } else {
                        like({
                            token: getToken(),
                            id: userEl.dataset.postId,
                        }).then((data) => {
                            let index = posts.indexOf(
                                posts.filter(
                                    (element) =>
                                        element.id === userEl.dataset.postId,
                                )[0],
                            );
                            posts[index] = data.post;

                            userEl.querySelector(".post-likes").innerHTML =
                                `<button class="like-button" data-is-liked=${data.post.isLiked}>
                                <img src= ${data.post.isLiked ? "./assets/images/like-active.svg" : "./assets/images/like-not-active.svg"}>
                            </button>
                            <p class="post-likes-text">
                                Нравится: <strong>${data.post.likes.length !== 0 ? data.post.likes[0].name + (data.post.likes.length > 1 ? " и еще " + (data.post.likes.length - 1) : "") : 0} </strong>
                            </p>`;

                            likeButtonListener();
                        });
                    }
                });
        };
        likeButtonListener();
    }
}
