import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
const reactElement ={
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google',
};

function MyApp() {
   return(
   <><h2>Custom Duties</h2>
    </>
   )
}

const AnotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

    const actualreactElement= React.createElement(
        'a',
        {
            href:'https://google.com', target: "_blank"},
            'click to visit google'
    )



ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
