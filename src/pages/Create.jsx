import Header from "../components/UI/Header"
import HeroSection from "../components/Create/HeroSection"
import InfoCard from "../components/Create/InfoCard";
import Footer from "../components/UI/Footer"
import AboutCard from "../components/Create/AboutCard";

const Create = () => {
    const EV_CARDS = [
        {
            title: "Event Ticketing",
            description: `Sell more tickets with customizable event pages and a seamless checkout experience for attendees on a trusted platform`,
            
        },
        {
            title: "Reporting & Analytics",
            description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            
        },
        {
            
            title: "Organizer App",
            description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            
        },
    ]
    const PURPLE_CARDS = [
        {
            titles: [
              "Event Ticketing",
              "Eventbrite Ads",
              "Marketing Tools",
              "Payments"
            ],
            descriptions: [
              "Everything you need to sell tickets for in-person or online events",
              "Create no-hassle ads that promote your event on Eventbrite",
              "All the event marketing tools you need in one place",
              "Easily collect and simplify event payments"
            ]
          }
       
       
     
    ]







    return (
            <main>
                <HeroSection />
                <div className="w-full bg-primary">
                    <div className="max-w-full  mt-12 mx-6 py-2">
                        <h1 className="text-white text-3xl font-titles my-[3rem]">Event hosting made easy</h1>
                        <p className="text-white text-xl">Easily create and manage events on a platform that attendees <br/> love and trust</p>
                    </div>
                    <div className="flex md:px-[150px] xl:px-[300px] w-full bg-primary justify-start items-start gap-8 py-6 flex-col">
                    {EV_CARDS.map((item) => {
                        return <InfoCard key={item.id} item={item} />;
                    })}
                     </div>
                     <div className="max-w-full  mt-12 mx-6 py-2">
                        <h1 className="text-white text-2xl font-titles my-[3rem]">All the tools you need to host an event & grow your community</h1>
                      </div>
                      <div className="w-full ">
                    {PURPLE_CARDS.map((item) => {
                        return <AboutCard key={item.id} item={item} />;
                    })}
                     </div>

                   
                </div>
    
                <Footer />
            </main>
        

    );
};

export default Create;