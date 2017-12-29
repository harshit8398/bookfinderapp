import React , { Component } from 'react';
let alternate = 'http://icons.iconarchive.com/icons/rade8/minium-2/256/Folder-Home-Alternate-White-icon.png';

export default class Gallery extends Component{
    render(){
        return(
            <div>
                {
                    this.props.items.map((item,index)=>{
                        let {title,imageLinks,infoLink} = item.volumeInfo;
                        return(
                            <a href={infoLink} key={index} className="book" target="_blank">
                                <img className="book-img"
                                    src={imageLinks !== undefined ? imageLinks.thumbnail: alternate}
                                    alt='book image'
                                />
                               <div className="book-text">
                                {title}
                               </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}