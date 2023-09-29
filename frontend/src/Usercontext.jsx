import React, { useEffect,createContext, useContext, useState } from 'react';
import axios from 'axios';
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Fetch the username using the token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:3000/getusername', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`, // Include the JWT token in the header
        },
      })
        .then(response => {
          console.log(response.data.data);
          const { success, username } = response.data;
          if (success) {
            setUsername(username);
          } else {
            console.error('Authentication failed');
            setUsername(null);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setUsername(null);
        });
    }
    else{
        setUsername(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
