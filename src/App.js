import React, { Component } from 'react';
import './App.css';
import { Layout , Header , Navigation , Drawer , Content} from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  
  render() {
    
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/resume">resume</Link>
                <Link to="/aboutme">about me</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/resume">resume</Link>
                <Link to="/aboutme">aboutme</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
