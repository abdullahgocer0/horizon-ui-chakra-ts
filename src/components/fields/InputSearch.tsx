import React, { useState } from 'react';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const allWords = ['apple', 'banana', 'grape', 'orange', 'pineapple', 'mango', 'strawberry'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const words = value.split(' ');
    if (words.length >= 2) {
      const lastWord = words[words.length - 1];
      const filteredSuggestions = allWords.filter(word => word.includes(lastWord));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;