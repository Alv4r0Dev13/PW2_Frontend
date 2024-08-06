import { SearchOutlined } from '@ant-design/icons';
import { Input, InputContainer, SearchButton } from './styles';

const SearchInput = () => {
  return (
    <InputContainer htmlFor="search">
      <Input placeholder="Pesquisar" name="search" id="search" />
      <SearchButton>
        <SearchOutlined />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchInput;
