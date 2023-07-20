import { removeFromLocalStorage, saveInLocalStorage } from './handleLocalStorage';

export const toggleHeart = (event: Event): void => {
    const clickedIcon = event.target as HTMLElement;
    const movieId = clickedIcon.getAttribute('id');
    const isFilled = clickedIcon.getAttribute('fill') === 'red';
    clickedIcon.setAttribute('fill', isFilled ? '#ff000078' : 'red');

    if (isFilled) {
        removeFromLocalStorage(Number(movieId));
        clickedIcon.setAttribute('fill', '#ff000078');
    } else {
        saveInLocalStorage(Number(movieId));
        clickedIcon.setAttribute('fill', 'red');
    }
};
