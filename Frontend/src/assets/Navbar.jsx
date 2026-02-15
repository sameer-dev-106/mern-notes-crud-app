import React from 'react'
import { CirclePlus, Moon, Sun } from 'lucide-react'

const Navbar = ({ theme, setTheme, setShowForm }) => {

    function toggleTheme() {
        document.body.classList.add("theme-switch");

        setTheme(theme === "dark" ? "light" : "dark");

        setTimeout(() => {
            document.body.classList.remove("theme-switch");
        }, 400);
    }

    return (
        <nav>
            <h1>Take Your Notes</h1>
            <div className="nav-actions">
                <CirclePlus 
                    className='add' 
                    onClick={() => setShowForm(true)}
                />
                {theme === "dark" ? (
                    <Moon className="mode" onClick={toggleTheme} />
                    ) : (
                    <Sun className="mode rotate" onClick={toggleTheme} />
                )}
            </div>
        </nav>
    )
}

export default Navbar