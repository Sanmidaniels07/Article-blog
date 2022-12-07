var url_string = window.location.href;
var url = new URL(url_string)
const baseurl = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";


const get_id = () => {
   return ( url.searchParams.get('id') );
}


const getSingleNews = async (id) => {
    try{
  
      const response =await fetch(`${baseurl}/news/${id}`);
      const newsData= await response.json();
      displayNewsDetails(newsData);
  
    }catch (error){
      console.log(error);
  
    }
  };

const displayNewsDetails = (data)  => {
 var title = document.getElementById("newsTitle");
 var url = document.getElementById("url");
 var author =document.getElementById("author");
 title.innerHTML= data.title;
 author.innerText=  `Published by ${data.author}`;
 url.innerText= data.url;
 
 };
  
  

window.onload=getSingleNews(get_id());



// const comment_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/1/comments"

// var url_string = window.location.href;
// var url = new URL(url_string)
// const getComment = async (id) => {
//   try{

//     const response =await fetch(`${comment_url}/news/${id}`);
//     const newsData= await response.json();
//     displayComment(newsData);

//   }catch (error){
//     console.log(error);

//   }
// };

// const displayComment = (data)  => {
//   var avatar = document.getElementById("newsTitle");
 
//   var comment =document.getElementById("comment");
  
//   comment.innerText= data.comment;
  
//   };
   
   