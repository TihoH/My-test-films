
import { useQuery } from "react-query";
import { getActorsByFilm } from "../getFilms";


export function useActors( id) {
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["actors", id],
    () => getActorsByFilm(id),
    {
      select: (data) => data.data.cast,
    }
  );

  // useEffect(() => {
  //   if (isSuccess) console.log("data Actors ok");
  // }, [isSuccess]);
  // useEffect(() => {
  //   if (isError) console.log("data Actors ERROR");
  // }, [isError]);

  return { data, isLoading, isSuccess, isError };
}
