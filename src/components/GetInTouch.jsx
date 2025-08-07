import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-400 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have questions or need help with our services? We’re here to assist
            you. Reach out to us using the contact details below or send us a
            direct message using the form.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  123 Finance Street, Suite 456, New York, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@zerionix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-gray-300/40 to-gray-100/20">
          <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-8 shadow-lg 
                          transition-transform duration-300 ease-out 
                          transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
    <div className="mt-16 rounded-2xl overflow-hidden shadow-lg max-w-7xl mx-auto px-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602408006!2d75.62574481854841!3d26.88542139063844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1754465959184!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  );
};

export default GetInTouch;
