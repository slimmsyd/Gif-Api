// import React from 'react';
// import { useQuery, gql } from '@apollo/client';


// const FILMS_QUERY = gql`
// {
//     launchesPast(limit: 10){
//         id
//         mission_name
//     }
// }`


// function Api_req() {
//     const { data, loading, error } = useQuery(FILMS_QUERY);

//     if (loading)
//         return "loading...";
//     if (error)
//         return (<pre>{error.message}</pre>);

//     return (
//         <div>
//             <ul>
//                 {data.launchesPast.map((launch) => (
//                     <li key={launch.id}>
//                         {launch.mission_name}
//                     </li>
//                 )

//                 )}
//             </ul>
//         </div>
//     );

// }


// export default Api_req;