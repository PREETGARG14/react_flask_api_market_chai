import React from 'react'
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <section class="vh-100 gradient-custom main">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-4 text-uppercase">Create your Account</h2>


                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="userName" class="form-control form-control-lg" placeholder="Enter Username" />
                                        <label class="form-label" for="typeUsername">Enter Username</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="address" class="form-control form-control-lg" placeholder="Enter Address" />
                                        <label class="form-label" for="typeAddress">Enter Address</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Enter Password" />
                                        <label class="form-label" for="typePasswordX">Enter Password</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="confirmPasswordX" class="form-control form-control-lg" placeholder="Confirm Password" />
                                        <label class="form-label" for="confirmPasswordX">Confirm Password</label>
                                    </div>

                                    <p class="h5">Already have an Account! <Link to="/login">Login</Link></p>
                                    <button class="btn mt-5 form-control form-control-lg" type="submit">Register</button>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
