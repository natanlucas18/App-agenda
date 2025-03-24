import styled from "styled-components";

export const Container = styled.main`
  background-color:black;
  padding:20px;
  width:100%;
  height:100vh;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr 4fr;
`;

const getColor = (props) => {
  switch(props.color) {
    case 'edit':
      return '#8c8c8c';
    case 'delete':
      return 'red';
  }
};

export const Button = styled.button`
  width: 4.5rem;
  height: 2rem;
  background-color: ${props => getColor(props)};
  color: #ffff;
  border-radius:10px;
  font-size: 1.2rem;
  padding: 0.3rem 1.5rem;
`;