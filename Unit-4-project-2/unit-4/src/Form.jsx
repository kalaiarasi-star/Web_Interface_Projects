import "./Form.css";

function Form() {
  return (
    <div className="form-page">

      <div className="form-container">

        <h1>Student Registration Form</h1>

        <p className="note">
          Fields marked with <span>*</span> are compulsory.
        </p>

        <form>

          {/* 1. Full Name */}
          <label>
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />

          {/* 2. Aadhaar Name */}
          <label>
            Aadhaar Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter name as in Aadhaar"
            required
          />

          {/* 3. Aadhaar Number */}
          <label>
            Aadhaar Number <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter 12 digit Aadhaar number"
            maxLength="12"
            pattern="[0-9]{12}"
            required
          />

          {/* 4. Date of Birth */}
          <label>
            Date of Birth <span>*</span>
          </label>
          <input
            type="date"
            required
          />

          {/* 5. Gender */}
          <label>
            Gender <span>*</span>
          </label>
          <select required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* 6. Email */}
          <label>
            Email <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          {/* 7. Mobile */}
          <label>
            Mobile Number <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter 10 digit mobile number"
            maxLength="10"
            pattern="[0-9]{10}"
            required
          />

          {/* 8. Address */}
          <label>
            Address <span>*</span>
          </label>
          <textarea
            placeholder="Enter your address"
            required
          ></textarea>

          {/* 9. City */}
          <label>
            City <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            required
          />

          {/* 10. Pincode */}
          <label>
            Pincode <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter 6 digit pincode"
            maxLength="6"
            pattern="[0-9]{6}"
            required
          />

          {/* 11. Password */}
          <label>
            Password <span>*</span>
          </label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
            minLength="8"
            required
          />

          {/* 12. Confirm Password */}
          <label>
            Confirm Password <span>*</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter password"
            minLength="8"
            required
          />

          {/* Photo */}
          <label>
            Profile Photo <span>*</span>
          </label>

          <input
            type="file"
            accept="image/png, image/jpeg"
            required
          />

          <p className="photo-note">
            Upload JPG/PNG photo. Required size: 300 × 300 pixels.
          </p>

          {/* Declaration */}
          <label className="check">
            <input
              type="checkbox"
              required
            />

            I declare that the information provided is correct.
            <span>*</span>
          </label>

          <div className="buttons">
            <button type="submit">
              Submit
            </button>

            <button type="reset">
              Reset
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Form;
