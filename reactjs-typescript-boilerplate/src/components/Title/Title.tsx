import { TitlePage } from './style';

import { ITitle } from '../../interfaces/title';

function Title({ value }: ITitle) {
  return (
    <div>
      <TitlePage>{value}</TitlePage>
    </div>
  );
}

export default Title;
