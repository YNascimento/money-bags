import React from 'react';
import {Container, Text, Icon} from './styles'

const Header: React.FC = () => {
    return(
        <Container>
            <Icon className="far fa-sticky-note"></Icon>
            <Text>All Rights Reserved</Text>
        </Container>
        
    );
};
export default Header