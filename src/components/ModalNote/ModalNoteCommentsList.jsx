import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export const CommnetsList = ({ comments }) => {
  return (
    <Container>
      <ListGroup>
        <p className="text-primary">Comments:</p>
        {comments.length !== 0 ? (
          comments.map(({ author, noteComment }, idx) => {
            return (
              <ListGroupItem key={idx} className="border rounded mb-2">
                <p>
                  <strong> {author}:</strong>
                </p>
                <p>{noteComment}</p>
              </ListGroupItem>
            );
          })
        ) : (
          <p>No commnets yet....</p>
        )}
      </ListGroup>
    </Container>
  );
};
