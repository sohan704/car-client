import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';

const Checkout = () => {

  const service = useLoaderData();
  console.log(service);
  const { title, _id ,price, img} = service;
  const {user} = useContext(AuthContext);
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const due = form.due.value;
    
    const booking = {
      name,
      email,
      service_id: _id,
      service: title,
      date,
      due,
      img
    }

    console.log(booking);

    fetch('https://car-doc-server-pink.vercel.app/bookings',{
      method:'POST',
      headers:{
      'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    }).then(res => res.json())
    .then(data =>
      {
        if(data.insertedId){
          swal("", "Order Added!", "success");
        }
      });

  }
  
  return (
    <div>

      <div className="text-center">
        <h2>Book Service: {title}</h2>
      </div>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Book now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleBookService} className="card-body">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder={user?.displayName} className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" placeholder="date" className="input input-bordered" required />


                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input type="number" name="due" placeholder={price} className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email}  className="input input-bordered" required />


                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-block text-white bg-orange-600">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;