import {CRICKET_NEWS} from '../actionTypes'
import {NewsData} from '../data/news'
export const getCricketNews = () => dispatch =>{
    localStorage.getItem('newsInfo', JSON.stringify(NewsData));
    let newsInfo = localStorage.getItem('newsInfo');
    return dispatch({type:CRICKET_NEWS,payload:JSON.parse(newsInfo)})
} 