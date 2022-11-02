// import React from 'react'
var React = require('react');
var ReactDOM = require('react-dom');
var Coverflow = require('coverflow');


const CoverFlow = () => {
    var fn = function() {
        
    }
    return (
        <div>
            {ReactDOM.render(
            <Coverflow
                width={960}
                height={480}
                displayQuantityOfSide={2}
                navigation={false}
                enableHeading={false}
            >
                <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
                >
                <img
                    src='[image/path/please_change]'
                    alt='title or description'
                    style={{ display: 'block', width: '100%' }}
                />
                </div>
                <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
            </Coverflow>,
            
            document.querySelector('.content')
            )};
        </div> 
    )
}
export default CoverFlow;