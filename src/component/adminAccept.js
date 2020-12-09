import React, { useEffect, useState, useContext } from 'react'
import { Box, CardFooter, Card, CardBody, Grid,Text, Button, CardHeader, ResponsiveContext } from 'grommet'
import { GetUser, addPermission } from '../call/UserCall';
import { Favorite, ShareOption, Validate, Clear } from 'grommet-icons';




function AdminAccept() {
 
  
  const [up,setUp]=useState(0);
  const [users,setUsers]=useState([]);
  const size = useContext(ResponsiveContext);

    useEffect(
     async function up(){
        await GetUser().then(result=>setUsers(result)); 
       
      
       },[]);

       const sPermission=async (data)=>{
        let e={email:data}
       await addPermission(e);
       await GetUser().then(result=>setUsers(result)); 
     }
      

   console.log(users)
    return (
       <Box width='100vw' height='100vh' alignContent='center' pad='small'>
         <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
            {users.map((user,i)=>(
              <Card  height="medium" width='medium' background="light-1">
              <CardHeader pad="small" >Request Permission</CardHeader>
            <CardBody pad="medium" >
              <p>email: {user.email}</p>
              <p>city: {user.city}</p>
              <p>mobile no: {user.mobile}</p>
              <p>addhar no: {user.aadhar}</p>
             
            </CardBody>
              <CardFooter pad={{horizontal: "small"}} background="light-2">   
             
            <Button icon={<Validate color="plain" />} onClick={()=>sPermission(user.email)}/>
            <Button icon={<Clear color="plain" />} hoverIndicator />
            </CardFooter>
        </Card>
        
            ))}

            </Grid>
       </Box>
    )
}

export default AdminAccept
