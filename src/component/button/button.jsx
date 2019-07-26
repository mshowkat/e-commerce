import React from "react";
import './button.scss'

const CusButton = ({children, isGoogleSignIn, ...otherprops}) => (
    <button className={`${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CusButton