import { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const CustomOutlet = () => {
  const [loaded, setLoaded] = useState(false);
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    // @ts-ignore
    $("main").ripples({
      // 리플의 반복 효과 여부
      dropRadius: 50, // 리플 반지름 크기
      perturbance: 0.04, // 물결의 왜곡 정도
    });
  }

  return (
    <>
      {location.pathname === "/after-service" && (
        <header className="fixed top-0 pt-5 w-full flex items-center justify-center">
          <ul className="flex gap-20 text-2xl text-white">
            <li className="cursor-pointer">
              <Link to="/">처음으로</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"http://localhost:5173" + "/result?code=" + code}>
                운세결과
              </Link>
            </li>
          </ul>
        </header>
      )}
      <main className="bg">
        <Outlet />
      </main>
    </>
  );
};

export default CustomOutlet;
