import React,{ useState } from "react";
import api from '../../services/api'
import { Div, Form } from "./styles";
import { localStorageGetToken } from '../../services/localStorage'
import { useRouter } from 'next/router'


export default function Login(){
    const [infos, setInfos] = useState({
        email: '',
        password: '',
        name:'',
      });

      const router = useRouter()

      const token = localStorageGetToken();

      if(token){
          router.push('/')

      }

    const onFormSubmit = async (e) => {
        e.preventDefault();
    
         try {
            await api.post('/login', infos)
              
         } catch (error) {
          
         }
       }

       const handleInputChange = (e) => {
        setInfos({ ...infos, [e.target.name]: e.target.value });
      };

      console.log(infos)

    return(
      <>
        <Div>
        <Form 
         onSubmit={onFormSubmit}>
            <h1 >
                Cosmos
            </h1>
            <input
             type='text'
             name='email'
             placeholder='E-mail'
             onChange={handleInputChange}
             />
            <input 
             type="password"
             name='password'
             placeholder='Senha'
             onChange={handleInputChange}
              />
              <input 
             type="name"
             name='name'
             placeholder='Name'
             onChange={handleInputChange}
              />

              <button 
               type='submit'
                >
              Logar
              </button>
        </Form>
    </Div>
    </>
    );
    };

    
