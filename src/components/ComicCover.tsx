import { IComicCoverProps } from "../interfaces";
import * as React from "react";

function ComicCover({
  imageUrl,
  comicVineUrl,
  onCoversClick,
  variantCovers
}: IComicCoverProps) {
  return (
    <div>
      <a href={comicVineUrl}>
        <img src={imageUrl} />
      </a>
      <p onClick={onCoversClick}>Variant Covers!</p>
      {variantCovers &&
        variantCovers.length &&
        variantCovers.map(cover => <p key={cover.index}>{cover.label}</p>)}
    </div>
  );
}

export default ComicCover;
