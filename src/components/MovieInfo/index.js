import React from "react"
import Thumb from "../Thumb"
import { Wrapper, Content, Text } from "./MovieInfo.styles"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config"
import NoImage from "../../images/no_image.jpg";
import {calcTime, convertMoney} from "../../helpers"


const MovieInfo = ({movie, time, budget, revenue}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                image={
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : <NoImage/>
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>

                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                        {
                            movie.directors.map((director) => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="info">
                    <div className="column">
                        <p>Time: {calcTime(time)}</p>
                    </div>
                    <div className="column">
                        <p>Budget: {convertMoney(budget)}</p>
                    </div>
                    <div className="column">
                        <p>Revenue: {convertMoney(revenue)}</p>
                    </div>
                </div>
            </Text>

        </Content>
    </Wrapper>
)

export default MovieInfo;