import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';
import { getPopular, getTopRated, getUpcoming, searchMovie, getSingleMovie } from './services/services';
import { moviesMapper } from './utils/moviesMapper';
import { getArrayFromLocalStorage } from './utils/handleLocalStorage';
// TODO render your app here

let currentPage = 1;
const filmContainer = document.querySelector('#film-container') as HTMLElement;
const favoriteFilmsContainer = document.querySelector('#favorite-movies') as HTMLElement;
// buttons
const popularButton = document.getElementById('popular') as HTMLInputElement;
const topRatedButton = document.getElementById('top_rated') as HTMLInputElement;
const upcomingButton = document.getElementById('upcoming') as HTMLInputElement;
const loadMoreButton = document.querySelector('#load-more') as HTMLElement;

const searchForm = document.querySelector('#searchForm') as HTMLFormElement;
const searchInput = document.querySelector('#search') as HTMLInputElement;

const displayPopularMovies = (page: number): void => {
    getPopular(page).then((data) => {
        if (Array.isArray(data)) {
            data.forEach((movie) => {
                if (filmContainer) {
                    filmContainer.innerHTML += moviesMapper(movie);
                }
            });
        }
    });
};

const displayTopRatedMovies = (page: number): void => {
    getTopRated(page).then((data) => {
        if (Array.isArray(data)) {
            data.forEach((movie) => {
                if (filmContainer) {
                    filmContainer.innerHTML += moviesMapper(movie);
                }
            });
        }
    });
};

const displayUpcomingMovies = (page: number): void => {
    getUpcoming(page).then((data) => {
        if (Array.isArray(data)) {
            data.forEach((movie) => {
                if (filmContainer) {
                    filmContainer.innerHTML += moviesMapper(movie);
                }
            });
        }
    });
};

const handleSearch = (event: Event): void => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
        try {
            searchMovie(searchQuery).then((data) => {
                if (Array.isArray(data) && data?.length !== 0) {
                    data.forEach((movie) => {
                        if (filmContainer) {
                            filmContainer.innerHTML += moviesMapper(movie);
                        }
                    });
                } else {
                    filmContainer.innerHTML += `
                    <img src="./src/assets/notFound404.gif" />
                    `;
                }
            });
        } catch (error) {
            console.error('An error occurred while searching for movies:', error);
        }
    }
};

const addToFavorites = (): void => {
    getArrayFromLocalStorage('favorites').forEach((id: number) => {
        getSingleMovie(id).then((movie) => {
            if (filmContainer && movie) {
                favoriteFilmsContainer.innerHTML += moviesMapper(movie);
            }
        });
    });
};

// event handlers
popularButton.addEventListener('click', () => {
    filmContainer.innerHTML = '';
    currentPage = 1;
    displayPopularMovies(currentPage);
});

topRatedButton.addEventListener('click', () => {
    filmContainer.innerHTML = '';
    currentPage = 1;
    displayTopRatedMovies(currentPage);
});

upcomingButton.addEventListener('click', () => {
    filmContainer.innerHTML = '';
    currentPage = 1;
    displayUpcomingMovies(currentPage);
});

searchForm.addEventListener('submit', (e: Event) => {
    filmContainer.innerHTML = '';
    handleSearch(e);
});

loadMoreButton.addEventListener('click', () => {
    currentPage += 1;
    if (popularButton.checked) {
        displayPopularMovies(currentPage);
    } else if (upcomingButton.checked) {
        displayUpcomingMovies(currentPage);
    } else if (topRatedButton.checked) {
        displayTopRatedMovies(currentPage);
    }
});

// initially loading the popular movies
displayPopularMovies(currentPage);
addToFavorites();
