// const API_KEY_2 = "S3QYS4T-TGA4TVF-GMAZQZW-6PNQF3C";
// const API_KEY_3 = "TSNEM14-J1Z4G0J-KJPZZQJ-EA91327";
// const API_KEY_4 = "0DM1GRG-9P64MRF-PA3B7AN-4ZCYPM4";
// const API_KEY_5 = "DNE8BQE-HJP46WE-JR5SK3C-DT7K7C8";
// const API_KEY_6 = "GDXMN29-DNA4VVG-QX75EZN-8VH2FZK";
// const API_KEY_7 = "7XR325X-6TJ4A2W-HDMEW7M-C0Y43BJ";


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
    // https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1
    getFunctionApi: function( typeDateFilms){
        if(typeDateFilms === 'tv'){
            console.log(typeDateFilms)
                return `https://api.themoviedb.org/3/tv/airing_today?language=ru&page=1`
                
        }else{
            console.log(typeDateFilms)
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



