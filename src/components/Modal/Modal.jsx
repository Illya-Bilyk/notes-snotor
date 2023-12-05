import { Box } from 'components/Box';
import { Overlay, ModalDiv } from './Modal.styled';
import { Btn } from 'components/NoteItem/NoteItem.styled';

export const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <ModalDiv>
        <Box as="header" display="flex" justifyContent="flex-end" p={3}>
          <Btn type="button" onClick={() => onClose()}>
            X
          </Btn>
        </Box>
        {children}
      </ModalDiv>
    </Overlay>
  );
};
