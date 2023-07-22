import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { Button, RowItem } from "../../styles/form.style"
import { IChannel } from "../../types";
import { DynamicModal } from "../Modal";
import SaveChannelModal from "../SaveChannelModal";
import { LogoWrapper, MenuWrapper, NavbarWrapper, ProfileWrapper } from "./index.style"
import Icon from "../Icon";
import LogoIcon from '../../public/logo.svg';
import ProfileIcon from '../../public/profile.svg';
import HamburguerIcon from '../../public/hamburguer.svg';
import { IconWrapper } from "../Card/index.style";
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const { channelId } = router.query;

  const [channels, setChannels] = useState<IChannel[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const [openedSaveChannelModal, setOpenedSaveChannelModal] = useState(false);
  const openSaveChannelModal = () => setOpenedSaveChannelModal(true);
  const closeSaveChannelModal = (saved?: boolean) => {
    setOpenedSaveChannelModal(false);
    if (saved) {
      getChannels();
    }
  }

  useEffect(() => {
    getChannels();
  }, []);

  useEffect(() => {
    console.log(window.innerWidth);
    const isMobileSize = !(window.innerWidth > 768);
    setIsMobile(isMobileSize);
    console.log('isMobile', isMobile)
  }, []);

  const getChannels = async () => {
    const req = await fetch('/api/channel', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    })
    const data = await req.json();
    const resChannels = data.channels || [];
    setChannels(resChannels)
  }

  return (
    <NavbarWrapper>
      <LogoWrapper onClick={() => router.push('/')}>
        <Image
          src={LogoIcon}
          alt="type"
          width="108"
          height="64"
        />
      </LogoWrapper>
      <MenuWrapper>
        <ul>
          <li>Biblioteca</li>
          <li>Contactos</li>
          <li>Clubs</li>
          <li>Publicaciones</li>
          <li>Peticiones</li>
        </ul>
      </MenuWrapper>
      <ProfileWrapper>
        {
          isMobile && (
            <Image
              src={HamburguerIcon}
              alt="type"
              width="32"
              height="32"
            />
          )
        }
        {
          !isMobile && (
            <Image
              src={ProfileIcon}
              alt="type"
              width="32"
              height="32"
            />
          )
        }
      </ProfileWrapper>
    </NavbarWrapper>
  )
}

export default Navbar