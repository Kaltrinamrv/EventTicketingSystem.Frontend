const Header = () => {
    return (
        <header className="header">
             <p>Eventopia</p>
             <div className="button-container">
        <button className="header-button">Discover Events</button>
        <button className="header-button">Create Event</button>
        <button className="header-button">My Tickets</button>
        <button className="header-button">Login</button>
      </div>
        </header>
    );
};

export default Header;