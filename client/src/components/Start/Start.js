import React, {useState} from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { useHistory} from 'react-router-dom';

export const Start = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const handleClick = () => {
        if(user) history.push("/game")
    }
  return (
    <div>
        <Paper>
            <Typography>
                 Welcome Component
            </Typography>
            {user && <Button onClick={handleClick}>Go to Questions</Button>}
        </Paper>
    </div>

  )
}
