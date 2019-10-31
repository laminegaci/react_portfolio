import React from 'react';


const List_langage  =  (props) => {
    const Langages = props.Langages;
    const deleteLang = props.deleteLang;
    let length = Langages.length;
    const listLangages = length ? (
        Langages.map(lang => {
            return(
                
                <div key={lang.id}>
                    
                    <span className="name">{lang.name} </span>
                    <span className="niveau">{lang.niveau} </span>
                    <span className="action icon" onClick={() => deleteLang(lang.id)}>&times; </span>
                        
                </div>
            )
        })
    ) : (
        <p>else</p>
    )

    return(
        <div className="ListItems">
            <div>
            <span className="name title">Name</span>
            <span className="niveau title">Niveau</span>
            <span className="action title">action</span>
            </div>
        {listLangages}
         </div>
    )
}
export default List_langage;