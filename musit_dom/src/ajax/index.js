import ajax from "./ajax";

const params = 'Px6PwzuyoNr%2F9Y48%2BPux2%2FUvbAs7WswCduzwtNxwlvicYdrwximc6lOIxRt%2BvjqT&encSecKey=ca1d54b649dcb65ad90066c5d1661c6d3fafac178035412625ff64622336689e516c6839d95af4cd725c7c5f6a89d5192aa5568fdd09d6bebe0c67797d834a00ba923a314874d7c314a8d091d707aeedfb2737ce5119c529956e0718488c9b0c21ff428f90b71a3e05df4873ae857fc3b36b4013e15176f36ba58a9a4d0b5888'
//https://music.163.com/weapi/personalized/newsong
export const newSong = ()=> ajax('https://music.163.com/weapi/personalized/newsong',{params},'POST')
