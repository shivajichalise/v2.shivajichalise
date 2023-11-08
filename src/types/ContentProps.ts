type ContentData = {
  type: string;
  link: string;
  openInNewTab: boolean;
  title: string;
  suffix: string;
};

type Points = {
  type: string;
  data: ContentData[];
};

export default interface ContentProps {
  title: string;
  description: string;
  points: Points | null;
}
