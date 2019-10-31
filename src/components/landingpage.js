import React, { Component }  from 'react';
import { Grid , Cell } from 'react-mdl'; 
//import { Button } from 'react-mdl';
import Button from '@material-ui/core/Button';

class Landingpage extends Component {
    render(){
        return(
        <div style={{width : '100%', margin : 'auto'}}>
            <Grid className="Landing-grid"> 
                <Cell col={12}>
                    <img
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Front-End | Back-End Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | Bootstrap | Semantic UI | Javascript | React js | PHP | Mysql</p>
                        <div className="social-links">
                            {/* Linkdin*/} 
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github*/} 
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* Facebook*/} 
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                            {/* Instagram*/} 
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>

                        </div> 
                       
                    </div>
                    <div className="Button">
                    <a href="/login" className="button"><Button variant="contained" color="secondary">Login</Button></a>
                    
                    
                    </div>
                </Cell>
            </Grid>
        </div>
        )      
    }
}

export default  Landingpage;