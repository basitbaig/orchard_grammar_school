import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <span>0317 111 2442</span>
              <span>0317 111 2443</span>
              <span>0317 111 2448</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <span>info@civilizations.edu</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <span>ST-2, Block J North Nazimabad Karachi</span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" />
                <span>
                  <a
                    href="https://www.google.com/maps/search/Street+2,+Block+J+North+Nazimabad+Karachi/@24.9525388,67.041026,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Street 2, Block J, North Nazimabad, Karachi
                  </a>
                </span>
              </div>
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.556191198774!2d67.041026!3d24.9525388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff0c75d6a4d%3A0x4e3a55eeb6e23965!2sBlock%20J%20North%20Nazimabad%20Town%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}



//https://www.youtube.com/watch?v=94_6JPDi13g