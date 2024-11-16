import { useQueries, useQuery } from "react-query";
import {
  gatDataFilm,
  getCommetnsJsonPlaceholder,
  getDataById,
  getDataByIdCollaction,
  getGenre,
} from "../getFilms";
// import { getFilmCollaction } from "../constanseApiLink";

// Get data by id
export function useGetDataByID(getTitle, id, apiFunction, type) {
  const { data } = useQuery(
    [`${getTitle}`, { id, type }],
    () => getDataById(id, apiFunction, type),
    {
      select: (data) => data.results,
    }
  );

  return data;
}
// END GET DATA BY ID

// start genre
export function useGetGanres(type) {
  const { data } = useQuery(["ganre", type], () => getGenre(type), {
    select: (data) => data.genres
  });

  return { data };
}
// END GENRE

// start get video
export function useGetVideo(getFilmIdVideo, type, id) {
  const { data } = useQuery(
    ["getVideo", type, id],
    () => gatDataFilm(getFilmIdVideo.getFunctionApi(id, type)),
    {
      select: (data) => data.results
    }
  );
  // console.log(data?.results.find((item) => item.type === "Trailer")) 
  return data?.find((item) => item.type === "Trailer");
}
// END GET VIDEO

// start get comments
export function useGetComments(randomNum) {
  const { data } = useQuery(
    ["commetns"],
    () => getCommetnsJsonPlaceholder(randomNum),
    {
      select: (data) => data.data,
    }
  );

  return { data };
}
// END GET COMMENTS

// start get collactions film
export  const useGetCollactions = (
  currentFilmCollactionId,
  getFilmCollaction
) => {
    const { data } =  useQuery(
      ["getCollaction", currentFilmCollactionId],
      () => getDataByIdCollaction(currentFilmCollactionId, getFilmCollaction)
    );
    // console.log(data)
    return data?.parts.sort((a, b) => a.release_date - b.release_date)
  // }else{
  //   return data?.parts
  // }
};
// END GET COLLACCTIONS FILM

// start на странице HOME все 4 запроса - (поплуярные , сейчас смотрят и.т)
export function useGetDataApi(nameGetByQuery, nameLink , typeDateFilms) {
  const {data} = useQuery( [nameGetByQuery , typeDateFilms] , () => gatDataFilm(nameLink.getFunctionApi(typeDateFilms)) , {
    select: data => data.results
  } ,  )
  // const response = gatDataFilm( nameLink.getFunctionApi(typeDateFilms));
  // setState(response.results);
  return data
}

// END НА СТРАНИЦЕ HOME ВСЕ 4 ЗАПРОСА - (поплуярные , сейчас смотрят и.т)
