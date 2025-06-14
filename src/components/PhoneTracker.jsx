import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { lookupPhoneNumber } from '../services/phoneService';

const PhoneTracker = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePhoneNumberSubmit = async () => {
    if (!phoneNumber) return;
    
    setLoading(true);
    try {
      const details = await lookupPhoneNumber(phoneNumber);
      setPhoneDetails(details);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Phone Number Tracker</h2>
      
      <div className="space-y-4">
        <PhoneInput
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="w-full p-2 bg-gray-800 rounded"
        />
        
        <button
          onClick={handlePhoneNumberSubmit}
          disabled={loading}
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          {loading ? 'Searching...' : 'Track Number'}
        </button>

        {phoneDetails && (
          <div className="mt-6 space-y-2 p-4 bg-gray-800 rounded">
            <p>Carrier: {phoneDetails.carrier}</p>
            <p>Timezone: {phoneDetails.timezone}</p>
            <p>Country: {phoneDetails.country}</p>
            <p>Location: {phoneDetails.location}</p>
            <p>Line Type: {phoneDetails.lineType}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneTracker;
