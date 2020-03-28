import React, { useState } from 'react'

export default function Skeleton(props) {

    let skeletonStyle = {}
    
    props.width !== null ? skeletonStyle.width = props.width : skeletonStyle.width = ""
    props.height !== null ? skeletonStyle.height = props.height : skeletonStyle.height = ""

    return (
        <div>
            {            
            props.loaded ? props.children : 
        
            <span className="skeleton-box" style={skeletonStyle} >

            </span>
            }
        </div>
    )

}
