import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Bookingrow from "./Bookingrow";
import axios from "axios";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState(null);
  
  const axiosSecure = UseAxiosSecure();
  
  const url = `/bookings?email=${user?.email}`;
  // const url = `https://car-doc-server-pink.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    
    // axios.get(url, {withCredentials: true})
    // .then(res => {
    //   setBookings(res.data);
    // })

    axiosSecure.get(url).then(res => setBookings(res.data));

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setBookings(data));
  }, [url, axiosSecure])

  console.log(bookings);

  
  const handleUpdate = id => {
    fetch(`https://car-doc-server-pink.vercel.app/bookings/${id}`,{
      method:'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirmed'})
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      const remaining = bookings.filter(booking => booking._id !== id);
      const updated = bookings.find(booking => booking._id === id );
      updated.status = 'confirmed';
      const newBookings = [updated, ...remaining];
      setBookings(newBookings);
    });
  }



  return (
    <div>
      <h2 className="text-5xl">Your bookings:- {bookings?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
       
          <tbody>
            {/* row 1 */}
           {
            bookings?.map(booking => <Bookingrow key={booking._id} bookings={bookings} setBookings={setBookings} handleUpdate={handleUpdate} booking={booking}></Bookingrow>)
           }
            
          </tbody>
          {/* foot */}
        

        </table>
      </div>
    </div>
  );
};

export default Bookings;