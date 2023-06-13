import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const StudentSelectedClasses = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (classItem) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${classItem._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="py-12 w-full p-2">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Selected Classes ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">No classes selected.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((classItem) => (
              <div
                key={classItem._id}
                className={`bg-white p-6 rounded shadow ${classItem.availableSeats === 0 ? 'bg-red-100' : ''}`}
              >
                <div className="font-semibold mb-2">Name:</div>
                <div>{classItem.name}</div>

                <div className="font-semibold mb-2">Instructor:</div>
                <div>{classItem.instructor}</div>

                <div className="font-semibold mb-2">Available Seats:</div>
                <div>{classItem.availableSeats}</div>

                <div className="font-semibold mb-2">Price:</div>
                <div>${classItem.price}</div>

                <div className="flex justify-end mt-4">
                  <button className="btn btn-primary mr-2" onClick={() => handleDelete(classItem)}>
                    Delete
                  </button>
                  <Link to={`/Dashboard/payment/${classItem._id}`}>
                    <button className="btn btn-primary">Pay</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentSelectedClasses;
