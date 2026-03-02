const loadPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      displayPost(data)
    })
}
//part > 03

//-----step--1--get the call me ul-------
const postContainer = document.getElementById('post-container');
console.log(postContainer)
//part > 02
const displayPost = posts => {
  posts.forEach(post => {
    //console.log(post)

    //-----step--2--create element by li-------
    const li = document.createElement('li');
    li.innerText = post.title
    console.log(li)
    //-----step--3--add li into container-------
    postContainer.appendChild(li);
  })
}
