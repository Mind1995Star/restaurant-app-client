import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

// ====================
// Page layout
// ====================
export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
`;
