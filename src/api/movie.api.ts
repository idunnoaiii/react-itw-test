import { BasePagedResponse } from "@/types/base.type";
import api from "./api";
import { Movie } from "@/types/movie";

export const fetchMovies 
    = async (page: number) => api.get<BasePagedResponse<Movie>>(`/discover/tv?language=en-US&sort_by=popularity.desc&page=${page}&timezone=America/New_York&include_null_first_air_dates=false&api_key=92b418e837b833be308bbfb1fb2aca1e`)
    .then((res) => res.data.results)