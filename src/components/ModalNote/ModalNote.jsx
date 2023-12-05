import { Wrapper, Text, Btn } from '../NoteItem/NoteItem.styled';

export const ModalNote = ({ item, onDelete, onEdit }) => {
  const { name, content, id, comments } = item;

  return (
    <div
      style={{
        width: '700px',
        height: '600px',
        display: 'flex',
        boxSizing: 'border-box',
      }}
    >
      <Wrapper>
        <Text>
          <strong>{name}</strong>
        </Text>

        <Text>{content}</Text>
        <ul>
          {comments.length !== 0 &&
            comments.map(comment => {
              return (
                <li key={comment.createdAt}>
                  <Text>
                    <strong>{comment.author}</strong>
                  </Text>
                  <Text>{comment.noteComment}</Text>
                  <Text>{comment.createdAt}</Text>
                </li>
              );
            })}
        </ul>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '10px',
          }}
        >
          <Btn type="button" onClick={onEdit}>
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
      </Wrapper>
    </div>
  );
};
