import {useState, useEffect} from 'react';
import API from "../API";
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
  } from "../../src/config";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}


export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState);
    const [hero, setHero] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false)


    const fetchMovies = async (page, searchTerm="") => {
        try{
            setError(false)
            setLoading(true)
            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies,
                results:
                  page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
            setLoading(false)
        }catch(error) {
            setError(true)
        }
    }



    const fetchHero = async (page, searchTerm="") => {
        try{
            setError(false)
            setLoading(true)
            const movies = await API.fetchMovies(searchTerm, page)

            setHero(prev => ({
                ...movies,
                results:
                  page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        }catch(error) {
            setError(true)
        }
    }
    
    useEffect(() => {
        setState(initialState)
        fetchMovies(1, searchTerm);
        const rand = Math.floor(Math.random() * 8);

        fetchHero(rand)
    },[searchTerm])


    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page])

    return {state, hero, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};

}