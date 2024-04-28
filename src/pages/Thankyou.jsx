import Footer from "../components/UI/Footer";

const Thankyou = () => {
    return (
        <main>
            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-blue-600 to-fuchsia-600">
                <div className="text-white text-center p-8">
                    <h2 className="text-3xl font-titles mb-4">Welcome to Eventopia</h2>
                    <p className="text-lg">Thank you for joining us!</p>
                    <p className="text-lg">Log in again for more</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Thankyou;
