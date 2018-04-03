describe('Db Test', function () {

    it('getDbList api test', function (done) {
        Con.getDbList().then(result => {
            expect(result).to.be.an('array').to.deep.equal(['Demo', 'MultiEntryTest']);
            done();
        }).catch(err => {
            done(err);
        })
    });

    it('drop db without promise', function (done) {
        Con.dropDb(function (results) {
                done();
            },
            function (err) {
                done(err);
            })
    });

    it('getDbList api test', function (done) {
        Con.getDbList().then(result => {
            console.log(result);
            expect(result).to.be.an('array').to.deep.equal(['Demo']);
            done();
        }).catch(err => {
            done(err);
        })
    });

    it('drop db with promise', function (done) {
        Con.openDb('Demo').then(function () {
            dropDb()
        }).then(function (results) {
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('getDbList api test', function (done) {
        Con.getDbList().then(function (result) {
            expect(result).to.be.an('array').to.deep.equal([]);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('open db test - invalid db', function (done) {
        Con.openDb('invalid_db').then(function (results) {
            done();
        }).catch(err => {
            var error = {
                "_message": "Database 'invalid_db' does not exist",
                "_type": "db_not_exist"
            };
            expect(err).to.be.an('object').eql(error);
            done();
        })
    });
});