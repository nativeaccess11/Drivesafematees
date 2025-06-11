'use client';

import { useState } from 'react';

const Form = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseText = await res.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (err) {
        console.error('Response is not JSON:', responseText);
        throw new Error('The server did not return valid JSON.');
      }

      if (res.ok) {
        setStatus('Form submitted successfully!');
        e.target.reset();
      } else {
        setStatus(responseData.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('Error sending form.');
    }
  };

  const inputStyle = {
    padding: '10px 12px',
    fontSize: '15px',
    width: '100%',
    lineHeight: '1.5',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  };

  const selectStyle = { ...inputStyle };

  const buttonStyle = {
    backgroundColor: '#e60023',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div className="contact_from_box" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <form id="myform" className="enquiry-form" onSubmit={handleSubmit}>
        <div className="row clearfix">
          <div className="col-sm-12 form-group">
            <input type="text" name="username" id="username" placeholder="Name" required style={inputStyle} />
          </div>
          <div className="col-sm-12 form-group">
            <input type="text" name="phone" id="phone" placeholder="Phone" required style={inputStyle} />
          </div>
          <div className="col-sm-12 form-group">
            <input type="email" name="email" id="email" placeholder="Email" required style={inputStyle} />
          </div>
          <div className="col-sm-12 form-group">
            <select name="vehicle_type" id="vehicle_type" defaultValue="" style={selectStyle}>
              <option value="" disabled>Select the Vehicle Type</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          <div className="col-sm-12 form-group">
            <select name="service" id="service" defaultValue="" style={selectStyle}>
              <option value="" disabled>Select the Lesson Type</option>
              <option value="beginner driving course">Beginner Driving Course</option>
              <option value="defensive driving">Defensive Driving</option>
              <option value="overseas driving">Overseas Course</option>
              <option value="casual driving course">Casual Driving Course</option>
              <option value="test-preparation-driving-classes">Test Preparation Driving Classes</option>
            </select>
          </div>
          <div className="col-sm-12 form-group">
            <select name="package" id="package" defaultValue="" style={selectStyle}>
              <option value="" disabled>Select the Package</option>
              <option value="pay as you go">Pay as You Go</option>
              <option value="package">Package</option>
            </select>
          </div>
          <div className="col-sm-12 form-group">
            <select id="location" name="location" defaultValue="" style={selectStyle}>
              <option value="" disabled>Select the Location</option>
              <option value="Darwin City">Darwin City</option>
              <option value="Casuarina">Casuarina</option>
              <option value="Palmerston">Palmerston</option>
            </select>
          </div>
          <div className="col-sm-12 form-group">
            <input type="text" name="note" id="note" placeholder="Message" style={inputStyle} />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 message-btn" style={{ textAlign: 'center', marginTop: '10px' }}>
            <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            <input type="hidden" name="mailSubject" value="Booking for Drivesafe Mate Driving School" />
            <input type="hidden" name="postBackURL" value="thank-you.html" />
            <input name="Submit2" type="submit" value="Submit" style={buttonStyle} />
          </div>
        </div>

        {status && <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{status}</p>}
      </form>
    </div>
  );
};

export default Form;
