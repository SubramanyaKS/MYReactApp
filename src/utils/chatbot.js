import chat from '../assets/chatbot.png';
import user from '../assets/user.png';

export const rules = {
    skills: ["skills", "expertise", "knowledge", "programming","skill"],
    projects: ["projects", "portfolio", "work","project"],
    contact: ["contact", "email", "phone", "reach out"],
    name:["name","who are you"],
    education:["education","qualification","college","university"]
  };

export const responses = {
    skills: "He is proficient in web development, React, Node.js, and Python.",
    projects: "He have worked on some projects which includes phrasepics, weatherapp,react news app .",
    contact: "You can reach him at connectwithsubbu@gmail.com or on LinkedIn.",
    name:"I am Subot",
    education:"Completed B.E. in Information Science and Engineering from Visvesvaraya Technological university"
  };

export const chatbotImages={
  chatbot:chat,
  user:user,
}