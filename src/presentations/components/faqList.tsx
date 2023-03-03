import { useEffect } from "react";

export default function FaqList({ data }: any) {
  const parser = new DOMParser();
  useEffect(() => {
    const re = parser.parseFromString(data.title, "text/html");
    console.log(re.body.innerHTML);
  });
  return (
    <div className=" md:flex md:justify-center md:ml-[3rem] 2xl:ml-[3.6rem]">
      <li>
        <div
          className="relative flex flex-col justify-between bg-[#1d1d1d] border-[3px] border-black rounded-[20px]  h-[378px] px-[2.5rem] py-[3rem] 
        md:w-[650px] md:pr-[3rem] md:pl-[5.8rem] md:h-[410px]
        2xl:w-[1250px] 2xl:h-[600px] 2xl:py-[6rem] "
        >
          <div className="faq-img md:flex md:justify-between relative ">
            <p
              className="text-[1.8rem] font-bold leading-[2.8rem] w-[214px] faq-card-line
            md:w-[264px] md:text-[2.3rem] md:leading-[3.68rem]
           2xl:text-[3rem] 2xl:leading-[4.8rem] 2xl:w-[355px] 2xl:break-keep"
            >
              {data.quater}
              <br />
              <span
                className="text-[1.8rem] font-bold leading-[2.8rem] w-[214px] faq-card-line
            md:w-[264px] md:text-[2.3rem] md:leading-[3.68rem]
           2xl:text-[3rem] 2xl:leading-[4.8rem] 2xl:w-[355px] break-keep"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
            </p>
            <img
              className=" md:w-[200px] 2xl:w-[385px] 2xl:absolute 2xl:right-[2rem] 2xl:top-[0] "
              src={data.image}
              alt=""
            />
          </div>
          <p
            className=" font-medium text-[1.4rem] leading-[2.4rem] break-keep 
          md:text-[1.7rem] md:leading-[3rem] md:w-[471px] 
          2xl:text-[2.4rem] 2xl:leading-[4.32rem] 2xl:w-[741px] absolute  top-[180px] mr-[2.5rem] md:top-[223px] 2xl:top-[325px]"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </li>
    </div>
  );
}
