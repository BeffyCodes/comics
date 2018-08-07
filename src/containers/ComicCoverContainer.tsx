import ComicCover from "../components/ComicCover";
import * as React from "react";
import { IComicCoverContainer, IComicCoverState } from "../interfaces";

export class ComicCoverContainer extends React.Component<any, IComicCoverState>
  implements IComicCoverContainer {
  constructor(params: any) {
    super(params);

    this.state = {
      coverLabel: "",
      imageUrl: "",
      comicVineUrl: "",
      variantCovers: [],
      currentCover: 0
    };
  }

  onVariantCoversClick = () => {};

  render() {
    return (
      <ComicCover
        coverLabel={this.state.coverLabel}
        imageUrl={this.state.imageUrl}
        comicVineUrl={this.state.comicVineUrl}
        onCoversClick={this.onVariantCoversClick}
        variantCovers={
          this.state.variantCovers &&
          this.state.variantCovers.map((cover, index) => {
            return { label: cover.label, index };
          })
        }
      />
    );
  }
}
