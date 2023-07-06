import React from 'react';

export default function Payment() {
        return (
            <div className="container-fluid row justify-content-center d-flex p-5">
                <main className="form-signin px-5 row justify-content-center d-flex ">
                  <form className="col-lg-10 py-5 row">
                    <p className="text-bold fs-1 text-center text-danger">Payment Method</p>

                    <div className="col-lg-12">
                        <div className="col-lg-12 text-light fs-3">Debit/Credit Card</div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="full name"/>
                            <label for="floatingInput">Full Name</label>
                          </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating pb-2">
                            <input type="number" className="form-control" id="floatingNumber" placeholder="card number"/>
                            <label for="floatingNumber">Card Number</label>
                          </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingDate" placeholder="Expiration Date"/>
                            <label for="floatingDate">Expiration Date</label>
                          </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating pb-2">
                            <input type="number" className="form-control" id="floatingCVV" placeholder="CVV"/>
                            <label for="floatingCVV">CVV</label>
                          </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating pb-2">
                            <input type="number" className="form-control" id="floatingZip" placeholder="Zip Code"/>
                            <label for="floatingZip">Zip Code</label>
                          </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="container-fluid py-2">
                            <button className="w-100 btn btn-lg btn-danger" type="submit">Validate</button>
                            </div>     
                    </div>            
                  </form>
                  <form className="col-lg-10 pb-5 row">

                    <div className="col-lg-12">
                        <div className="col-lg-12 text-light fs-3">Checkout Details</div>
                    </div> 
                    <div className="col-lg-6 justify-content-center d-flex">
                            <textarea className="form-control" id="details" rows="3"></textarea>
                    </div>
                    <div className="col-lg-6 row">
                        <div className="col-lg-12 py-2">
                            <button className="w-100 btn btn-lg btn-danger" type="submit">Confirm Booking</button>
                        </div>
                        <div className="col-lg-12 py-2">
                            <a className="w-100 btn btn-lg btn-danger" href="/Booking">Go Back</a>
                        </div>    
                    </div>      
                  </form>
                  <div className="col-lg-10 pb-5">
                    <div className="col-lg-12 text-light fs-3 pb-3">Terms & Agreement</div>
                    <p className="col-lg-12 text-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet. Nec nam aliquam sem et tortor consequat id. Ut tristique et egestas quis. At risus viverra adipiscing at in tellus integer. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Libero justo laoreet sit amet cursus sit amet dictum sit. Amet nisl purus in mollis nunc. Eget nunc scelerisque viverra mauris in aliquam sem. Ac tortor dignissim convallis aenean et tortor. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Tellus id interdum velit laoreet id donec ultrices. Nisl condimentum id venenatis a condimentum. Erat pellentesque adipiscing commodo elit. Mattis pellentesque id nibh tortor id aliquet. Purus ut faucibus pulvinar elementum integer enim neque. Sit amet nisl purus in. Amet venenatis urna cursus eget nunc scelerisque. Arcu risus quis varius quam quisque id diam. Magna ac placerat vestibulum lectus mauris. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Volutpat est velit egestas dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Netus et malesuada fames ac turpis. At tellus at urna condimentum mattis. Lectus sit amet est placerat. Eget magna fermentum iaculis eu.
                    </p>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="agree"/>
                        <label className="form-check-label text-light" for="agree">
                          Agree Terms & Agreement
                        </label>
                      </div>
                  </div>
                  
                </main>
        </div>
        )
    }