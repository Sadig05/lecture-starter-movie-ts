import { IMovie } from '../types';

const apiKey = 'd7788c8ab47d50933b4a777529471e37';
const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzc4OGM4YWI0N2Q1MDkzM2I0YTc3NzUyOTQ3MWUzNyIsInN1YiI6IjYzYjUyYTM4MWQxYmY0MDA4MjhhMzYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fMUYzlYdWm32L3imMf3z3wC11gHamNqlQqPtiVfR8c';
// const urlPopular = `https://api.themoviedb.org/3/movie/popular?page=&api_key=${apiKey}`;

export const getPopular = async (page: number): Promise<Array<IMovie> | undefined> => {
    const urlPopular = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${apiKey}`;
    try {
        const response = await fetch(urlPopular);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log('error: ', err);
        return undefined;
    }
};

export const getTopRated = async (page: number): Promise<Array<IMovie> | undefined> => {
    const urlPopular = `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=${apiKey}`;
    try {
        const response = await fetch(urlPopular);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log('error: ', err);
        return undefined;
    }
};

export const getUpcoming = async (page: number): Promise<Array<IMovie> | undefined> => {
    const urlPopular = `https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=${apiKey}`;
    try {
        const response = await fetch(urlPopular);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log('error: ', err);
        return undefined;
    }
};

export const searchMovie = async (name: string): Promise<Array<IMovie> | undefined> => {
    const urlPopular = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`;
    try {
        const response = await fetch(urlPopular);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log('error: ', err);
        return undefined;
    }
};

// IMPORTANT: There was an issue with API key authentication, resulting in 401 errors.
// As a solution, I switched to using an access token instead of the API key.
// Note: Api key causes error only in this api
export const getSingleMovie = async (id: number): Promise<IMovie | undefined> => {
    const urlPopular = `https://api.themoviedb.org/3/movie/${id}`;
    try {
        const response = await fetch(urlPopular, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};
