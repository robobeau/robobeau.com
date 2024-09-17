import { HANDLE_CLASS } from "@/constants";
import vt323 from "@/fonts/vt323";
import { useRouter } from "next/navigation";

interface TitleProps {
  onClose?: () => void;
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { onClose, title } = props;

  const router = useRouter();

  return (
    <div
      className={`
        ${HANDLE_CLASS}
        bg-blue-800 border-black border-b flex items-stretch h-8 relative text-xl text-white
        ${vt323.className}
      `}
    >
      <button
        className={`
          group/button
          bg-slate-300 border-black border-r cursor-pointer flex items-center justify-center outline-none text-white w-8 z-10
          focus:bg-slate-400 focus:text-black
          ${vt323.className}
        `}
        onClick={onClose ?? router.back}
        title="Go Back"
      >
        <span
          className={`
            bg-white border-black border h-1 shadow shadow-slate-800 w-1/2
            group-focus/button:bg-black group-focus/button:border-white group-focus/button:shadow-white
          `}
        ></span>
      </button>

      <span className={`${HANDLE_CLASS} grow select-none text-center`}>{title}</span>
    </div>
  );
};

export { Title as default };
