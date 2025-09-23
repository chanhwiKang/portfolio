import {
  UserCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  CpuChipIcon,
  PencilSquareIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import IntroduceCard from "./IntroduceCard";
// rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg
// text-5xl font-bold bg-gradient-to-br from-white/80 to-white/30 bg-clip-text text-transparent
//<h1 className="text-5xl font-bold bg-gradient-to-br from-white/80 to-white/30 bg-clip-text text-transparent">
//   Liquid Glass
// </h1>
import { useState } from "react";
import bg from "./images/bg.jpg";
import colorBubble from "./images/color_bubble.jpg";
import blackBubble from "./images/black_bubble.jpg";
import icyBubble from "./images/icy_bubble.jpg";
import blackWallpaper from "./images/black.jpg";
import ProjectTitle from "./ProjectTitle";
import SkillBoard from "./SkillBoard";

function MainPage() {
  const [animationPhase, setAnimationPhase] = useState("intro");

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div
        className="bg-cover bg-center h-screen w-full flex flex-row justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
        // style={{ backgroundColor: "#f5f5f7" }}
      >
        <div
          onAnimationEnd={(e) => {
            // moreWide 애니메이션 끝났을 때만 실행
            if (e.animationName === "moreWide") {
              setAnimationPhase("main");
            }
          }}
          className={`moreWide-animation h-[70vh] flex flex-col justify-between rounded-2xl border isolate aspect-video bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-lg transition-transform duration-1000 ease-in-out
            `}
        >
          {animationPhase === "intro" ? (
            <div className="text-stone-100 text-6xl font-semibold font-apple text-left pt-5 pl-5">
              강찬휘,
            </div>
          ) : (
            <div className="w-full flex justify-start relative">
              <div className="absolute text-6xl  w-fit font-apple font-semibold pt-5 pl-5 text-white animate-fade-out">
                강찬휘,
              </div>
              <div className="gradient-text w-fit text-6xl font-semibold font-apple pt-5 pl-5 animate-fade-in">
                강찬휘,
              </div>
            </div>
          )}

          <div className="relative  h-[40vh] flex flex-col justify-center items-center">
            {animationPhase === "intro" ? (
              // 기존 팔방. 미인. 텍스트
              <div className="relative  h-[40vh] flex flex-col justify-center items-center">
                <div className="text-center absolute top-1/2 text-black text-7xl font-apple gradient-text font-semibold slideUp-animation w-[300px]">
                  팔방. 미인.
                </div>
                <div className="text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black text-7xl font-apple gradient-text font-bold w-[300px]">
                  팔방. 미인.
                </div>
                <div className="text-center absolute top-1/2 text-black text-7xl font-apple gradient-text slideDown-animation w-[300px]">
                  팔방. 미인.
                </div>
              </div>
            ) : (
              // 애니메이션 끝난 후 카드
              <div
                className="grid grid-cols-3 h-[30vh] w-full 
                  transition-all duration-700 ease-in-out opacity-0  animate-fade-in"
              >
                <IntroduceCard
                  Icon={UserCircleIcon}
                  label={"이름"}
                  value={"강찬휘"}
                />
                <IntroduceCard
                  Icon={CalendarDaysIcon}
                  label={"생년월일"}
                  value={"98.03.24"}
                />
                <IntroduceCard
                  Icon={MapPinIcon}
                  label={"지역"}
                  value={"인천 미추홀구"}
                />
                <IntroduceCard
                  Icon={DevicePhoneMobileIcon}
                  label={"연락처"}
                  value={"010-0100-0100"}
                />
                <IntroduceCard
                  Icon={EnvelopeIcon}
                  label={"이메일"}
                  value={"email@email.com"}
                />
                <IntroduceCard
                  Icon={PencilIcon}
                  label={"인하공업전문대학"}
                  value={"컴퓨터정보공학"}
                />
              </div>
            )}
          </div>

          {animationPhase === "intro" ? (
            <div className="text-stone-100 text-5xl font-apple text-right pb-5 pr-5">
              스위프트 개발자.
            </div>
          ) : (
            <div className="w-full flex justify-end relative">
              {/* 흰색 텍스트 (밑에 깔림) */}
              <div className="absolute text-5xl font-apple pb-5 pr-5 text-white animate-fade-out">
                스위프트 개발자.
              </div>
              {/* 그라데이션 텍스트 (위에 올라와서 페이드 인) */}
              <div className="gradient-text w-fit text-5xl font-apple pb-5 pr-5 animate-fade-in">
                스위프트 개발자.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2page */}
      <div
        className="h-[80vh] w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${blackWallpaper})` }}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          <div className="h-[60vh] w-[80vw] flex flex-col justify-evenly px-10 rounded-3xl border isolate aspect-video bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-lg">
            <div className="w-full flex justify-center pt-6">
              <div className="text-6xl w-fit font-extrabold gradient-text">
                잘 하는 것.
              </div>
            </div>
            <SkillBoard
              Icon={PencilSquareIcon}
              title="언어"
              contents={["Swift", "Java", "JavaScript", "Python"]}
            />
            <SkillBoard
              Icon={PaintBrushIcon}
              title="프론트엔드"
              contents={["SwiftUI", "React", "tailwind CSS", "HTML", "CSS"]}
            />
            <SkillBoard
              Icon={CpuChipIcon}
              title="백엔드"
              contents={["CoreData", "SQL", "FireBase", "Spring Boot"]}
            />
            <SkillBoard
              Icon={WrenchScrewdriverIcon}
              title="개발 도구"
              contents={["Docker", "AWS", "Figma"]}
            />
          </div>
        </div>
      </div>

      {/* 3page */}
      <div className="w-full h-screen flex flex-col">
        <div className="flex h-[6vh] flex-row items-center rounded-t-xl bg-macNotesTopLight border-b-gray-400 border-b">
          <div className="absolute left-3 flex flex-row justify-start gap-3 ml-3">
            <div className="rounded-full bg-macRed h-[1vw] w-[1vw]" />
            <div className="rounded-full bg-macYellow h-[1vw] w-[1vw]" />
            <div className="rounded-full bg-macGreen h-[1vw] w-[1vw]" />
          </div>
          <div className="text-5xl w-full flex justify-center ">
            <div className="w-fit flex justify-center font-extrabold gradient-text">
              프로젝트들을 확인해 보세요.
            </div>
          </div>
        </div>
        <div className="flex flex-row h-full ">
          <div className="w-1/5 flex flex-col border-r-gray-400 border-r bg-macNotesSideLight">
            <ProjectTitle title="지피티쳐" subTitle="이것 저것 했어요~~" />
            <ProjectTitle title="지피티쳐" subTitle="이히히 열심히 했어요!" />
            <ProjectTitle title="지피티쳐" subTitle="이것 저것 했어요~~" />
            <ProjectTitle title="지피티쳐" subTitle="이히히 열심히 했어요!" />
            <ProjectTitle title="지피티쳐" subTitle="이것 저것 했어요~~" />
          </div>
          <div className="w-4/5 bg-macNotesMainLight">프로젝트 구체적 내용</div>
        </div>
      </div>
      {/* <div>연락 기다리고 있어요.</div> */}
    </div>
  );
}

export default MainPage;
