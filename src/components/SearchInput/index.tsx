import { SearchOutlined } from '@ant-design/icons';
import { Input, InputContainer, SearchButton } from './styles';
import {InputProps} from '../../utils/components'

const SearchInput: React.FC<InputProps> = ({ onInputChange = () => {} }) => {
  return (
    <InputContainer htmlFor="search">
      <Input
        placeholder="Pesquisar"
        name="search"
        id="search"
        onChange={(e) => onInputChange(e.target.value)}
        />
      <SearchButton>
        <SearchOutlined />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchInput;
