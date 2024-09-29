import MaximizedContext, { initialIsMaximized } from "@/contexts/MaximizedContext";
import MinimizedContext, { initialIsMinimized } from "@/contexts/MinimizedContext";
import PositionContext, { Position } from "@/contexts/PositionContext";
import PrevPositionContext from "@/contexts/PrevPositionContext";
import PrevSizeContext from "@/contexts/PrevSizeContext";
import SizeContext, { Size } from "@/contexts/SizeContext";
import { FC, PropsWithChildren, useState } from "react";

interface ProgramWindowProviderProps {
  initialPosition: Position;
  initialSize: Size;
}

const ProgramWindowProvider: FC<
  PropsWithChildren<ProgramWindowProviderProps>
> = (props) => {
  const { children, initialPosition, initialSize } = props;

  const [isMaximized, setIsMaximized] = useState(initialIsMaximized);
  const [isMinimized, setIsMinimized] = useState(initialIsMinimized);
  const [position, setPosition] = useState(initialPosition);
  const [prevPosition, setPrevPosition] = useState<Position | null>(null);
  const [prevSize, setPrevSize] = useState<Size | null>(null);
  const [size, setSize] = useState(initialSize);

  return (
    <MaximizedContext.Provider value={[isMaximized, setIsMaximized]}>
      <MinimizedContext.Provider value={[isMinimized, setIsMinimized]}>
        <PositionContext.Provider value={[position, setPosition]}>
          <PrevPositionContext.Provider value={[prevPosition, setPrevPosition]}>
            <PrevSizeContext.Provider value={[prevSize, setPrevSize]}>
              <SizeContext.Provider value={[size, setSize]}>
                {children}
              </SizeContext.Provider>
            </PrevSizeContext.Provider>
          </PrevPositionContext.Provider>
        </PositionContext.Provider>
      </MinimizedContext.Provider>
    </MaximizedContext.Provider>
  );
};

export { ProgramWindowProvider };

