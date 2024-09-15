import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";

const NotFound: React.FC = () => {
  return (
    <ProgramWindow className="z-[1000]" origin="m" title="404">
      <span>Not Found</span>
    </ProgramWindow>
  );
};

export { NotFound as default };
