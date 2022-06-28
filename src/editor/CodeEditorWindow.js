// CodeEditorWindow.js

import React, { useEffect, useState } from "react";
import axios from 'axios';
import Pusher from 'pusher-js'
import Editor from "@monaco-editor/react";
import { v1 as uuidv1 } from 'uuid';

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  
  const [text, setText] = useState('');
  const [usernameID, setUsernameID] = useState('');
  const [socketId, setSocketId] = useState('');

  useEffect(()=>{
    const username = window.prompt('Username: ', 'Anonymous');
    setUsernameID(username)
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_API_KEY, {
      cluster: "us3",
      useTLS: true
    });

    pusher.connection.bind("connected", () => {
      setSocketId(pusher.connection.socket_id);
      
    });

    const channel = pusher.subscribe('my-channel');

    channel.bind('message', data =>{
      setValue(data.message);
      onChange("code", data.message);
    })

    
  }, [])
  
  const handleEditorChange = (value) => {
    onChange("code", value);

      const payload = {
        username: usernameID,
        message: value, 
        socket_id: socketId
      };
    axios.post('http://localhost:5000/message', payload);
    
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;