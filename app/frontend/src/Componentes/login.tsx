import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/userBackApi'

export function Login() {
    const [state, setState] = useState('')

     const getApi = async () => {
        const result = await api.get('/login')
        console.log('LOGIN', result)
        setState(result.data.result)

    }

    return(
        <main>
            <div>
                <form name='lOGIN'>
                   <input type="text" id="nomeid" placeholder="Username"  name="nome" /> </form>
                   <input type="text" id="nomeid" placeholder="Password"  name="nome" /> 
                <form>
                </form>                
                
            </div>
        </main>
    )
}