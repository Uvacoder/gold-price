import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputMetal from "./InputMetal";
import InputCurrency from "./InputCurrency";
import Hero from "./Hero";
import "./test.css";

const Home = () => {
  const [date, setDate] = useState(dayjs("2022-11-20"));
  const [dateFormat, setDateFormat] = useState("");
  const [metal, setMetal] = useState("XAU");
  const [currency, setCurrency] = useState("USD");
  const [data, setData] = useState({});

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://www.goldapi.io/api/${metal}/${currency}`,
      headers: {
        "x-access-token": "goldapi-jmxtlahyaszg-io",
      },
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
        let date = new Date(response.data.timestamp * 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handlePrice = () => {
    let urli = ``;
    if (dateFormat != "") {
      //    let dateString = dateFormat.$d.toISOString().split('T')[0].split('-').join('');
      urli = `https://www.goldapi.io/api/${metal}/${currency}/${dateFormat}`;
    } else {
      urli = `https://www.goldapi.io/api/${metal}/${currency}`;
    }
    var config = {
      method: "get",
      url: urli,
      headers: {
        "x-access-token": "goldapi-jmxtlahyaszg-io",
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Hero data={data} />
      <div className="flex flex-wrap w-5/6 mx-auto items-center gap-3 justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={date}
          minDate={dayjs("2017-01-01")}
          onChange={(newdate) => {
            setDate(newdate);
            setDateFormat(
              (+(newdate.$d.toISOString().split("T")[0].split("-").join("") )+ 1).toString()
            );
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <InputMetal handleMetal={setMetal} />
      <InputCurrency handleCurrency={setCurrency} />
      <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none md:w-3/12 mb-24" onClick={handlePrice}>
        Update Price
      </button>
      </div>
    </>
  );
};

export default Home;
