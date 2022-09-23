import Body from './Body';
import data from './Data';

export default function Main() {
  const cardElements = data.map((card) => {
    return <Body {...card} />;
  });

  return <div className="main">{cardElements}</div>;
}
