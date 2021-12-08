import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">BUY CHAI ONLINE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/market">Market</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"  to="/register">Register</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}
