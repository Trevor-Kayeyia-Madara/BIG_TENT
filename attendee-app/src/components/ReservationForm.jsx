import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const ReservationForm = () => {
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
    fetch('/reservations', {
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
          toast.success(`Vehicle registered successfully. Your Ticket Number is: ${data.ticket_number}. Please keep it for checking at the gate`);

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
        toast.error('An error occurred during reservation.');
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
        <form onSubmit={handleSubmit}>
          <h2 className="form-heading">Vehicle Registration</h2>
          <div className="form-row">
            <label htmlFor="vehicle-registration-number" className="form-label">Vehicle Registration Number</label>
            <input
              type="text"
              id="vehicle-registration-number"
              placeholder="EG KZZ999Z"
              className="form-input"
              value={vehicleRegistrationNumber}
              onChange={(event) => setVehicleRegistrationNumber(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="vehicle-make" className="form-label">Vehicle Make</label>
            <input
              type="text"
              id="vehicle-make"
              className="form-input"
              placeholder="E.g. Toyota, Nissan"
              value={vehicleMake}
              onChange={(event) => setVehicleMake(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="vehicle-model" className="form-label">Vehicle Model</label>
            <input
              type="text"
              id="vehicle-model"
              className="form-input"
              placeholder="Land Cruiser, Note, etc"
              value={vehicleModel}
              onChange={(event) => setVehicleModel(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="driver-first-name" className="form-label">Driver First Name</label>
            <input
              type="text"
              id="driver-first-name"
              className="form-input"
              value={driverFirstName}
              onChange={(event) => setDriverFirstName(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="driver-last-name" className="form-label">Driver Last Name</label>
            <input
              type="text"
              id="driver-last-name"
              className="form-input"
              value={driverLastName}
              onChange={(event) => setDriverLastName(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="driver-identification-number" className="form-label">Driver Identification Number</label>
            <input
              type="text"
              id="driver-identification-number"
              className="form-input"
              value={driverIdentificationNumber}
              onChange={(event) => setDriverIdentificationNumber(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="driver-email" className="form-label">Driver Email</label>
            <input
              type="email"
              id="driver-email"
              className="form-input"
              placeholder="abc@example.com"
              value={driverEmail}
              onChange={(event) => setDriverEmail(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="driver-telephone-number" className="form-label">Driver Telephone Number</label>
            <input
              type="text"
              id="driver-telephone-number"
              placeholder="9999999999"
              className="form-input form-input--half"
              value={driverTelephoneNumber}
              onChange={(event) => setDriverTelephoneNumber(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="vehicle-type" className="form-label">Vehicle Type</label>
            <select
              id="vehicle-type"
              className="form-select form-input"
              value={vehicleType}
              onChange={(event) => setVehicleType(event.target.value)}
            >
              <option>Select Vehicle Type</option>
              <option value="CAR">Car</option>
              <option value="BUS">Bus</option>
              <option value="MCYLE">Motorcycle</option>
              <option value="TRUCK">Truck</option>
            </select>
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
