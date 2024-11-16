import axios from "axios";
import { sortApiType } from "./functionByApi";




export const key =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg0MDliMGMwYjZkOTdjNzJiMGY1Y2E0YzRlMjQ4ZSIsIm5iZiI6MTczMDIxODE3Ni42NzU2MzEsInN1YiI6IjY3MjEwNjk2NGJlMTU0NjllNzBlNzkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G_9qTXnglvt51GT4xZH1qXPpimY-aFAmmle4FibAqT8";

  export const getCommetnsJsonPlaceholder = async (randomNum) => {
    return await axios(
      `https://jsonplaceholder.typicode.com/comments?_limit=${randomNum}`,
    );
  };

  export async function getDataById(id , dataLink , type) {

    try {
      const response = await axios(dataLink.getFunctionApi(id ,  type ? sortApiType(type) : ''  ), {
        headers: {
          accept: "application/json",
          Authorization: key,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  
export const getActorsByFilm = async (id) => {
  return await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=ru`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg0MDliMGMwYjZkOTdjNzJiMGY1Y2E0YzRlMjQ4ZSIsIm5iZiI6MTczMTE1MTkyNS45MDE1OTY4LCJzdWIiOiI2NzIxMDY5NjRiZTE1NDY5ZTcwZTc5MGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lWmHYBGmiPyN3Wg8b0G4beGf2Y07RYiU0tNKFJP4swo",
      },
    }
  );
};


  export async function getDataByIdCollaction(id , dataLink) {
    try {
      const response = await axios(dataLink.getFunctionApi(id), {
        headers: {
          accept: "application/json",
          Authorization: key,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


export async function gatDataFilm(link) {
  const response = await axios(`${link}`, {
    headers: {
      accept: "application/json",
      Authorization: key,
    },
  });
  return response.data;
}

export async function getSearchFilms(dataValue , pageLimit , currentTypeSearch) {
  try {
    if (dataValue) {
      const response = await axios(
        `https://api.themoviedb.org/3/search/${currentTypeSearch}?query=${dataValue}&include_adult=false&language=ru&page=${pageLimit}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: key,
          },
        }
      );
      return response.data;
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getGenre(type) {  
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/genre/${ type === 'Tv-serials' ? 'tv' : 'movie' }/list?language=ru`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: key,
        },
      }
    );
    return response.data;
  } catch (error) {}
}


export async function getCategories(id , pageFilms , typeLink , defaultYaer) {
  const nameLinks = [
    {name: 'movie' , link: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru&page=${pageFilms}&sort_by=popularity.desc`},
    {name: 'Tv-serials' , link: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ru-US&page=${pageFilms}&sort_by=popularity.desc`}
  ]
  function sortApiLinks(typeLink){
    if(typeLink === 'movie'){
      return nameLinks[0].link
    }
    return nameLinks[1].link
  }
  try {
    const response = await axios(
      sortApiLinks(typeLink),
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: key,
        },
        params: {
          with_genres: id ,
          page: pageFilms ,
          primary_release_year: defaultYaer ,
          first_air_date_year: defaultYaer
        }
      }
    );
    return response.data;
  } catch (error) {}
}

// END NEW