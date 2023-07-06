import React, {useState} from 'react';
import apiService from '../Api-service/ApiService';
import { Errors } from './Forms/FormStyle';
import { useNavigate } from 'react-router-dom';


  const Register = ({ handleRegister }) => {
  const [errors, setErrors] = useState({});
  const [isSignedUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    secretQuestion: "",
    secretAnswer: "",
    reservation: "",
    birthday: "",
    address:""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    apiService.post("/accounts/signup", formData)
      .then((response) => {
        if (!response.data.status) {
          return setErrors({ name: response.data.errorName, message: response.data.message });
        } else {
          setSignUp(true);
          setErrors({});

            setTimeout(() => {
                navigate("/Login");
            }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  const errorHandler = (name) => {
    return ( name === errors.name && <div className="error">{errors.message}</div> );
  };

  return (
    <>
    <div className="container-fluid row justify-content-center d-flex p-5">
      <div className="col-lg-6">
        <main className="form-signin px-5 row justify-content-center d-flex ">
          <form onSubmit={handleSubmit} className="col-lg-12 py-5 row" noValidate>
            <div className="col-lg-12">
                <p className="text-bold font-big text-center text-danger">ETIKET</p>
                <h1 className="h3 mb-3 fw-normal text-light">Register Account</h1>
              <div className="form-floating pb-2"> {/* First Name */}
                <input value={formData.firstName} name='firstName' onChange={handleChange} type="text" className="form-control" placeholder="first name" required/>
                <label htmlFor="floatingInput">First Name</label>
                <Errors>
                  {errorHandler("firstName")}
                  {errorHandler("invalidFirstName")}
                </Errors>  
              </div>
              <div className="form-floating pb-2"> {/* Last Name */}
                <input value={formData.lastName} name='lastName' onChange={handleChange} type="text" className="form-control" placeholder="last name" required/>
                <label htmlFor="floatingInput">Last Name</label>
                <Errors>
                  {errorHandler("lastName")}
                  {errorHandler("invalidLastName")}
                </Errors>  
              </div>

              <div className="form-floating pb-2">
                <input value={formData.email} name='email' onChange={handleChange} type="email" className="form-control" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Email address</label> {/* Email */}
                <Errors>
                  {errorHandler("email")}
                  {errorHandler("dupEmail")}
                  {errorHandler("invalidFormat")}
                </Errors>  
              </div>
              <div className="form-floating pb-2">
                <select name='secretQuestion' onChange={handleChange} class="form-select align-items-center d-flex py-3" aria-label="Choose Your Secret Question" required>
                  <option selected>Choose Your Secret Question</option> {/* Secret Question */}
                  <option value="Your Childhood Hero?">Your Childhood Hero?</option>
                  <option value="Your Favorite Color?">Your Favorite Color?</option>
                  <option value="Name of grade school you went to?">Name of grade school you went to?</option>
                </select>
                <Errors>
                  {errorHandler("secretQuestion")}
                </Errors>
              </div>
              <div className="form-floating pb-2">
                <input value={formData.secretAnswer} name="secretAnswer" onChange={handleChange} type="text" className="form-control" placeholder="Answer to secret question:" required/>
                <label htmlFor="floatingInput">Answer to secret question:</label> {/* Answer to SQ */}
                <Errors>
                  {errorHandler("secretAnswer")}
                </Errors>
              </div>
              <div className="form-floating pb-2">
                <input value={formData.address} name='address' onChange={handleChange} type="text" className="form-control" placeholder="address"/>
                <label htmlFor="floatingInput">Address</label> {/* Address */}
                <Errors>
                  {errorHandler("address")}
                </Errors>
                
              </div>
              <div className="form-floating pb-2">
                <input value={formData.birthday} name='birthday' onChange={handleChange} type="date" className="form-control" placeholder="birthday"/>
                <label htmlFor="floatingInput">Birthday</label> {/* Birthday */}
                <Errors>
                {errorHandler("birthday")}
                </Errors>
                
              </div>
              <div className="form-floating pb-2">
                <input value={formData.password} name='password' onChange={handleChange} type="password" className="form-control" placeholder="Password" required/>
                <label htmlFor="floatingPassword">Password</label> {/* Password */}
                <Errors>
                  {errorHandler("password")}
                  {errorHandler("weakPassword")}
                </Errors>
              </div>
              <div className="form-floating pb-2">
                <input value={formData.confirmpassword} name='confirmPassword' onChange={handleChange} type="password" className="form-control" placeholder="Confirm Password" required/>
                <label htmlFor="floatingPassword">Confirm Password</label> {/* Confirm Password */}
                <Errors>
                  {errorHandler("confirmPassword")}
                </Errors>   
              </div>
            </div>
            {/* {error && <div className='error_msg'> {error} </div>} // ERROR */}
            <div className="container-fluid py-2"> {/* Submit Button */}
              <button className="w-100 btn btn-lg btn-danger" type="submit">Register</button>
            </div>
            <a className="text-light" href="/Login">Already have an account?</a>
            {isSignedUp && (
              <div className='p-4'>  
                <div class="alert alert-success" role="alert">
                  <h4 class="alert-heading">Registration Successful! ✓ </h4>
                  <p>Redirecting you to Login...</p>
                </div>
              </div>  
            )}
          </form>
        </main>
      </div>
      <div className="col-lg-6 p-5"> {/* About Us Section */}
        <div className="container-fluid border border-danger border-3 rounded py-5">
          <h1 className="text-danger text-bold pb-4">ABOUT US</h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet. Nec nam aliquam sem et tortor consequat id. Ut tristique et egestas quis. At risus viverra adipiscing at in tellus integer. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Libero justo laoreet sit amet cursus sit amet dictum sit. Amet nisl purus in mollis nunc. Eget nunc scelerisque viverra mauris in aliquam sem. Ac tortor dignissim convallis aenean et tortor. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Tellus id interdum velit laoreet id donec ultrices. Nisl condimentum id venenatis a condimentum. Erat pellentesque adipiscing commodo elit. Mattis pellentesque id nibh tortor id aliquet. Purus ut faucibus pulvinar elementum integer enim neque. Sit amet nisl purus in. Amet venenatis urna cursus eget nunc scelerisque. Arcu risus quis varius quam quisque id diam. Magna ac placerat vestibulum lectus mauris. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Volutpat est velit egestas dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Netus et malesuada fames ac turpis. At tellus at urna condimentum mattis. Lectus sit amet est placerat. Eget magna fermentum iaculis eu.
          </p>
        </div>
      </div>
    </div>
    </>    
  )
}

export default Register;