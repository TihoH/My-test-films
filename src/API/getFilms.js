import axios from "axios";
import { getFilmCollaction } from "./constanseApiLink";
import { sortApiType } from "./functionByApi";

const API_KEY_1 = "PS7GEJ2-TXT4E0H-JJXDKK8-HY801SE";

const apiKey = API_KEY_1;
const NotApiKey2 = apiKey;

const key =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg0MDliMGMwYjZkOTdjNzJiMGY1Y2E0YzRlMjQ4ZSIsIm5iZiI6MTczMDIxODE3Ni42NzU2MzEsInN1YiI6IjY3MjEwNjk2NGJlMTU0NjllNzBlNzkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G_9qTXnglvt51GT4xZH1qXPpimY-aFAmmle4FibAqT8";

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

export async function getSearchFilms(dataValue) {
  try {
    if (dataValue) {
      const response = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${dataValue}&include_adult=false&language=ru&page=${1}`,
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
  // const genreTv = 'https://api.themoviedb.org/3/genre/tv/list?language=ru'
  // const genreMovie = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/genre/${ type === 'Movie' ? 'movie' : 'tv' }/list?language=ru`,
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
    {name: 'Movie' , link: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru&page=${pageFilms}&sort_by=popularity.desc`},
    {name: 'Tv-serials' , link: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ru-US&page=${pageFilms}&sort_by=popularity.desc`}
  ]
  function sortApiLinks(typeLink){
    if(typeLink === 'Movie'){
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
    console.log(response.data)
    return response.data;
  } catch (error) {}
}


// export async function getCategories(
//   categories,
//   limit,
//   currentTypeFilms,
//   yaers,
//   sortRating
// ) {
//   try {
//     const response = await axios(
//       `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${limit}&type=${currentTypeFilms}&notNullFields=poster.url&${
//         categories === "все" ? "" : `&genres.name=${categories}`
//       }${yaers != undefined ? `&year=${yaers}` : ""}&${
//         sortRating.sort
//           ? `sortField=votes.${sortRating.sort}&sortType=-1&rating.${sortRating.sort}=2-10 `
//           : undefined
//       }  `,
//       {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: key,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// END NEW

export async function getProductionFilms() {
  const response = await axios(
    "https://api.kinopoisk.dev/v1.4/movie?page=1&notNullFields=backdrop.url&limit=10&networks.items.name=Netflix",
    {
      method: "GET",
      headers: { accept: "application/json", "X-API-KEY": NotApiKey2 },
    }
  );
  return response.data;
}


// sortField=votes.imdb&sortType=1&rating.imdb=2-10
// export async function getCategories(
//   categories,
//   limit,
//   currentTypeFilms,
//   yaers,
//   sortRating
// ) {
//   try {
//     const response = await axios(
//       `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${limit}&type=${currentTypeFilms}&notNullFields=poster.url&${
//         categories === "все" ? "" : `&genres.name=${categories}`
//       }${yaers != undefined ? `&year=${yaers}` : ""}&${
//         sortRating.sort
//           ? `sortField=votes.${sortRating.sort}&sortType=-1&rating.${sortRating.sort}=2-10 `
//           : undefined
//       }  `,
//       {
//         method: "GET",
//         headers: { accept: "application/json", "X-API-KEY": apiKey },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// {sortRating ? `&sortField=votes.${sortRating.sort}` : undefined  }

export async function getAllFilms(limit, currentTypeFilms) {
  try {
    const response = await axios(
      `'https://api.kinopoisk.dev/v1.4/movie?page=1&${limit}&type=${currentTypeFilms}&`,
      {
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": apiKey },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCommentsFilm(id, limitComments) {
  try {
    const response = await axios(
      `https://api.kinopoisk.dev/v1.4/review?page=1&limit=${limitComments}&movieId=${id}`,
      {
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": NotApiKey2 },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

  // export async function getPhoto(id) {
  //   try {
  //     const response = await axios(
  //       getPhotoFilm.getFunctionApi(id),
  //       {
  //         headers: {
  //           accept: "application/json",
  //           Authorization: key,
  //         },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }