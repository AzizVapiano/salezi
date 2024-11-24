export default ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          secret: env('JWT_SECRET', 'defaultSecretKey'),
          expiresIn: '7d', // Durée de validité du token
        },
      },
    },
  });
