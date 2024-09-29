import "../FrontierNews.css";

import horncattle from "../assets/horncattle.jpg";
import goat from "../assets/goat.jpg";

const ArticleTwo = () => {
  return (
    <div className="blog-post">
      <div className="articleTitle">
        <h1>The Aggie Frontier Tribune</h1>
      </div>
      <p className="articleContent">
        <strong>Journalist Team: </strong>Swaggy Aggies |{" "}
        <strong>Published: </strong>09/29/2024
      </p>
      <button onClick={() => window.history.back()}>Back</button>
      <p> {/*spacing between author and image */}</p>

      <img
        src={horncattle}
        alt="The Dusty Aggie Gazette"
        className="carouselImage"
      />
      <p></p>
      <h2 className="articleContent">
        Aggie Cattle Drive Goes Awry: Stampede or Line Dance?
      </h2>
      <p className="articleContent">
        <strong>Written: </strong>Cierra Lasso Legend | <strong>Date: </strong>
        09/21/2024
      </p>
      <p className="articleContent">
        Aggie Junction — In an uproarious mishap that has left the town buzzing,
        the Texas A&M cattle drive team attempted a synchronized “cowpoke line
        dance” during last Saturday’s cattle drive. The event, meant to showcase
        the Aggies’ herding skills, quickly spiraled into chaos when the cattle
        decided they’d rather hoof it in their own direction. “I swear those
        cows have better rhythm than I do!” exclaimed Captain “Two-Step”
        Thompson, leader of the drive. “One minute we were kicking up dust, and
        the next, we were all just kicking!” Witnesses reported that the cows,
        inspired by the Aggies’ enthusiasm, formed their own impromptu line
        dance, heading straight for the local saloon. “It was like a scene out
        of a Western musical!” laughed Miss Clara, owner of the Golden Hay
        Saloon. “I’ve never seen so many tipsy cowboys trying to wrangle tipsy
        cows at the same time!”
      </p>
      <br></br>

      <br></br>
      <img src={goat} alt="The Dusty Aggie Gazette" className="carouselImage" />
      <p> </p>
      <h2 className="articleContent">Gossip on the Trail: Goat Shenanigans</h2>
      <p className="articleContent">
        <strong>Written: </strong>Josh Boozy Buckaroo | <strong>Date: </strong>
        09/20/2024
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

export default ArticleTwo;
