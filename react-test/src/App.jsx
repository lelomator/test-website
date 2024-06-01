import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';



export default function App() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}>

        
        <div>
          <Typography level="h4" component="h1">
          Welcome!
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>


        <FormControl /* EmailInputField */>
          <FormLabel>Email</FormLabel>
          <Input
          name="email"
          type="email"
          placeholder="johndoe@email.com"
            />
        </FormControl>

        <FormControl /* PasswordInputField */ >
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"/>
        </FormControl>

        <Button sx={{ mt: 1,}} loading variant="solid" /* SignInButton */>
        Log in
        </Button>
        
        

      </Sheet>

    </CssVarsProvider>
  );
}
