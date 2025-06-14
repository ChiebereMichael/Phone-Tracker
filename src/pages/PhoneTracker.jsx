import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { parsePhoneNumber } from 'libphonenumber-js/max';
import { FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
import { countryData, getCountryByCode } from '../utils/countryData';

function GlobalPhoneTracker() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState('');

  const trackPhoneNumber = () => {
    try {
      const phoneNumberObj = parsePhoneNumber(phoneNumber);
      
      if (!phoneNumberObj || !phoneNumberObj.isValid()) {
        throw new Error('Invalid phone number');
      }

      const countryDetails = getCountryByCode(phoneNumberObj.country);
      
      const info = {
        country: countryDetails?.name || phoneNumberObj.country || 'Unknown',
        countryCode: phoneNumberObj.country,
        carrier: phoneNumberObj.carrier || 'Unknown carrier',
        timezone: phoneNumberObj.timezone || 'Unknown timezone',
        type: formatType(phoneNumberObj.getType()),
        international: phoneNumberObj.formatInternational(),
        national: phoneNumberObj.formatNational(),
        dialCode: countryDetails?.dialCode || `+${phoneNumberObj.countryCallingCode}`
      };

      setTrackingInfo(info);
      setError('');
    } catch (err) {
      setError('Please enter a valid phone number with country code');
      setTrackingInfo(null);
    }
  };

  const formatType = (type) => {
    const types = {
      'FIXED_LINE': 'Landline',
      'MOBILE': 'Mobile',
      'FIXED_LINE_OR_MOBILE': 'Landline or Mobile',
      'PREMIUM_RATE': 'Premium Rate',
      'SHARED_COST': 'Shared Cost',
      'VOIP': 'VoIP',
      'PERSONAL_NUMBER': 'Personal Number',
      'PAGER': 'Pager',
      'UAN': 'Universal Access Number',
      'VOICEMAIL': 'Voicemail',
      'UNKNOWN': 'Unknown'
    };
    return types[type] || type;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b font-plus from-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">################################</h1>
            <div className="flex items-center justify-center text-green-400 mb-2">
              <FaInfoCircle className="mr-2" />
              <span>Created By IFearAids</span>
            </div>
            <h1 className="text-3xl font-bold text-blue-400 mb-6">################################</h1>
            <p className="text-yellow-200">
              This Tool Is Used For getting information about phone numbers worldwide
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-cyan-300 mb-2">
              Enter phone number with country code (e.g. +447911123456 ):
            </label>
            <PhoneInput
              international
              defaultCountry="GB" // Default to UK
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            onClick={trackPhoneNumber}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Track Number
          </button>

          {trackingInfo && (
            <div className="mt-6 p-4 bg-gray-700 rounded-md text-green-400">
              <h2 className="text-xl font-bold mb-4">Tracking Information:</h2>
              <ul className="space-y-2">
                <li><span className="font-semibold">Country:</span> {trackingInfo.country} ({trackingInfo.countryCode})</li>
                <li><span className="font-semibold">Country Code:</span> {trackingInfo.dialCode}</li>
                <li><span className="font-semibold">Carrier:</span> {trackingInfo.carrier}</li>
                <li><span className="font-semibold">Timezone:</span> {trackingInfo.timezone}</li>
                <li><span className="font-semibold">Number Type:</span> {trackingInfo.type}</li>
                <li><span className="font-semibold">International Format:</span> {trackingInfo.international}</li>
                <li><span className="font-semibold">National Format:</span> {trackingInfo.national}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GlobalPhoneTracker;