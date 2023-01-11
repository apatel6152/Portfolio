import Footer from './footer';
import Main from './main';
import SEO from './seo';

const Layout = ({ seoTitle, seoDesc, seoPath, seoChildren, children }) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDesc} path={seoPath}>
        {seoChildren}
      </SEO>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
