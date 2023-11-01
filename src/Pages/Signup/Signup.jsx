import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Signup = () => {
   
  const {createUser} = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    
    // console.log(email,name,password);
   

    createUser(email,password).then(result => {
      const user = result.user;
      console.log(user);

    }).then(error => console.log(error));

    

  }



  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">

          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <h1 className="text-5xl font-bold">Register</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
             
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
            

            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white">Sign-Up</button>
            </div>
            <div className='text-center my-5 '>
              <p>Already have an account? <Link className='underline text-orange-600 font-semibold' to='/login'>Login</Link> </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;