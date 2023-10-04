describe('suita 1',()=>{


//Testul numarul 
it('test 1',()=>{
cy.visit('https://www.linkedin.com');
cy.get("#session_key").type("adrian.pricopie@student.tuiasi.ro");
cy.get('#session_password').type("Manunited771@");
cy.get('.justify-between > .btn-md').click();
})

})