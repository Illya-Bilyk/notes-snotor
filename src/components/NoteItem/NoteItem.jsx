import { useNavigate } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { ModalNote } from 'components/ModalNote/ModalNote';
import { Modal } from 'react-bootstrap';
import { NoteItemCard } from './NoteItemCard';

export const NoteItem = ({ item, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  const editNote = () => {
    onEdit(item);
    navigate('/');
  };

  return (
    <>
      <NoteItemCard
        item={item}
        openModal={openModal}
        editNote={editNote}
        onDelete={onDelete}
      />

      <Modal size="lg" centered show={isModalOpen} onHide={closeModal}>
        <ModalNote item={item} onDelete={onDelete} onEdit={editNote} />
      </Modal>
    </>
  );
};
