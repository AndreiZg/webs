import React from "react";
import img1 from  '../assets/images/first-image.jpg'
import img2 from  '../assets/images/second-image.jpg'
import img3 from  '../assets/images/third-image.jpg'
import img4 from  '../assets/images/fourth-image.jpg'
import img5 from  '../assets/images/fifth-image.jpg'
import ProfileImage from  '../assets/images/profile-image.jpg'

const newsData = [{
    id: 1,
    profileImg:ProfileImage,
    name: "Agnieszka Malwa",
    profession: "Designer",
    date:"5.04.2024 / 12:21",
    imgSrc:'',
    title:"Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
    description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
},
    {
        id: 2,
        profileImg:ProfileImage,
        name: "Agnieszka Malwa",
        profession: "Designer",
        date:"5.04.2024 / 12:21",
        imgSrc:'',
        title: "Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
        description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
    },
    {
        id: 3,
        profileImg:ProfileImage,
        name: "Agnieszka Malwa",
        profession: "Designer",
        date:"5.04.2024 / 12:21",
        imgSrc:'',
        title: "Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
        description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
    },
    {
        id: 4,
        profileImg:ProfileImage,
        name: "Agnieszka Malwa",
        profession: "Designer",
        date:"5.04.2024 / 12:21",
        imgSrc:'',
        title: "Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
        description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
    },
    {
        id: 5,
        profileImg:ProfileImage,
        name: "Agnieszka Malwa",
        profession: "Designer",
        date:"5.04.2024 / 12:21",
        imgSrc:'',
        title: "Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
        description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
    },
    {
        id: 6,
        profileImg:ProfileImage,
        name: "Agnieszka Malwa",
        profession: "Designer",
        date:"5.04.2024 / 12:21",
        imgSrc:'',
        title: "Do Netflix, HBO, Spotify, Twitter, Hulu, Apple and Google agree with the designers' advice?",
        description:"The author discusses whether you should listen to and adhere to the advice and recommendations of other designers about what to design and how to design. In his article, he gives examples of how industry giants do things that contradict generally accepted standards.",
    }
]

const NewsCards = () =>{
    return(
       <>
           {newsData.map(({ id, profileImg, name,profession,date,imgSrc,title,description }) => (
               <div key={id} className="card-item">
                   <div className="card-wrapper">
                       <div className="profile">
                           <ul className='profile-items image'>
                               <div className='profile-image'>
                                   <img src={profileImg}/>
                               </div>
                           </ul>
                           <ul className='profile-items'>
                               <li className='profile-name'>{name}</li>
                               <li className='profile-profession'>{profession}</li>
                           </ul>
                           <ul className='profile-items news'>
                               <li className='profile-news'>News to Design</li>
                               <li className='profile-date'>{date}</li>
                           </ul>
                       </div>
                       <div className="card-image">
                           <img src={imgSrc}/>
                       </div>
                       <div className="profile-card__title">
                           <p>{title}</p>
                       </div>
                       <div className="profile-card__description">
                           <p>{description}</p>
                       </div>
                   </div>
               </div>
           ))}
       </>
    )
}

export default NewsCards;