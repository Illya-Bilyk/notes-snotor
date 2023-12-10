import { Col, Row } from 'react-bootstrap';
import { NoteItem } from '../NoteItem/NoteItem';

export const NotesList = ({ items, ...otherProps }) => {
  return (
    <>
      <h2 className="text-secondary pb-3">Notes:</h2>
      <Row as="ul" xs={1} md={2} lg={3} className="g-4 list-unstyled">
        {items.map(note => {
          return (
            <Col as="li" key={note.id} style={{ height: '225px' }}>
              <NoteItem item={note} {...otherProps} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
