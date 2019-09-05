/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https:api.github.com/users/tetondan' ,
  'https:api.github.com/users/dustinmyers' ,
  'https:api.github.com/users/justsml' ,
  'https:api.github.com/users/luishrd' ,
  'https:api.github.com/users/bigknell',
  'https:api.github.com/users/dylanmestyanek',
  'https:api.github.com/users/jeremyRogel',
  'https:api.github.com/users/brandybecker',
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const container=document.querySelector('.cards');
 
axios.get('https://api.github.com/users/J-man2015')
 .then((response)=>{
  console.log('this is the response:', response.data );
  
     container.appendChild(cardBuilder(response.data))
    
  })
 .catch((error)  =>{
   
   console.log(error);
   console.log('error')
 })


  followersArray.forEach((link)=>{
  //  console.log(axios.get(followersArray[]))
  axios.get(link)
  .then((response) =>{
    console.log(response.data);
    container.appendChild(cardBuilder(response.data));
  })
    // console.log(i);
// .then(() =>{
//       container.appendChild(cardBuilder(response.data))
//   })
// .catch((error)=>{
//   console.log(error);
//   console.log('nah son');
// })
})





  function cardBuilder(response){
    // create elements
      const card= document.createElement('div');
      const userImage= document.createElement('img');
      const cardInfo=document.createElement('div');
      const userName=document.createElement('h3');
      const githubName=document.createElement('P');
      const userlocation=document.createElement('p');
      const profileUrl=document.createElement('p');
      const url=document.createElement('a');
      const numfollowers=document.createElement('p');
      const numfollowing=document.createElement('p');
      const userbio=document.createElement('p');
    // add classes
     card.classList.add('card');
     cardInfo.classList.add('card-info');
     userName.classList.add('name');
     githubName.classList.add('username');
    
    userImage.src= response.avatar_url;
    userName.textContent= response.name;
    githubName.textContent=response.login;
    userlocation.textContent=`location: ${response.location}`;
    profileUrl.textContent= `Profile:`;
    url.href= response.html_url;
    url.textContent= response.html_url;
    numfollowers.textContent=`followers: ${response.followers}`;
    numfollowing.textContent= `following: ${response.following}`;
    userbio.textContent= response.bio;

    //  structure elements
    card.appendChild(userImage);
    card.appendChild(cardInfo);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(githubName);
    cardInfo.appendChild(userlocation);
    cardInfo.appendChild(profileUrl);
    cardInfo.appendChild(numfollowers);
    cardInfo.appendChild(numfollowing);
    cardInfo.appendChild(userbio);
    profileUrl.appendChild(url);
    // text content and attributes
    
    // return
    return card;
 }


//  cardBuilder();
//  container.appendChild(cardBuilder(response.data.avatar_url,response.data.name,response.login,response.location,response.html_url,response.followers,response.data.following,response.data.bio));
