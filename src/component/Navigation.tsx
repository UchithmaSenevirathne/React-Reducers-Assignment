import {Link} from "react-router";
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <header className="bg-gradient-to-r from-indigo-500 to-sky-500 shadow-lg">
                <nav className="px-4 py-3">
                    <ul className="flex text-white space-x-4">
                        <Link to="/" className="custom-link">
                            Dashboard
                        </Link>
                        <Link to="/add" className="custom-link">
                            Add
                        </Link>
                        <Link to="/update" className="custom-link">
                            Update
                        </Link>
                        <Link to="/delete" className="custom-link">
                            Delete
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}