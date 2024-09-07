import React from 'react'
import { Card } from 'react-bootstrap'

const ChatbotCard = ({data,name}) => {
    return (
        <div className='chatbot-container'>
            <Card className='chatbot-card'>
                <div className='chatbot-content'>
                    {
                        data.map((d)=>(
                            <div>
                                <p className='projectchatbot-title'>{d.college}</p>
                                <p className='projectchatbot-subtitle'>{d.course}</p>
                                <p className='projectchatbot-subtitle'>{d.year}</p>

                            </div>
                        ))
                    }
                <div className='moredetails'>For more details view {name} section</div>
                </div>
                
            </Card>
            </div>
    )
}

export default ChatbotCard
