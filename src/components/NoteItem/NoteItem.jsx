import { useNavigate } from 'react-router-dom';
import { Wrapper, Text, Btn } from './NoteItem.styled';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import { ModalNote } from 'components/ModalNote/ModalNote';

export const NoteItem = ({ item, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  const { name, content, id } = item;

  const editNote = () => {
    onEdit(item);
    navigate('/');
  };

  return (
    <>
      <Wrapper>
        <Text>
          <strong>{name}</strong>
        </Text>
        <Text>{content}</Text>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '10px',
          }}
        >
          <Btn type="button" onClick={openModal}>
            Open note
          </Btn>
          <Btn type="button" onClick={editNote}>
            Edit
          </Btn>
          <Btn
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            X
          </Btn>
        </div>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <ModalNote item={item} onDelete={onDelete} onEdit={onEdit} />
          </Modal>
        )}
      </Wrapper>
    </>
  );
};
