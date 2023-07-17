import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AttendeeForm = () => {
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [driverFirstName, setDriverFirstName] = useState('');
  const [driverLastName, setDriverLastName] = useState('');
  const [driverIdentificationNumber, setDriverIdentificationNumber] = useState('');
  const [driverEmail, setDriverEmail] = useState('');
  const [driverTelephoneNumber, setDriverTelephoneNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!validateForm()) {
      return;
    }

    // Create the attendee object
    const attendee = {
      vehicle_registration_number: vehicleRegistrationNumber,
      vehicle_make: vehicleMake,
      vehicle_model: vehicleModel,
      driver_first_name: driverFirstName,
      driver_last_name: driverLastName,
      driver_identification_number: driverIdentificationNumber,
      driver_email: driverEmail,
      driver_telephone_number: driverTelephoneNumber,
      vehicle_type: vehicleType,
    };

    // Send the attendee object to the backend API for registration
    fetch('/attendees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(`Attendee registered successfully. Your Ticket Number is: ${data.ticket_number}. Please keep it for checking at the gate`);

          // Clear form fields after successful registration
          setVehicleRegistrationNumber('');
          setVehicleMake('');
          setVehicleModel('');
          setDriverFirstName('');
          setDriverLastName('');
          setDriverIdentificationNumber('');
          setDriverEmail('');
          setDriverTelephoneNumber('');
          setVehicleType('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred during attendee registration.');
      });
  };

  const validateForm = () => {
    // Perform form validation
    // Check if all fields are filled
    if (
      vehicleRegistrationNumber === '' ||
      vehicleMake === '' ||
      vehicleModel === '' ||
      driverFirstName === '' ||
      driverLastName === '' ||
      driverIdentificationNumber === '' ||
      driverEmail === '' ||
      driverTelephoneNumber === '' ||
      vehicleType === ''
    ) {
      // Display an error message or handle form validation errors
      toast.error('Please fill in all fields');
      return false;
    }

    // Additional form validation rules can be added here

    return true;
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="attendee-card">
        <form className="attendee-form" onSubmit={handleSubmit}>
          <h2>Attendee Registration</h2>
          <div className="form-group">
            <label htmlFor="vehicle-registration-number">Vehicle Registration Number</label>
            <input
              type="text"
              id="vehicle-registration-number"
              className="form-control"
              value={vehicleRegistrationNumber}
              onChange={(event) => setVehicleRegistrationNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle-make">Vehicle Make</label>
            <input
              type="text"
              id="vehicle-make"
              className="form-control"
              value={vehicleMake}
              onChange={(event) => setVehicleMake(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle-model">Vehicle Model</label>
            <input
              type="text"
              id="vehicle-model"
              className="form-control"
              value={vehicleModel}
              onChange={(event) => setVehicleModel(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-first-name">Driver First Name</label>
            <input
              type="text"
              id="driver-first-name"
              className="form-control"
              value={driverFirstName}
              onChange={(event) => setDriverFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-last-name">Driver Last Name</label>
            <input
              type="text"
              id="driver-last-name"
              className="form-control"
              value={driverLastName}
              onChange={(event) => setDriverLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-identification-number">Driver Identification Number</label>
            <input
              type="text"
              id="driver-identification-number"
              className="form-control"
              value={driverIdentificationNumber}
              onChange={(event) => setDriverIdentificationNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-email">Driver Email</label>
            <input
              type="email"
              id="driver-email"
              className="form-control"
              value={driverEmail}
              onChange={(event) => setDriverEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-telephone-number">Driver Telephone Number</label>
            <input
              type="text"
              id="driver-telephone-number"
              className="form-control"
              value={driverTelephoneNumber}
              onChange={(event) => setDriverTelephoneNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle-type">Vehicle Type</label>
            <select
              id="vehicle-type"
              className="form-control"
              value={vehicleType}
              onChange={(event) => setVehicleType(event.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AttendeeForm;