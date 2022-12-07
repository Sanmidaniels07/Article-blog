const baseurl = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";



const createForm = document.getElementById("createForm");

const author = document.getElementById("author");

const title = document.getElementById("title");

const newsurl = document.getElementById("newsurl");

const avatarurl = document.getElementById("avatarurl");



const submitNews = async() => {

    let body = {

        author:author.value.trim(),

        title: title.value.trim(),

        avatar: avatarurl.value.trim(),

        url: newsurl.value.trim(),



    };

    try{

        let response = await fetch(`${baseurl}/news`,

        {
            method:"POST",

            body: JSON.stringify(body),

            headers: {

                "Content-Type" : "application/json"

            },

        });



        let jsonRes = await response.json();

        console.log(jsonRes); 

        alert("News created successfully");

        window.location.replace("/");

    } catch (error) {

        console.log(error);

        alert(error);

}

};



createForm.addEventListener("submit", function(e){

e.preventDefault();

submitNews();

});