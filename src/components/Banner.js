import React from 'react'
import classes from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
                <h2>All Your favourite electronics at one place </h2>
                {/* <a href='https://www.freepik.com/photos/computer'>Computer photo created by mego-studio - www.freepik.com</a> */}
            </div>
            
        </div>
    )
}

export default Banner
