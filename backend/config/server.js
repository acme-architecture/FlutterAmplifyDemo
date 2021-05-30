module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1c99ddef67fce8305cc5bf6946ae36ce'),
    },
  },
});
