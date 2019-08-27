import ajax from "./ajax";
//localhost:3000/personalized?limit=6
export const  Recommend = ()=>ajax('http://localhost:4000/personalized?limit=6')
export const  NewSong = () =>ajax('http://localhost:4000/personalized/newsong')
export const  Ranking = () =>ajax('http://localhost:4000/top/list?idx=1')  
export const  Search = (keywords) => ajax('http://localhost:4000/search',{keywords})
export const  Album = (type,keywords)=>ajax('http://localhost:4000/search/suggest',{type,keywords})
export const  Songs = (id) =>ajax('http://localhost:4000/song/url',{id})
export const  Check = (id) =>ajax('http://localhost:4000/check/music',{id})
export const  Comment = (id) =>ajax('http://localhost:4000/comment/music',{id})
export const  Lyric = (id) => ajax('http://localhost:4000/lyric',{id})
export const  Detail = (ids) => ajax('http://localhost:4000/song/detail',{ids})
export const  HotList = ()=>ajax('http://localhost:4000/search/hot')
export const  Playlist = (id)=>ajax('http://localhost:4000/playlist/detail',{id})
export const  Cplaylist = (id)=>ajax('http://localhost:4000/comment/playlist',{id}) 
export const  Centext = (id)=>ajax('http://localhost:4000/album',{id})
export const  CentextComment=(id)=>ajax('http://localhost:4000/comment/album',{id})
///comment/playlist?id=705123491 
//http://localhost:4000/playlist/detail?id=2767811922
///lyric?id=33894312
///comment/album?id=32311