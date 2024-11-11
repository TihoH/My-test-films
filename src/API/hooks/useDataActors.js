import axios from "axios";
import { useEffect } from "react";
import { isError, useQuery } from "react-query";
import { getActorsByFilm } from "../getFilms";


export function useActors( id) {
  //   const { data , isLoading , isSuccess , isError } = useQuery({
  //     queryKey: ["actors" , id],
  //     queryFn:() => getActorsByFilm(id),
  //     select: (data) => data.data.cast,
  //     // enabled: isActive,
  //   });
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["actors", id],
    () => getActorsByFilm(id),
    {
      select: (data) => data.data.cast,
    }
  );

  useEffect(() => {
    if (isSuccess) console.log("data Actors ok");
  }, [isSuccess]);
  useEffect(() => {
    if (isError) console.log("data Actors ERROR");
  }, [isError]);

  return { data, isLoading, isSuccess, isError };
}
