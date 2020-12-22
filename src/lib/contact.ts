import data from '../../meta/contact.json'

type Contact = {
  readonly contactHeader: string;
  readonly contactText: string;
  readonly phone: string;
  readonly email: string;
};

export default data as Contact
