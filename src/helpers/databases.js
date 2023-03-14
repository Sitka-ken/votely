import  mariadb  from 'mariadb'
export function mySqlQuery(query) {

    return new Promise(async function(resolve, reject) {
        let connection;
        try {
            connection = await mariadb.createConnection({
                user: 'soto',
                password: 'SotoElBasto',
                database: 'soto_playground',
                host: '165.232.148.34',
                port: 3306
            });
            const result = await connection.query(query);
            resolve(result);

        } catch (err) { // catches errors in getConnection and the query
            reject(err);
        } finally {
            if (connection) { // the connection assignment worked, must release
                try {
                    await connection.destroy();
                } catch (e) {
                    console.error(e);
                }
            }
        }
    });
}