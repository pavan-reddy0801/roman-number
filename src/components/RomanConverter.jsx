import React, { useState, useEffect } from 'react';
import {
  View,
  TextField,
  Button,
  Text,
  Heading,
} from '@adobe/react-spectrum';

const RomanConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Check URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');
    if (queryParam) {
      setInput(queryParam);
      convertNumber(queryParam);
    }
  }, []);

  const convertNumber = async (number) => {
    try {
      const response = await fetch(`http://localhost:8080/romannumeral?query=${number}`);
      if (!response.ok) {
        throw new Error('Invalid input');
      }
      const data = await response.json();
      setResult(data.output);
      
      // Update URL without reloading the page
      const newUrl = `${window.location.pathname}?query=${number}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    } catch (err) {
      setResult('Error: Please enter a number between 1 and 3999');
      // Clear URL parameter on error
      window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    }
  };

  const handleConvert = () => {
    if (input) {
      convertNumber(input);
    }
  };

  const handleInputChange = (value) => {
    setInput(value);
    // Clear URL parameter when input changes
    window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    setResult('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConvert();
    }
  };

  return (
    <View padding="size-1000" UNSAFE_className="converter-container">
      <Heading level={1}>Roman numeral converter</Heading>
      
      <View marginY="size-200">
        <Text>Enter a number</Text>
        <TextField
          type="number"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          UNSAFE_className="input-field"
          width="100%"
        />
      </View>

      <Button
        variant="primary"
        onPress={handleConvert}
        UNSAFE_className="convert-button"
      >
        Convert to roman numeral
      </Button>

      {result && (
        <View marginTop="size-200" UNSAFE_className="result-text">
          <Text>Roman numeral: {result}</Text>
        </View>
      )}
    </View>
  );
};

export default RomanConverter;
