import { SearchOutlined } from '@ant-design/icons';
import { Input, InputContainer, SearchButton } from './styles';
import { InputProps } from '../../utils/components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchInput: React.FC<InputProps> = ({ onInputChange = () => {} }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  function handleInputChange(e: any) {
    const text = e.target.value;
    setInput(text);
    onInputChange(text);
  }

  function handleSearch() {
    navigate('/search', { state: { search: input } });
  }

  function handlePressEnter(e: any) {
    if (e.key === 'Enter') handleSearch();
  }

  useEffect(() => {
    const search = state?.search;
    if (search) setInput(search);
  }, [state]);

  return (
    <InputContainer htmlFor="search">
      <Input
        placeholder="Pesquisar"
        name="search"
        id="search"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handlePressEnter}
      />
      <SearchButton type="submit" onClick={handleSearch}>
        <SearchOutlined />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchInput;
