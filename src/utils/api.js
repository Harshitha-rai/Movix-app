import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzNhMGI5ZWYxNTZmM2NmNzE0MWFhMWIzMWU5YWYxYiIsInN1YiI6IjY1YWZjNmQ2M2UyZWM4MDBjYjZkOTdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqJn_mY6a42RzNmXdPrB2T38B7ENj8IZBpjsWk8KDkY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch (err) {
        console.log(err);
        return err;
    }
}