export const getData = () => {
    return fetch('https://dummyjson.com/comments')
    .then(resp => resp.json())
}