import "../FrontierNews.css";

import cattledrive from "../assets/cattledrive.jpg";
import aggiecake from "../assets/aggiecake.jpg";
//import Content from '../components/ArticleContent';

const ArticleOne = () => {
  return (
    <div className="blog-post">
      <div className="articleTitle">
        <h1>The Dusty Aggie Gazette</h1>
      </div>
      <p className="articleContent">
        <strong>Journalist Team: </strong>Howdy Hack |{" "}
        <strong>Published: </strong>09/29/2024
      </p>
      <button onClick={() => window.history.back()}>Back</button>
      <p> {/*spacing between author and image */}</p>

      <img
        src={aggiecake}
        alt="The Dusty Aggie Gazette"
        className="carouselImage"
      />
      <p></p>
      <h2 className="articleContent">
        Aggie Invention Takes the Cake (Literally)
      </h2>
      <p className="articleContent">
        <strong>Written: </strong>Gant Wrangler | <strong>Date: </strong>
        09/28/2024
      </p>
      <p className="articleContent">
        The Aggies unveiled their latest invention: the “Automatic Pie
        Launcher.” Designed to help local bakers distribute their treats more
        efficiently, the contraption backfired during a demonstration, sending
        blueberry pies soaring across the town square. “It’s like a catapult for
        carbs!” proclaimed Professor Jenkins, who oversees the project. While
        many townsfolk were thrilled to catch a pie mid-air, some were less
        enthused. “I was just minding my own business when a pie hit me square
        in the face,” grumbled Farmer Joe. “Now I’m the laughingstock of the
        town, all thanks to a bunch of Aggies and their fancy gadgets!”
      </p>
      <br></br>

      <br></br>
      <img
        src={cattledrive}
        alt="The Dusty Aggie Gazette"
        className="carouselImage"
      />
      <p> </p>
      <h2 className="articleContent">
        Cattle Drive Dilemma: Aggies Conquer the Stampede!
      </h2>
      <p className="articleContent">
        <strong>Written: </strong>Ewen Whisky Tripper | <strong>Date: </strong>
        09/27/2024
      </p>
      <p className="articleContent">
        In an unexpected turn of events, the Texas A&M cattle drive team faced a
        minor crisis last Saturday when the herd decided they preferred the
        aroma of fresh hay over the scent of well-placed wranglers. Reports say
        the cows made a break for it, leaving the Aggies scrambling to corral
        them before they reached the local saloon. “It was a classic case of
        ‘moo-tion gone wrong,’” chuckled Captain Billy “Bovine” Barlow, head of
        the A&M wrangling team. “We were just trying to give ‘em a little ride,
        but they took off faster than a jackrabbit on a hot skillet!” The
        stampede left several townsfolk diving for cover, while the local poker
        game was momentarily interrupted. “I’d never seen a cow fly before, but
        they sure can when they want to,” said old Gus, a local gambler. “I lost
        a good hand because of that! I demand a rematch!”
      </p>
    </div>
  );
};

export default ArticleOne;
