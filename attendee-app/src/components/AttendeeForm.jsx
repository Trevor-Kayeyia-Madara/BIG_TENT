import React, { useState } from 'react';
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
    <div className="container mx-auto px-4">
      <ToastContainer position="top-center" />
      <div className="attendee-card bg-white rounded-lg shadow-md p-6 mx-auto max-w-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Vehicle Registration</h2>
          <div className="mb-4">
            <label htmlFor="vehicle-registration-number" className="block mb-2 font-medium">Vehicle Registration Number</label>
            <input
              type="text"
              id="vehicle-registration-number"
              placeholder="EG KZZ999Z"
              className="w-full border border-gray-300 rounded-md p-2"
              value={vehicleRegistrationNumber}
              onChange={(event) => setVehicleRegistrationNumber(event.target.value)}
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-0">
              <label htmlFor="vehicle-make" className="block mb-2 font-medium">Vehicle Make</label>
              <input
                type="text"
                id="vehicle-make"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="E.g. Toyota, Nissan"
                value={vehicleMake}
                onChange={(event) => setVehicleMake(event.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <label htmlFor="vehicle-model" className="block mb-2 font-medium">Vehicle Model</label>
              <input
                type="text"
                id="vehicle-model"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Land Cruiser, Note, etc"
                value={vehicleModel}
                onChange={(event) => setVehicleModel(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-0">
              <label htmlFor="driver-first-name" className="block mb-2 font-medium">Driver First Name</label>
              <input
                type="text"
                id="driver-first-name"
                className="w-full border border-gray-300 rounded-md p-2"
                value={driverFirstName}
                onChange={(event) => setDriverFirstName(event.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <label htmlFor="driver-last-name" className="block mb-2 font-medium">Driver Last Name</label>
              <input
                type="text"
                id="driver-last-name"
                className="w-full border border-gray-300 rounded-md p-2"
                value={driverLastName}
                onChange={(event) => setDriverLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="driver-identification-number" className="block mb-2 font-medium">Driver Identification Number</label>
            <input
              type="text"
              id="driver-identification-number"
              className="w-full border border-gray-300 rounded-md p-2"
              value={driverIdentificationNumber}
              onChange={(event) => setDriverIdentificationNumber(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="driver-email" className="block mb-2 font-medium">Driver Email</label>
            <input
              type="email"
              id="driver-email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="abc@example.com"
              value={driverEmail}
              onChange={(event) => setDriverEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-0">
              <label htmlFor="driver-telephone-number" className="block mb-2 font-medium">Driver Telephone Number</label>
              <input
                type="text"
                id="driver-telephone-number"
                placeholder="9999999999"
                className="w-full border border-gray-300 rounded-md p-2"
                value={driverTelephoneNumber}
                onChange={(event) => setDriverTelephoneNumber(event.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <label htmlFor="vehicle-type" className="block mb-2 font-medium">Vehicle Type</label>
              <select
                id="vehicle-type"
                className="w-full border border-gray-300 rounded-md p-2"
                value={vehicleType}
                onChange={(event) => setVehicleType(event.target.value)}
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="truck">Truck</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AttendeeForm;
