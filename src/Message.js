import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Message.css"

//We can write as {message,username} while destructring as long as name remains same.


const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
