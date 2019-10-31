import React, { Component }  from 'react';
import {Tabs, Tab, Grid ,Cell , Card ,CardTitle ,CardText ,CardActions ,Button , CardMenu ,IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props); 
        this.state = { activeTab: 0}; 
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
               
                <div  className="grid-content">
                <Card shadow={5} style={{minwidth:'450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React project #1</CardTitle>
                    <CardText>--------------------------------</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codpen</Button>
                        <Button colored>Linedemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minwidth:'450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React project #2</CardTitle>
                    <CardText>--------------------------------</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codpen</Button>
                        <Button colored>Linedemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minwidth:'450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React project #3</CardTitle>
                    <CardText>--------------------------------</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codpen</Button>
                        <Button colored>Linedemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>this is Angular</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>this is Vuejs</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>this is MongoDB</h1></div>
            )
        }
    }
    

    render(){
        return(
        <div className="category-tabs">
            <Tabs activeTab = {this.state.aciveTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                       <div className="Content">{this.toggleCategories()} </div> 
                    </Cell>
                </Grid>
                    {/*<div className="projects-grid">{this.state.activeTab}</div>*/}
            </section>
        </div>
        );
    }
}

export default  Projects;