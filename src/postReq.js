import url from './globalURL';

let postReq = (path, method, cb1, cb2) => {
    fetch(url + path, method)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        cb1()
        cb2()
    })  
}

export default postReq;