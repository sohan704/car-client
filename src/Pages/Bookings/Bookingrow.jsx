const Bookingrow = ({ booking, bookings, setBookings, handleUpdate }) => {

  const { _id, name, email, date, img, service, due, status } = booking;
  
  const handleDelete = id => {
     fetch(`https://car-doc-server-pink.vercel.app/bookings/${id}`,{
      method:'DELETE',
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      
     });
  }


  return (
    <div>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                  img && <img src={img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">${due}</span>
        </td>
        <td>{email}</td>
        <th>
          {
            status !== 'confirmed' ? <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">UPDATE</button> : <div>CONFIRMED</div>
          }
        </th>
      </tr>
    </div>
  );
};

export default Bookingrow;