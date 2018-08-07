export interface IComicCoverState {
  coverLabel: string;
  imageUrl: string;
  comicVineUrl: string;
  variantCovers?: Array<{ label: string; index: number }>;
  currentCover?: number;
}
