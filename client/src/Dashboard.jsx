import React, { useState, useEffect } from 'react';
import Visualization from './Visualization';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, Card, CardHeader, CardContent, CardActions, MenuItem, TextField, Divider, Button } from '@material-ui/core';
import states from './us_states'

const styles = {
  card: {
    maxWidth: 500,
    margin: "50px auto"
  },
  divider: {
    margin: "10px 0",
  }, 
  cardActions: {
    justifyContent: "center"
  }, 
};

function InputCard(props) {
  const { classes } = props;

  useEffect(() => {
    // TODO: Fetch all our saved visualizations
  })

  const addEntry = () => {
    const entry = {
      state: state,
      days: days,
    }
    setEntries([entry, ...entries])
    // TODO: Save this visualization somewhere
  }

  const displayEntries = () => {
    const output = []
    entries.forEach(e => {
      output.push(<Visualization state={e.state} days={e.days}/>)
    })
    return output
  }
  
  const [entries, setEntries] = useState([])
  const [state, setState] = useState("")
  const [days, setDays] = useState("")
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Visualizations
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Card className={classes.card}>
          <CardHeader title="Visualize COVID-19 Data Per State" />
          <CardContent>
            <TextField
              id="state-select"
              select
              label="State"
              value={state}
              onChange={e => setState(e.target.value)}
              helperText="Please select a state"
            >
              {states.map((option) => (
                <MenuItem key={option.abbreviation} value={option.abbreviation}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <Divider className={classes.divider} variant="middle" />
            <TextField 
              id="standard-basic" 
              label="Number of days" 
              helperText="Please enter the number of days"
              value={days}
              onChange={e => setDays(e.target.value)}
            />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={addEntry} color="primary">Add Visualization</Button>
          </CardActions>
        </Card>
          
        <div>
          {displayEntries()}
        </div>
      </Container>
    </div>
  )
}

export default withStyles(styles)(InputCard);