 // ata optional   
const loadData = () => {
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then((res) => res.json())
 .then((data) => console.log(data))
};


const loadPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      displayPost(data)
    });
};

const displayPost = (posts) => {

  //----step-------01-------post-container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
posts.forEach ((post) => {

  //----step--------02-----create element
  const postCard = document.createElement("div");
  postCard.innerHTML = `
    <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
  `;
   //-----step--3--add postCard into container
  postContainer.append(postCard)
});
};
loadPost(); // Function call




 