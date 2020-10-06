import React from "react";
import {Container, Content, Cards, Card} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Header/>

      <Content>
        <h1>test</h1>
        <Cards>

          <Card>
            <p>test</p>
          </Card>

          <Card>
            <p>test</p>
          </Card>

        </Cards>
      </Content>

      <Footer/>
    </Container>
    );
};
export default Home;
