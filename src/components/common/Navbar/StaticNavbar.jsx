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

function StaticNavbar() {
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
    <Navbar className="navbar navbar-dark py-4" expand="lg">
      <Container className="nav-container">
        <Brand href="/">Naser IT</Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Link className={`text-light static-nav-link ${pathname === '/' ? 'selected-static' : null}`} href="/">{t('Header.Nav.item1')}</Link>
            <Link className={`text-light static-nav-link ${pathname.includes('services') ? 'selected-static' : null}`} href="/services">{t('Header.Nav.item2')}</Link>
            <Link className={`text-light static-nav-link ${pathname === '/about' ? 'selected-static' : null}`} href="/about">{t('Header.Nav.item3')}</Link>
            <Link className={`text-light static-nav-link ${pathname === '/contact' ? 'selected-static' : null}`} href="/contact">{t('Header.Nav.item4')}</Link>
            <NavDropdown className="ms-auto language-dropdown" title={locale === 'en' ? 'English' : 'German'}>
              <Item href="" onClick={() => changeLocale('en')}>English</Item>
              <Item href="" onClick={() => changeLocale('de')}>German</Item>
            </NavDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default StaticNavbar;
