import iconArrowDown from '../../../Assets/images/icon-arrow-down.svg';

const Dropdown = ({ title, list }) => {
  return (
    <li>
      <a href="#">
        <span>{title}</span>
        <img
          className="icon-arrow-down"
          src={iconArrowDown}
          alt="icon-arrow-down"></img>
      </a>
      <div className="wrapper">
        <ul>
          {list.map((item) => (
            <li className="list">
              <img className="icon" src={item.icon} alt={item.icon}></img>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Dropdown;
