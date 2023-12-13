import { CommnetsList } from 'components/ModalNote/ModalNoteCommentsList';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardText,
} from 'react-bootstrap';

export const NoteItemCard = ({
  item,
  openModal,
  editNote,
  onDelete,
  showComments,
}) => {
  const { name, content, id, comments } = item;

  return (
    <Card className="h-100">
      <CardHeader className="bg-secondary text-light">{name}</CardHeader>
      <CardBody className="bg-background">
        <CardText
          style={{
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {content}
        </CardText>

        {comments && comments.length !== 0 && showComments ? (
          <CommnetsList comments={comments} />
        ) : null}
      </CardBody>
      <ButtonGroup className="bg-background">
        {showComments ? null : (
          <Button
            variant="secondary"
            className="m-2 border rounded"
            onClick={openModal}
          >
            Open note
          </Button>
        )}

        <Button
          variant="secondary"
          className="m-2 border rounded"
          onClick={editNote}
        >
          {showComments ? 'Add comment' : 'Edit'}
        </Button>
        <Button
          variant="danger"
          className="m-2 border rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
};
