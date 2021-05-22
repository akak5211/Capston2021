import React from 'react'
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';




function VideoPage() {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    return (

        <div style={{ display: 'flex' }}>

            
            <div style={{ width: '95%' }}>
                <MainPanel
                    key={currentChatRoom && currentChatRoom.id}
                />

                

            </div>
        </div>



    )
}

export default VideoPage

