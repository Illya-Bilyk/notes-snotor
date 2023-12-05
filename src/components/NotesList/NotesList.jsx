import { NoteItem } from '../NoteItem/NoteItem';
import { ListItem, List } from './NotesList.styled';

export const NotesList = ({ items, ...otherProps }) => {
  return (
    <>
      <h2>Notes:</h2>
      <List>
        {items.map(note => {
          return (
            <ListItem key={note.id}>
              <NoteItem item={note} {...otherProps} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
