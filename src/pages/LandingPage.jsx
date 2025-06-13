import { Phone, Globe, Shield, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomButton = ({ children, className = '' }) => (
  <button className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}>
    {children}
  </button>
);

const LandingPage = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600 mx-auto" />,
      title: "Number Verification",
      desc: "Verify phone numbers and identify carriers globally"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600 mx-auto" />,
      title: "Location Tracking",
      desc: "Get precise location and timezone information"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 mx-auto" />,
      title: "Carrier Detection",
      desc: "Identify mobile carriers and service providers"
    }
  ];

  const statistics = [
    {
      number: '200+',
      label: 'Countries Covered'
    },
    {
      number: '1000+',
      label: 'Carriers Tracked'
    },
    {
      number: '1M+',
      label: 'Numbers Verified'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br font-plus from-slate-50 to-gray-100">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PhoneTracker</h1>
        <Link to="/phone-tracker">
          <CustomButton>Start Tracking</CustomButton>
        </Link>
      </nav>

      <section className="container mx-auto px-6 pt-20 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Global Phone Number
            <span className="block text-blue-600">Tracking Solution</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Track phone numbers worldwide, identify carriers, and verify location details
            in real-time with our advanced tracking platform.
          </p>
          <Link to="/phone-tracker">
            <CustomButton className="h-12 px-8 text-lg">
              Track Number <span className="ml-2">→</span>
            </CustomButton>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center text-white p-8"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50 opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Tracking Phone Numbers Now
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who trust our platform for accurate phone number tracking and verification.
            </p>
            <Link to="/phone-tracker">
              <CustomButton className="h-14 px-10 text-lg shadow-lg hover:shadow-xl">
                Start Tracking <span className="ml-2">📍</span>
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">PhoneTracker</h3>
              <p className="text-gray-400">Global phone number verification and tracking solution.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">FEATURES</h4>
              <ul className="space-y-2">
                <li>Number Verification</li>
                <li>Location Tracking</li>
                <li>Carrier Detection</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">CONNECT</h4>
              <div className="flex space-x-4">
                <Globe className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Phone className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Users className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-sm">© 2024 PhoneTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
