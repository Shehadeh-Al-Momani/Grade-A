import React from 'react';

const PageNotFound = (props) => {
  return (
    <div>
      <div>404 Page Not Found</div>
      <p>No Match For {props.location.pathname}</p>
    </div >
  )
}

export default PageNotFound

