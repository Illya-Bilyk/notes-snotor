import illya from '../../images/illya.png';
import githubImage from '../../images/github-mark.svg';
import mailImage from '../../images/mail.svg';
import phoneImage from '../../images/phone.svg';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

export const About = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      <h3 className="text-secondary" style={{ marginRight: '50px' }}>
        Our team:
      </h3>
      <Card style={{ maxWidth: '300px' }}>
        <CardImg
          src={illya}
          alt="illya"
          style={{ maxWidth: '300px', height: '350px' }}
        />
        <div className="d-flex flex-column justify-content-center my-1">
          <CardBody variant="right">
            <CardTitle>Illya Bilyk</CardTitle>
            <CardText>
              Junior Full Stack developer <br /> Date of birth: 27.12.1998{' '}
              <br /> Nationality: Ukrainian
            </CardText>
          </CardBody>
          <ListGroup className="mx-2">
            <ListGroupItem className="m-1 border border-primary rounded">
              <a
                href="tel:+38067998"
                className="text-decoration-none text-dark"
              >
                <span className="px-2">
                  <img
                    src={phoneImage}
                    alt="github"
                    width="15px"
                    height="15px"
                  />
                </span>
                +38067998****
              </a>
            </ListGroupItem>
            <ListGroupItem className="m-1 border border-primary rounded">
              <a
                href="mailto:bilykillya.i@gmail.com"
                className="text-decoration-none text-dark"
              >
                <span className="px-2">
                  <img
                    src={mailImage}
                    alt="github"
                    width="20px"
                    height="20px"
                  />
                </span>
                bilykillya.i@gmail.com
              </a>
            </ListGroupItem>
            <ListGroupItem className="m-1 border border-primary rounded">
              <a
                href="https://github.com/Illya-Bilyk"
                className="text-decoration-none text-dark"
              >
                <span className="px-2">
                  <img
                    src={githubImage}
                    alt="github"
                    width="15px"
                    height="15px"
                  />
                </span>
                GitHub
              </a>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Card>
    </div>
  );
};
