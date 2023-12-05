import { Box } from '../Box';
import { NavItem, TitleItem, SettingsButton } from './AppBar.styled';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import ModalSettings from 'components/ModalSettings/ModalSetting';

const navItems = [
  { href: '/', text: 'Add/Edit Note' },
  { href: 'notes', text: 'Notes' },
  { href: 'about', text: 'About us' },
];
export const AppBar = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Box
        as="header"
        p={4}
        height="30px"
        borderBottom="1px solid #07c"
        display="flex"
        justifyContent="space-between"
        backgroundColor="muted"
      >
        <TitleItem to="/">Notes</TitleItem>
        <Box display="flex">
          <Box as="nav" display="flex">
            {navItems.map(({ href, text }) => (
              <NavItem to={href} key={href}>
                {text}
              </NavItem>
            ))}
          </Box>
          <SettingsButton type="button" onClick={openModal}>
            Settings
          </SettingsButton>
        </Box>
      </Box>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalSettings onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};
