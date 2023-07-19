import React, { useState } from 'react';
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

  const handleGrantAccess = async () => {
    try {
      const response = await fetch('/admin/grant_access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket_number: attendee.ticket_number }),
      });

      if (response.ok) {
        const { message } = await response.json();
        setAttendee((prevAttendee) => ({ ...prevAttendee, booking_status: 'parked' }));
        toast.success(message);
      } else {
        console.error('Error granting access:', response.status);
      }
    } catch (error) {
      console.error('Error granting access:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Grant Access</h2>
        <div style={styles.formGroup}>
          <label htmlFor="searchInput" style={styles.label}>
            Search by Ticket Number or Vehicle Registration Number:
          </label>
          <div style={styles.inputGroup}>
            <input
              type="text"
              className="form-control"
              id="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.input}
            />
            <div style={styles.inputGroupAppend}>
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        {attendee && (
          <div>
            <h3 style={styles.detailsHeading}>Owner Details</h3>
            <div style={styles.blockTable}>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Ticket Number:</strong>
                </div>
                <div style={styles.cell}>{attendee.ticket_number}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Vehicle Registration:</strong>
                </div>
                <div style={styles.cell}>{attendee.vehicle_registration_number}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Vehicle Type:</strong>
                </div>
                <div style={styles.cell}>{attendee.vehicle_type}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Driver Name:</strong>
                </div>
                <div style={styles.cell}>
                  {attendee.driver_first_name} {attendee.driver_last_name}
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Driver Identification Number:</strong>
                </div>
                <div style={styles.cell}>{attendee.driver_identification_number}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Driver Email:</strong>
                </div>
                <div style={styles.cell}>{attendee.driver_email}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.cell}>
                  <strong>Driver Telephone Number:</strong>
                </div>
                <div style={styles.cell}>{attendee.driver_telephone_number}</div>
              </div>
            </div>
            <button className="btn btn-success" onClick={handleGrantAccess}>
              Grant Access
            </button>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default GrantAccess;

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    fontWeight: 'bold',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: '1',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  inputGroupAppend: {
    marginLeft: '10px',
  },
  detailsHeading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  blockTable: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  row: {
    display: 'table-row',
  },
  cell: {
    display: 'table-cell',
    padding: '8px',
    borderBottom: '1px solid #ccc',
  },
};
