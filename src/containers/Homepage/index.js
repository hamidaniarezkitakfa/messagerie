import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeConversations, getRealtimeUsers, updateMessage } from '../../actions';
import Layout from '../../components/Layout';
import './style.css';
import drawer from '../drawer'

const User = (props) => {


  const {user, onClick} = props;




  return(
    <div onClick={() => onClick(user)} className="displayName">
          <div className="displayPic">
              <img src={user.imageUrl} alt="" />
          </div>
          <div style={{display:'flex', flex:1, justifyContent:'space-between', margin: '0 10px'}}>
              <span style={{fontWeight: 500}}>{user.followed}  </span>
             <span className={user.isOnline ? `onlineStatus` : `onlineStatus.off`}></span>
          </div>
      </div>
  );
}

const HomePage = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;

   useEffect(() =>{
     
       unsubscribe = dispatch(getRealtimeUsers(auth.email))
       .then(unsubscribe =>{
           return unsubscribe; 
       })
       .catch(error =>{
         console.log(error);
       })

   },[]);

   //console.log(user);
   //componentWillUnmont
    useEffect(() =>{
      return () =>{
        //cleanup
        unsubscribe.then(f => f()).catch(error => console.log(error));
      }
    },[]);

    const initChat = (user) =>{
        setChatStarted(true)
        setChatUser(`${user.nom} ${user.prenom}`)
        setUserUid(user.email);
        console.log(user);
        dispatch(getRealtimeConversations({uid_1: auth.email, uid_2: user.email}));
    }

    const submitMessage = (e) =>{

      const msgObj ={
        user_uid_1: auth.email,
        user_uid_2: userUid,
        message,
        
       
      }
      

      if(message !== ""){
        dispatch(updateMessage(msgObj))
        .then(() =>{
          setMessage('')
          
        });

      }
       //console.log(msgObj);
    }

  return (
    <Layout>
    <section className="container">

    <div className="listOfUsers">
      <h2>liste d'amis</h2>
      {
        user.users.length > 0 ?
        user.users.map(user => {
          return( 
          <User
             onClick={initChat} 
             key={user.email} 
              user={user}
          />
      );
        }) : null
      }

       
                
    </div>

    <div className="chatArea">
       
        <div className="chatHeader">
        {
         chatStarted ? chatUser : ''
       }
        </div>
        <div className="messageSections">
          {
            chatStarted ?
            user.conversations.map(con => <div style={{ textAlign:con.user_uid_1 == auth.email ? 'right': 'left' }}>
            <p className="messageStyle" >{con.message} </p>
            
            
            
        </div>)
             : null
          }
          

            

        </div>
        {
          chatStarted ?
          <div className="chatControls">
          <textarea className="champ"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             placeholder="Write Message" 
          
          />
          
          <button className="send" onClick={submitMessage}>Send</button>
      </div> : null

        }
       
    </div>
</section>
</Layout>
  );
}

export default HomePage;