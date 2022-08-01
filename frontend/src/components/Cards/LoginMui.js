import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate} from 'react-router-dom';


function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginMui() {
    const [user,setUser]=React.useState({
    
        email:"",
        pasword:""
       
    });
    const onHandle=(e)=>{
        const{name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})

    }
    const login=async()=>{
      const{email,pasword}=user
      console.log(user)
      await axios.post(`http://localhost:5000/login`,user).then(res=>{
       
       
        // setloginuser(res.data.user)
       if(user){
        Cookies.set("login", res.data.token, { expires: 7 });
        navigate('/admin');
       }
        
        // window.location.reload();


        
     })

    }
    let navigate = useNavigate();
   
  

  return (
    <ThemeProvider theme={theme}  >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email} 
              onChange={onHandle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="pasword"
              label="Password"
              type="password"
              id="pasword"
            //   autoComplete="current-password"
              value={user.pasword} 
              onChange={onHandle}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}