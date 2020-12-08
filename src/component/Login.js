import React, { useState } from 'react';
import { FormField, TextInput, Box, Button, Form, Heading } from 'grommet';
import { useHistory } from 'react-router-dom';
import { MailOption, Lock } from 'grommet-icons';
import {FindUser} from '../call/UserCall'





// This example shows a way to perform validation across multiple fields.
export const ULogin = () => {
  let history=useHistory();
    const [value,setValue]=useState({email:'',password:''})
    const HandleData=(event)=>{
        console.log(value);
        FindUser(value);
    }
 return(
     <Box align="center" justify="between" height="90vh" >
         <Box margin={"top","20vh"} align="center">
         <Heading>Login</Heading>
         <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={HandleData}
          >
            
            <FormField label="Email" name="email" required>
              <TextInput  icon={<MailOption />} name="email" type="email"  pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[com]{3}"
                    placeholder="abc@gmail.com"  />
            </FormField>
            <FormField label="Password" name="password" required>
              <TextInput icon={<Lock />} name="password" type="password" />
            </FormField>

            {/* {message && (
              <Box pad={{ horizontal: 'small' }}>
                <Text color="status-error">{message}</Text>
              </Box>
            )} */}

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" label="Login" primary />
              <Button  label="Signup" onClick={()=>{history.push('/Signup')}}/>
              
            </Box>
          </Form>
    </Box>
    </Box>
 );
  
};