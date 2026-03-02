const commentPost = () =>{
    const url2 = "https://jsonplaceholder.typicode.com/comments"
    fetch(url2)
    .then((mess) => mess.json())
    .then((com) => {
        //console.log(com);
        displayComment(com);
    })
}  
/* "postId": 1,
"id": 1,
"name": "id labore ex et quam laborum",
"email": "Eliseo@gardner.biz",
"body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium" */
const displayComment = (comments) => {

    //----step-------01-------comment-container 
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML = "";
   comments.forEach ((comment) => {

    //----step--------02-----create element
    const commentCard = document.createElement("div")
    commentCard.innerHTML = `
         <div class="comment-card">
            <h2>${comment.name}</h2>
            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
        </div> 
    `;

    //-----step--3--add commentCard into container
    commentContainer.append(commentCard);
   })
}
//Function call
commentPost();



