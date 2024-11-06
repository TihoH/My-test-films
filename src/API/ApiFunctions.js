import { getFilmCollaction } from "./constanseApiLink";
import { gatDataFilm, getDataById, getGenre } from "./getFilms";

export async function FunctionGetData( setData ,  id , apiFunction , type ){
    const response = await getDataById(id, apiFunction , type);
    setData(response.results);
    return setData
  };

export async function getTypeGanre(setData , type ){
  const response = await getGenre(type);
  setData(response.genres)
}
  
