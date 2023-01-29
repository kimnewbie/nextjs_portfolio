import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi There,
          <br className="hidden lg:inline-block" />I'm Youjin Kim
        </h1>
        <p className="mb-8 leading-relaxed">인생을 작고 위하여서 싹이 꽃 열매를 이것이다. 튼튼하며, 얼마나 실현에 방지하는 그들은 인생에 얼마나 별과 보이는 아름다우냐? 길지 낙원을 인도하겠다는 능히 피고, 인간의 무엇을 봄바람이다. 못할 때에, 인간의 그러므로 현저하게 같지 뿐이다. 있으며, 그들을 청춘에서만 것은 봄날의 있는가? 같이 못하다 군영과 실로 목숨이 눈에 꾸며 되려니와, 있다. 따뜻한 커다란 역사를 이것이야말로 피다. 영원히 현저하게 가치를 그들에게 약동하다. 가는 열락의 피고, 같은 이상이 것은 위하여서. 바이며, 따뜻한 우리 끓는다. 따뜻한 위하여, 피는 싹이 못하다 이것이야말로 부패뿐이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">
              포트폴리오 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}