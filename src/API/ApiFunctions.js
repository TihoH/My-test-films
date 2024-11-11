
import { getFilmIdVideo } from "./constanseApiLink";
import { getDataById, getGenre } from "./getFilms";

export async function FunctionGetData( setData ,  id , apiFunction , type ){
    const response = await getDataById(id, apiFunction , type);
    setData(response.results);
    return setData
  };

export async function getTypeGanre(setData , type ){
  const response = await getGenre(type);
  setData(response.genres)
}
export async function getTraillerFilm(setData ,getFilmIdVideo , type , id ){
  // const response = await getGenre(type);
  // setData(response.genres)
  const response = await getDataById(id, getFilmIdVideo , type);
  const findOfficial = response.results.find(
    (item) => item.type === "Trailer"
  );
  setData(findOfficial);
}
  

export function sortNameganresItem(item , genres)  {
  const newArr = [];
  if (item) {
    item.map((itemMap) => {
      genres.find((elem) => {
        if (itemMap === elem.id) {
          newArr.push(elem.name);
        }
      });
    });

    return newArr
  }
  return 'Не указано'
}
