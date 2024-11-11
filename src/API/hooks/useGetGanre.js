import { useQuery } from "react-query";
import { getGenre } from "../getFilms";

export function useGetGanres(type){
    const {data} = useQuery( ['ganre' , type] , () => getGenre(type) , {
        select: data => data.genres
    } )

    return {data}
}




// export async function getTypeGanre(setData , type ){
//     const response = await getGenre(type);
//     setData(response.genres)
//   }