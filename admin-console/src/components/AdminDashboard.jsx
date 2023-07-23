import React, { useEffect, useState } from 'react';


const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await fetch('/reservations');
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Admin Dashboard</h2>
        <div style={styles.tableContainer}>
          <h3>Vehicle and Owner Details</h3>
          <table style={styles.table}>
            <thead>
              <tr>
              <th>Ticket Number</th>
      <th>Vehicle Registration Number</th>
      <th>Vehicle Make</th>
      <th>Vehicle Model</th>
      <th>Driver First Name</th>
      <th>Driver Last Name</th>
      <th>Driver Identification Number</th>
      <th>Driver Email</th>
      <th>Driver Telephone Number</th>
      <th>Vehicle Type</th>
      <th>Booking Status</th>
      <th>Pay State</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.ticket_number}</td>
                  <td>{reservation.vehicle_registration_number}</td>
                  <td>{reservation.vehicle_make}</td>
                  <td>{reservation.vehicle_model}</td>
                  <td>{reservation.driver_first_name}</td>
                  <td>{reservation.driver_last_name}</td>
                  <td>{reservation.driver_identification_number}</td>
                  <td>{reservation.driver_email}</td>
                  <td>{reservation.driver_telephone_number}</td>
                  <td>{reservation.vehicle_type}</td>
                  <td>{reservation.booking_status}</td>
                  <td>{reservation.pay_state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: '2700px',
    padding: '10px',
    background: '#f2f2f2',
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    maxWidth: '1800px', // Updated maxWidth value
    width: '100%',
    margin: '0 auto',
  },
  heading: {
    marginTop: '0',
    fontSize: '24px',
    textAlign: 'center',
  },
  tableContainer: {
    marginTop: '20px',
    maxWidth:'2000px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '3px solid #ddd',
  },
  tableHeader: {
    background: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: '20px',
    borderBottom: '2px solid #ddd',
  },
};
