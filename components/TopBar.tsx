import { JSX } from 'preact';
import FloatingButton from "../islands/FloatingButton.tsx";

interface TopBarProps {
  title: string;
}

const TopBar = ({ title }: TopBarProps): JSX.Element => {
  return (
    <div className="grid bg-red-50">
      <div className="grid grid-cols-2">
        {/* <div className="col-span-1">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <h2 className="text-2xl text-white">Software Engineer</h2>
        </div> */}
        <FloatingButton position='top-left' label='Sarkis Bazdikian' />
      </div>
    </div>
  );
};

export default TopBar;
