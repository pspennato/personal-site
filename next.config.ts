module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en", // o el idioma por defecto
        permanent: false,
      },
    ];
  },
};
