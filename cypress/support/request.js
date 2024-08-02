export const checkEmailUniqueness = (email) => {
  // Intenta registrar un usuario con el email dado
  return cy.request({
    method: 'POST',
    url: 'https://test-back-qa.inlaze.com/api/register',
    body: {
      fullName: 'Test User',
      email: email,
      password: 'TestPassword123',
      confirmPassword: 'TestPassword123'
    },
    failOnStatusCode: false // Permite que la prueba continúe incluso si la respuesta es un error
  }).then((response) => {
    // Verifica la respuesta para determinar si el email ya está en uso
    if (response.status === 400 && response.body.message.includes('email already exists')) {
      return false; // Email ya está en uso
    }
    return true; // Email está disponible
  });
};
