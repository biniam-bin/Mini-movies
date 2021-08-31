import React from 'react'
import {useParams} from "react-router-dom"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config"
import Grid from "./Grid"
import Spinner from "./spinner"
import { useMovieFetch } from '../hooks/useMoviesFetch'

import BreadCrumb from "./BreadCramb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"


function Movie() {
    const {movieId} = useParams()
    const {state: movie, loading, error} = useMovieFetch(movieId);

    if (loading) return <Spinner/>
    if (error) return <div className=""> Something is wrong</div>


    return (
        <div>
            {/*<BreadCrumb movieTitle={movie.original_title}/>*/}
            <MovieInfo time={movie.runtime} budget={movie.budget} revenue={movie.revenue} movie={movie}/>
            {/*<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>*/}
        </div>
    )
}

export default Movie
