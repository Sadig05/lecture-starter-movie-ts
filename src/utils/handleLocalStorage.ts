export const saveInLocalStorage = (id: number): void => {
    const favorites = localStorage.getItem('favorites');
    const favoritesSet = favorites ? new Set(JSON.parse(favorites)) : new Set();
    favoritesSet.add(id);
    const favoritesArray = Array.from(favoritesSet);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
};

export const removeFromLocalStorage = (id: number): void => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
        const favoritesArray = JSON.parse(favorites);
        const index = favoritesArray.indexOf(id);
        if (index !== -1) {
            favoritesArray.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        }
    }
};

export const getArrayFromLocalStorage = (key: string): number[] => {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            const parsedArray = JSON.parse(item);
            if (Array.isArray(parsedArray)) {
                return parsedArray;
            }
        }
    } catch (error) {
        console.error('error:', error);
    }
    return [];
};
