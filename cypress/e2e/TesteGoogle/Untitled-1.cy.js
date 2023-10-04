describe('suita 1',()=>{


//Testul numarul 
it('test 1',()=>{
cy.visit('https://store.steampowered.com/');
cy.get('.').click()
cy.get('.').click()
cy.get('#about_greeting > .about_install_wrapper > .about_install > .about_install_steam_link').click();
})

})