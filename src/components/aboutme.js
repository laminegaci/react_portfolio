import React, { Component }  from 'react';
import List_langage from './List_langage/List_langage';
import Add_langage from './Add_langage/Add_langage';


class Aboutme extends Component {
    state = {
        Langages : [
            {id:1, name:"html/css", niveau:"maitrise"},
            {id:2, name:"php", niveau:"intermediare"},
            {id:3, name:"Sql", niveau:"connaissance"}
        ]
    }

    deleteLang = (id) => {
        const Langages = this.state.Langages.filter(Lang => {
            return Lang.id !== id
        })
        this.setState({Langages:Langages})
    }

    addLangage = (Lang) => {
        Lang.id = Math.random();
        let Langages = this.state.Langages;
        Langages.push(Lang);
        this.setState({Langages})
    }

    render(){
        return(
        <div className="App container">
            <h1 className="text-center">About page</h1>
          
            <List_langage Langages={this.state.Langages} deleteLang={this.deleteLang}/>
            
            <Add_langage addLangage={this.addLangage}/>

        </div>
        );
    }
}

export default  Aboutme;