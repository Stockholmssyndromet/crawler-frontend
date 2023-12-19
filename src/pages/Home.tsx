import { useEffect, useState } from "react";
import { instance } from "../apis";

const Home = () => {
  const [mode, setMode] = useState(true);
  const [result, setResult] = useState({
    url: "/",
    element: [{ tagName: "", className: "" }],
    content: "",
  });

  const call = () => {
    (async () => setResult((await instance.get("/crawl")).data))();
  };

  useEffect(() => {
    call();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="w-full h-[100vh] px-20 py-8 flex flex-col gap-6">
      <div className="w-full flex gap-4">
        <ul className=" w-full h-fit py-3 px-6 border-4 border-solid border-gray-200 bg-blue-50">
          {result.element &&
            result.element.map(
              (el) =>
                el && (
                  <span className="font-medium text-lg">{`${el?.tagName} ${
                    el.className && mode ? `(${el.className})` : ""
                  } > `}</span>
                )
            )}
        </ul>
        <div className="flex flex-col gap-6 w-32 justify-center items-center">
          <button
            onClick={call}
            className="w-28 py-3 px-4 bg-blue-100 text-[#4983EE] font-semibold text-sm rounded-lg"
          >
            새로고침
          </button>
          <button
            onClick={() => setMode(!mode)}
            className="w-28 py-3 px-4 bg-[#4983EE] text-white font-semibold text-sm rounded-lg"
          >
            클래스 표시
          </button>
        </div>
      </div>
      <main className="w-full h-full flex gap-4">
        <iframe
          className="border-4 border-solid border-gray-200"
          src={result.url}
          width="100%"
          height="100%"
          title="site"
        />
      </main>
    </div>
  );
};

export default Home;
