const GeneralInfo = ({ info, handleInfoChange }) => {
  return (
    <form>
      <label htmlFor="userName">Full Name</label>
      <input
        type="text"
        name="userName"
        value={info.userName}
        onChange={handleInfoChange}
      />
      <label htmlFor="userEmail">Email</label>
      <input
        type="email"
        name="userEmail"
        value={info.userEmail}
        onChange={handleInfoChange}
      />
      <label htmlFor="userPhone">Phone number</label>
      <input
        type="tel"
        name="userPhone"
        value={info.userPhone}
        onChange={handleInfoChange}
      />
    </form>
  );
};

export default GeneralInfo;
