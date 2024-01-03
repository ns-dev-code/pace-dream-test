import React, { useState, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {Box} from '@mui/material';
import { HeaderStyled, Logo, NavBar, Harmburger, ModeWrapper } from './style';
import { TimesIcon, BarIcon } from '../../icons';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useGlobalDispatch } from '../../../store';
import { MODETYPE } from '../../../store/reducers/mode';
import { InavItem } from '../../../interface/nav';
import { Text } from '../../atoms/text';
import BasicButtons from '../button';
import LogoImage from '../../../assets/images/logo.png'

interface LinkProps2 extends LinkProps {
  children: ReactNode;
}

function CustomLink({ children, href, ...props }: LinkProps2) {
  const router = useRouter();
  return (
    <Box className={router.pathname === href ? 'active-link link' : 'link'}>
      <Link href={href} {...props}>
        <Text as="a" color="accent" hover="compliment">
          {children}
        </Text>
      </Link>
      <Box className="underline"></Box>
    </Box>
  );
}

interface Iheader {
  items: InavItem[];
}
function Header({ items }: Iheader) {
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const dispatch = useGlobalDispatch();
  const handleChangeThemeMode = () => {
    dispatch({ type: MODETYPE.CHANGE, payload: { mode: '' } });
  };

  return (
    <HeaderStyled className="d-flex justify-content-around align-items-center  shadow-sm p-3 mb-2">
      <Link href="/">
        <Logo>
        <img style={{width:250,height:'auto'}} src="https://nitinns.sirv.com/Images/Screenshot%202024-01-04%20at%203.24.36%E2%80%AFAM.png" alt="" />
        </Logo>
      </Link>
      <Harmburger onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
        {openMobileDrawer ? <TimesIcon /> : <BarIcon />}
      </Harmburger>
      <NavBar open={openMobileDrawer}>
        {items.map((item) => (
          <CustomLink href={item.href} key={item.href}>
            {item.title}
          </CustomLink>
        ))}

        <BasicButtons title="Save & Exit" />
      </NavBar>
    </HeaderStyled>
  );
}

export default Header;
