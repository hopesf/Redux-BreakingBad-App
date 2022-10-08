import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allQuotesAsync } from '../../redux/quotesSlice/quotesApiCalls';
import Loader from '../Loader';

const AllQuotes = () => {
  const { status, items } = useSelector((state) => state.quotes.allQuotes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status == 'idle') {
      dispatch(allQuotesAsync());
    }
  }, [dispatch]);

  return (
    <div className="lg:px-5 lg:max-w-7xl  mx-auto py-14">
      <h2 className=" pt-2 text-5xl text-center py-14 text-white tracking-widest font-extrabold">All Quotes</h2>
      {status == 'pending' && <Loader />}
      <div className="grid grid-cols-3 gap-10 w-full">
        {items?.map((el) => (
          <div className="py-5 " key={el.quote_id}>
            <p className="bg-white p-5 px-10 text-center hover:animate-pulse cursor-pointer text-md tracking-widest rounded-br-full rounded-tl-full">
              {el.quote} -{el.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllQuotes;
