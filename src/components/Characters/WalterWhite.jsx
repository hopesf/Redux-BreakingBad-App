import { useSelector } from 'react-redux';

const WalterWhite = () => {
  const el = useSelector((state) => state.characters.popularCharacters[0]);

  return (
    <div className="w-full rounded space-x-10  flex flex-row justify-between">
      <div className="basis-3/6 rounded-t-full flex bg-white">
        {/* img side */}
        <img src={el?.img} alt={el?.name} className="rounded-t-full" />
      </div>
      <div className="basis-3/6 flex flex-col space-y-20">
        {/* description side */}
        <h2 className="w-full text-center text-5xl font-extrabold tracking-widest p-5 rounded-t-full bg-white">
          {el?.name}
        </h2>

        <div className="w-full flex flex-col space-y-3 bg-white rounded-l-full rounded-tr-full justify-center items-center p-5">
          <h2 className="text-3xl pb-5 font-extrabold tracking-widest underline">Details</h2>
          <span className="text-xl tracking-widest">
            <span className="font-bold">Nickname:</span> {el?.nickname}
          </span>
          <span className="text-xl tracking-widest">
            <span className="font-bold">Status:</span> {el?.status}
          </span>
          <span className="text-xl tracking-widest">
            <span className="font-bold">Birth Day:</span> {el?.birthday}
          </span>
        </div>

        <div className="bg-white rounded-r-full rounded-tl-full justify-center items-center flex flex-col p-5">
          <h2 className="text-3xl pb-5 font-extrabold tracking-widest underline">Occupation</h2>
          <ul className="space-y-2">
            {el?.occupation.map((ele) => (
              <li className="text-xl tracking-widest">-{ele}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-2 bg-white rounded-b-full justify-center items-center p-5">
          <span className="text-2xl tracking-widest font-extrabold underline">Actor</span>
          <span className="text-xl tracking-widest">{el?.portrayed}</span>
        </div>
      </div>
    </div>
  );
};
export default WalterWhite;
