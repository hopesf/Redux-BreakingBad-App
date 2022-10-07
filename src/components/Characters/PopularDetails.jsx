import { useSelector } from 'react-redux';

const PopularDetails = () => {
  const { items, status } = useSelector((state) => state.characters.popularCharacters);

  return (
    <>
      {items?.map((el) => (
        <div className=" max-w-7xl mx-auto rounded space-x-10 py-72 flex flex-row justify-between">
          <div className="basis-3/6 rounded-t-full flex ">
            {/* img side */}
            <img src={el?.img} alt={el?.name} className="rounded-t-full" />
          </div>
          <div className="basis-3/6 flex flex-col space-y-28">
            {/* description side */}
            <h2 className="w-full text-center text-5xl font-extrabold tracking-widest p-5 rounded-t-full bg-white">
              {el?.name}
            </h2>

            <div className="w-full flex flex-col space-y-3  rounded-l-full rounded-tr-full p-5">
              <h2 className="text-3xl pb-5 font-extrabold text-white tracking-widest">Details</h2>
              <span className="text-xl tracking-widest font-bold text-white">
                Nickname: <span className="font-normal">{el?.nickname}</span>
              </span>
              <span className="text-xl tracking-widest font-bold text-white">
                Status: <span className="font-normal">{el?.status}</span>
              </span>

              <span className="text-xl tracking-widest font-bold text-white">
                Birth Day: <span className="font-normal">{el?.birthday}</span>
              </span>
            </div>

            <div className="rounded-r-full rounded-tl-full flex flex-col p-5">
              <h2 className="text-3xl text-white pb-5 font-extrabold tracking-widest">Occupation</h2>
              <ul className="space-y-2">
                {el?.occupation.map((ele) => (
                  <li className="text-xl text-white tracking-widest">-{ele}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-2 bg-white rounded-b-full justify-center items-center p-5">
              <span className="text-2xl tracking-widest font-extrabold">Actor</span>
              <span className="text-xl tracking-widest">{el?.portrayed}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PopularDetails;
