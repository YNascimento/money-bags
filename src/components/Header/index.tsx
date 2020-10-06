import React from 'react';
import {Container, AppTitle, Icon} from './styles'

const Header: React.FC = () => {
    return(
        <Container>
            <AppTitle>Money Bags</AppTitle>
            <Icon className="fas fa-shopping-bag fa-2x"></Icon>
        </Container>
        
    );
};
export default Header