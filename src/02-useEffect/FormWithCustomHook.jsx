import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'xxxxxx',
        email: 'xxxxxx@example.com'
    })

    const {username, email}= formState

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value

        })


    }

    useEffect(()=>{
        //console.log('useEfect llamado')
    },[]);

    
    useEffect(()=>{
        //console.log('cambio en el form')
    },[formState]);

    
    useEffect(()=>{
        //console.log('cambioe en ell email')
    },[email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" className="form-control" 
        placeholder="Username" name="username" 
        value = {username} onChange={onInputChange}/>

        <input type="email" className="form-control mt-2"
        placeholder="mail@example.com" name="email" 
        value={email} onChange={onInputChange}/>


        {
            (username === 'Julieta') && <Message/>
        }
    </>
  )
}
