import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        margin: "50% 0 0",
        top: "150%",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-4" style={footerStyle}>
        <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
            </footer>
    )
}
