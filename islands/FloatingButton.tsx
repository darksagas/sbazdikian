import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface FloatingButtonProps {
  buttonProps?: JSX.HTMLAttributes<HTMLButtonElement>;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  label: string;
  img?: string;
}

const FloatingButton = ({
  buttonProps,
  position,
  label,
}: FloatingButtonProps) => {
  const [expanded, setExpanded] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!expanded && firstTime) {
      setTimeout(() => {
        setExpanded(true);
        setFirstTime(false);
      }, 600);
    }
  }, [expanded, firstTime]);

  return (
    <button
      {...buttonProps}
      onClick={() => setExpanded(!expanded)}
      className={`${
        expanded ? 'h-[58px]' : 'h-3'
      } px-2 py-1 bg-blue-500 hover:bg-blue-300 w-1/5 left-8 absolute w-[70px] mt-[-8px] pt-3 rounded-b-lg focus:outline-none transition-all duration-500`}
    >
      <div className="grid grid-cols-1 items-center">
        <div className="col-span-1 -mb-1">
          <img
            src="/me.png"
            alt="Sarkis Bazdikian Miniature"
            height={30}
            width={50}
            className={`${expanded ? '' : '-mt-40'} transition-all duration-[400ms]`}
          />
        </div>
      </div>
    </button>
  );
};

export default FloatingButton;
