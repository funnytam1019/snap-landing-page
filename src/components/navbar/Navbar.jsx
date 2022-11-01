import logo from '../../Assets/images/logo.svg';
import Dropdown from './dropdown/Dropdown';
import iconTodo from '../../Assets/images/icon-todo.svg';
import iconCalendar from '../../Assets/images/icon-calendar.svg';
import iconReminders from '../../Assets/images/icon-reminders.svg';
import iconPlanning from '../../Assets/images/icon-planning.svg';

const features = [
  {
    name: 'Todo List',
    href: '#',
    icon: iconTodo,
  },
  {
    name: 'Calendar',
    href: '#',
    icon: iconCalendar,
  },
  {
    name: 'Reminders',
    href: '#',
    icon: iconReminders,
  },
  {
    name: 'Planning',
    href: '#',
    icon: iconPlanning,
  },
];

const company = [
  {
    name: 'History',
    href: '#',
  },
  {
    name: 'Our Team',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="localhost:3000">
        <img className="logo" src={logo} alt="snap logo" />
      </a>
      <Dropdown title="Features" list={features} />
      <Dropdown title="Company" list={company} />
      <li>Careers</li>
      <li>About</li>
      <li>Login</li>
      <li>Register</li>
    </div>
  );
};

export default Navbar;
