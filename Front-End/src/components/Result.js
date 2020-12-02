import React from 'react'

export const Result = (props) => {
    console.log('props', props.result)
    return (
        <div>
            {
                props.result.map((course, i) => {
                    return <div key={i}>
                        {course.name}
                    </div>
                })}

        </div>
    )
}
