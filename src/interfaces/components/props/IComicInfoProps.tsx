export interface IComicInfoProps {
  title: string;
  volume: string;
  issueNumber: number;
  publishDate: Date;
  userReadDate?: Date;
  userAddedDate?: Date;
  userPurchaseDate?: Date;
  userReviewNum?: number;
  userReviewWritten?: string;
  userSummary?: string;
  userNotes?: string;
  userTags?: Array<string>;
}
