/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch } from 'react-redux'
import s from './filteroptions.module.css'
import { setFilterAuthor, setFilterGenre, setFilterYears } from '../../store/slices/setFilters';

function Options({ data, category }) {

  const dispatch = useDispatch()
  const handleFilterClick = (item) => {
    switch (category) {
     case 'year': dispatch(setFilterYears({
         years: item,            
     }));           
         break;
     case 'performer': dispatch(setFilterAuthor({
         author: item,            
     }));           
             break;
     case 'genre': dispatch(setFilterGenre({
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
