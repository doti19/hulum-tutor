import React, { useState, useEffect  } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';

import NavBar from "../../../components/Admin/Navbar";

const cookies = new Cookies();

const LanguageSetting = () => {
  const [languages, setLanguages] = useState([
    
  ]);
  useEffect(()=>{

    async function fetchdata(){
  
    try {
      //TODO : SAVE THE ACCESS TOKEN IN LOCAL STORAGE, AND ALWAYS SEND IT AS AUTHERIZATION HEADER WITH EVERY REQUEST
       const token = cookies.get('access_token');
      await axios.get("http://127.0.0.1:3000/v1/language",).then((res)=>{
        
          if(res){
            setLanguages(res.data.results)
            
          }
          
        }).catch((err)=>{
          
          const msg = err.response? (err.response.data.message? err.response.data.message: err.response.data): err.message;
          
           
        });
        
      } catch (error) {
        console.log(error)
      }}
      fetchdata();
    },[]);
  const [inputValue, setInputValue] = useState("");

  const addLanguagesHandler = async (e) => {
    e.preventDefault();
    const token = cookies.get('access_token');
    
    await axios.post("http://127.0.0.1:3000/v1/language",
    {name: inputValue},
    { headers: { 'Authorization': 'Bearer ' + token },} )
    .then((res)=>{
      const newLanguage = {
        id: res.data.id,
        name: res.data.name
      };
      setLanguages([...languages, newLanguage]);
      
    })
    .catch((err)=>{
      console.log(err);
    });
    // setLanguages([...languages, newLanguage]);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteLanguage = async (id) => {
    const token = cookies.get('access_token');
    
    await axios.delete(`http://127.0.0.1:3000/v1/language/${id}`,
    { headers: { 'Authorization': 'Bearer ' + token },} )
    .then((res)=>{
     
      alert('successfully deleted');
      setLanguages(languages.filter((language) => language.id !== id));
      
    })
    .catch((err)=>{
      console.log(err);
    });
  };

  return (
    <NavBar>
      <h1 className="text-center pb-20 text-2xl text-blue-900 font-semibold">
        Language setting
      </h1>
      <div className="flex">
        <div className="container h-80 w-80">
          <div className="flex-col space-y-12 border border-gray-500 rounded-2xl p-10">
            <div className="bg-white text-center">
              <span className="font-semibold text-blue-900">
                Insert Languages
              </span>
            </div>

            <div className="text-center">
              <form onSubmit={addLanguagesHandler}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="mx-auto border-2 border-blue-500 rounded-md h-10 focus:border-green-500"
                  placeholder="...Type here"
                />
                <button
                  type="submit"
                  className="bg-dark-purple mt-6 text-white p-2 rounded-2xl"
                >
                  Add Language
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container h-80 w-80 mx-36">
          <div className="flex-col">
            <div className="bg-white text-center">
              <span className="font-semibold text-blue-900">
                List of Languages
              </span>
            </div>
            <div className="mt-5 p-5 flex-col space-y-12 border border-gray-500 rounded-2xl p-10">
              <ul>
                {languages.map((language, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{language.name}</span>
                    <button
                      onClick={() => deleteLanguage(language.id)}
                      className="bg-red-500 text-white px-2 text-sm  rounded-2xl"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default LanguageSetting;
