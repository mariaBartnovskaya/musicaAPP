/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch } from 'react-redux'
import s from './filteroptions.module.css'
import { setFilteredAuthor, setFilteredGenre, setFilteredYears } from '../../store/slices/setFilters';

function Options({ data, category }) {

  const dispatch = useDispatch()
  const handleFilterClick = (item) => {
    switch (category) {
     case 'year': dispatch(setFilteredYears({
         years: item,            
     }));           
         break;
     case 'performer': dispatch(setFilteredAuthor({
         author: item,            
     }));           
             break;
     case 'genre': dispatch(setFilteredGenre({
         genre: item,            
     }));           
             break;
     default:
         break;
    }
 }
 return (
     <div className={s.dropdown}>
         {data.map((item, i) => (
             // eslint-disable-next-line react/no-array-index-key
             <div className={s.dropdown_item} key={i} onClick={() => handleFilterClick(item)} aria-hidden> {item} </div>
         ))}
     </div>
 );
};
export default Options
