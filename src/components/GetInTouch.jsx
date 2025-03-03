import { IoHeartOutline } from "react-icons/io5";
import { PiMapPin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  // Data for the sections
  const iconCSS = "text-[100px] block m-auto";
  const contactData = [
    {
      id: 1,
      icon: <PiMapPin className={iconCSS} />,
      title: "MEET US IN PERSON",
      description: (
        <>
          8776 Juniper Street <br />
          Unit #204 <br />
          Merriweather, Ontario <br />
          Canada
        </>
      ),
    },
    {
      id: 2,
      icon: <TfiEmail className={iconCSS} />,
      title: "THE TRADITIONAL WAY",
      description: (
        <>
          Email us at <br />
          <Link to="mailto:contact@minimal.com" className="text-teal-500">
            contact@minimal.com
          </Link>{" "}
          <br />
          Contact form: <br />
          <Link to="/contact-form" className="text-teal-500">
            Scroll down
          </Link>
        </>
      ),
    },
    {
      id: 3,
      icon: <IoHeartOutline className={iconCSS} />,
      title: "LET’S GET SOCIAL",
      description: (
        <div className="flex justify-center space-x-4">
          <Link to="/facebook" className="text-teal-500">
            Facebook
          </Link>
          <Link to="/twitter" className="text-teal-500">
            Twitter
          </Link>
          <Link to="/linkedin" className="text-teal-500">
            LinkedIn
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div id="contact">
        <section className="bg-teal-100 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
              LET’S GET IN TOUCH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {contactData.map((item) => (
                <div key={item.id} className="text-center">
                  <div className="mb-4 text-teal-500">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetInTouch;
