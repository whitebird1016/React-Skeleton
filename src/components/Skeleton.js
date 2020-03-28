import React, {useState} from 'react'

export default function Skeleton(props) {

    const [isHidden, setHidden] = useState(false)

    const hideSkeleton = () => {
        setHidden(true)
    }

    let skeletonStyle = {}

    props.width !== null ? skeletonStyle.width = props.width : skeletonStyle.width = ""
    props.height !== null ? skeletonStyle.height = props.height : skeletonStyle.height = ""
    props.shape === "circle" ? (skeletonStyle.borderRadius = "50%") : (skeletonStyle.borderRadius = "");
    props.style !== null ? skeletonStyle = {...skeletonStyle, ...props.style} : void(0)
    props.backgroundColor !== null ? skeletonStyle.backgroundColor = props.backgroundColor : skeletonStyle.backgroundColor = "white"
    
    if(props.duration !== null && props.duration !== undefined)
        setTimeout(hideSkeleton, props.duration)

    let skeletonChildren = []
    if(props.children !== undefined){
        for(let i = 0; i < props.children.length; i++){
            if(props.children[i].type.name === "Skeleton")
                skeletonChildren.push(props.children[i])
        }
    }
    console.log(skeletonChildren)
    return (
        <div>
            {            
            props.loaded || isHidden ? props.children : 
        
                <div className="skeleton-box" style={skeletonStyle}>
                    {skeletonChildren.length > 0 ? skeletonChildren : null}
                </div>

            }
        </div>
    )

}
