import * as React from "react";
import "./App.css";
import ComicCover from "./components/ComicCover";
import ComicInfo from "./components/ComicInfo";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ComicCover
          coverLabel="Sup"
          imageUrl="string"
          comicVineUrl="https://www.google.com"
          onCoversClick={() => console.log("lol")}
          variantCovers={[
            {
              label: "Cover 1",
              index: 0
            }
          ]}
        />
        <ComicInfo
          title="Test"
          volume="Jesse and the Comics"
          issueNumber={5}
          publishDate={new Date()}
        />
      </div>
    );
  }
}

export default App;
