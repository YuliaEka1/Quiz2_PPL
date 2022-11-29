describe('Kuis 2 PPL',()=>{
    it("",()=>{
        cy.visit('http://localhost/Tubes_WEBPRO/');

        //login username invalid
        cy.get('input[name=username]').type('apotik');
        cy.get('input[name=password]').type('admin');
        cy.get('.btn').click();
        //login password invalid
        cy.get('input[name=username]').type('admin');
        cy.get('input[name=password]').type('apotik');
        cy.get('.btn').click();
        //login valid username & password
        cy.get('input[name=username]').type('admin');
        cy.get('input[name=password]').type('admin');
        cy.get('.btn').click();

        //============================================================

        //masuk ke data pasien
        cy.contains('Data Pasien').click();
        //tambah data pasien
        cy.contains('+ Data').click();
        //mengisi data pasien nama pasien kosong
        //cy.get('input[name=nama_pasien]');
        //cy.get('input[name=tempat_lahir]').type('Malang');
        //cy.get('input[name=tanggal_lahir]').type('05-07-2002'); 
        //cy.get('[type="radio"]').check('P');
        //cy.get('input[name=alamat_pasien]').type('Jl Tirto Utomo');
        //cy.get('input[name=agama]').type('Islam');
        //cy.get('input[name=tlp_pasien]').type('08953672');
        //submit
        //cy.get('[type="submit"]').click();

        //=============================================================

        //mengisi data pasien tempat lahir kosong
        //cy.get('input[name=nama_pasien]').type('Yulia Eka Ardhani');
        //cy.get('input[name=tempat_lahir]');
        //cy.get('input[name=tanggal_lahir]').type('05-07-2002'); 
        //cy.get('[type="radio"]').check('P');
        //cy.get('input[name=alamat_pasien]').type('Jl Tirto Utomo');
        //cy.get('input[name=agama]').type('Islam');
        //cy.get('input[name=tlp_pasien]').type('08953672');
        //submit
        //cy.get('[type="submit"]').click();

        //=============================================================

        //mengisi data pasien tanggal lahir kosong
        //cy.get('input[name=nama_pasien]').type('Yulia Eka Ardhani');
        //cy.get('input[name=tempat_lahir]').type('Malang');
        //cy.get('input[name=tanggal_lahir]'); 
        //cy.get('[type="radio"]').check('P');
        //cy.get('input[name=alamat_pasien]').type('Jl Tirto Utomo');
        //cy.get('input[name=agama]').type('Islam');
        //cy.get('input[name=tlp_pasien]').type('08953672');
        //submit
        //cy.get('[type="submit"]').click();

        //=============================================================

        //mengisi data pasien valid semua
        cy.get('input[name=nama_pasien]').type('Yulia Eka Ardhani');
        cy.get('input[name=tempat_lahir]').type('Malang');
        cy.get('input[name=tanggal_lahir]').type('05-07-2002'); 
        cy.get('[type="radio"]').check('P');
        cy.get('input[name=alamat_pasien]').type('Jl Tirto Utomo');
        cy.get('input[name=agama]').type('Islam');
        cy.get('input[name=tlp_pasien]').type('08953672');
        //submit
        cy.get('[type="submit"]').click();
        //search data
        cy.get("input[type='search']").type('Yulia');

        //============================================================

        //masuk ke user
        cy.contains('User').click();
        //tambah data user
        cy.contains('+ Data').click();

        //============================================================

        //mengisi data user, nama lengkap kosong
        //cy.get('input[name=nama_lengkap]');
        //cy.get('[type="radio"]').check('Laki-Laki');
        //cy.get('input[name=tlp]').type('0857890');
        //cy.get('input[name=username]').type('atha');
        //cy.get('input[name=password]').type('atha');
        //submit
        //cy.get('[type="submit"]').click();

        //============================================================

        //mengisi data user, username kosong
        //cy.get('input[name=nama_lengkap]').type('Atha Muyassar');
        //cy.get('[type="radio"]').check('Laki-Laki');
        //cy.get('input[name=tlp]').type('0857890');
        //cy.get('input[name=username]');
        //cy.get('input[name=password]').type('atha');
        //submit
        //cy.get('[type="submit"]').click();

        //============================================================

        //mengisi data user, password kosong
        //cy.get('input[name=nama_lengkap]').type('Atha Muyassar');
        //cy.get('[type="radio"]').check('Laki-Laki');
        //cy.get('input[name=tlp]').type('0857890');
        //cy.get('input[name=username]').type('atha');
        //cy.get('input[name=password]');
        //submit
        //cy.get('[type="submit"]').click();

        //============================================================

        //mengisi data user, valid semua
        cy.get('input[name=nama_lengkap]').type('Atha Muyassar');
        cy.get('[type="radio"]').check('Laki-Laki');
        cy.get('input[name=tlp]').type('0857890');
        cy.get('input[name=username]').type('atha');
        cy.get('input[name=password]').type('atha');
        //submit
        cy.get('[type="submit"]').click();
        //search data
        cy.get("input[type='search']").type('Atha');

        //============================================================

        //logout
        cy.contains('Logout').click();

        //============================================================
        
        //mencoba login dengan user yang tadi didaftarkan
        cy.get('input[name=username]').type('atha');
        cy.get('input[name=password]').type('atha');
        cy.get('.btn').click();


    })
})