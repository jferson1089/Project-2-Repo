# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

React Friends is a Mobile Application that lets you randomly meet new people and favorite your new friends, from all around the World.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

https://randomuser.me/api/?results=100&inc=name,gender,nat,location,picture&noinfo

For this project I have choosen to use randomuser api due to it being free and having unlimited requests. I have chose only certain date to be given back including, name, gender, nat, location, and picture. This particular result has 100 results coming back. May decrease the number to between 5-25 depending on time contraints.

```
{data: {
"results": [
{
"gender": "male",
"name": {
"title": "Mr",
"first": "Bently",
"last": "Clark"
},
"location": {
"street": {
"number": 8311,
"name": "Charles St"
},
"city": "Trout Lake",
"state": "British Columbia",
"country": "Canada",
"postcode": "S1U 6F8",
"coordinates": {
"latitude": "-60.9783",
"longitude": "-160.3348"
},
"timezone": {
"offset": "+5:00",
"description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
}
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/2.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
},
"nat": "CA"


} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

####WireFrame
https://docs.google.com/drawings/d/1Nq3bsfNenszcLFm26oRBppGcT9zuhEJadzLIFC7lJNo/edit?usp=sharing

####React Architecture-
[https://docs.google.com/drawings/d/1YFWB2iq-qtMTws_zr0wpzUxSuu8TGxBK7TgNx3LE1ic/edit?usp=sharing] 

####Time Priority Matrix- 
-https://docs.google.com/drawings/d/1NQeLwiNTL1F5ygiwYDNCkk5fLnQ4q1IxhnZ6Oa1oXd0/edit?usp=sharing


### MVP/PostMVP 

#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Favoriting Users
- Mobile First
- Displaying Users

#### PostMVP 

- Additional styling
- Possible Form Section?
- Any Additonal Features needed 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | Will include the main navigation of the page | 
| Main | This is where users and favorites will render depending on the link | 
| Users| This will display a random amount of users|
| Favorites| This will favorite the random users|


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research | MVP| 2 hrs | 2 hrs | 2 hrs|
| Building Components | MVP | 3 hrs | 	|	|
| Displaying API Data | MVP | 10hrs|  |  |
| Working with API | MVP | 10 hrs|  |  |
| Adding Routes/Links | MVP | 2 hrs |  |	|
|Additional Styling | postMVP | 2 hrs | 	|
| Total | H | 29hrs|  | |

## Additional Libraries
May be using Axios, or Postman to help with fetching api data

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
