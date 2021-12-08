import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <section class="vh-100 gradient-custom main">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p class="text-white-50 mb-5">Please enter your username and password!</p>

                                        <div class="form-outline form-white mb-4">
                                            <input type="text" id="userName" class="form-control form-control-lg" placeholder="Username" />
                                            <label class="form-label" for="typeUsername">Username</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password" />
                                            <label class="form-label" for="typePasswordX">Password</label>
                                        </div>

                                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a>
                                        </p>

                                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>



                                    </div>

                                    <div>
                                        <p class="mb-0">Don't have an account? <Link to="/register" class="text-white-50 fw-bold"> Register </Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
