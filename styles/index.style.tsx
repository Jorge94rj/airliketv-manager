import styled from 'styled-components';

export const TextLeft = styled.li`
  text-align: left;
  font-size: 18px;
`

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  h4 {
    color: #0A7519;
  }
  h2 {
    color: #000;
  }
`;

export const PillButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: none;
  width: 100%;
  height: 48px;
  background: #0A7519;
  color: white;
  border-radius: 30px;
  padding: 16px;
  margin: 24px 0;
`;
