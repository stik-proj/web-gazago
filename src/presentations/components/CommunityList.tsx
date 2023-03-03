export default function CommunityList({ data }: any) {
  return (
    <li className="flex items-start mt-[4rem]">
      <img className="mt-[1rem]" src={data.image} alt="" />
      <a className="ml-[2.5rem]" href={data.link} target="_blink">
        <div className="flex">
          <span className="font-bold text-[2.4rem]">{data.title}</span>
          <img
            className="ml-[1rem]"
            src="/img/community/img_community_arrow.svg"
            alt=""
          />
        </div>
        <p className="w-[260px] break-keep text-[1.4rem] mt-[1.6rem] text-[#c6c6c6] md:w-[284px] 2xl:w-full 2xl:text-[1.8rem]">
          {data.desc}
        </p>
      </a>
    </li>
  );
}
