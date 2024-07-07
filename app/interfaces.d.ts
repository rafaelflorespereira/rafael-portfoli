export type Job = {
  years: string;
  imageUrl: StaticImageData | string;
  title: string;
  subtitle: string;
  description?: string;
};

export type IHeaderIcon = {
  icon: FontAwesomeIconProps["icon"];
  color: string;
  name: string;
};
