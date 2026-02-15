import React from 'react'
import { CirclePlus, Moon } from 'lucide-react'

const Navbar = ({ setShowForm }) => {
    return (
        <nav>
            <h1>Take Your Notes</h1>
            <div className="nav-actions">
                <CirclePlus 
                    className='add' 
                    onClick={() => setShowForm(true)}
                />
                <Moon className='mode'/>
            </div>
        </nav>
    )
}

export default Navbar