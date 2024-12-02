const GeneralInfo = ({ info, handleInfoChange }) => {
	return (
		<form>
			<input
				type="text"
				name="userName"
				value={info.userName}
				onChange={handleInfoChange}
			/>
			<input
				type="email"
				name="userEmail"
				value={info.userEmail}
				onChange={handleInfoChange}
			/>
			<input
				type="tel"
				name="userPhone"
				value={info.userPhone}
				onChange={handleInfoChange}
			/>
		</form>
	)
}

export default GeneralInfo;