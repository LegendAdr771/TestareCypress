describe('OrangeHrm',()=>{


//Testul numarul 1 verific daca ma pot conecta in orangeHRM si deconecta
it('test de  Login si logout',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
cy.get('input[type="password"]').type('admin123');
cy.get('.oxd-button').click();
cy.get('.oxd-topbar-header-title').should('exist');
cy.get('.oxd-userdropdown-tab').click();
cy.wait(1000);
cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
cy.get('.oxd-button').should('exist');

})

 })