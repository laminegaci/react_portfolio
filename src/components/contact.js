import React, { Component }  from 'react';
import { Grid ,Cell ,List ,ListItem ,ListItemContent} from 'react-mdl'; 

class Contact extends Component {
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>GACI Mohamed Lamine</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height:'250px'}} 
                    />

                    <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    
                    </p>
                    
                </Cell>
                <Cell col={6}>
                    <h2>Contact me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily:'Auton', fontWeight:'bold'}} >
                             <i className="fa fa-phone-square" aria-hidden="true" />
                             (123) 456-789</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily:'Auton', fontWeight:'bold'}} >
                             <i className="fa fa-facebook" aria-hidden="true" />
                             mohamed lamine</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily:'Auton', fontWeight:'bold'}} >
                             <i className="fa fa-envelope" aria-hidden="true" />
                             mohamed61lamine@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily:'Auton', fontWeight:'bold'}} >
                             <i className="fa fa-instagram" aria-hidden="true" />
                             (123) 456-789</ListItemContent>
                        </ListItem>
                        
                    </List>
                    </div>
                    
                </Cell>
            </Grid>
            
        </div>
        );
    }
}

export default  Contact;