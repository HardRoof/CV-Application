const GeneralInfo = ({ info, handleInfoChange }) => {
  return (
    <form>
      <div>
        <label htmlFor="userName">Full Name</label>
        <input
          type="text"
          name="userName"
          value={info.userName}
          onChange={handleInfoChange}
          placeholder="e.g., John Doe"
          title="Enter your full name, e.g., John Doe"
        />

        <label htmlFor="userEmail">Email</label>
        <input
          type="email"
          name="userEmail"
          value={info.userEmail}
          onChange={handleInfoChange}
          placeholder="e.g., john.doe@example.com"
          title="Enter your email address, e.g., john.doe@example.com"
        />

        <label htmlFor="userPhone">Phone Number</label>
        <input
          type="tel"
          name="userPhone"
          value={info.userPhone}
          onChange={handleInfoChange}
          placeholder="e.g., (123) 456-7890"
          title="Enter your phone number, e.g., (123) 456-7890"
        />
      </div>
    </form>
  );
};

export default GeneralInfo;
