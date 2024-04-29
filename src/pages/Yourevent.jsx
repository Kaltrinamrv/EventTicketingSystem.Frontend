import React from 'react';

const Yourevent = ({ location }) => {
  // Parse URL parameters to get eventData
  const urlParams = new URLSearchParams(location.search);
  const eventData = {
    Name: urlParams.get('name'),
    Description: urlParams.get('description'),
    Location: urlParams.get('location'),
    Organizer: urlParams.get('organizer'),
    TicketQuantity: urlParams.get('ticketQuantity'),
    Price: urlParams.get('price'),
    DateTime: urlParams.get('dateTime'),
  };

  if (!eventData.Name || !eventData.Description || !eventData.Location || !eventData.Organizer || !eventData.TicketQuantity || !eventData.Price || !eventData.DateTime) {
    return <div>Error: Event data not found</div>; // Handle the case where eventData is not available
  }
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-8 sm:mt-24">
        <h1 className="text-white text-3xl font-titles mb-4">Event Details</h1>
        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
          <h2 className="text-white text-xl font-titles mb-4">{Name}</h2>
          <p className="text-white">{Description}</p>
          <p className="text-white">Location: {Location}</p>
          <p className="text-white">Organizer: {Organizer}</p>
          <p className="text-white">Ticket Quantity: {TicketQuantity}</p>
          <p className="text-white">Price: ${Price}</p>
          <p className="text-white">Date and Time: {DateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Yourevent;
