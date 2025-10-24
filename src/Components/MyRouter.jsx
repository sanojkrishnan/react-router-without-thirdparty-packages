import React from 'react'

function MyRouter(props) {
    const { children } = props ; // to access the child components from App.jsx.
    
    const href = window.location.href;  //to access the full URL of the current page
    console.log(href);

    const obj = new URL(href); //URL is a built-in JavaScript object that provides methods for working with URLs. this will access the path of the URL
    const path = obj.pathname.substring(1); //pathname property of the URL object returns the path of the URL // .substring(1) is used to remove the leading slash from the path (/home -> home)
    console.log(path);


    
  return (
    <div>
        {React.Children.toArray(children).find(child => child.props.path === path)} {/*This will render the matching child component based on the current path //React.Children.toArray will convert the children prop into an array, allowing us to use array methods like find() */}
    </div>
  )
}

export default MyRouter