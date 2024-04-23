import Header from "../components/Header"
export default function Create(){
    return (
        <>
        <Header/>
            <h1 className="text-blue-300">Where Event Organizers Grow </h1>
            <p className="text-center text-lg mt-4">Sell tickets, promote events, engage sponsors, and discover events.</p>
            <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create your event
        </button>
      </div>

      <div className="additional-text">
          <h2>Event hosting made easy</h2>
          <p>Easily create and manage events on a platform that attendees love and trust.</p>
        </div>
        </>
    )
}