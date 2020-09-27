import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormCurrencyConverter from "components/form-currency-converter";
import ConversionResult from "components/conversion-result";
import { Container, Box, Title } from "./style";
const URL = "https://api.exchangeratesapi.io/latest";

const handleChangeFromCurrenty = setCurrentRate => currentRate =>
  setCurrentRate(currentRate);

const handleOnSubmit = values => {
  console.log(values);
};

function App() {
  const [rates, setRates] = useState({});
  const [currentRate, setCurrentRate] = useState("BRL");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${URL}/?base=${currentRate}`);
        const { error, rates } = await response.json();
        return response.ok ? setRates({ ...rates }) : toast.error(error);
      } catch (e) {
        toast.error("Something is wrong on the server :(");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentRate]);

  return (
    <Container>
      <Box>
        <Title>Foreign Currency Converter</Title>
        <FormCurrencyConverter
          rates={rates}
          handleChangeFromCurrenty={handleChangeFromCurrenty(setCurrentRate)}
          isLoadingFromCurrenty={isLoading}
          handleOnSubmit={handleOnSubmit}
        />
        <ConversionResult />
      </Box>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Container>
  );
}

export default App;
