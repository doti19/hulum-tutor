const submitForm = async (formData) => {
  try {
    const response = await fetch("http://DOTIAPI/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message };
    }
  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
    return {
      success: false,
      error: "An error occurred while submitting the form",
    };
  }
};

export default submitForm;
