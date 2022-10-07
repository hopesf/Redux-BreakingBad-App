import { useSelector, useDispatch } from 'react-redux';
import { popularCharactersAsync } from '../../redux/charactersSlice/charactersApiCalls';
import { useEffect } from 'react';
import Loader from '../Loader';

const PopularCharacters = () => {
  const { items, status } = useSelector((state) => state.characters.popularCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status == 'idle') {
      dispatch(popularCharactersAsync());
    }
  }, [dispatch]);

  return (
    <div className="lg:px-5 lg:max-w-7xl  mx-auto py-14">
      <h2 className=" pt-2 text-5xl text-center py-14 text-white tracking-widest font-extrabold">Popular Characters</h2>
      {status == 'pending' && <Loader />}
      <div className="w-full  px-2 ">
        <div className="py-8 w-full">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-10">
            {items?.map((el) => (
              <div key={el.char_id} className="flex flex-col text-center bg-white  rounded border-2">
                <div className="h-[400px]">
                  <img className="rounded w-full h-full" src={el.img} alt={el.name} />
                </div>
                <span className="text-2xl font-bold text-neutral-900 py-2">{el.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularCharacters;
