    
const loadData = () => {
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then((res) => res.json())
 .then((data) => console.log(data))
};

//part > 02
/* const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        displayPost(json);
    })
};

const displayPost = (posts) => {
    posts.forEach((post) => {
        console.log(post);
    })
        

} */
//optinol part > 00
/*  const commentPost = () =>{
    const url2 = "https://jsonplaceholder.typicode.com/comments"
    fetch(url2)
    .then((mes) => mes.json())
    .then((son) => console.log(son))
}  */