const Config = {
    db: {
        name: 'my_database',
        collection: 'productos',
        cnxStr: 'mongodb://localhost/',
        //projection: {_id:0, __v:0}
        projection: {__v:0}

    }
}

export default Config