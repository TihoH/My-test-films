export function sliceData(release_date){
    const newData = release_date.slice(0 , 4)
    return newData
  }



  export function sortApiType(type){
    const apiType = [
      {name: 'movie' , typeLink: 'movie'} ,
      {name: 'Tv-serials' , typeLink: 'tv'} ,
      {name: 'Мультфильмы' , typeLink: 'tv'} ,
    ]
    
  
    const findApiType = apiType.find( item => item.name === type  ) 
    return findApiType.typeLink
  }
  