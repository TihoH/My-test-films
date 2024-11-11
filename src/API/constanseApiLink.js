


export const NowPlaying = {
    getFunctionApi: function( typeDateFilms){
        return (`https://api.themoviedb.org/3/${typeDateFilms}/now_playing?language=ru&page=1`)
    },
    description: 'получение БАННЕРА для HOME страницы'
}
export const BestRating = {
    getFunctionApi: function( typeDateFilms){
        return (`https://api.themoviedb.org/3/${typeDateFilms}/top_rated?language=ru&page=1`)
    },
    description: 'получение фильмов с лучшим рейтингом '
}
export const getWatchingNowPlay = {
    getFunctionApi: function( typeDateFilms){
        if(typeDateFilms === 'tv'){
                return `https://api.themoviedb.org/3/tv/airing_today?language=ru&page=1`
                
        }else{
            return (`https://api.themoviedb.org/3/${'movie'}/now_playing?language=en-ru&page=1`)
        }
        
    },
    description: 'получение списка рекомендовыных фильмов  ' 
}
export const getUppComming = {
    getFunctionApi: function( typeDateFilms){
        return (`https://api.themoviedb.org/3/${typeDateFilms}/upcoming?language=ru&page=1`)
    },
    description: 'получение списка В ОЖИДАНИИ  ' ,
}
export const HomePopulyar = {
    getFunctionApi: function( typeDateFilms){
        return (`https://api.themoviedb.org/3/${typeDateFilms}/popular?language=ru&page=1`)
    },
    description: ' получение поплярных фильмов для Home страницы ' ,
}

export const getFilmId = {
    description: 'получение подробной инфы о фильме по ID ' ,
    getFunctionApi: function(id , type){
        return (`https://api.themoviedb.org/3/${type}/${id}?language=ru`)
    }
}
export const getFilmIdVideo = {
    description: 'получение Видео для по ID ' ,
    getFunctionApi: function(id , type){
        return (`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`)
    }
}
export const getSimilyarFilm = {
    description: 'получение списка похожих фильмов что сейчас мотрят по ID ' ,
    getFunctionApi: function(id , type){
        return (`https://api.themoviedb.org/3/${type}/${id}/similar?language=ru&page=1`)
        
    }
}
export const getFilmRecommendation = {
    description: 'получение списка рекомендовыных фильмов  по ID ' ,
    getFunctionApi: function(id , type){
        return (`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=ru&page=1`)
        
    }
}
export const getFilmCollaction = {
    description: 'получение подробной инфы КОЛЛЕКЦИИ о фильме по ID ' ,
    getFunctionApi: function(id){
        return (`https://api.themoviedb.org/3/collection/${id}?language=ru`)
    }
}



