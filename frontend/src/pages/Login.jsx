import { useState } from "react";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
      <div>
        <div>
          <div>
            <Inputbox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Username"}
              placeholder={"Jon@gmail.com"}
            />
            <Inputbox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"12345678"}
            />

            
            <div>
            <Button onClick={async()=>{
                try{
                    await axios.get("http://localhost:3000/api/v1/user/signup", {
                    username,
                    password
                    
                    
                  });
                }catch(error){
                    console.log(error);
                }
                
            }} label={"Sign Up"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
