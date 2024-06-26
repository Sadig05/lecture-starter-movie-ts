import { IMovie } from '../types';
import { toggleHeart } from './toggleHeart';

export const moviesMapper = (movie: IMovie) => {
    const {
        id,
        poster_path, // eslint-disable-line @typescript-eslint/naming-convention
        overview,
        release_date, // eslint-disable-line @typescript-eslint/naming-convention
    } = movie;
    return `<div class="col-lg-3 col-md-4 col-12 p-2">
            <div class="col-12 p-2">
                <div class="card shadow-sm">
                    <img src="https://image.tmdb.org/t/p/original/${poster_path}" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="red"
                        fill="#ff000078"
                        width="50"
                        height="50"
                        class="bi bi-heart-fill position-absolute p-2"
                        viewBox="0 -2 18 22"
                  
                    >
                        <path
                            class="toggle-heart"
                            id="${id}"
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                    <div class="card-body">
                        <p class="card-text truncate">
                            ${overview}
                        </p>
                        <div class="
                            d-flex
                            justify-content-between
                            align-items-center
                        ">
                            <small class="text-muted">${release_date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};

// Add event listener to handle click events on SVG elements
document.addEventListener('click', (event) => {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.classList.contains('toggle-heart')) {
        toggleHeart(event);
    }
});
