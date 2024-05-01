import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface FortuneContextProps {
  code: string | null;
  setCode: Dispatch<SetStateAction<string | null>>;
}

const FortuneContext = createContext<FortuneContextProps>({
  code: null,
  setCode: () => {},
});

export const useFortune = () => {
  return useContext(FortuneContext);
};

export const FortuneProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = useState<string | null>(null);

  const values = {
    code,
    setCode,
  };

  return <FortuneContext.Provider value={values}>{children}</FortuneContext.Provider>;
};
