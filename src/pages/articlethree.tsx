import "../FrontierNews.css";

import cowboydrunk from "../assets/cowboydrunk.jpg";
import family from "../assets/family.jpg";

const ArticleThree = () => {
  return (
    <div className="blog-post">
      <div className="articleTitle">
        <h1>The Daily Drunkard</h1>
      </div>
      <p className="articleContent">
        <strong>Journalist Team: </strong>Rev Slays |{" "}
        <strong>Published: </strong>09/27/2024
      </p>
      <button onClick={() => window.history.back()}>Back</button>
      <p> {/*spacing between author and image */}</p>

      <img
        src={cowboydrunk}
        alt="The Dusty Aggie Gazette"
        className="carouselImage"
      />
      <p></p>
      <h2 className="articleContent">
        “Whiskey Wobble” Contest Turns Into a Dance-Off
      </h2>
      <p className="articleContent">
        <strong>Written: </strong>Austin Ale-slinger | <strong>Date: </strong>
        09/26/2024
      </p>
      <p className="articleContent">
        What was supposed to be a friendly “Whiskey Wobble” contest quickly
        transformed into an all-out dance-off after patrons realized they’d all
        had one too many. Contestants, armed with their finest whiskey shots,
        attempted to balance their drinks while performing what they thought
        were impressive dance moves. “I thought I was channeling my inner John
        Travolta,” laughed local legend Jerry “Two-Steps” Thompson, who ended up
        doing the worm across the floor, spilling whiskey everywhere. “Turns
        out, I was more of a falling leaf!” The judges—consisting of three
        barflies and one bewildered cat—were unable to determine a winner, but
        the real prize seemed to be the collective laughter shared by all.
      </p>
      <br></br>

      <br></br>
      <img
        src={family}
        alt="The Dusty Aggie Gazette"
        className="carouselImage"
      />
      <p> </p>
      <h2 className="articleContent">
        Bartender Fails at Mixology: Patrons Get Creative
      </h2>
      <p>
        <strong>Written: </strong>Tipsy Lin | <strong>Date: </strong>09/25/2024
      </p>
      <p className="articleContent">
        In another turn of events, new bartender Lisa “Shaker” Johnson attempted
        to impress customers with her cocktail skills. Unfortunately, she
        mistook salt for sugar in her signature margarita recipe. The result? A
        “Salt-Lick Rita” that left patrons grimacing and reaching for their
        water glasses. One brave soul, Tom “Cactus Jack” Miller, dubbed it the
        “Best Worst Drink” he’d ever had, leading a toast to the concoction with
        the catchphrase, “When life gives you lemons, add more salt!”
      </p>
    </div>
  );
};

export default ArticleThree;
