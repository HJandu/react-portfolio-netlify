import Llift from '../../assets/images/first_home.jpg'
import hungry from '../../assets/images/main-homescren.jpg'
import planner from '../../assets/images/front_screen.jpg'
import weather from '../../assets/images/weather_output.jpg'
import read from '../../assets/images/readme1.png'
import quiz from '../../assets/images/codingQ.png'

const projects = [
    {
        "id": 1,
        "name": "LyricLift",
        "image": Llift,
        "description": "LyricLift is a web application that translates foriegn lyrics into English.",
        "repo": "https://github.com/HJandu/LyricLift",
        "deployed": "https://lyriclift.netlify.app/"
      },
      {
        "id": 2,
        "name": "Hungry!",
        "image": hungry,
        "description": "A web application that allows users to search for recipes based on the ingredients they have at home.",
        "repo": "https://github.com/HJandu/Hungry_web_app",
        "deployed": "https://hjandu.github.io/Hungry_web_app/"
      },
      {
        "id": 3,
        "name": "Daily Planner",
        "image": planner,
        "description": "a simple calendar application that allows a user to save events for each hour of the day.",
        "repo": "https://github.com/HJandu/daily_planner_app",
        "deployed": "https://hjandu.github.io/daily_planner_app/"
      },
      {
        "id": 4,
        "name": "Weather Dashboard",
        "image": weather,
        "description": "Server-side API's: Retrieved data using API to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
        "repo": "https://github.com/HJandu/weather_dashboard",
        "deployed": "https://hjandu.github.io/weather_dashboard/"
      },
      {
        "id": 5,
        "name": "Professional ReadMe Generator",
        "image": read,
        "description": "ReadMe Generator will effortlessly create a professional README.md file by using the command-line application to generate one.",
        "repo": "https://github.com/HJandu/professional-readme-generator",
        "deployed": ""
      },
      {
        "id": 6,
        "name": "Coding Quiz",
        "image": quiz,
        "description": "The coding quiz is a timed quiz on JavaScript fundamentals that stores high scores so that the user can gauge their progress compared to their peers.",
        "repo": "https://github.com/HJandu/coding-quiz",
        "deployed": "https://hjandu.github.io/coding-quiz/"
      }
    ]
export default projects;
    