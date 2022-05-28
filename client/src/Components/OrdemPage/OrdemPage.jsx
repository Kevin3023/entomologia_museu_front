// import React from 'react'
// import FormAddTwoCharacteristcs from '../FormAddTwoCharacteristcs/FormAddTwoCharacteristcs';
// import HandleButtons from '../HandleButtons/HandleButtons';

// const OrdemPage = () => {
//     return ( <>
//       <div className="container rounded border-secondary bg-light p-4 mt-5">
//           <FormAddTwoCharacteristcs
//             finalPath={finalPath}
//             field={field}
//             title={title}
//             setObjectList={setObjectList}
//             titleRelationship={titleRelationship}
//             nameRelationship={nameRelationship}
//             finalRelationshipPath={finalRelationshipPath}
//           />
//           <table className="table table-striped table-hover">
//             <thead>
//               <tr>
//                 <th>Nome</th>
//                 <th>{titleRelationship}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {objectList.map((element, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{element.nome}</td>
//                     <td>{element[tableName].nome}</td>
//                     <td className="d-flex justify-content-end">
//                       <HandleButtons
//                         finalPath={finalPath}
//                         idItem={element.id}
//                         update={() => update()}
//                       />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//     </> );
// }
 
// export default OrdemPage;