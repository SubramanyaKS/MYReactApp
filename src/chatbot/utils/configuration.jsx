import { createChatBotMessage } from "react-chatbot-kit";
import ProjectWidget from "../components/ProjectWidget";
import { projectsdata,experiencedata,educationdata } from "../../data/data";
import ChatbotCard from "../components/ChatBotCard";

const config = {
    initialMessages: [createChatBotMessage(`Hello I am Subbu, How can I assist you.`)],
    botName: "Subbu",
    widgets: [
        {
            widgetName: 'project',
            widgetFunc: (props) => <ProjectWidget data={projectsdata} name={"project"} {...props} />,
        },
        {
            widgetName: 'experience',
            widgetFunc: (props) => <ProjectWidget data={experiencedata} name={"experience"} {...props} />,
        },
        {
            widgetName: 'education',
            widgetFunc: (props) => <ChatbotCard data={educationdata} name={"education"} {...props} />,
        },
    ],
}

export default config