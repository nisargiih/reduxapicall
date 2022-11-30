// import logo from './logo.svg';
import './App.css';
import { connect, useSelector } from 'react-redux';
import { FATCH_DATA } from '../src/actions/const'


function App(props) {

  const { data } = props;
  const data1 = useSelector((state)=>state?.counteReducer?.data)

  console.log(data1.id)
  function apidata() {
    data()
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={() => apidata()}>Data from API</button>
      <table>
      {/* <tr>
          <th>Id</th>
          <th>Title</th>
          <th>completed</th>
          <th>UserID</th>
        </tr> */}
        {data1.length >0 ? data1.map((apidata) =>
        
        <tr>
          <td>{apidata.id}</td>
          <td><img src={apidata.avatar_url} alt={apidata.avatar_url} height="200px"></img></td>
          <td>{apidata.login}</td>
          <td>{apidata.node_id}</td>
          <td>{apidata.title}</td>
          <td>{apidata.userId}</td>
          {/* <td>{apidata}</td> */}
          {/* <td>{apidata.completed}</td> */}
          <td>{apidata.userId}</td>
        </tr>
        ): <h1>Please click the button</h1>}
        </table>
      {/* <p>{data1.id}</p>
      <p>{data1.title}</p> */}
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   return{
//     data : state.data
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    data: () => dispatch({ type: FATCH_DATA })
  }
}


export default connect(null, mapDispatchToProps)(App);
