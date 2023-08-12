// CodeEditorWindow.js

import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import Pusher from 'pusher-js'
import Editor from "@monaco-editor/react";
import { v1 as uuidv1 } from 'uuid';
import debounce from 'lodash/debounce';


const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  const [usernameID, setUsernameID] = useState('');
  const [socketId, setSocketId] = useState('');

  useEffect(()=>{
    const username = window.prompt('Username: ', 'Anonymous');
    setUsernameID(username)
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_API_KEY, {
      cluster: process.env.REACT_APP_PUSHER_API_CLUSTER,
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


  const handleEditorChange = (val) => {
      const payload = {
        username: usernameID,
        message: val, 
        socket_id: socketId
      };
    axios.post('http://localhost:5000/message', payload);
    setValue(val);
    onChange("code", val);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleEditorChange, 300)
  , []);

  return (
    <div className="overlay rounded-lg overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "java"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};
export default CodeEditorWindow;