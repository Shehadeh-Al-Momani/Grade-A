import React from 'react';

const Result = (props) => {
    const count = props.result.reduce((accumulator) => accumulator + 1,0)
    if (props.result.length) return (
        <div>
            <h1>{count} results for "{props.input}"</h1>
            {
                props.result.map((course, i) => {
                    return <div key={i}>
                        {course.name}
                    </div>
                })
            }
        </div>
    )
    return (
        <div>
            <h2>Sorry, we couldn't find any results for "{props.input}"</h2>
            <h3>Try adjusting your search. Here are some ideas:</h3>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
        </div>
    )
}

export default Result

