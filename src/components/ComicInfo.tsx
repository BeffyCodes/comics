import * as React from "react";
import { IComicInfoProps } from "../interfaces";

function ComicInfo({ ...comicInfo }: IComicInfoProps) {
  return (
    <div className="comic-info">
      <div className="comic-stats">
        <p id="comic-title">{comicInfo.title}</p>
        <p id="comic-issue-number">{comicInfo.issueNumber}</p>
        <p id="comic-publish-date">{comicInfo.publishDate.toDateString()}</p>
        <p id="comic-volume">{comicInfo.volume}</p>
      </div>
      <div className="comic-user-stats">
        {comicInfo.userReadDate && (
          <p id="user-read-date">{comicInfo.userReadDate}</p>
        )}
        {comicInfo.userPurchaseDate && (
          <p id="user-purchase-date">{comicInfo.userPurchaseDate}</p>
        )}
        {comicInfo.userAddedDate && (
          <p id="user-added-date">{comicInfo.userAddedDate}</p>
        )}
        {comicInfo.userReviewNum && (
          <p id="user-num-review">{comicInfo.userReviewNum}</p>
        )}
        {comicInfo.userReviewWritten && <p>Custom Edit Text Component Here</p>}
        {comicInfo.userSummary && <p>Custom Edit Text Component Here</p>}
        {comicInfo.userNotes && <p>Custom Edit Text Component Here</p>}
        {comicInfo.userReviewWritten && <p>Tags Picker/Display component</p>}
      </div>
    </div>
  );
}

export default ComicInfo;
