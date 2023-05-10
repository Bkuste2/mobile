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
  fetch(`${baseUrl}/users`, {
    method: 'post',
    body: JSON.stringify(userDTO, null, 2),
    headers: ({ 'Content-Type': 'application/json' }),
  })
    .then(user => user.json())
    .then(user => console.log(user))

  // const { setIsAuthenticated } = useContext(UserContext)
  // setIsAuthenticated(true)
  console.log('está autenticado');
}