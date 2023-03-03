export default function ItemList({ data }: any) {
  return (
    <li className="w-[110px] md:w-[170px] xl:w-[206px]">
      <img className="" src={data.image} alt="" />
    </li>
  );
}
