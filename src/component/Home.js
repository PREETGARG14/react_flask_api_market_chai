import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <div class="continer-fluid position-relative overflow-hidden p-md-5  text-center bg-dark" style={{ color: "white" }}>
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Chai Lelo Market</h1>
                    <p class="lead font-weight-normal">Start purchasing exclusive chai products by clicking the link below</p>
                    <Link class="btn btn-primary" to="/">Get Started</Link>
                </div>
                <div class="product-device box-shadow d-none d-md-block"></div>
                <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        </>
    );
}
