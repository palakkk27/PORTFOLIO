AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development Intern & Campus Ambassador",
    cardImage: "assets/images/lyriclious.jpg",
    place: "Lyriclious - Learn with Us",
    time: "(October, 2021 - March 2022)",
    desp: "<li>Worked on static website and learned about new things on web development</li> <li>Made clone of NYKAA - E COMMERCE WEBSITE.</li><li>Achieved Golden Level and earned a free training of web development</li> ",
  },
  {
    title: "Web development Intern",
    cardImage: "assets/images/LGM.jpg",
    place: "Lets Grow More",
    time: "(August 2022 - September 2022)",
    desp: "<li>1 Month Internship for Web Development.</li><li>Build 3 projects using HTML , CSS , JS.</li>",
  },

  {
    title: "Member of Database Management Team",
    cardImage: "assets/images/gfg.png",
    place: "Geeks for Geeks",
    time: "(March 2021 - April 2022)",
    desp: "Conducted a hackathon name geek week local and managed the data of all the participants on MS Excel ",
  }
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// // Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
  
  
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "SMART INDIA HACKATHON ",
    subtitle: "FINALIST at the national level",
    image: "assets/images/sih.jpg",
    desp: "Smart India Hackathon is a nationwide initiative to provide students a platform to solve some of pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving & it is the 48hrs long hackathon . I and my team qualified all 4 stages and then made it to the finals",
    href: "https://www.sih.gov.in/",
  },
  {
    title:"SIMPL CHALLENGE HACKTHON",
    subtitle: "Winner - were awarded with the cash prize of 50,000Rs + Trophy + Goodies",
    image: "assets/images/simpll.png",
    desp: "It was organised by and at IIT-B TECHFEST between16-18thdec .In this competition, participants are required to design a platform that can tackle the major challenges faced during online shopping.The ultimate aim is to enhance the online shopping experience for the consumers and drive conversions for the merchants.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7017401654685634560/",
  },
  {
    title: "Coding hearts Workshop + Hackathon",
    subtitle: "Participant",
    image: "assets/images/gfg.png",
    desp: "It was the workshop plus hackathon where making of text speech bot was taught using python . I named my bot as jarvis.",
    href: "",
  },
  {
    title: "MLH ",
    subtitle: "Participant",
    image: "assets/images/mlh.png",
    desp: "MLH is a 500k+ global community empowering the next generation of developers to learn through hackathons and the Open Source MLH Fellowshipwas and I was in top 2% of the leaderboard but learned a lot from this hackathon",
    href: "https://mlh.io/seasons/2023/events",
  },
  {
    title: "Hack The Terminal",
    subtitle: "Participant",
    image: "assets/images/htt.png",
    desp: "It was a 2 days hackathon of creating hacks, solving problems, building profiles and many more where we were required to present it in the form of a 3-minute explanatory video, which will be judged on the basis of the idea, comments, prototype, code efficiency, and presentation. ",
    href: "https://hacktheterminal.devpost.com/",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);