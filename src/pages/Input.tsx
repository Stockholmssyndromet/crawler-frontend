import React, { useState } from "react";
import { instance } from "../apis";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [url, setUrl] = useState("http://localhost:3000");
  const [searchText, setSearchText] = useState("취소/반품/교환");
  const navigate = useNavigate();

  const handleSettingCrawlerClick = async () => {
    await instance.post("/crawl", { url, searchText });
    navigate("/analyze");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-16">
      <h1 className=" text-3xl font-extrabold">스마트 크롤러</h1>
      <div className="flex flex-col gap-2">
        <span className=" font-semibold">사이트 주소</span>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="크롤링할 사이트 주소를 입력해주세요"
          className="border-2 w-96 border-solid border-[#4983EE] rounded-lg py-3 px-4 focus:border-blue-700 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className=" font-semibold">크롤링 텍스트</span>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="크롤링할 요소의 내용을 입력해주세요"
          className="border-2 w-96 border-solid border-[#4983EE] rounded-lg py-3 px-4 focus:border-blue-700 outline-none"
        />
      </div>
      <button
        onClick={handleSettingCrawlerClick}
        className="py-3 px-16 bg-[#4983EE] text-white font-semibold rounded-lg"
      >
        등록하기
      </button>
    </div>
  );
};

export default Input;
