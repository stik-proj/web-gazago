export default function RoadmapListItem({ data, index }: any) {
  const descList = (item: any) => {
    const desc1: any = [];
    for (let i = 0; i < item.desc[0].text.length; i++) {
      desc1.push(
        <p className="text-[1.6rem] leading-[2.4rem]" key={i}>
          {" "}
          {item.desc[0].text[i]}
        </p>
      );
    }
    return desc1;
  };
  return (
    <div className="my-[5.4rem] relative">
      <p className="font-bold text-[2.8rem] text-[#37f4e6] before-l md:text-white ">
        {data.quater}
      </p>
      <ul className="relative">
        {data.list.map((item: any, idx: any) => (
          <li className="pl-[5.6rem]" key={idx.toString()}>
            <p className="font-bold text-[1.8rem] mt-[5.4rem] before-m ">
              {item.title}
            </p>
            <div className="mt-[1rem]">{descList(item)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
