import { NoteItemCard } from 'components/NoteItem/NoteItemCard';
import { ModalHeader } from 'react-bootstrap';

export const ModalNote = ({ item, onDelete, onEdit, onHide }) => {
  return (
    <>
      <ModalHeader className="bg-background" closeButton>
        <h4 className=" text-primary m-0">Note</h4>
      </ModalHeader>
      <NoteItemCard
        item={item}
        editNote={onEdit}
        onDelete={onDelete}
        showComments={true}
        comments={item.comments}
      />
    </>
  );
};
