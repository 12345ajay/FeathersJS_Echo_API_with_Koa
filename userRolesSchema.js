// const user = {
//     name,
//     email,
//     password,
//     role_id,
//     geneder,
//     created_on,
//     last_active,
//     is_verofied,

// }




const roles = [
{
    'role_name':"admin",
    'role_id':1,
    'role_description':"admin",
    'role_status':1,
    'permistions':[
        {
            'operation_get_USER':1,
            'operation_Cretate_USER':1,
            'operation_DELETE_USER':1
        }
    ]
},
{
    'role_name':"developer",
    'role_id':2,
    'role_description':"admin",
    'role_status':1,
    'permistions':[
        {
            'operation_ALL':1,
        }
    ]
},


]

function validateAuthorization(requestResource, roleId ) {
    const role = roles.filter( (roleObject ) => roleObject['role_id'] === roleId);
    console.log("role >>>>",)
    for( let permistion in role[0].permistions[0]) {
        console.log("permistion >>>>", permistion)
        if( permistion === requestResource) {
            return true;
        } 
    }
    return false
}


console.log( 'valid:', validateAuthorization('operation_Edit_USER', 1) );