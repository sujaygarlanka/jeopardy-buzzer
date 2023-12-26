import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

function Team1() {

    return (
        <div>
            <h1>Team 1</h1>
            <MyButton />
        </div>
    );
}



function MyButton() {
    const [count, setCount] = useState(0);

    const WS_URL = 'ws://localhost:3000/team';

    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true
    });

  
    function handleClick() {
        console.log("clicked")
        sendJsonMessage({
            message: "test",
            type: 'userevent'
        });
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }


export default Team1;
