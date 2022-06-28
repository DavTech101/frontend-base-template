import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { ReactNode } from 'react';

//######################### COMPONENT TYPES ################################################

type Props = {
  children?: ReactNode;
};

//######################### COMPONENT STYLES ###############################################

const Wrapper = styled.div`
  ${tw`grid min-h-screen`};
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const MainContainer = tw.div`w-full justify-start items-center`;

const Main = tw.main`justify-start items-center`;

//######################### COMPONENT #######################################################

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Meta />
      <Navbar />
      <MainContainer>
        <Main>{children}</Main>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
