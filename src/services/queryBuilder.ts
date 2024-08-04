

export default function queryBuilder(parameters: any): string {

    let query = '';
    const keys = Object.keys(parameters);
    
    keys.forEach(key => {
        if(parameters[`${key}`] != undefined)
            query += `&${key}=${parameters[`${key}`]}`
    });

    return query;
}