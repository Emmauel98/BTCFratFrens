import PropTypes from "prop-types";


const Pagination = ({NFTSPerPage,totalNFTS,paginate}) => {

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil( totalNFTS / NFTSPerPage ); i++) {
    pageNumber.push(i);
    
  }
  return (
    <ul className='flex gap-[.06rem] float-right mr-[2rem] mb-[1rem]'>
      {
        pageNumber.map(number =>{
          return (
            <li key={number}
             className='p-[1rem] bg-[#BDBDBD] text-[#644F4F]
             font-bold cursor-pointer
             ' 
             onClick={()=>paginate(number)}
            >
              {number}
            </li>
          ) 
        })
      }
    </ul>
  )
};

Pagination.propTypes = {
  NFTSPerPage: PropTypes.number.isRequired,
  totalNFTS: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
}

export default Pagination;