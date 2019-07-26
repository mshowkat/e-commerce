import React from "react";
import MenuItem from "../menu-item/menu_item_component.jsx";
import "./directory_style.scss";

class Directory extends React.Component {
    constructor () {
        super()

        this.state ={
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ] //array close here
        } //state close here
    } // constructor close here

    render () {
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
                }
            </div>
        ) // return ends here
    } //render ends here

}

export default Directory 