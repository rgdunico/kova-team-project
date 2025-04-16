import React from "react";
import '../styles/global.css'

export default function Form() {
  return (

    <div className="form-card">
          <h2>Get an Extra $1,900 OFF<br />Your Kitchen Remodel</h2>
          <p className="form-note">*with installation. Offer Expires on April 2025</p>
          <p className="form-subtext">Request a Free* No-Obligation Quote & Expert Advice!</p>

          <form>
            <label>Full Name<span style={{ color: 'red' }}>*</span></label>
            <input type="text" required />

            <label>Email<span style={{ color: 'red' }}>*</span></label>
            <input type="email" required />

            <label>Phone Number<span style={{ color: 'red' }}>*</span></label>
            <input type="tel" required />

            <label>Message</label>
            <textarea rows="3"></textarea>

            <button type="submit" className="btn-estimate">GET A FREE ESTIMATE</button>
            <p className="form-disclaimer">*Free estimates for homeowners only. Real estate evaluation not billable.</p>
          </form>
        </div>
  )
}
