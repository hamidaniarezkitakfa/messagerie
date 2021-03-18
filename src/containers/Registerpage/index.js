import { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Ui/Card';
import {signup} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function Registerpage
**/



const Registerpage = (props) => {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector (state => state.auth);
  const registerUser = (e) =>{
    
    e.preventDefault();

    const user = {
      nom, prenom, email, password
    }
     
       dispatch(signup(user))
  }
  if (auth.authenticated){
    return <Redirect to={'/'} />
  }
  return(
    <Layout>
      <div className="registerContainer">
       <Card>
         <form onSubmit={registerUser}>
           <h3>sign up</h3>
           <input
            name= "firstName"
            type= "text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="First Name"
           />

           <input
            name= "lastName"
            type= "text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Laste Name"
            />
            <input 
             name= "email"
             type= "text"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
            
            />
            <input
             name= "password"
             type= "password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="password" 
            
            
            />
            <div>
              <button>sign up</button>
            </div>

           
         </form>
       </Card>

      </div>
    </Layout>
   )

 }

export default Registerpage