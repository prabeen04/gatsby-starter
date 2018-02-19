import React from 'react';
import Link from 'gatsby-link';

class About extends React.Component{
    render(){
        return(
            <div>
                <h3>About Component</h3>
                <img src="http://lorempixel.com/800/600"/>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        )
    }
}

export default About;