import '../../stylesheet.css';
import '../../responsive.css';

function School(props) {
  return (
    <>
      <tr>
        <td rowspan="3"><img src="#" /></td>
        <td>{ props.major }</td>
      </tr>
      <tr>
        <td>{ props.name }</td>
      </tr>
      <tr>
        <td>{ props.grade }</td>
      </tr>
    </>
  );
}

export default School;