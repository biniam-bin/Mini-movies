import React,{useState, useEffect} from 'react';
import {useHomeFetch} from "../hooks/useHomeFetch";
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
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb"
import Spinner from './spinner';
import SearchBar from "./SearchBar";
import Button from "./Button";

function Home() {
    const {state, hero, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state);

    if (error) return <h2>Something was wrong</h2>
    const rand_num = Math.floor(Math.random() * 20);
    return (
        <>
            {
                !searchTerm && hero.results[rand_num] ? 
                
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${hero.results[rand_num].backdrop_path}`}
                    title={hero.results[rand_num].original_title}
                    text={hero.results[rand_num].overview}
                /> : 
                null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>

            <Grid header={searchTerm ? 'Search result for "' + searchTerm + '"' : "popular movies"}>
                {
                    state.results.map((movie) => {
                        return <><Thumb                       
                            key={movie.id}
                            clickable
                            image = {
                                movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: null
                            }
                            movieId={movie.id}
                        /></>
                    })
                }

            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                    <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
                )}       
        </>
    )
}

export default Home
