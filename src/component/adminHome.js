import React, { useState } from 'react';


import { Avatar, Button, Box, grommet, Grommet, Nav, Sidebar ,Text} from 'grommet';

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  StatusInfoSmall,
  UserAdmin,
  CircleInformation,
} from 'grommet-icons';
import { Tip } from 'grommet/components/Tip';
let role=localStorage.getItem('role');
const SidebarHeader = () => (
  <Avatar
    border={{ size: 'small', color: 'accent-2' }}
    background="white"
    flex={false}
  >
    
    <Tip
          content={
            <Box pad="small" gap="small" width={{ max: 'small' }}>
              <Text weight="bold">Information</Text>
              <>
                <Text size="small">
                  Admin
                </Text>
                <Text size="small">-Leo Tolstoy</Text>
              </>
            </Box>
          }
          dropProps={{ align: { left: 'right' } }}
        >
          <Button icon={<UserAdmin size="large" />} />
        </Tip>
    
  </Avatar>
);

const SidebarFooter = () => (
  <Nav gap="small">
    <Button icon={<Chat />} />
    <Button icon={<Help />} />
  </Nav>
);

const MainNavigation = () => (
  <Nav gap="small">
    <Button icon={<StatusInfoSmall />} />
    <Button icon={<Projects />} />
    <Button icon={<Clock />} />
    <Box pad="small" border={{ color: 'white', side: 'bottom' }} />
    <Box gap="small" pad={{ vertical: 'medium' }}>
      <Button icon={<Analytics />} />
      <Button icon={<Configure />} />
    </Box>
  </Nav>
);


export const adminHome = () => {
  return(
    <Box direction="row" height={{ min: '100%' }}>
    <Sidebar
      background="accent-1"
      header={<SidebarHeader />}
      footer={<SidebarFooter />}
    >
      <MainNavigation />
    </Sidebar>
  </Box>
  )
};
