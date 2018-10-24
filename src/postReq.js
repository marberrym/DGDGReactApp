import url from './globalURL';

let postReq = (path, method, push, pushPath) => {
    fetch(url + path, method)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        push(pushPath);
    })  
}

export default postReq;