import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await fetch('/attendees');
      const data = await response.json();
      setAttendees(data);
    } catch (error) {
      console.error('Error fetching attendees:', error);
    }
  };

  return (
    <div className="container">
      <Navigation />
      <h2 className="mt-4">Admin Dashboard</h2>
      <div className="table-responsive mt-4">
        <h3>Attendee Details</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Ticket Number</th>
              <th>Vehicle Registration</th>
              <th>Vehicle Make</th>
              <th>Vehicle Model</th>
              <th>Driver First Name</th>
              <th>Driver Last Name</th>
              <th>Driver ID</th>
              <th>Driver Email</th>
              <th>Driver Telephone</th>
              <th>Vehicle Type</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee) => (
              <tr key={attendee.id}>
                <td>{attendee.ticket_number}</td>
                <td>{attendee.vehicle_registration_number}</td>
                <td>{attendee.vehicle_make}</td>
                <td>{attendee.vehicle_model}</td>
                <td>{attendee.driver_first_name}</td>
                <td>{attendee.driver_last_name}</td>
                <td>{attendee.driver_identification_number}</td>
                <td>{attendee.driver_email}</td>
                <td>{attendee.driver_telephone_number}</td>
                <td>{attendee.vehicle_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
