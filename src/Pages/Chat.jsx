import React, { useState } from 'react'
import './Chat.css'
import { Link } from 'react-router-dom'
  
const Chat = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="container w-25 mt-4">
            
            <h1 className="login-h1">Welcome</h1>
            <form method="post">
                <div className="form-group">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="Enter your Name" required className="form-control form-input" />
                </div>
                <div className="form-group">
                    <input
                        onChange={(e) => setRoom(e.target.value)}
                        type="text" placeholder="Enter your Chat Room Name" required className="form-control form-input" />
                </div>

                <Link  onClick={e => (!name || !room) ? e.preventDefault() : null}
                    to={`/home?name=${name}&room=${room}`}>
                        
                    <input type="submit" className="form-submit" value="Join" />
                </Link>
            </form>
            
        </div>
    )
}

export default Chat;



































// import React from "react";
// const handleClick = () => {
//   localStorage.clear();
//   window.location.reload();
// };
// const Chat = () => {
//   return (
//     <>    
//       <button className="btn btn-primary" onClick={handleClick}>
//         logout
//       </button>
//     </>
//   );
// };
// export default Chat;
