import React, { useState } from 'react';
import Navigation from './Navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GrantAccess = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [attendee, setAttendee] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/admin/search_attendee?query=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setAttendee(data);
      } else {
        setAttendee(null);
        console.error('Error searching attendee:', response.status);
      }
    } catch (error) {
      setAttendee(null);
      console.error('Error searching attendee:', error);
    }
  };

  const handleAllocateSection = async () => {
    try {
      const response = await fetch('/admin/grant_access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket_number: attendee.ticket_number }),
      });

      if (response.ok) {
        // Access granted, update attendee details
        const updatedAttendee = await response.json();
        setAttendee(updatedAttendee);
        toast.success('Access granted');
      } else {
        console.error('Error granting access:', response.status);
      }
    } catch (error) {
      console.error('Error granting access:', error);
    }
  };

  return (
    <div className="container">
      <Navigation />
      <h2>Grant Access</h2>
      <div className="form-group">
        <label htmlFor="searchInput">Search by Ticket Number or Vehicle Registration Number:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      {attendee && (
        <div>
          <h3>Attendee Details</h3>
          <p>Ticket Number: {attendee.ticket_number}</p>
          <p>Vehicle Registration: {attendee.vehicle_registration_number}</p>
          <p>Vehicle Type: {attendee.vehicle_type}</p>
          <p>Driver Name: {attendee.driver_first_name} {attendee.driver_last_name}</p>
          <p>Driver Identification Number: {attendee.driver_identification_number}</p>
          <p>Driver Email: {attendee.driver_email}</p>
          <p>Driver Telephone Number: {attendee.driver_telephone_number}</p>
          <button className="btn btn-success" onClick={handleAllocateSection}>Grant Access</button>
        </div>
      )}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default GrantAccess;
