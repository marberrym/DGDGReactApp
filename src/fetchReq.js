import url from './globalURL';

let fetchReq = (path, method, push, pushPath, dispatch) => {
    fetch(url + path, method)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if (res.action) {
            dispatch({type: res.action, data: res.data})
        }
        if (res.token) {
            window.localStorage.setItem('token', res.token)
        }
        push(pushPath);
    })  
}


export default fetchReq;