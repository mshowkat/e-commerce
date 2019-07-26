import React from 'react'
import ShopData from "./shop.data.js";
import PreviewCollection from "../../component/previewCollection/previewCollection";

class ShopPgae extends React.Component {
    constructor () {
        super()
        
        this.state={
            collections: ShopData
        }
    }//constructor ends here

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPgae