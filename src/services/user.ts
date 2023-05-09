import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const baseUrl = 'http://localhost:3000'

const headers = {
  'Content-Type': 'application/json',
}

export async function GetUsers() {
  let user = await fetch(`${baseUrl}/users`, { method: 'get' })
    .then(res => res.json())

  console.log(user);
}

export async function CreateUser(userDTO: User) {  
  let userCriation = await fetch(`${baseUrl}/users`, {
    method: 'post', headers, body: JSON.stringify(userDTO, null, 2)
  })
    .then(res => res.json())

  const { setIsAuthenticated } = useContext(UserContext)
  setIsAuthenticated(true)
}