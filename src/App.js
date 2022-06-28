import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import characters from './protagonists.json'
import CharacterCard from './CharacterCard.js';
import React, { useState, useEffect } from 'react';


function App() {
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const [dogData, setDogData] = useState([]);
  const [dogTemperaments, setDogTemperaments] = useState([]);

  function newFetch() {
    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5", requestOptions)
                .then(response => response.json())
                .then(result => {
                  console.log("2 inside fetch", Date.now());
                  console.log("3 special dogs", result, "---", Date.now())
                  setDogData(result)
                  setDogTemperaments(result[breeds][0].temperament)
                  console.log("<++++++++DogTemps++++>", dogTemperaments)
                })
                .catch(error => console.log('error', error));
            
              console.log("4 after fetch", dogTemperaments, "---", Date.now());
  }

  useEffect(() => {newFetch()}, [])

  var traits = new Set([]);

  // for(let i = 0; i < dogTemperaments.length; i++) {
  //   let newArr = dogTemperaments[i].split(', ')
  //   traits = new Set([...traits, ...newArr]);
  // }

  var selected = []


  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid lightgray' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            HumanToDog
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {
              console.log("1 before fetch in App()", dogData, "---", Date.now());
              newFetch()
            }}
          >
            AGAIN!
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2}}
        >
          What dog are you? hehe
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Select the personality traits that best represent you to see what dog breed you are!
        </Typography>
      </Container>
      {/* <Container maxWidth="md" sx={{ my: 4}}>
      <ul>
          {traits.map((trait) =>
            <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {
              selected.push(trait);
            }}
          >
            {trait}
          </Button>
          )}
        </ul>
      </Container> */}
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          {
            dogData && dogData.map((dog) =>
            <Grid
              item
              xs={12}
              md={4}
            >
            <CharacterCard
                name = {dog.breeds[0].name}
                image = {dog.url}
                description = {dog.breeds[0].temperament}
                
            />
          </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
