import { useEffect, useState } from "react";
import { getUser } from "../../../api/course";

function Replies({reply, index}){
    const [name, setName] = useState("")
    useEffect(()=>{
        const get = async() => {
            const user = await getUser(reply.user_id);
            setName(user.name);
        }
        get();
    },[])
    return(
        <div className="doubt-answer" key={index}>
          <div className="doubt-answer-left"></div>
          <div className="doubt-answer-right">
            <div className="flex">
              <p>{name}</p>
              <p>{new Date(reply.created_at).toLocaleString()}</p>
            </div>

            <h5>{reply.text_body}</h5>
          </div>
        </div>
    )
}

export default Replies;