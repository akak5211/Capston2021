import React from 'react'
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { MdTurnedIn } from 'react-icons/md';
function Message({ message, user }) {
    const timeFromNow = timestamp => moment(timestamp).fromNow();
    const isImage = message => {
        return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
    }
    const hashtest = (message) => {
        if (message.content.includes("#")) {
            return true;
        }
        else {
            return false;
        }
    }
    const isMessageMine = (message, user) => {
        if (user) {
            return message.user.id === user.uid
        }
    }
    // const MessagePrint = (message, user) => {
    //     if (user) {
    //         return message.content
    //     }
    const hashtag = "https://search.shopping.naver.com/search/all?query=";
    return (
        // <Media style={{ marginBottom: '3px' }}> 
        <Media style={{backgroundColor:"#9BBBD4"}}>
            <img
                style={{
                    borderRadius: '10px',
                    marginTop:'3px',
                    marginLeft:'7px',
                }}
                width={20}
                height={20}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name}
            />
            <Media.Body style={{
                backgroundColor: '#9BBBD4'
                // backgroundColor: isMessageMine(message, user) && "#ECECEC" || "#0FF1CE"
            }}>
                <p>
                    <a style ={{
                        fontSize: '15px',
                        fontWeight: 'bolder'
                    }}>
                    {message.user.name}{" "}
                    </a>
                    <span style={{
                        fontSize: '10px',
                        color: '#000000',
                        fontWeight: 'bolder'}}>
                        {timeFromNow(message.timestamp)}
                    </span>
                </p>
                {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    hashtest(message) ?
                    //링크 색
                        <p> 
                            <a style = {{
                                backgroundColor:'#FFFFFF',
                                borderRadius:'5px',
                                fontSize: '15px',
                                fontWeight: 'bolder',
                            }} href={hashtag+message.content.substring(1)}>{message.content}</a>
                        </p> :
                        //내 채팅, 상대채팅 색 변경
                        <p>
                        <a style={{
                            // backgroundColor: '#FEF01B',
                            fontSize: '20px',
                            backgroundColor: isMessageMine(message, user) && "#FEF01B" || "#FFFFFF",
                            borderRadius:'8px',
                            float: isMessageMine(message, user) && 'right' || 'left'
                        }}>
                            {message.content}
                        </a>
                        </p>
                    }
            </Media.Body>
        </Media>
    )
            }
export default Message