import RegisterPage from '../../support/pages/registerPage';
import LoginPage from '../../support/pages/loginPage';
import { checkEmailUniqueness } from '../../support/request';

const registerPage = new RegisterPage();
const loginPage = new LoginPage();

describe('Pruebas de Registro Y Login', () => {


    describe('Pagina de Registro de Usuario', () => {

        beforeEach(() => {
            registerPage.visit(); // Navega a la página de registro antes de cada prueba
        });

        it('should validate email format and uniqueness before registration', () => {

            registerPage.fillFullName('John Doe');
            registerPage.fillEmail('john.doe1234@example.com');
            cy.get('#email').invoke('val').should('match', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            // Verifica la unicidad del email en la base de datos
            checkEmailUniqueness('john.doe@example.com').then((isUnique) => {
                expect(isUnique).to.be.true; // Ajusta la expectativa según la respuesta de tu API
            });
            registerPage.fillPassword('SecurePassword123');
            registerPage.fillConfirmPassword('SecurePassword123');
            registerPage.clickSignUpButton();

        });

        /*
      it('El usuario debe ingresar al menos dos palabras en el nombre', () => {
          registerPage.fillFullName('John');
          registerPage.fillEmail('john.doe@example.com');
          registerPage.fillPassword('Password123!');
          registerPage.fillConfirmPassword('Password123!');
          registerPage.getSignUpButton().should('be.disabled');
      });

      it('Registro correcto - Happy Patch', () => {
          registerPage.fillFullName('John Doe');
          registerPage.fillEmail('john.doe@example.com');
          registerPage.fillPassword('Password123!');
          registerPage.fillConfirmPassword('Password123!');
          registerPage.clickSignUpButton();
          registerPage.getSuccessMessage().should('be.visible')
              .and('contain.text', 'Successful registration!');// Verificar que se registró correctamente
      });

      

      it('Registro con email incorrecto', () => {
          registerPage.fillFullName('John Doe');
          registerPage.fillEmail('john.doe@');
          registerPage.fillPassword('Password123!');
          registerPage.fillConfirmPassword('Password123!');
          registerPage.checkErrorMessage('Email invalid');
      });

      it('Registro con contraseñas sin match', () => {
          registerPage.fillFullName('John Doe');
          registerPage.fillEmail('john.doe@example.com');
          registerPage.fillPassword('Password123!');
          registerPage.fillConfirmPassword('Password12');
          registerPage.getErrorPassWord();
      });

      */
    });




    /*
    describe('Login Test Users', () => {

        beforeEach(() => {
            registerPage.visit(); // Navega a la página antes de cada prueba
        });

        it('should login with valid credentials', () => {
            loginPage.fillEmail('john.doe@example.com');
            loginPage.fillPassword('Password123!');
            loginPage.submit();
            loginPage.checkUserLoggedIn('John Doe');
        });

        it('should not login with invalid credentials', () => {
            loginPage.fillEmail('john.doe@example.com');
            loginPage.fillPassword('WrongPassword!');
            loginPage.submit();
            loginPage.checkErrorMessage('Invalid email or password');
        });

        it('should logout successfully', () => {
            loginPage.fillEmail('john.doe@example.com');
            loginPage.fillPassword('Password123!');
            loginPage.submit();
            loginPage.logout();
            // Verifica que el usuario ha cerrado sesión (dependiendo de cómo tu aplicación maneje esto)
        });

    })

    */

});

