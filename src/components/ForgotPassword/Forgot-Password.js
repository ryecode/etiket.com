import React, {useState, useRef, useEffect } from 'react';
import apiService from '../../Api-service/ApiService';



export default function ForgotPassword() {

        return (
            <div className="container-fluid row justify-content-center d-flex p-5">
            <div className="col-lg-6">
                <main className="form-signin px-5 row justify-content-center d-flex ">
                    <form className="col-lg-12 py-5 row">
                        <div className="col-lg-12">
                            <p className="text-bold font-big text-center text-danger">ETIKET</p>
                            <h1 className="h3 mb-3 fw-normal text-light">Forgot Password</h1>
                            <div className="form-floating pb-2">
                                <input name='firstName' type="text" className="form-control" placeholder="first name" required/>
                                <label htmlFor="floatingInput">First Name</label> {/* First Name */}
                            </div>
                            <div className="form-floating pb-2">
                                <input name='lastName' type="text" className="form-control" placeholder="last name" required/>
                                <label htmlFor="floatingInput">Last Name</label> {/* Last Name */}
                            </div>
                            <div className="form-floating pb-2">
                              <input name='email' type="email" className="form-control" placeholder="name@example.com" required/>
                              <label htmlFor="floatingInput">Email address</label> {/* Email */}
                            </div>
                            <div className="form-floating pb-2">
                              <select name='secretQuestion' class="form-select align-items-center d-flex py-3" aria-label="Choose Your Secret Question" required>
                                <option selected>Choose Your Secret Question</option> {/* Secret Question */}
                                <option value="Your Childhood Hero?">Your Childhood Hero?</option>
                                <option value="Your Favorite Color?">Your Favorite Color?</option>
                                <option value="Name of grade school you went to?">Name of grade school you went to?</option>
                              </select>
                            </div>
                            <div className="form-floating pb-2">
                                <input name='answerToSQ' type="text" className="form-control" placeholder="Answer to secret question:" required/>
                                <label htmlFor="floatingInput">Answer to secret question:</label>
                            </div>
                            <div className="form-floating pb-2">
                              <input name='password' type="password" className="form-control" placeholder="Password" required/>
                              <label htmlFor="floatingPassword">New Password</label> {/* Password */}
                            </div>
                            <div className="form-floating pb-2">
                                <input name='confirmPassword' type="password" className="form-control" placeholder="Confirm Password" required/>
                                <label htmlFor="floatingPassword">Confirm Password</label> {/* Confirm Password */}
                              </div>
                        </div>
                        <div className="container-fluid py-2"> {/* Submit Button */}
                        <button className="w-100 btn btn-lg btn-danger" type="submit">Submit</button>
                        </div>
                        <a className="text-decoration-none text-light" href="/Login">Back to log in</a>
                    </form>
                </main>
            </div>
        </div>
        )
    }