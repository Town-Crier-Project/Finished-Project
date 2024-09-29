import Card from "react-bootstrap/Card";
//import rev from "../assets/rev.jpg";

function About() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <div className="cardBackground">
          <Card.Title>
            <div className="articleTitle">
              <h3>About Us!</h3>
            </div>
          </Card.Title>
          <div className="articleContent">
            <Card.Subtitle className="mb-2 text-muted">
              Aggie Westies
            </Card.Subtitle>
            <Card.Text>
              Ain't much to say! We just some country lovin, gossip lovin,
              folks. We awfully friendly, and kind to the bone. We love em
              stories just as much as we love em whiskey. We ought to create a
              platform for everybody to share their good ol tall tale stories
              for us readers to enjoy! Our sherif Ms. Rev sure loves sitting
              back and readin em entries as well. Spread the word, and lets
              continue on!
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default About;
