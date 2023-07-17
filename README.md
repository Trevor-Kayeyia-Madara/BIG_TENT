# Parking App

The Parking App is a web application developed for managing attendee parking at BIGTENT's Revival Meetings in Kasarani Stadium. The app allows attendees to register their vehicles and provides an Admin Console for managing attendee details, granting parking access, and tracking available parking sections in the stadium.

## Features

- Attendee Registration: Attendees can register their vehicles by providing vehicle details and driver information.
- Success Message with Ticket Number: After successful registration, a success message with a generated ticket number is displayed to the attendee.
- Admin Console: Provides a separate UI frontend for managing attendee details and parking access.
- Attendee Details Table: The Admin Console displays a table of attendees' details fetched from the database.
- Granting Parking Access: The Admin Console allows the admin to grant parking access by entering the Ticket Number or Vehicle Registration Number to display attendee details.
- Vehicle Type Indication: The database indicates whether the registered vehicle is a car, bus, or motorcycle.
- Date Stamp: The app automatically provides the current date stamp to indicate that a driver can use the same vehicle for another date.
- VIP, Regular, and Big_Tent Organizers Provision: The database differentiates between VIP attendees, regular attendees, and Big_Tent organizers.
- Time In and Time Out: The app tracks the time in and time out for each attendee.
- Parking Sections at Kasarani Stadium: The app manages parking sections A, B, C, D, E, F, and G with specific capacity and allocation rules.
- Systematic Allocation: Parking sections are allocated systematically, beginning from A for VIPs and then D to G for regular attendees.
- Status Display: The Admin Console displays the status of each parking section, indicating the number of available parking spots.
- Deduction of Spots: Available spots are deducted when an attendee parks their vehicle.
- Sequential Allocation: The allocation of parking spots begins from section D to G since sections A to C are reserved.

## Installation

1. Clone the repository: `git clone https://github.com/Trevor-Kayeyia-Madara/BIG_TENT.git`
2. Install the required dependencies: `npm install`
3. Configure the database connection in the backend.
4. Start the server: `npm start`
5. Access the app at `http://localhost:3000`

## Technologies Used

- Frontend: React.js, Bootstrap
- Backend: Node.js, Express.js
- Database: SQLite3

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

[License Name]
