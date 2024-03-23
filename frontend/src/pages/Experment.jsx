import useInput from "../hooks/use-input";
import { React, useState, useRef, useEffect } from "react";
import dale3 from "../assets/dale3.jpg";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "../components/Alert";
import axios from "axios";

const Experment = (props) => {
  // ===========| Handling Checklist of Language |=====================================
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languageBlur, setLanguageBlur] = useState(false);

  const languageIsValid = selectedLanguage.trim() !== "";
  const languageHasError = !languageIsValid && languageBlur;

  const resetLanguage = () => {
    setSelectedLanguage("");
    setLanguageBlur(false); // Reset the languageBlur state
  };

  const languageBlurHandler = () => {
    setLanguageBlur(true);
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/v1/language");
        console.log("response is ", response.data.results);
        setLanguages(response.data.results);

        // setLanguages([
        //   { id: 1, name: "English", code: "en" },
        //   { id: 2, name: "Amharic", code: "am" },
        //   { id: 3, name: "Tigrinya", code: "ti" },
        //   { id: 4, name: "Somali", code: "so" },
        //   // Add more dummy languages as needed
        // ]);
      } catch (error) {
        console.error("Error fetching languages:", error);
        // Handle error or set some default languages
        setLanguages([
          { id: 1, name: "English" },
          { id: 2, name: "Amharic" },
          { id: 3, name: "Tigrinya" },
          { id: 4, name: "Somali" },
          //   // Add more dummy languages as needed
        ]);
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  // ========================================================================
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  // ======================================================
  const {
    value: secondName,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondName,
  } = useInput((value) => value.trim() !== "");

  // =====================================================
  // ======================================================
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  // =====================================================
  const {
    value: gender,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGender,
  } = useInput((value) => value.trim() !== "");

  // =====================================================
  const {
    value: phoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput((value) => /^\+251\d{9}$/.test(value));

  // ===================================================
  // =====================================================
  const {
    value: cityName,
    isValid: cityNameIsValid,
    hasError: cityNameHasError,
    valueChangeHandler: cityNameHandler,
    inputBlurHandler: cityNameBlurHandler,
    reset: resetCityName,
  } = useInput((value) => value.trim() !== "");
  // =====================================================
  // const {
  //   value: language,
  //   isValid: languageIsValid,
  //   hasError: languageHasError,
  //   valueChangeHandler: languageHandler,
  //   inputBlurHandler: languageBlurHandler,
  //   reset: resetLanguage,
  // } = useInput((value) => value.trim() !== "");

  // ===================================================
  const {
    value: currentJob,
    isValid: currentJobIsValid,
    hasError: currentJobHasError,
    valueChangeHandler: currentJobHandler,
    inputBlurHandler: currentJobBlurHandler,
    reset: resetCurrentJob,
  } = useInput((value) => value.trim() !== "");

  // ===================================================
  const {
    value: street,
    valueChangeHandler: streetHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== "");

  // ===================================================
  const {
    value: postNo,
    valueChangeHandler: postHandler,
    inputBlurHandler: postBlurHandler,
    reset: resetPost,
  } = useInput((value) => value.trim() !== "");

  // ===================================================
  const {
    value: experianceJob,
    isValid: experiaceIsValid,
    hasError: experianceHasError,
    valueChangeHandler: experianceHandler,
    inputBlurHandler: experianceBlurHandler,
    reset: resetExperiance,
  } = useInput((value) => /^\d+$/.test(value));

  // ===================================================
  const [fileTypeError, setFileTypeError] = useState(false);
  const {
    value: cvFile,
    isValid: cvIsValid,
    hasError: cvHasError,
    valueChangeHandler: cvHandler,
    inputBlurHandler: cvBlurHandler,
    reset: resetCv,
  } = useInput((file) => {
    // Check if a file is selected
    if (!file) {
      return false; // Invalid if no file selected
    }

    // Validate file type (check MIME type or extension)
    const allowedTypes = ["application/pdf"]; // Replace with your allowed types
    if (!allowedTypes.includes(file.type)) {
      if (!fileTypeError) {
        // Only update fileTypeError if it's currently false damn
        setFileTypeError(true); // Set fileTypeError state to true
      }
      return false; // Invalid file type
    }

    // Validate file size (maximum 3MB)
    const maxFileSize = 5 * 1024 * 1024; // 3MB in bytes
    if (file.size > maxFileSize) {
      return false; // File too large
    }

    return true; // Valid file
  });

  // ==========================================================
  const [submitted, setSubmitted] = useState(false);
  const [submissionErrorOne, setSubmissionErrorOne] = useState(false);
  const [submissionErrorTwo, setSubmissionErrorTwo] = useState(false);
  let formIsValid = false;
  //----------------------------------------------
  if (
    firstNameIsValid &&
    secondNameIsValid &&
    enteredEmailIsValid &&
    phoneNumberIsValid &&
    cityNameIsValid &&
    languageIsValid
  ) {
    formIsValid = true;
  } else formIsValid = false;

  // ==========================================================================
  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setloading(true); // Start loading indicator

    try {
      if (!formIsValid) {
        // Reset loading state if form is invalid
        setloading(false);

        return; // Don't submit if form is invalid
      }

      let fileInput = document.getElementById("resume");
      let cvFile = fileInput.files[0];
      let formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", secondName);
      formData.append("gender", gender.toLowerCase());
      formData.append("email", enteredEmail.toLowerCase());
      formData.append("phoneNumber", phoneNumber);
      formData.append("city", cityName);
      formData.append("streetAddress", street);
      formData.append("postNo", postNo);
      formData.append("currentJob", currentJob.toLowerCase()==""|| currentJob.toLowerCase()==undefined? 'student': currentJob);
      formData.append("language", selectedLanguage);
      formData.append("teachingExperience", experianceJob);
      formData.append("resume", cvFile);
      // Here you can submit the form data to your backend endpoint using fetch or Axios
      // const response = await fetch("http://127.0.0.1:3000/v1/person", {

      fetch("http://127.0.0.1:3000/v1/person", {
        method: "POST",
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   // 'Content-Type':'application/x-www-form-urlencoded'
        // },
        body: formData,
        // body: JSON.stringify({
        //   firstName: firstName,
        //   lastName: secondName,
        //   gender: gender.toLowerCase(),
        //   email: enteredEmail.toLowerCase(),
        //  phoneNumber: phoneNumber,
        //   city: cityName,
        //   streetAddress: street,
        //   postNo: postNo,
        //   currentJob: currentJob.toLowerCase(),
        //   language: language,
        //   teachingExperience: experianceJob,
        //   resume: cvFile,
        //   // Include other form fields as needed
        // }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          if (!result.code) {
            console.log("Form submitted successfully!");
            // Reset form inputs
            setSubmitted(true);
            resetFirstName();
            resetSecondName();
            resetGender();
            resetEmailInput();
            resetPhoneNumber();
            resetLanguage();
            resetCityName();
            resetPost();
            resetStreet();
            resetCurrentJob();
            resetCv();
            resetExperiance();
            setSubmitted(false);
            // submissionErrorOne=false;
            // submissionErrorTwo=false;
            setSubmissionErrorOne(false);
            setSubmissionErrorTwo(false);

            setFileTypeError(false);

            // Reset other form inputs as needed
          } else {
            console.error("Failed to submit form:", result.message);
            setSubmissionErrorOne(true);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          setSubmissionErrorOne(true);
        });

      //
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      setSubmissionErrorTwo(true);
    } finally {
      setloading(false); // Stop loading indicator
    }
  };

  // =========================================================================

  const [loading, setloading] = useState(false);
  return (
    <section
      id="register"
      className="flex items-center mt-20 mb-20 justify-center "
    >
      <div className="min-h-screen p-6  flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="text-gray-800 mb-6 text-2xl text-center">
              Register Now!
            </h2>

            <div className="bg-white rounded shadow-2xl p-4 px-4 md:p-8 mb-6 formColor">
              <div className="grid gap-4 gap-y-2 space-x-4 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-800">
                  <div className=" font-bold bg-orange-100  rounded-lg py-5 px-3  text-base  border-transparent border-6 shadow-inner">
                    <p className="font-medium text-lg  text-center ">
                      Personal Details
                    </p>
                    <p className="pb-7 text-center font-bold">
                      Please fill out all the fields.
                    </p>
                  </div>

                  <img
                    src={dale3}
                    className="rounded-xl md:h-109 brightness-50"
                    alt=""
                  />
                  <div className="mt-8">
                    <p className="text-green-700 font-bold bg-orange-100  rounded-lg py-5 px-3  text-base  border-transparent border-6 shadow-inner">
                      Once you fill out the form, you will be contacted through
                      your email address or phone number to let you know about
                      the confirmation
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <form
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    onSubmit={formSubmissionHandler}
                  >
                    <div className="md:col-span-2">
                      <label htmlFor="first_name">First Name *</label>
                      <input
                        onBlur={firstNameBlurHandler}
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={firstNameHandler}
                        value={firstName}
                        required
                      />
                      {firstNameHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          First name must not be empty
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="last_name ">Last Name *</label>
                      <input
                        onBlur={secondNameBlurHandler}
                        type="text"
                        name="last_name"
                        id="last_name"
                        onChange={secondNameHandler}
                        value={secondName}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                      {secondNameHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          Last name must not be empty
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="gender" className="flex ">
                        Gender *
                      </label>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="male" className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          className="mr-2"
                          value="male"
                          onChange={genderHandler}
                          checked={gender === "male"}
                          required
                        />
                        Male
                      </label>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="female" className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          className="mr-2"
                          onChange={genderHandler}
                          checked={gender === "female"}
                          required
                        />
                        Female
                      </label>
                      {genderHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          Please select your gender
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        onBlur={emailBlurHandler}
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        required
                      />
                      {emailInputHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          Invalid Email
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-4">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        onBlur={phoneNumberBlurHandler}
                        onChange={phoneNumberHandler}
                        value={phoneNumber}
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="+251"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                      {phoneNumberHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          Invalid Phone Number
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="city">City *</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onBlur={cityNameBlurHandler}
                          onChange={cityNameHandler}
                          value={cityName}
                          name="city"
                          id="city"
                          placeholder="City"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="street">Street Address</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="street"
                          id="street"
                          placeholder="Street"
                          value={street}
                          onChange={streetHandler}
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Post No</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value={postNo}
                        onChange={postHandler}
                      />
                    </div>
                    {cityNameHasError && (
                      <p className="text-red-600 font-bold pl-2">
                        Invalid City
                      </p>
                    )}
                    <div className="md:col-span-5">
                      <label htmlFor="current_job" className="flex ">
                        Current Job *
                      </label>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="student" className="flex items-center">
                        <input
                          type="radio"
                          id="student"
                          name="job"
                          value="student"
                          className="mr-2"
                          onChange={currentJobHandler}
                          required
                        />
                        Student
                      </label>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="teacher" className="flex items-center">
                        <input
                          type="radio"
                          id="teacher"
                          name="job"
                          value="teacher"
                          className="mr-2"
                          required
                          onChange={currentJobHandler}
                        />
                        Teacher
                      </label>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="other_job" className="flex items-center">
                        <input
                          type="radio"
                          id="other_job"
                          name="job"
                          value="other"
                          className="mr-2"
                          onChange={currentJobHandler}
                          required
                        />
                        Other
                      </label>
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="language">Choose a Language *</label>
                      <div>
                        <select
                          className="h-10 w-32 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                          id="language"
                          name="language"
                          value={selectedLanguage}
                          onBlur={languageBlurHandler}
                          onChange={handleLanguageChange}
                          placeholder=""
                        >
                          <option value=""></option>
                          {languages.map((language) => (
                            <option key={language.id} value={language.name}>
                              {language.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {languageHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          Please Select Language
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="teaching_experience">
                        Experience in Teaching *
                      </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="number"
                          name="teaching_experience"
                          value={experianceJob}
                          onBlur={experianceBlurHandler}
                          onChange={experianceHandler}
                          id="teaching_experience"
                          placeholder="0"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          required
                        />
                      </div>
                      {experianceHasError && (
                        <p className="text-red-600 font-bold pl-2">
                          enter valid years of experiance
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="resume">CV/ Resume</label>
                      <input
                        type="file"
                        accept=".pdf"
                        name="resume"
                        id="resume"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value={cvFile}
                        onChange={cvHandler}
                        onBlur={cvBlurHandler}
                        required
                      />
                      {/* {fileTypeError && (
                        <p className="text-red-700 font-bold pl-2">
                          Invalid File Type please use(PDF)
                        </p>
                      )} */}
                      <p className="text-brightRed font-bold pl-2">
                        File [PDF] size {"->"} less than 5MB
                      </p>
                    </div>
                    <div className="md:col-span-5"></div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          // disabled={!formIsValid}
                          type="submit"
                          className="bg-brightGreen hover:bg-brightRedLight text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>

                        {loading && (
                          <Backdrop
                            sx={{
                              color: "#fff",
                              zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {submitted && (
                <Alert text={"Form Submitted Successfully"} success={true} />
              )}
              {submissionErrorOne && (
                <Alert text={"Failed to submit form"} success={false} />
              )}
              {submissionErrorTwo && (
                <Alert
                  text={"An error occurred while submitting the form"}
                  success={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experment;
