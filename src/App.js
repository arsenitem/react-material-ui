import React from 'react';
import logo from './logo.svg';
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Card, CardMedia, CardContent, CardActions, DialogActions,Dialog, DialogContent, DialogContentText,TextField, DialogTitle} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/Restore';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  foot: {
    marginTop: theme.spacing(2)
  }
}));

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const [value, setValue] = React.useState("recents");

  const classes = useStyles();

  const [openLogin, setOpen] = React.useState(false);

  const [openSignUp, setSignUp] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePass = (e) => {
    setPassword(e.target.value);
  }

  const handleChange = (event,newValue) => {
    setValue(newValue);
  }
  const handleLoginDialog = (e) => {
    setOpen(true);
  }

  const handleSignUpDialog = (e) => {
    setSignUp(true);
  }

  const handleClose = (e) => {
    setOpen(false);
  }
  const handleSignUp = (e) => {
    setSignUp(false);
  }
 
  const handleCloseSignUp = (e) => {
    setSignUp(false);
  }

  const handleLogin = (e) => {
    console.log(email)
    if (email === "test" && password === "12345") {
      alert("logged in")
    }
    setOpen(false)
  }
  return (
    <>
     <AppBar position="fixed">
       <Container fixed>
         <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant = "h6" className={classes.title}>
            Blog?
          </Typography>
          <Box mr={3}>
            <Button color= "inherit" variant="outlined" onClick={handleLoginDialog}>Log in</Button>

            <Dialog open={openLogin} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id = "form-dialog-title">Log in</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please log in
                </DialogContentText>
                <TextField autofocus margin="dense" id="name" label ="email" type="email" fullWidth value={email} onChange={changeEmail}/>
                <TextField autofocus margin="dense" id="pass" label ="password" type="password" fullWidth value={password} onChange={changePass}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleLogin} color="primary">Log in</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button color= "secondary" variant="contained" onClick={handleSignUpDialog}>Sign up</Button>

          <Dialog open={openSignUp} onClose={handleCloseSignUp} aria-labelledby="form-dialog-title">
              <DialogTitle id = "form-dialog-title">Sign up</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Sign up form
                </DialogContentText>
                <TextField autofocus margin="dense" id="name" label ="name" type="text" fullWidth />
                <TextField autofocus margin="dense" id="email" label ="email" type="email" fullWidth/>
                <TextField autofocus margin="dense" id="pass" label ="password" type="password" fullWidth/>
                <TextField autofocus margin="dense" id="pass" label ="confirm password" type="password" fullWidth/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseSignUp} color="primary">Cancel</Button>
                <Button onClick={handleSignUp} color="primary">Sign up</Button>
              </DialogActions>
            </Dialog>
         </Toolbar>
       </Container>
     </AppBar>

     <main>
       <Paper className={classes.mainFeaturesPost} style={{backgroundImage:  `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography component="h1" color="inherit" gutterBottom variant="h3">
                Blog
              </Typography>
              <Typography component="h5" color="inherit" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Button variant="contained" color="secondary">Learn more</Button>
            </div>
          </Grid>
        </Grid>
        </Container>
       </Paper>
       <div className={classes.mainContent}>
         <Container maxWidth="md">
           <Typography variant="h2" align= "center" color="text-primary" gutterBottom>
             Blog
           </Typography>
           <Typography variant="h5" align= "center" color="text-primary" paragraph>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           </Typography>
         </Container>
       </div>
       <div className={classes.mainButtons}>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSignUpDialog}>Start now</Button>
           
          </Grid>
          <Grid item>
          <Button variant="outlined" color="primary" onClick={handleSignUpDialog}>Learn more</Button>
          </Grid>
        </Grid>
       </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="img tittle">

                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Blog post 
                      </Typography>
                      <Typography>
                        Description Description Description Description
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayersIcon/>
                      <PlayCircleFilledIcon/>
                    </CardActions>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Container>      
     </main>
     <footer>
      <Typography variant="h6" align="center" gutterBottom>
              <BottomNavigation 
                value={value}
                onChange={handleChange}
                className={classes.foot}
              >
                <BottomNavigationAction
                 label="Recents"
                 value="recents"
                 icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                 label="Favorites"
                 value="favorites"
                 icon={<FavoriteIcon/>}
                /> 
                 <BottomNavigationAction
                 label="Nearby"
                 value="nearby"
                 icon={<LocationOnIcon/>}
                /> 
                 <BottomNavigationAction
                 label="Folder"
                 value="folder"
                 icon={<FolderIcon/>}
                />           
              </BottomNavigation>
      </Typography>
     </footer>
    </>
  );
}

export default App;
