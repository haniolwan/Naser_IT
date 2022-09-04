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
import i18n from '../../../i18n';

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

  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-light py-2 bg-light shadow fixed-top sticky-navbar"
      expand="lg"
      data-aos="fade-down"
    >
      <Container className="bg-light">
        <Brand href="/">Naser IT</Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Link className={`sticky-link ${pathname === '/' ? 'selected-sticky' : null}`} href="/">{t('Header.Nav.item1')}</Link>
            <Link className={`sticky-link ${pathname.includes('services') ? 'selected-sticky' : null}`} href="/services">{t('Header.Nav.item2')}</Link>
            <Link className={`sticky-link ${pathname === '/about' ? 'selected-sticky' : null}`} href="/about">{t('Header.Nav.item3')}</Link>
            <Link className={`sticky-link ${pathname === '/contact' ? 'selected-sticky' : null}`} href="/contact">{t('Header.Nav.item4')}</Link>
            <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
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
