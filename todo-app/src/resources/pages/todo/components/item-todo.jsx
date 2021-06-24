import {Link} from 'react-router-dom'
function ItemList(props){
    return(
        <>
            {
                props.lists.map((x)=>
                    <tr  key={x.id}>
                                <th className="text-center" scope="row">{x.id}</th>
                                <td>{x.name}</td>
                                <td className="text-center">{(x.status==1?'OK':'NO OKE')}</td>
                                <td className="text-center">
                                    <div className="btn-group">
                                        <Link to={`/todo/edit/${x.id}`} className="btn btn-info btn-xs">Edit</Link>
                                        <button className="btn btn-danger btn-xs">Delete</button>
                                    </div>                   
                                </td>                    
                    </tr>
                )
            }
        </>
    );
}
export default ItemList;