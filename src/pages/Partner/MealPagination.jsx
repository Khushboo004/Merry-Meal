import React, { useEffect, useState } from "react";



import { Container } from "@mui/material";
import { loadAllMeals } from "../services/MealService";
import { toast } from "react-toastify";


const MealPagination = () => {
 

  const [mealContent, setMealContent] = useState({
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: ''

})

const [currentPage, setCurrentPage] = useState(0)

useEffect(() => {
    console.log("loading posts")
    console.log(currentPage)
    changePage(currentPage)

}, [currentPage])
const changePage = (pageNumber = 0, pageSize = 5) => {
  if (pageNumber > setMealContent.pageNumber && setMealContent.lastPage) {
      return
  }
  if (pageNumber < setMealContent.pageNumber && setMealContent.pageNumber == 0) {
      return
  }
  loadAllMeals(pageNumber, pageSize).then(data => {
    setMealContent({
          content: [...setMealContent.content, ...data.content],
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          pageSize: data.pageSize,
          lastPage: data.lastPage,
          pageNumber: data.pageNumber
      })

      console.log(data);

  }).catch(error => {
      toast.error("Error in loading posts")

  })
}
  return (
    <div className="">


      <Container className='text-center mt-3'>

      <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="#"
      // onClick={() => changePage(mealContent.pageNumber-1)} disabled={mealContent.pageNumber == 0}
      
       className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    
</Container> 
    </div>
  );
};

export default MealPagination;