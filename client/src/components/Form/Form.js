import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCard, getCards } from '../../actions/cards';
import useStyles from './styles';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Form = () => {
  const [cardData, setCardData] = useState({ question: '', answer: '', choices: [] });
  const Cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [state, setState]= useState(0)

    
  if(state===0) {
    dispatch(getCards())
    setState(1)
  }
  console.log(Cards[1])

  //console.log(Cards)

  const clear = () => {
    setCardData({ question: '', answer: '', choices: []});
  };
 const handleChange = () => {}

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={()=>{}}>
        <Typography variant="h4" className={classes.title}>{Cards[0]?.question}</Typography>

        <FormControl className={classes.paper} component="fieldset">
          <FormLabel component="legend">{Cards[0]?.category}</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
            <FormControlLabel value={Cards[0]?.choices[0]} control={<Radio />} label={Cards[0]?.choices[0]} />
            <FormControlLabel value={Cards[0]?.choices[1]} control={<Radio />} label={Cards[0]?.choices[1]} />
            <FormControlLabel value={Cards[0]?.choices[2]} control={<Radio />} label={Cards[0]?.choices[2]} />
            <FormControlLabel value={Cards[0]?.choices[3]} control={<Radio />} label={Cards[0]?.choices[3]} />
          </RadioGroup>
        </FormControl>
               
        <Button variant="contained" color="primary"  type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default Form;
