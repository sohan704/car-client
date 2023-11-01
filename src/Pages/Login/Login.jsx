import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';


const Login = () => {
  // const {signIn} = useContext(AuthContext);
  const {signIn} = UseAuth();
  
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    const user = {email,password};

    signIn(email,password).then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = {email}; 

      
      
      //access token maro 

      axios.post(`https://car-doc-server-pink.vercel.app/jwt`,user, {
        withCredentials: true
      })
      .then(res => {
        console.log(res.data);
        if(res.data.success){
          navigate(location?.state ? location?.state : '/');
        }
      })





    }).then(error => console.log(error));

    console.log(user);
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">

            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-5xl font-bold">Login</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-500 text-white">Login</button>
              </div>
              <div className='text-center my-5 '>
                <p>New here? <Link className='underline text-orange-600 font-semibold' to='/signup'>SignUp</Link> </p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;