import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title:  "Pharmacy.com Clone",
    desc: "India's Most Preferred E-Commers Medicines With Up To 85% Discount. Get Speciality Medicines for Cancer, Hiv/Aids, Kidney Care, Hepatitis and More. Services: Cash on Delivery, Timely Delivery, Genuine Medicines.",
    techStack: "React | Redux | Axios | Nodejs | Expressjs | Authantications | Chakra-UI",
    feature:
      " Fully E-Commerce website with lots of feature Sign up, Sign In, Sign Out, Navbar with Drop-down Menu,  All the static Page, product page",
    img: "pharm.png",
    clone: "https://github.com/actuallyakshay/skinny-leg-3425",
    deploy: "https://client-rho-inky.vercel.app/",
  },

 
  {
    title: "Mindtickle",
    desc: "  Mindtickle is a Sales Readiness Platform for onboarding, product training, coaching and ongoing readiness, that helps fast growing companies to prepare their sales teams and partners in a scalable and effective way.",
    techStack:
      "HTML  |  CSS  |  JavaScript",
    feature:
      "Sign In, Sign Up and Dynamic Pages",
    img: "MINDTICKLE.png",
    clone: "https://github.com/Supriyakaa/moving-party-2070",

    deploy: "https://gleaming-marigold-54711f.netlify.app/",
  },

  {
    title: "Freshly.com",
    desc: "Freshly is a weekly subscription that delivers fresh meals—all developed by our team of chefs and nutritionists. They're fully cooked and shipped to you fresh, not frozen, so all you need to do is reheat and enjoy following the instructions on the back of each meal sleeve",
    techStack: "React | Redux | Axios | Nodejs | Chakra-UI",
    feature:
      " E-Commerce website for food ordering, Sign In, Sign Out, Navbar with Drop-down Menu, Static Page, Button and Payment Page",
    img: "fresh.png",
    clone: "https://github.com/Supriyakaa/Freshly-Website-Clone",
    
    deploy: "https://sophisticated-legs-486.netlify.app/",
  },
  {
    title: "Apple TV Clone",
    
    desc: "This is a clone of Apple TV. Website was built with all features.",

    techStack: "HTML | CSS | ReactJS | ChakraUI ",
    feature:
      " Login Page ,Sign-Up Page , HomePage, VideoPlayer. This is an individual project built in 3 days.",
    img: "Apple_TV.png",
    clone: "https://github.com/Supriyakaa/polite-sheep-7319",
    deploy: "https://effervescent-chebakia-a945a1.netlify.app",
  },
  {
    title: "INDIA TODAY",
    desc: "India Today is a weekly Indian English-language news magazine published by Living Media India Limited.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Dynamic Page, Button and Payment Page",
    img: "NEWS.png",
    clone: "https://github.com/Supriyakaa/Project/tree/master/Project",
    deploy: "https://stellular-yeot-3906c1.netlify.app/",
  },
 

  
];

export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {data.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
