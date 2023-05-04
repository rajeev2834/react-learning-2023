import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { Button, Color, TextField } from '@mui/material';


interface User{
    id: number;
    name: string;
}

function App(){
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);

        axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
            .then((res) => {
                setUsers(res.data);
                setIsLoading(false);})
            .catch((err) => {
                if (err.code === 'ERR_CANCELED') return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    const deleteUser = (id: number) => {
        const originalUsers = [...users];
        setUsers(users.filter((user) => user.id !== id));
        axios.delete(`https://jsonplaceholder.typicode.com/xusers/${id}`)
            .catch((err) => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }

    const addUser = () => {
        const originalUsers = [...users];
        const newUser = {
            id: users.length + 1,
            name: 'Rajeev',
        };
        setUsers([...users, newUser]);
        axios.post('https://jsonplaceholder.typicode.com/xusers', newUser)
           .then((res) => {
               setUsers([...users, res.data]);
           })
           .catch((err) => {
               setError(err.message);
               setUsers(originalUsers);
           })
    }

    const updateUsers = (user : User) => {
        const originalUsers = [...users];
        //update the user
        const updatedUser = {...user, name: 'Rajeev'};

        setUsers(users.map((u) => u.id === user.id ? updatedUser : u));

        axios.patch(`https://jsonplaceholder.typicode.com/xusers/${user.id}`, updatedUser)
        .catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    }

    return (
        <>
         {isLoading && <p>Loading...</p>}
         {error &&  <p style={{color: 'red'}}>{error}</p>}
        <div>
        <Button variant="contained" color='primary' onClick={() => addUser()}>Add User</Button>
        <List>
        {users.map((user, index) => (
        <React.Fragment key={user.id}>
        <ListItem>
            <ListItemText primary={user.name} />
            <Button variant="outlined" color='secondary' onClick={() => updateUsers(user)}>Update</Button>
            <IconButton edge="end" color="error" onClick={() => deleteUser(user.id)}>
            <DeleteIcon />
            </IconButton>
        </ListItem>
        {index !== users.length - 1 && <Divider />}
        </React.Fragment>
        ))}
        </List>
            </div>
        </>
       
    )
}

export default App;