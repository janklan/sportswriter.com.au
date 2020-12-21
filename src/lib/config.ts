import config from '../../config.json'

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly instagram_handle: string;
  readonly facebook_handle: string;
  readonly linkedin_handle: string;
  readonly email: string;
  readonly phone: string;
  readonly contactText: string;
};

export default config as Config
