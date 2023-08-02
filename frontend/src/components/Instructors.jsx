import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { makeRequest } from '../axios';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {

  const { isLoading, error, data } = useQuery(["instructor"], () =>
    makeRequest.get("instrutcors/getall").then((res) => {
      return res.data
    })
  )


  const mystyle = {
    left: "calc(50vw - 50px)",
    top: "-53px"
  }
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 332;
  }

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 332;
  }

  return (
    <>
      <div id='inst' className='dark:bg-black flex flex-col text-center w-full space-y-3 mt-40 md:mt-14 mb-8 '>
        <h1 className='text-4xl font-bold dark:bg-black dark:text-white bg-orange-100 border border-orange-600 rounded-md mx-5 py-3'>Our Instructors</h1>
        <div className='flex text-center  items-center justify-start w-full '>
          <div className='w-full'>
            <div className=' m-5 mb-[84px] overflow-hidden dark:bg-zinc-900 bg-gray-200  p-5 z-50 rounded-2xl flex justify-center items-center'>

              <div id='content' className='flex overflow-x-auto duration-500 scroll-smooth'>

                <div className=" flex">
                  {
                    isLoading ? <div className="custom-loader"></div>
                      : error ? <div className="text-lg text-red-700">Somthing went wrong!</div>
                        : data?.map(instuct => (
                          <div className='bg-white dark:bg-black dark:border dark:text-white w-[300px]  rounded-md shadow-xl m-4'>
                            <div className="top flex items-center justify-center pt-8">
                              <img className='w-[100px] h-[100px] object-cover rounded-full' src={instuct.profile} alt="" />
                            </div>
                            <div className="bottom flex flex-col justify-center items-center p-3">
                              <div className="title font-bold py-2">{instuct.firstName + " " + instuct.lastName}</div>
                              <p className='text-center pb-8'>{instuct.description}</p>
                              <Link to={"/Instructor/" + instuct._id}><button className='px-8 py-3'>More Info</button></Link>
                            </div>
                          </div>
                        )
                      )
                    }
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute flex justify-center items-center z-50' style={mystyle}>
                <button className='m-1 p-2' onClick={scrollLeft}><ArrowBackIcon /></button>
                <button className='m-1 p-2' onClick={scrollRight}><ArrowForwardIcon /></button>
              </div>
            </div></div>
        </div>
      </div>
    </>
  )
}

export default Instructors