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
    const hashtag = "https://search.shopping.naver.com/search/all?query=";
    return (
        <Media style={{ backgroundColor: "#9BBBD4" }}>
            {isMessageMine(message, user) ?
                <img
                    width={0}
                    height={0}
                />
                : <img
                    style={{
                        borderRadius: '10px',
                        marginTop: '3px',
                        marginLeft: '7px'
                    }}
                    width={30}
                    height={30}
                    className="mr-3"
                    src={message.user.image}
                    alt={message.user.name}
                />
            }
            <Media.Body style={{
                backgroundColor: '#9BBBD4'
            }}>
                {isMessageMine(message, user) ?
                    <p>
                        <a style={{
                            fontSize: '0px'
                        }}>
                        </a>
                    </p>
                    :
                    <p>
                        <a style={{
                            fontSize: '15px',
                            fontWeight: 'bolder',
                        }}>
                            {message.user.name}
                        </a>
                    </p>
                }
                {isImage(message) ?
                <p>
                    {isMessageMine(message, user) ?
                                <span style={{
                                    fontSize: '10px',
                                    color: 'black',
                                    float: 'left',
                                    marginTop: '32%',
                                    marginLeft: '34%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                                :
                                <span style={{
                                    fontSize: '10px',
                                    color: 'gray',
                                    float: 'right',
                                    marginTop: '35%',
                                    marginRight: '25%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                            }
                    <img style={{
                        width: '300px',
                        height: '200px',
                        marginBottom: '15px',
                        float: isMessageMine(message, user) && 'right' || 'left'
                    }} alt="이미지" src={message.image} />
                </p>
                    :
                    hashtest(message) ?
                        //링크 색
                        <p>
                            <a style={{
                                backgroundColor: isMessageMine(message, user) && '#FEF01B' || '#FFFFFF',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                fontSize: '15px',
                                fontWeight: 'bolder',
                                margin: '-10px 10px 10px 0',
                                padding: '10px 10px 10px 10px',
                                float: isMessageMine(message, user) && 'right' || 'left'
                            }} href={hashtag + message.content.substring(1)}>{message.content}</a>
                            {isMessageMine(message, user) ?
                                <span style={{
                                    fontSize: '10px',
                                    color: 'black',
                                    float: 'right',
                                    marginTop: '6%',
                                    marginRight: '1%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                                :
                                <span style={{
                                    fontSize: '10px',
                                    color: 'gray',
                                    float: 'left',
                                    marginTop: '3%',
                                    marginLeft: '-1%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                            }
                        </p> :
                        //내 채팅, 상대채팅 색 변경
                        <p>
                            <a style={{
                                fontSize: '20px',
                                backgroundColor: isMessageMine(message, user) && "#FEF01B" || "#FFFFFF",
                                borderRadius: '8px',
                                float: isMessageMine(message, user) && 'right' || 'left',
                                margin: '0 10px 10px 0',
                                padding: '10px 10px 10px 10px'
                            }}>
                                {message.content}
                            </a>
                            {isMessageMine(message, user) ?
                                <span style={{
                                    fontSize: '10px',
                                    color: 'black',
                                    float: 'right',
                                    marginTop: '6%',
                                    marginRight: '1%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                                :
                                <span style={{
                                    fontSize: '10px',
                                    color: 'gray',
                                    float: 'left',
                                    marginTop: '6%',
                                    marginLeft: '-1%'
                                }}>
                                    {timeFromNow(message.timestamp)}
                                </span>
                            }
                        </p>
                }
            </Media.Body>
        </Media>
    )
}
export default Message