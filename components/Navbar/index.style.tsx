import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  background: #0A7519;
  justify-content: space-between;
  `;
  
  export const LogoWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  background: #0A7519;
  align-items: center;
  padding-left: 32px;
  `;
  
  export const MenuWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  background: #0A7519;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
  `;
  
  export const ProfileWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  background: #0A7519;
  align-items: center;
  justify-content: end;
  padding-right: 32px;
`;