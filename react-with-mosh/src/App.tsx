import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    return (
        <>
         {isLoading && <p>Loading...</p>}
         {error &&  <p className='text-danger'>{error}</p>}
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
        </>
       
    )
}

export default App;