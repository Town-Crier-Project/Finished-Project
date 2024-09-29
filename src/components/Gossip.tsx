import Card from "react-bootstrap/Card";

function Gossip() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>
          <div className="articleTitle">
            <h3>Got Some Gossip? Share it with em Folks!</h3>
          </div>
        </Card.Title>
        <div className="articleContent">
          <Card.Subtitle className="mb-2 text-muted">
            Aggie Westies
          </Card.Subtitle>
          <Card.Text>
            Howdy, Partner! The more the stir, the better the heard! Write up a
            storm and let it form! Aggieland is always buzzing, so share em
            stories for good ol sakes!
          </Card.Text>
          <Card.Link href="#">Upload Story</Card.Link>
          <Card.Link href="#">Make a Comment</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Gossip;
