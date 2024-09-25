import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundMain};
  padding: 2% 4%;
`;

export const ProfileContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border: 2px solid ${props => props.theme.outline};
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top:30px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const LatLonDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 1rem;
  flex-direction: column;
`;

export const PostButton = styled.button`
  color: white;
  background-color: ${props => props.theme.success};
  padding: 8px 16px;
  max-width: fit-content;

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;

export const InputContainer = styled.label`
  display: flex;
  background-color: ${props => props.theme.backgroundLighter};
  border: 2px solid ${props => props.theme.backgroundLighter};
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: 0.5rem;

  &:focus-within {
    border-color: ${props => props.theme.success};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  width: 100%;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const Line = styled.hr`
  width: 100%;
  color: ${props => props.theme.outline}
`;
