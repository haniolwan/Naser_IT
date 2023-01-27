import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import LocaleContext from '../../../Context/LocaleContext';
import i18n from '../../../utils/i18n';
import useWindowSize from '../../../hooks/useWindowSize';

function StickyNavbar() {
  const { Link } = Nav;
  const { Item } = NavDropdown;
  const { Collapse, Toggle, Brand } = Navbar;
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const changeLocale = (l) => {
    if (locale !== l) {
      const timer = setTimeout(() => {
        i18n.changeLanguage(l);
        window.location.reload();
      }, 700);
      return clearTimeout(() => timer);
    }
    return null;
  };
  const { width: windowWidth } = useWindowSize();
  return (
    <Navbar
      className="sticky-navbar"
      fixed="top"
      expand="lg"
      bg="light"
      variant="light"
      data-aos="fade-down"
    >
      <Container className="bg-light">
        <Brand href="/">Naser IT</Brand>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Link className={`sticky-link ${pathname === '/' && windowWidth > 1024 ? 'selected-sticky' : null}`} href="/">{t('Header.Nav.item1')}</Link>
            <Link className={`sticky-link ${pathname.includes('services') && windowWidth > 1024 ? 'selected-sticky' : null}`} href="/services">{t('Header.Nav.item2')}</Link>
            <Link className={`sticky-link ${pathname === '/about' && windowWidth > 1024 ? 'selected-sticky' : null}`} href="/about">{t('Header.Nav.item3')}</Link>
            <Link className={`sticky-link ${pathname === '/contact' && windowWidth > 1024 ? 'selected-sticky' : null}`} href="/contact">{t('Header.Nav.item4')}</Link>
            <NavDropdown className="ms-auto language-dropdown" title={locale === 'en' ? 'English' : 'German'}>
              <Item href="" eventKey="en" onClick={() => changeLocale('en')}>English</Item>
              <Item href="" eventKey="de" onClick={() => changeLocale('de')}>German</Item>
            </NavDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
