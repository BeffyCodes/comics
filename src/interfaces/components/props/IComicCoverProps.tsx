export interface IComicCoverProps {
  coverLabel: string;
  imageUrl: string;
  comicVineUrl: string;
  onCoversClick: () => void;
  variantCovers?: Array<{ label: string; index: number }>;
}
