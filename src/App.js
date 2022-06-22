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
// import characters from './protagonists.json'
import CharacterCard from './CharacterCard.js';

function App() {
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
            Characters Inc
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => alert("Boop!")}
          >
            Button
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
          Prevalent Protagonists
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Hmm, seems like we're missing some of the other protagonists.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
                name = "Miles Morales"
                image = "https://i.imgur.com/56chgMj.png"
                description =  {[
                  "Definitely Not Spiderman",
                  "\"Lanky Puberty Boy\" vibes",
                  "Can't do it on demand",
                  "Elite music taste"
                ]}
                
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
                name = "Moana Waialiki"
                image = "https://i.imgur.com/zuscNPl.png"
                description = {[
                  "Glass half full kinda gal",
                  "Lackluster chicken mom",
                  "Spaces out looking at water",
                  "Never really knows why"
                ]}

            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
                name = "Hiro Hamada"
                image = "https://i.imgur.com/SaYqUTP.png"
                description = {[
                  "Saved by a flying pillow. Again.",
                  "Has epic bedhead",
                  "Hiro = Hiccup, Baymax = Toothless",
                  "Neeeeeeeeeeeeeeeerd"
                ]}

            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
