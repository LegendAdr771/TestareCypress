describe('OrangeHrm',()=>{


//Testul numarul 2 Verifica daca ma imi apare un mesaj de eroare cand introduc date gresite in orangeHRM
it('Verifca autentificarea esuata cu parola gresita',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
cy.get('input[type="password"]').type('admin12');
cy.get('.oxd-button').click();
cy.get('.oxd-alert').should('exist');
})

})