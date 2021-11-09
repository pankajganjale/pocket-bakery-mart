import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <button>Get the App</button>
                <img src="./Images/AppStore.png" alt="" />
                <img src="./Images/PlayStore.png" alt="" />
            </div>
            <div>
                <button>Help</button>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;